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
import { DocComponent } from '../doc/doc.component';
import { NavGroup, NavItem } from '../nav.service';

/**
 * 组件文档路由页：根据 :path 参数从导航数据定位 item，交给 DocComponent 渲染。
 * 订阅 paramMap，确保同一路由复用组件时切换 path 也能刷新。
 */
@Component({
  selector: 'app-component-doc-page',
  standalone: true,
  imports: [CommonModule, DocComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (item(); as it) {
      <app-doc [item]="it"></app-doc>
    } @else {
      <p>未找到组件：{{ path() }}</p>
    }
  `,
})
export class ComponentDocPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  readonly item = signal<NavItem | null>(null);
  readonly path = signal('');

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const path = params.get('path') ?? '';
      this.path.set(path);
      this.loadItem(path);
    });
  }

  private loadItem(path: string): void {
    this.http
      .get<NavGroup[]>('assets/navigations/zh-cn.json')
      .subscribe((groups) => {
        const found = this.findItem(groups, path);
        this.item.set(found);
      });
  }

  /** 递归查找（导航为 组 -> 子分类 -> 组件 三级嵌套） */
  private findItem(groups: NavGroup[], path: string): NavItem | null {
    for (const group of groups) {
      const hit = this.searchItems(group.items ?? [], path);
      if (hit) {
        return hit;
      }
    }
    return null;
  }

  private searchItems(items: NavItem[], path: string): NavItem | null {
    for (const item of items) {
      if (item.path === path) {
        return item;
      }
      if (item.items?.length) {
        const hit = this.searchItems(item.items, path);
        if (hit) {
          return hit;
        }
      }
    }
    return null;
  }
}
