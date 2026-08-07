import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { MarkdownRenderComponent } from '../markdown/markdown.component';
import { NavGroup, NavItem } from '../nav.service';
import { LocaleService } from '../locale.service';

/**
 * 更新日志页（对标 NG-ZORRO changelog）。
 * 版本作为侧边栏子导航（/changelog/:version），本组件按版本参数渲染对应 markdown。
 */
@Component({
  selector: 'app-changelog',
  standalone: true,
  imports: [CommonModule, MarkdownRenderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="changelog-content">
      @if (content(); as c) {
        <app-markdown [data]="c"></app-markdown>
      } @else {
        <p>加载中…</p>
      }
    </article>
  `,
  styles: [
    `
      .changelog-content {
        max-width: 820px;
      }
    `,
  ],
})
export class ChangelogComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  private readonly localeSvc = inject(LocaleService);
  readonly content = signal('');

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const version = params.get('version') ?? 'v19-x';
      this.load(version);
    });
  }

  private async load(version: string): Promise<void> {
    const locale = this.localeSvc.locale();
    const groups = await firstValueFrom(
      this.http.get<NavGroup[]>(`assets/navigations/${locale}.json`)
    );
    const changelog = groups.find((g) => g.path === 'changelog');
    const item: NavItem | undefined = (changelog?.items ?? []).find(
      (i) => i.path === version
    );
    const originPath = item?.originPath ?? `docs/changelog/${version}.md`;
    const file = originPath.replace(/^docs\//, '');
    const url = `site-src/docs/${file}`;
    try {
      const text = await firstValueFrom(
        this.http.get(url, { responseType: 'text' })
      );
      this.content.set(this.stripFrontMatter(text ?? ''));
    } catch {
      this.content.set(`# 更新日志\n\n内容缺失：${version}`);
    }
  }

  /** 去除 markdown 头部 front-matter（---...---） */
  private stripFrontMatter(md: string): string {
    return md.replace(/^---\n[\s\S]*?\n---\n/, '');
  }
}
