import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NavService, NavGroup, NavItem } from '../nav.service';
import { LocaleService } from '../locale.service';

/**
 * 文档站布局壳（对标 NG-ZORRO 顶部栏 + 左侧导航 + 右侧 TOC + 内容区）。
 * 菜单使用编程式导航（router.navigateByUrl）避免 nz-menu 拦截 routerLink 点击。
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    NzDropdownModule,
    NzButtonModule,
    NzInputModule,
    NzTooltipModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-layout class="site-layout">
      <nz-header class="site-header">
        <div class="logo" (click)="navigate('/')">
          <img src="assets/images/logo.png" alt="logo" height="32" />
          <span class="title">NG-ZORRO-EXTENSION</span>
        </div>
        <div class="header-search">
          <nz-input-group nzPrefixIcon="search">
            <input
              nz-input
              placeholder="搜索组件"
              [(ngModel)]="keyword"
              (keyup.enter)="search()"
            />
          </nz-input-group>
        </div>
        <div class="header-right">
          <button nz-button nzType="text" (click)="toggleLocale()">
            {{ locale() === 'zh-cn' ? 'English' : '中文' }}
          </button>
          <a
            nz-button
            nzType="text"
            href="https://github.com/EnochGao/ng-zorro-antd-extension"
            target="_blank"
            nz-tooltip
            nzTooltipTitle="GitHub"
          >
            <span nz-icon nzType="github"></span>
          </a>
        </div>
      </nz-header>

      <nz-layout>
        <nz-sider class="site-sider" nzWidth="260" nzTheme="light">
          <ul nz-menu nzMode="inline" class="site-menu">
            <li
              nz-menu-item
              [nzSelected]="isActive('/')"
              (click)="navigate('/')"
            >
              <span nz-icon nzType="home"></span> 首页
            </li>
            @for (group of groups(); track group.path) {
              @if (group.lib) {
                @for (cat of group.items; track cat.id) {
                  @if (cat.items?.length) {
                    <!-- 子分类（如 组件/指令/管道）再展开为 submenu -->
                    <li nz-submenu [nzTitle]="cat.title" [nzOpen]="true">
                      @for (item of cat.items; track item.id) {
                        @if (item.path) {
                          <li
                            nz-menu-item
                            [nzSelected]="isActive('/components/' + item.path)"
                            (click)="navigate('/components/' + item.path)"
                          >
                            {{ item.title }}
                            @if (item.subtitle) {
                              <span class="subtitle">{{ item.subtitle }}</span>
                            }
                          </li>
                        }
                      }
                    </li>
                  } @else if (cat.path) {
                    <!-- 直接是组件项 -->
                    <li
                      nz-menu-item
                      [nzSelected]="isActive('/components/' + cat.path)"
                      (click)="navigate('/components/' + cat.path)"
                    >
                      {{ cat.title }}
                      @if (cat.subtitle) {
                        <span class="subtitle">{{ cat.subtitle }}</span>
                      }
                    </li>
                  }
                }
              }
            }
            <li nz-submenu nzTitle="更新日志" [nzOpen]="true">
              @for (v of changelogVersions(); track v.path) {
                <li
                  nz-menu-item
                  [nzSelected]="isActiveChangelog(v.path!)"
                  (click)="navigate('/changelog/' + v.path)"
                >
                  {{ v.title }}
                </li>
              }
            </li>
          </ul>
        </nz-sider>

        <nz-content class="site-content">
          <router-outlet></router-outlet>
        </nz-content>
      </nz-layout>
    </nz-layout>
  `,
  styles: [
    `
      .site-layout {
        min-height: 100vh;
      }
      .site-header {
        display: flex;
        align-items: center;
        gap: 24px;
        padding: 0 24px;
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
        position: sticky;
        top: 0;
        z-index: 10;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        flex-shrink: 0;
      }
      .logo .title {
        font-weight: 600;
        font-size: 16px;
        color: #001529;
      }
      .header-search {
        flex: 1;
        max-width: 320px;
      }
      .header-right {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
      }
      .site-sider {
        border-right: 1px solid #f0f0f0;
        overflow: auto;
        height: calc(100vh - 64px);
        position: sticky;
        top: 64px;
      }
      .site-menu {
        border-right: 0;
        padding: 8px 0;
      }
      .subtitle {
        margin-left: 8px;
        font-size: 12px;
        color: #999;
      }
      .site-content {
        padding: 24px 48px;
      }
    `,
  ],
})
export class LayoutComponent implements OnInit {
  private readonly nav = inject(NavService);
  private readonly localeSvc = inject(LocaleService);
  private readonly router = inject(Router);
  readonly groups = signal<NavGroup[]>([]);
  readonly changelogVersions = signal<NavItem[]>([]);
  readonly locale = this.localeSvc.locale;
  keyword = '';

  ngOnInit(): void {
    this.reload();
  }

  toggleLocale(): void {
    this.localeSvc.locale.update((l) => (l === 'zh-cn' ? 'en-us' : 'zh-cn'));
    this.reload();
  }

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }

  isActive(url: string): boolean {
    const current = this.router.url.split('?')[0];
    if (url === '/') {
      return current === '/' || current === '';
    }
    return current === url;
  }

  search(): void {
    const kw = this.keyword.trim().toLowerCase();
    if (!kw) {
      return;
    }
    const all = this.groups().flatMap((g) => g.items);
    const hit = all.find(
      (i) =>
        i.title.toLowerCase().includes(kw) ||
        (i.subtitle ?? '').toLowerCase().includes(kw) ||
        (i.path ?? '').toLowerCase().includes(kw)
    );
    if (hit?.path) {
      this.navigate('/components/' + hit.path);
    }
  }

  private reload(): void {
    this.nav.getNav(this.locale()).subscribe((groups) => {
      this.groups.set(groups);
      const changelog = groups.find((g) => g.path === 'changelog');
      this.changelogVersions.set(
        (changelog?.items ?? []).filter((i) => i.path).sort(
          (a, b) => (a.order ?? 0) - (b.order ?? 0)
        )
      );
    });
  }

  isActiveChangelog(version: string): boolean {
    return this.router.url.startsWith('/changelog/' + version);
  }
}
