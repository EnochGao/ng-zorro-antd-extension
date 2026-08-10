import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
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
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NavService, NavGroup, NavItem } from '../nav.service';
import { LocaleService } from '../locale.service';

  /**
   * 文档站布局壳（对标 NG-ZORRO 顶部栏 + 左侧导航 + 右侧 TOC + 内容区）。
   * 顶部横向菜单使用 routerLink 自动同步选中态，与官方一致。
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
    NzSelectModule,
    NzTooltipModule,
    NzTagModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-layout class="site-layout">
      <nz-header class="site-header">
        <a class="logo" routerLink="/">
          <img src="assets/images/logo.png" alt="logo" height="32" />
          <span class="title">NG-ZORRO-EXTENSION</span>
        </a>
        <ul nz-menu nzMode="horizontal" class="site-nav">
          <li nz-menu-item>
            <a routerLink="/"><span nz-icon nzType="read"></span> 文档</a>
          </li>
          @if (componentGroup(); as cg) {
            <li nz-submenu nzTitle="组件">
              @for (cat of cg.items; track cat.id) {
                <li nz-submenu [nzTitle]="cat.title">
                  @for (it of cat.items; track it.path) {
                    @if (it.path) {
                      <li nz-menu-item>
                        <a [routerLink]="'/components/' + it.path">{{ it.title }}</a>
                      </li>
                    }
                  }
                </li>
              }
            </li>
          }
          @if (changelogGroup(); as lg) {
            <li nz-submenu nzTitle="更新日志">
              @for (v of lg.items; track v.path) {
                @if (v.path) {
                  <li nz-menu-item>
                    <a [routerLink]="'/changelog/' + v.path">{{ v.title }}</a>
                  </li>
                }
              }
            </li>
          }
        </ul>
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
          <nz-select
            class="version-select"
            [nzPlaceHolder]="'版本'"
            [ngModel]="currentVersion()"
            (ngModelChange)="onVersionChange($event)"
          >
            @for (opt of versionOptions(); track opt.value) {
              <nz-option [nzValue]="opt.value" [nzLabel]="opt.label"></nz-option>
            }
          </nz-select>
          <div
            class="lang-switch"
            (click)="toggleLocale()"
            nz-tooltip
            [nzTooltipTitle]="locale() === 'zh-cn' ? 'English' : '中文'"
          >
            <span class="lang" [class.active]="locale() === 'zh-cn'">中</span>
            <span class="lang" [class.active]="locale() !== 'zh-cn'">En</span>
          </div>
          <a
            class="github-btn"
            href="https://github.com/EnochGao/ng-zorro-antd-extension"
            target="_blank"
            nz-tooltip
            nzTooltipTitle="GitHub"
          >
            <span nz-icon nzType="github"  nzTheme="outline"></span>
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
                    <!-- 子分类（如 组件/指令/管道）以 menu-group 常展开，对齐官方分类样式 -->
                    <li nz-menu-group [nzTitle]="cat.title">
                      <ul>
                        @for (item of cat.items; track item.id) {
                          @if (item.path) {
                            <li
                              nz-menu-item
                              [nzSelected]="isActive('/components/' + item.path)"
                              (click)="navigate('/components/' + item.path)"
                            >
                              {{ item.title }}
                              @if (item.subtitle) {
                                <span class="chinese">{{ item.subtitle }}</span>
                              }
                            </li>
                          }
                        }
                      </ul>
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
                        <span class="chinese">{{ cat.subtitle }}</span>
                      }
                    </li>
                  }
                }
              }
            }
            <li nz-menu-group [nzTitle]="'更新日志'">
              <ul>
                <li
                  nz-menu-item
                  [nzSelected]="isActiveChangelog(currentVersion())"
                  (click)="navigate('/changelog/' + currentVersion())"
                >
                  <span class="changelog-label">{{ currentVersionLabel() }}</span>
                  <nz-tag nzColor="success">{{ currentVersion() }}</nz-tag>
                </li>
                @for (v of changelogVersions(); track v.path) {
                  @if (v.path !== currentVersion()) {
                    <li
                      nz-menu-item
                      [nzSelected]="isActiveChangelog(v.path!)"
                      (click)="navigate('/changelog/' + v.path)"
                    >
                      {{ v.title }}
                    </li>
                  }
                }
              </ul>
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
        background: #fff;
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
      .site-nav {
        border-bottom: 0;
        background: transparent;
        line-height: 64px;
        flex-shrink: 0;
      }
      .site-nav ::ng-deep.ant-menu-horizontal {
        border-bottom: none;
        & > .ant-menu-item,
        & > .ant-menu-submenu {
          min-width: 64px;
          height: 64px;
          padding-inline: 12px;
          line-height: 64px;
          /* 选中高亮条移到顶部，与 NG-ZORRO 一致 */
          &::after {
            inset-inline: 12px;
            top: 0;
            bottom: auto;
            border-width: 2px;
          }
        }
        & > .ant-menu-item-selected a {
          color: #1890ff;
        }
      }
      .header-search {
        flex: 1;
        max-width: 320px;
        margin-inline-start: 16px;
        padding-inline-start: 16px;
        border-inline-start: 1px solid #f0f0f0;
      }
      .header-right {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-left: auto;
        flex-shrink: 0;
      }
      .version-select {
        width: 90px;
      }
      .lang-switch {
        position: relative;
        width: 1.2em;
        height: 1.2em;
        cursor: pointer;
      }
      .lang-switch .lang {
        position: absolute;
        color: rgba(0, 0, 0, 0.88);
        font-size: 1.2em;
        line-height: 1;
        border: 1px solid rgba(0, 0, 0, 0.88);
      }
      .lang-switch .lang.active {
        top: -5%;
        z-index: 1;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.88);
        transform: scale(0.7);
        transform-origin: 0 0;
        inset-inline-start: -5%;
      }
      .lang-switch .lang:not(.active) {
        inset-inline-end: -5%;
        bottom: -5%;
        z-index: 0;
        transform: scale(0.5);
        transform-origin: 100% 100%;
      }
      .github-btn {
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.88);
        font-size: 20px;
        transition: color 0.2s;
      }
      .github-btn:hover {
        color: #1890ff;
      }
      .site-sider {
        border-right: 1px solid #f0f0f0;
        overflow-x: hidden;
        overflow-y: auto;
        height: calc(100vh - 64px);
        position: sticky;
        top: 64px;
      }
      .site-menu {
        border-right: 0;
        padding: 8px 0;
        width: 100%;
      }
      .site-sider ::ng-deep .ant-menu-inline {
        /* 内联菜单保持常展开，箭头不溢出导致横向滚动 */
        width: 100%;
      }
      .site-sider ::ng-deep .ant-menu-submenu-title,
      .site-sider ::ng-deep .ant-menu-item {
        /* 避免文字/箭头溢出 sider 宽度 */
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .subtitle {
        margin-left: 8px;
        font-size: 12px;
        color: #999;
      }
      /* 对齐官方：菜单项中文标题后的英文（zh）标签 */
      .chinese {
        margin-left: 8px;
        font-size: 12px;
        color: #999;
      }
      .changelog-label {
        margin-right: 4px;
      }
      /* 对齐官方：分类标题样式（menu-group） */
      .site-sider ::ng-deep .ant-menu-item-group-title {
        font-size: 12px;
        color: #8c8c8c;
        line-height: 1.5;
        padding-top: 12px;
        padding-bottom: 8px;
        margin: 0 16px;
        /* 分类标题下方淡灰分隔线，对齐官方 */
        border-bottom: 1px solid #f0f0f0;
      }
      .site-content {
        background: #fff;
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

  /** 顶部横向菜单：组件频道（含组件/指令/管道/工具函数子分类） */
  readonly componentGroup = computed(() =>
    this.groups().find((g) => g.path === 'components')
  );
  /** 顶部横向菜单：更新日志频道 */
  readonly changelogGroup = computed(() =>
    this.groups().find((g) => g.path === 'changelog')
  );
  /** 版本下拉选项（取自更新日志版本列表） */
  readonly versionOptions = computed(() => {
    const lg = this.changelogGroup();
    return (lg?.items ?? [])
      .filter((i) => i.path)
      .map((i) => ({ label: i.title ?? i.path!, value: i.path! }));
  });
  /** 当前选中的版本（默认最新） */
  readonly currentVersion = computed(
    () => this.versionOptions()[0]?.value ?? ''
  );
  /** 最新版本的展示标题（如 "v19"），用于更新日志分组项 */
  readonly currentVersionLabel = computed(
    () => this.versionOptions()[0]?.label ?? ''
  );

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

  onVersionChange(version: string): void {
    if (version) {
      this.navigate('/changelog/' + version);
    }
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
