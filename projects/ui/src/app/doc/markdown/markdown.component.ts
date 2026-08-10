import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import marked from './index';

/**
 * 文档 Markdown 渲染组件（对标 NG-ZORRO scripts/site/markdown）。
 * 不使用 ngx-markdown，直接调用本地配置好的 marked 实例（prismjs 高亮 + 自定义 renderer）渲染为 HTML。
 * 通过 ready 事件通知父组件 markdown 已渲染完成（用于生成右侧 TOC 锚点）。
 */
@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (html(); as h) {
      <div class="doc-markdown" [innerHTML]="h"></div>
    }
  `,
  styles: [
    `
      .doc-markdown {
        display: block;
        line-height: 1.8;
      }
      .doc-markdown ::ng-deep pre {
        margin: 16px 0;
        background: #f5f5f5;
        border: none;
        border-radius: 6px;
        padding: 12px 20px;
        overflow: auto;
      }
      .doc-markdown ::ng-deep pre code {
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 13px;
        color: #1f1f1f;
        background: transparent;
        text-shadow: none;
      }
      .doc-markdown ::ng-deep code {
        font-family: 'SFMono-Regular', Consolas, monospace;
      }
      /* 行内代码背景对齐官方 @site-markdown-code-bg (#f2f4f5)，排除代码块内的 code */
      .doc-markdown ::ng-deep :not(pre) > code {
        background: #f2f4f5;
        padding: 2px 5px;
        border-radius: 3px;
        font-size: 0.87em;
        color: #c41d7f;
      }
      .doc-markdown ::ng-deep table {
        border-collapse: collapse;
        width: 100%;
      }
      .doc-markdown ::ng-deep th,
      .doc-markdown ::ng-deep td {
        border: 1px solid #f0f0f0;
        padding: 8px 12px;
      }
      .doc-markdown ::ng-deep iframe {
        width: 100%;
        min-height: 480px;
        border: 0;
      }
      /* NG-ZORRO 风格：标题锚点 + 组件/指令/服务徽章 */
      .doc-markdown ::ng-deep h2,
      .doc-markdown ::ng-deep h3 {
        position: relative;
        scroll-margin-top: 80px;
      }
      .doc-markdown ::ng-deep .anchor {
        opacity: 0;
        margin-left: 8px;
        color: #1890ff;
        text-decoration: none;
        transition: opacity 0.2s;
      }
      .doc-markdown ::ng-deep h2:hover .anchor,
      .doc-markdown ::ng-deep h3:hover .anchor {
        opacity: 1;
      }
      .doc-markdown ::ng-deep .nz-label {
        display: inline-block;
        margin-left: 8px;
        padding: 0 6px;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
        border-radius: 3px;
        vertical-align: middle;
      }
      .doc-markdown ::ng-deep .nz-label-component {
        background: #1890ff;
      }
      .doc-markdown ::ng-deep .nz-label-directive {
        background: #13c2c2;
      }
      .doc-markdown ::ng-deep .nz-label-service {
        background: #722ed1;
      }
      /* 文档头（来自 front matter）：标题 / 副标题 / 描述 */
      .doc-markdown ::ng-deep .doc-header-subtitle {
        display: inline-block;
        margin: 4px 0 0;
        padding: 2px 8px;
        font-size: 13px;
        font-family: 'SFMono-Regular', Consolas, monospace;
        color: #595959;
        background: #f5f5f5;
        border-radius: 4px;
      }
      .doc-markdown ::ng-deep .doc-header-desc {
        margin: 12px 0 0;
        font-size: 14px;
        line-height: 1.8;
        color: #595959;
      }
      .doc-markdown ::ng-deep .doc-header-label {
        display: inline-block;
        margin-left: 8px;
        padding: 0 6px;
        font-size: 12px;
        line-height: 20px;
        color: #fa8c16;
        background: #fff7e6;
        border: 1px solid #ffd591;
        border-radius: 3px;
        vertical-align: middle;
      }
      .doc-markdown ::ng-deep .doc-header-breadcrumb {
        margin: 0 0 8px;
        font-size: 13px;
        color: #8c8c8c;
      }
    `,
  ],
})
export class MarkdownRenderComponent implements OnChanges {
  /** markdown 渲染完成事件 */
  @Output() ready = new EventEmitter<void>();

  /** 直接传入 markdown 字符串 */
  @Input() set data(value: string) {
    this.render(value ?? '');
  }
  /** 或传入 md 文件路径（相对于 assets） */
  @Input() set src(value: string | undefined) {
    if (value) {
      this.loadFromUrl(value);
    }
  }

  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);
  readonly html = signal<SafeHtml>('');

  ngOnChanges(): void {
    // 输入通过 setter 处理，这里无需额外逻辑
  }

  private async loadFromUrl(url: string): Promise<void> {
    const text = await firstValueFrom(
      this.http.get(url, { responseType: 'text' })
    );
    this.render(text ?? '');
  }

  private render(md: string): void {
    const { header, body } = this.parseFrontMatter(md ?? '');
    const headerMd = this.headerToMarkdown(header);
    const raw = marked.parse(headerMd + '\n\n' + body, { async: false }) as string;
    this.html.set(this.sanitizer.bypassSecurityTrustHtml(raw));
    // 等待 DOM 更新后通知父组件
    Promise.resolve().then(() => this.ready.emit());
  }

  /** 解析 markdown 顶部的 YAML front matter（--- 包裹），返回头信息与剩余正文 */
  private parseFrontMatter(md: string): { header: Record<string, string>; body: string } {
    const fm = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
    if (!fm) {
      return { header: {}, body: md };
    }
    const header: Record<string, string> = {};
    for (const line of fm[1].split('\n')) {
      const m = line.match(/^([\w-]+):\s*(.*)$/);
      if (m) {
        header[m[1]] = m[2].replace(/^['"]|['"]$/g, '').trim();
      }
    }
    return { header, body: md.slice(fm[0].length) };
  }

  /** 将 front matter 转换为官方风格的文档头 markdown */
  private headerToMarkdown(header: Record<string, string>): string {
    if (Object.keys(header).length === 0) {
      return '';
    }
    const title = header['title'] ?? '';
    const subtitle = header['subtitle'] ?? '';
    const description = header['description'] ?? '';
    const type = header['type'] ?? '';
    const label = header['label'] ?? '';
    const cover = header['cover'] ?? '';
    const category = header['category'] ?? '';

    const parts: string[] = [];
    // 面包屑：category / title
    if (category) {
      parts.push(`<div class="doc-header-breadcrumb">${category} / ${title}</div>`);
    }
    // 标题 + 类型徽章（组件 / 指令 / 管道 / 工具函数）
    let h1 = `# ${title}`;
    if (type) {
      const typeClass =
        type === '组件'
          ? 'nz-label-component'
          : type === '指令'
            ? 'nz-label-directive'
            : type === '管道' || type === '工具函数'
              ? 'nz-label-service'
              : 'nz-label-component';
      h1 += ` <span class="nz-label ${typeClass}">${type}</span>`;
    }
    if (label) {
      h1 += ` <span class="doc-header-label">${label}</span>`;
    }
    parts.push(h1);
    if (subtitle) {
      parts.push(`<code class="doc-header-subtitle">${subtitle}</code>`);
    }
    if (description) {
      parts.push(`<div class="doc-header-desc">${description}</div>`);
    }
    if (cover) {
      parts.push(`![cover](${cover})`);
    }
    // 各部分用空行分隔，避免块级 HTML 紧跟 ATX 标题时 marked 不识别 '#'
    return parts.join('\n\n');
  }
}
