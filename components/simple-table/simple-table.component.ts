import {
  ChangeDetectionStrategy, Component, ContentChild,
  ContentChildren, Input, QueryList,
  TemplateRef, ViewEncapsulation
} from '@angular/core';
import { ExpandDirective } from './directive/expand.directive';
import { TdDirective } from './directive/td.directive';
import { ThDirective } from './directive/th.directive';
/**
 * nzx-simple-table 组件配置格式
 */
export interface NzxSimpleTableConfig<T> {
  /**
   * 表头名
   */
  header: string,
  /**
   * 字段key值
   */
  key?: string | number,
  /**
   * td宽度
   */
  width?: string,
  /**
   * 数据格式化函数
   */
  format?: (data: T) => any;
}

@Component({
  selector: 'nzx-simple-table',
  template: `
    <nz-table #table [nzData]="nzxData" nzHideOnSinglePage [nzTitle]="nzxTitle" [nzFooter]="nzxFooter">
      <thead>
        <tr>
          <th [nzAlign]="nzxAlign" *ngFor="let config of nzxConfig" [nzWidth]="config?.width">
            {{config.header}}
          </th>
          <th [nzAlign]="nzxAlign" *ngFor="let item of thList;let i=index" [nzWidth]="item?.width">
            <ng-container [ngTemplateOutlet]="item.templateRef"
              [ngTemplateOutletContext]="{$implicit:i}">
            </ng-container>
          </th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let data of table.data;let i=index;">
          <tr>
            <td [nzAlign]="nzxAlign" *ngFor="let config of nzxConfig">
              <ng-container *ngIf="!!config.key">
                <ng-container *ngIf="!config.format">
                  {{ data[config.key] }}
                </ng-container>
                <ng-container *ngIf="config.format">
                  {{config.format(data[config.key])}}
                </ng-container>
              </ng-container>
              <ng-container *ngIf="!!!config.key">
                <ng-container *ngIf="!config.format">
                  {{ data }}
                </ng-container>
                <ng-container *ngIf="config.format">
                  {{config.format(data)}}
                </ng-container>
              </ng-container>
            </td>
            <td [nzAlign]="nzxAlign" *ngFor="let item of tdList">
              <ng-container [ngTemplateOutlet]="item.templateRef"
                [ngTemplateOutletContext]="{$implicit:data}"></ng-container>
            </td>
          </tr>
          <tr *ngIf="nzxExpand" [nzExpand]="data.expand">
            <ng-container [ngTemplateOutlet]="expandDirective?.templateRef"
              [ngTemplateOutletContext]="{$implicit:data,index:i}">
            </ng-container>
          </tr>
        </ng-container>
      </tbody>
    </nz-table>
  ` ,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SimpleTableComponent<T> {

  @Input() nzxAlign: 'left' | 'right' | 'center' | null = 'center';
  @Input() nzxTitle!: string | TemplateRef<void>;
  @Input() nzxFooter!: string | TemplateRef<void>;
  @Input() nzxExpand = false;
  @Input() nzxData: Array<T> = [];
  @Input() nzxConfig: Array<NzxSimpleTableConfig<T>> = [];

  @ContentChildren(ThDirective) tdList!: QueryList<ThDirective>;
  @ContentChildren(TdDirective) thList!: QueryList<TdDirective>;
  @ContentChild(ExpandDirective) expandDirective!: ExpandDirective;

}
