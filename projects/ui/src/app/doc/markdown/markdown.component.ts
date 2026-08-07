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
        background: #2d2d2d;
        border: 1px solid #2d2d2d;
        border-radius: 6px;
        padding: 16px;
        overflow: auto;
      }
      .doc-markdown ::ng-deep pre code {
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 13px;
        color: #ccc;
        background: transparent;
        text-shadow: none;
      }
      .doc-markdown ::ng-deep code {
        font-family: 'SFMono-Regular', Consolas, monospace;
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
    const raw = marked.parse(md ?? '', { async: false }) as string;
    this.html.set(this.sanitizer.bypassSecurityTrustHtml(raw));
    // 等待 DOM 更新后通知父组件
    Promise.resolve().then(() => this.ready.emit());
  }
}
