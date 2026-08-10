import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ExampleLoaderService } from '../example-loader.service';
import { HighlightService } from '../highlight.service';
import { OnlineIdeService } from '../online-ide/online-ide.service';
import { LocaleService } from '../locale.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    NzButtonModule,
    NzSegmentedModule,
    NzTooltipModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="code-box" [class.expand]="expanded()" [attr.id]="name">
      <section class="code-box-demo">
        <ng-container #host></ng-container>
      </section>
      <section class="code-box-meta markdown">
        <div class="code-box-title">
          <a (click)="navigateToFragment()">{{ title || '示例' }}</a>
          <a
            class="edit-button"
            [attr.href]="href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span nz-icon nzType="edit"></span>
          </a>
        </div>
        <div class="code-box-description">
          <p>{{ description }}</p>
        </div>
        <div class="code-box-actions">
          <span
            class="code-box-code-action"
            nz-tooltip
            [nzTooltipTitle]="onlineIDELoading() ? loadingText() : ideText()"
            (click)="openOnlineIDE()"
          >
            <span nz-icon nzType="thunderbolt"></span>
          </span>
          <span
            class="code-box-code-action"
            nz-tooltip
            [nzTooltipTitle]="copied() ? copiedText() : copyText()"
            (click)="copy()"
          >
            <span
              nz-icon
              [nzType]="copied() ? 'check' : 'snippets'"
              [class.ant-tooltip-open]="copied()"
            ></span>
          </span>
          <span
            class="code-box-code-action"
            nz-tooltip
            [nzTooltipTitle]="expanded() ? collapseText() : expandText()"
            (click)="expanded.set(!expanded())"
          >
            <nz-icon
              class="code-expand-icon"
              [class.code-expand-icon-show]="expanded()"
            >
              <svg viewBox="0 0 1024 1024" fill="currentColor">
                <path
                  d="M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62z"
                  fill-rule="evenodd"
                  opacity="0.78"
                ></path>
              </svg>
            </nz-icon>
            <nz-icon
              class="code-expand-icon"
              [class.code-expand-icon-show]="!expanded()"
            >
              <svg viewBox="0 0 1024 1024" fill="currentColor">
                <path
                  d="M1018.645 531.298c8.635-18.61 4.601-41.42-11.442-55.864l-205.108-184.68c-19.7-17.739-50.05-16.148-67.789 3.552-17.738 19.7-16.148 50.051 3.553 67.79l166.28 149.718-167.28 150.62c-19.7 17.738-21.291 48.088-3.553 67.789 17.739 19.7 48.089 21.291 67.79 3.553l205.107-184.68a47.805 47.805 0 0 0 12.442-17.798zM119.947 511.39l166.28-149.719c19.7-17.738 21.29-48.088 3.552-67.789-17.738-19.7-48.088-21.291-67.789-3.553L16.882 475.01C.84 489.456-3.194 512.264 5.44 530.874a47.805 47.805 0 0 0 12.442 17.798l205.108 184.68c19.7 17.739 50.05 16.148 67.79-3.552 17.738-19.7 16.147-50.051-3.553-67.79l-167.28-150.62zm529.545-377.146c24.911 9.066 37.755 36.61 28.688 61.522L436.03 861.068c-9.067 24.911-36.611 37.755-61.522 28.688-24.911-9.066-37.755-36.61-28.688-61.522l242.15-665.302c9.067-24.911 36.611-37.755 61.522-28.688z"
                  fill-rule="evenodd"
                  opacity="0.78"
                ></path>
              </svg>
            </nz-icon>
          </span>
        </div>
      </section>
      <section
        class="highlight-wrapper"
        [class.highlight-wrapper-expand]="expanded()"
      >
        <div class="highlight">
          @if (sources().length > 1) {
            <nz-segmented
              [nzOptions]="sources().map((s) => s.lang)"
              [(ngModel)]="activeLang"
            ></nz-segmented>
          }
          @for (src of sources(); track src.lang) {
            @if (src.lang === activeLang) {
              <pre><code [innerHTML]="src.html"></code></pre>
            }
          }
        </div>
      </section>
    </section>
  `,
  styles: [
    `
      .code-box {
        position: relative;
        display: block;
        width: 100%;
        margin: 0 0 16px;
        border: 1px solid #f0f0f0;
        border-radius: 6px;
        background: #fff;
        transition: all 0.2s;
      }
      /* 演示区：白底，底部 1px 分隔线（对齐 NG-ZORRO .code-box-demo） */
      .code-box-demo {
        padding: 42px 24px 50px;
        color: #001529;
        border-bottom: 1px solid #f0f0f0;
        overflow: auto;
      }
      .code-box-meta {
        position: relative;
        width: 100%;
        font-size: 14px;
      }
      /* 标题贴在卡片上沿（对齐 NG-ZORRO .code-box-title） */
      .code-box-title {
        position: absolute;
        top: -14px;
        margin-inline-start: 16px;
        padding: 1px 8px;
        color: #777;
        background: #fff;
        border-radius: 6px 6px 0 0;
      }
      .code-box-title a {
        color: #001529;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
      }
      .code-box-title .edit-button {
        position: absolute;
        top: 7px;
        inset-inline-end: -16px;
        padding-inline-end: 6px;
        font-size: 12px;
        text-decoration: none;
        background: inherit;
        transform: scale(0.9);
      }
      .code-box-title .edit-button .anticon {
        color: #8c8c8c;
        transition: all 0.3s;
      }
      .code-box-title .edit-button:hover .anticon {
        color: #001529;
      }
      .code-box-description {
        padding: 18px 24px 12px;
      }
      .code-box-description p {
        margin: 0;
      }
      /* 操作栏（展开/复制）在 meta 底部，虚线分隔，hover 显示（对齐官方 .code-box-actions） */
      .code-box-actions {
        display: flex;
        justify-content: center;
        padding: 12px 0;
        border-top: 1px dashed #f0f0f0;
        opacity: 0.7;
        transition: opacity 0.3s;
      }
      .code-box-actions:hover {
        opacity: 1;
      }
      .code-box-code-action {
        width: 20px;
        height: 20px;
        margin-inline-start: 16px;
        color: #595959;
        font-size: 16px;
        line-height: 18px;
        cursor: pointer;
        transition: all 0.24s;
      }
      .code-box-code-action:first-child {
        margin-inline-start: 0;
      }
      .code-box-code-action:hover {
        color: #1890ff;
      }
      .code-box-code-action .code-expand-icon {
        display: none;
        align-items: center;
        width: 16px;
        height: 16px;
        vertical-align: middle;
      }
      .code-box-code-action .code-expand-icon svg {
        width: 16px;
        height: 16px;
      }
      .code-box-code-action .code-expand-icon.code-expand-icon-show {
        display: inline-flex;
      }
      .code-box-code-action .ant-tooltip-open {
        color: #52c41a;
        font-weight: bold;
      }
      /* 代码区默认折叠，展开时显示（对齐官方 .highlight-wrapper） */
      .highlight-wrapper {
        display: none;
        overflow: auto;
        border-radius: 0 0 6px 6px;
      }
      .highlight-wrapper.highlight-wrapper-expand {
        display: block;
      }
      .highlight {
        position: relative;
      }
      .highlight:not(:first-child) {
        border-top: 1px dashed #f0f0f0;
      }
      nz-segmented {
        display: inline-block;
        margin: 12px 16px 0;
      }
      pre {
        margin: 0;
        padding: 12px 20px;
        background: #f5f5f5;
        border: none;
        overflow: auto;
      }
      /* 覆盖 prism 默认背景，统一为官方浅灰代码块 #f5f5f5 */
      pre code {
        background: transparent;
      }
      code {
        font-family: 'SFMono-Regular', Consolas, monospace;
        font-size: 13px;
      }
    `,
  ],
})
export class ExampleComponent implements OnChanges {
  @Input() name!: string;
  @Input() title = '';
  @Input() description = '';
  /** 编辑按钮指向的源码链接（对齐官方 nzHref），默认本仓库 components 目录 */
  @Input() href =
    'https://github.com/EnochGao/ng-zorro-antd-extension/tree/master/components';

  @ViewChild('host', { read: ViewContainerRef, static: true })
  host!: ViewContainerRef;

  readonly sources = signal<{ lang: string; html: string; code: string }[]>(
    []
  );
  readonly expanded = signal(false);
  readonly copied = signal(false);
  readonly onlineIDELoading = signal(false);
  activeLang = 'TS';

  /** 中英文案（对齐官方 language() 判断） */
  private readonly isZh = computed(() => this.locale.locale() === 'zh-cn');
  readonly ideText = computed(() =>
    this.isZh() ? '在 StackBlitz 上打开' : 'Edit On StackBlitz'
  );
  readonly copyText = computed(() => (this.isZh() ? '复制代码' : 'Copy Code'));
  readonly copiedText = computed(() => (this.isZh() ? '已复制' : 'Copied'));
  readonly expandText = computed(() => (this.isZh() ? '显示代码' : 'Show Code'));
  readonly collapseText = computed(() =>
    this.isZh() ? '收起代码' : 'Hide Code'
  );
  readonly loadingText = computed(() =>
    this.isZh() ? '加载中...' : 'Loading...'
  );

  /** 原始源码（用于 StackBlitz 在线运行） */
  private rawTs = '';
  private rawHtml = '';

  private readonly loader = inject(ExampleLoaderService);
  private readonly highlight = inject(HighlightService);
  private readonly message = inject(NzMessageService);
  private readonly onlineIde = inject(OnlineIdeService);
  private readonly locale = inject(LocaleService);

  async ngOnChanges(): Promise<void> {
    if (!this.name) {
      return;
    }
    const comp = await this.loader.createComponent(this.name, this.host);
    if (!comp) {
      this.message.warning(`示例 ${this.name} 加载失败`);
      return;
    }
    const raw = await this.loader.loadSources(this.name);
    this.rawTs = raw['TS'] ?? '';
    this.rawHtml = raw['HTML'] ?? '';
    const highlighted = Object.entries(raw).map(([lang, code]) => ({
      lang,
      code,
      html: this.highlight.highlight(
        code,
        lang === 'HTML' ? 'markup' : 'typescript'
      ),
    }));
    this.sources.set(highlighted);
    this.activeLang = highlighted[0]?.lang ?? 'TS';
  }

  /** 在 StackBlitz 上打开当前示例（对齐官方 thunderbolt 按钮 + onlineIDELoading） */
  openOnlineIDE(): void {
    if (!this.rawTs) {
      this.message.warning('示例源码缺失，无法打开在线编辑');
      return;
    }
    this.onlineIDELoading.set(true);
    // 把 templateUrl 替换为内联 template（StackBlitz 无法解析相对 html 文件）
    const merged = this.rawHtml
      ? this.rawTs.replace(
          /templateUrl:\s*['"][^'"]+['"]/,
          `template: \`${this.rawHtml}\``
        )
      : this.rawTs;
    const match = this.rawTs.match(/export class (\w+)/);
    const componentName = match?.[1] ?? 'DemoComponent';
    // 让 loading 态短暂可见后再打开（对齐官方 setTimeout 100ms）
    setTimeout(() => {
      this.onlineIDELoading.set(false);
      this.onlineIde.openOnStackBlitz(componentName, merged, this.name);
    }, 100);
  }

  navigateToFragment(): void {
    if (typeof window !== 'undefined') {
      window.location.hash = this.name;
    }
  }

  copy(): void {
    const src = this.sources().find((s) => s.lang === this.activeLang);
    if (!src) {
      return;
    }
    const done = () => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1000);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(src.code).then(done).catch(() => this.message.warning('复制失败'));
    } else {
      this.message.warning('当前环境不支持复制');
    }
  }
}
