import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { MarkdownRenderComponent } from '../markdown/markdown.component';
import { ExampleComponent } from '../example/example.component';
import { NavItem } from '../nav.service';
import { LocaleService } from '../locale.service';
import { ApiExtractorService } from '../api-extractor.service';
import { ApiDocsService } from '../api-docs.service';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

/**
 * 组件文档页（对标 NG-ZORRO 的 doc-component）。
 * 读取 components/<lib>/doc/<locale>.md 渲染，右侧生成 TOC 锚点目录，末尾嵌入示例。
 */
@Component({
  selector: 'app-doc',
  standalone: true,
  imports: [CommonModule, MarkdownRenderComponent, ExampleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="doc-layout">
      <article class="doc-article" #article>
        @if (markdown(); as md) {
          <app-markdown [data]="md" (ready)="onMarkdownReady()"></app-markdown>
        } @else {
          <p>文档加载中…</p>
        }

        @if (apiMarkdown(); as amd) {
          <app-markdown [data]="amd" (ready)="onMarkdownReady()"></app-markdown>
        }

        @if (item.examples && item.examples.length > 0) {
          <h2 id="examples">代码示例</h2>
          @for (ex of item.examples; track ex) {
            <h3 [id]="ex" class="example-anchor"></h3>
            <app-example [name]="ex" [title]="item.title"></app-example>
          }
        }
      </article>

      @if (toc().length > 0) {
        <aside class="doc-toc">
          <div class="toc-title">本页目录</div>
          <ul>
            @for (t of toc(); track t.id) {
              <li
                class="toc-item"
                [class.toc-h3]="t.level === 3"
                (click)="scrollTo(t.id)"
              >
                {{ t.text }}
              </li>
            }
          </ul>
        </aside>
      }
    </div>
  `,
  styles: [
    `
      .doc-layout {
        display: flex;
        gap: 32px;
        align-items: flex-start;
      }
      .doc-article {
        flex: 1;
        min-width: 0;
        max-width: 980px;
      }
      .doc-toc {
        position: sticky;
        top: 88px;
        width: 200px;
        flex-shrink: 0;
        border-left: 1px solid #f0f0f0;
        padding-left: 16px;
        max-height: calc(100vh - 120px);
        overflow: auto;
      }
      .toc-title {
        font-weight: 600;
        margin-bottom: 8px;
        color: #001529;
      }
      .doc-toc ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .toc-item {
        padding: 4px 0;
        font-size: 13px;
        color: #595959;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .toc-item:hover {
        color: #1890ff;
      }
      .toc-h3 {
        padding-left: 12px;
        font-size: 12px;
      }
      @media (max-width: 960px) {
        .doc-toc {
          display: none;
        }
      }
      /* 示例锚点：仅占位用于 TOC/链接，不显示文字 */
      .example-anchor {
        height: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
      }
    `,
  ],
})
export class DocComponent implements OnChanges {
  @Input() item!: NavItem;
  @ViewChild('article', { static: false }) articleRef!: ElementRef<HTMLElement>;

  private readonly http = inject(HttpClient);
  private readonly localeSvc = inject(LocaleService);
  private readonly apiExtractor = inject(ApiExtractorService);
  private readonly apiDocs = inject(ApiDocsService);
  readonly markdown = signal('');
  readonly apiMarkdown = signal('');
  readonly toc = signal<TocItem[]>([]);

  async ngOnChanges(): Promise<void> {
    if (!this.item?.path) {
      return;
    }
    const lib = this.item.path;
    const locale = this.localeSvc.locale();
    const localeFile = locale === 'zh-cn' ? 'zh-CN' : locale === 'en-us' ? 'en-US' : locale;
    const candidates = [
      `site-src/components/${lib}/doc/index.${localeFile}.md`,
      `site-src/components/${lib}/doc/index.zh-CN.md`,
    ];
    let docLoaded = false;
    for (const url of candidates) {
      try {
        const text = await firstValueFrom(
          this.http.get(url, { responseType: 'text' })
        );
        if (text != null) {
          this.markdown.set(text);
          docLoaded = true;
          break;
        }
      } catch {
        // 尝试下一个候选
      }
    }
    if (!docLoaded) {
      this.markdown.set(`# ${this.item.title}\n\n文档缺失：${lib}`);
    }
    // 与官方一致：API 部分优先读取预生成的 api-docs JSON，回退到运行时源码提取
    const api = this.item.api ? await this.apiDocs.render(lib, locale) : '';
    this.apiMarkdown.set(api);
  }

  /** markdown 渲染完成后，给标题注入 id 并生成 TOC */
  onMarkdownReady(): void {
    setTimeout(() => this.buildToc(), 0);
  }

  private buildToc(): void {
    const root = this.articleRef?.nativeElement;
    if (!root) {
      return;
    }
    // heading 的 id 已由 markdown renderer 注入（slugify 风格），直接读取
    const heads = Array.from(
      root.querySelectorAll('h2[id], h3[id]')
    ) as HTMLElement[];
    const toc: TocItem[] = [];
    heads.forEach((h) => {
      const text = (h.textContent ?? '').replace(/#/g, '').trim();
      const id = h.id;
      toc.push({ id, text, level: h.tagName === 'H3' ? 3 : 2 });
    });
    this.toc.set(toc);
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
