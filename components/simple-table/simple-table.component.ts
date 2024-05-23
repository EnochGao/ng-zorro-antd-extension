import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { NzTableSize } from 'ng-zorro-antd/table';

import { NzxExpandDirective } from './directive/expand.directive';
import { NzxTdDirective } from './directive/td.directive';
import { NzxThDirective } from './directive/th.directive';

/**
 * nzx-simple-table 组件配置格式
 */
export interface NzxSimpleTableConfig<T> {
  /**
   * 表头名
   */
  header: string;
  /**
   * 字段key值
   */
  key?: string | number;
  /**
   * td宽度
   */
  width?: string;
  /**
   * 数据格式化函数
   */
  format?: (data: T) => any;

  template?: TemplateRef<any>;
}

@Component({
  selector: 'nzx-simple-table',
  template: `
    <nz-table
      #table
      [nzData]="nzxData"
      [nzBordered]="nzxBordered"
      nzHideOnSinglePage
      [nzTitle]="nzxTitle"
      [nzFooter]="nzxFooter"
    >
      <thead>
        <tr>
          <th
            [nzAlign]="nzxAlign"
            *ngFor="let config of nzxConfig"
            [nzWidth]="config?.width!"
          >
            {{ config.header }}
          </th>
          <th
            [nzAlign]="nzxAlign"
            *ngFor="let item of thList; let i = index"
            [nzWidth]="item?.width!"
          >
            <ng-container
              [ngTemplateOutlet]="item.templateRef"
              [ngTemplateOutletContext]="{ $implicit: i }"
            >
            </ng-container>
          </th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let data of table.data; let i = index">
          <tr>
            <td [nzAlign]="nzxAlign" *ngFor="let config of nzxConfig">
              <ng-container *ngIf="config.template">
                <ng-template
                  [ngTemplateOutlet]="config.template"
                  [ngTemplateOutletContext]="{ $implicit: data }"
                >
                </ng-template>
              </ng-container>
              <ng-container *ngIf="!config.template">
                <ng-container *ngIf="!!config.key">
                  <ng-container *ngIf="!config.format">
                    {{ data[config.key] }}
                  </ng-container>
                  <ng-container *ngIf="config.format">
                    {{ config.format(data) }}
                  </ng-container>
                </ng-container>
                <ng-container *ngIf="!!!config.key">
                  <ng-container *ngIf="!config.format">
                    {{ data }}
                  </ng-container>
                  <ng-container *ngIf="config.format">
                    {{ config.format(data) }}
                  </ng-container>
                </ng-container>
              </ng-container>
            </td>
            <td [nzAlign]="nzxAlign" *ngFor="let item of tdList">
              <ng-container
                [ngTemplateOutlet]="item.templateRef"
                [ngTemplateOutletContext]="{ $implicit: data }"
              ></ng-container>
            </td>
          </tr>
          <tr *ngIf="nzxExpand" [nzExpand]="data['expand']!">
            <ng-container
              [ngTemplateOutlet]="expandDirective?.templateRef!"
              [ngTemplateOutletContext]="{ $implicit: data, index: i }"
            >
            </ng-container>
          </tr>
        </ng-container>
      </tbody>
    </nz-table>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxSimpleTableComponent<
  T extends {
    expand?: boolean;
    [key: string]: any;
  }
> implements AfterContentInit
{
  /** th td 布局方式 */
  @Input() nzxAlign: 'left' | 'right' | 'center' | null = 'center';
  /** table 标题 */
  @Input() nzxTitle!: string | TemplateRef<void>;
  /** table 页脚*/
  @Input() nzxFooter!: string | TemplateRef<void>;
  /** 支持展开 */
  @Input() nzxExpand = false;
  /** 启用边框 */
  @Input() nzxBordered = true;
  /** table数据集合 */
  @Input() nzxData: Array<T> = [];
  /** table size */
  @Input() nzxSize: NzTableSize = 'default';
  /** table 配置项 */
  @Input() nzxConfig: Array<NzxSimpleTableConfig<T>> = [];

  tdList: Array<NzxTdDirective> = [];
  thList: Array<NzxThDirective> = [];

  @ContentChild(NzxExpandDirective) expandDirective!: NzxExpandDirective;
  @ContentChildren(NzxThDirective) private _thList!: QueryList<NzxThDirective>;
  @ContentChildren(NzxTdDirective) private _tdList!: QueryList<NzxTdDirective>;

  ngAfterContentInit(): void {
    this.thList = this._thList.toArray();
    this.tdList = this._tdList.toArray().filter((td) => !td.key);

    const tds = this._tdList.toArray().filter((td) => td.key);
    tds.forEach((td) => {
      this.nzxConfig.forEach((config) => {
        if (config.key === td.key) {
          config.template = td.templateRef;
        }
      });
    });
  }
}
