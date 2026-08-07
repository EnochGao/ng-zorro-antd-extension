import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { MarkdownRenderComponent } from '../markdown/markdown.component';

interface Hero {
  title: string;
  description: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface HomeMeta {
  hero?: Hero;
  features?: Feature[];
}

/**
 * 首页（对标 NG-ZORRO 文档站首页 hero + features 卡片布局）。
 * 解析 docs/index.md 的 front-matter（hero/features），正文 markdown 渲染在下方。
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MarkdownRenderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (meta().hero; as hero) {
      <section class="hero">
        <h1 class="hero-title">{{ hero.title }}</h1>
        <p class="hero-desc">{{ hero.description }}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" routerLink="/components/configurable-query">开始使用</a>
          <a
            class="btn"
            href="https://github.com/EnochGao/ng-zorro-antd-extension"
            target="_blank"
            >GitHub</a
          >
        </div>
      </section>
    }

    @if (meta().features && meta()!.features!.length > 0) {
      <section class="features">
        @for (f of meta().features; track f.title) {
          <div class="feature-card">
            <img class="feature-icon" [src]="f.icon" [alt]="f.title" />
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.description }}</p>
          </div>
        }
      </section>
    }

    @if (body(); as b) {
      <section class="home-body">
        <app-markdown [data]="b"></app-markdown>
      </section>
    }
  `,
  styles: [
    `
      :host {
        display: block;
        max-width: 1100px;
        margin: 0 auto;
      }
      .hero {
        text-align: center;
        padding: 64px 24px 32px;
      }
      .hero-title {
        font-size: 44px;
        font-weight: 700;
        margin: 0 0 16px;
        background: linear-gradient(90deg, #1890ff, #722ed1);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .hero-desc {
        font-size: 18px;
        color: #555;
        margin: 0 0 24px;
      }
      .hero-actions {
        display: flex;
        gap: 16px;
        justify-content: center;
      }
      .btn {
        display: inline-block;
        padding: 8px 24px;
        border-radius: 6px;
        border: 1px solid #1890ff;
        color: #1890ff;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s;
      }
      .btn-primary {
        background: #1890ff;
        color: #fff;
      }
      .btn:hover {
        opacity: 0.85;
      }
      .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 24px;
        padding: 24px;
      }
      .feature-card {
        border: 1px solid #f0f0f0;
        border-radius: 8px;
        padding: 24px;
        text-align: center;
        transition: box-shadow 0.2s;
      }
      .feature-card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      }
      .feature-icon {
        width: 48px;
        height: 48px;
        margin-bottom: 12px;
      }
      .feature-title {
        margin: 0 0 8px;
        font-size: 18px;
      }
      .feature-desc {
        margin: 0;
        color: #666;
      }
      .home-body {
        padding: 24px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  private readonly http = inject(HttpClient);
  readonly meta = signal<HomeMeta>({});
  readonly body = signal('');

  ngOnInit(): void {
    this.http
      .get('site-src/docs/index.md', { responseType: 'text' })
      .subscribe((text) => {
        const parsed = this.parseFrontMatter(text ?? '');
        this.meta.set(parsed.meta);
        this.body.set(parsed.body);
      });
  }

  /** 解析 --- 包裹的 YAML front-matter（仅支持本项目用到的 hero/features 结构） */
  private parseFrontMatter(raw: string): { meta: HomeMeta; body: string } {
    const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
    if (!match) {
      return { meta: {}, body: raw };
    }
    const fm = match[1];
    const body = match[2];
    const meta: HomeMeta = {};

    const heroMatch = fm.match(/hero:\s*\n((?:\s+[a-z]+:.*\n?)+)/);
    if (heroMatch) {
      const heroBlock = heroMatch[1];
      meta.hero = {
        title: this.pick(heroBlock, 'title'),
        description: this.pick(heroBlock, 'description'),
      };
    }

    const featuresMatch = fm.match(/features:\s*\n([\s\S]*?)(?:\n\w|\n*$)/);
    if (featuresMatch) {
      const featBlock = featuresMatch[1];
      const items = featBlock
        .split(/\n\s*-\s+/)
        .filter((s) => s.trim().length > 0);
      meta.features = items.map((it) => ({
        icon: this.pick(it, 'icon'),
        title: this.pick(it, 'title'),
        description: this.pick(it, 'description'),
      }));
    }

    return { meta, body };
  }

  private pick(block: string, key: string): string {
    const m = block.match(new RegExp(key + ':\\s*(.+)'));
    return m ? m[1].trim() : '';
  }
}
