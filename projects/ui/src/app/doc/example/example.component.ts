import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ExampleLoaderService } from '../example-loader.service';
import { HighlightService } from '../highlight.service';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, NzTabsModule, NzIconModule, NzButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-tabs class="example-box" nzType="card">
      <nz-tab nzTitle="示例">
        <div class="example-demo">
          <ng-container #host></ng-container>
        </div>
      </nz-tab>
      @for (src of sources(); track src.lang) {
        <nz-tab [nzTitle]="src.lang">
          <pre><code [innerHTML]="src.html"></code></pre>
        </nz-tab>
      }
    </nz-tabs>
  `,
  styles: [
    `
      .example-box {
        border: 1px solid #f0f0f0;
        border-radius: 6px;
        margin: 16px 0;
      }
      .example-demo {
        padding: 24px;
      }
      pre {
        margin: 0;
        padding: 12px 16px;
        background: #fafafa;
        overflow: auto;
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

  @ViewChild('host', { read: ViewContainerRef, static: true })
  host!: ViewContainerRef;

  readonly sources = signal<{ lang: string; html: string }[]>([]);
  private readonly loader = inject(ExampleLoaderService);
  private readonly highlight = inject(HighlightService);
  private readonly message = inject(NzMessageService);

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
    const highlighted = Object.entries(raw).map(([lang, code]) => ({
      lang,
      html: this.highlight.highlight(
        code,
        lang === 'HTML' ? 'xml' : 'typescript'
      ),
    }));
    this.sources.set(highlighted);
  }
}
