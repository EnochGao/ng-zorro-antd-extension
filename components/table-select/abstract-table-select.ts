import {
  AfterContentInit,
  ContentChildren,
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import {
  NzxQueryControlOptions,
  NzxQueryParams,
} from 'ng-zorro-antd-extension/configurable-query';
import { NzxKeyDirective } from './key.directive';
import { PageTableRequire, TableSelectConfig } from './type';
import { NzxTableQueryParams } from 'ng-zorro-antd-extension/table-adaptor';

/**
 * table选择基类，可以自己实现相关组件
 */
@Directive()
export abstract class NzxAbstractTableSelect<T extends PageTableRequire>
  implements ControlValueAccessor, AfterContentInit
{
  @Input() controls: Array<NzxQueryControlOptions> = [];
  @Input() checkboxWidth = '20px';
  /** 确保list中有唯一标识字段默认字段为id */
  @Input() uniqueKey = 'id';
  @Input() nzxBtnSpan = 24;
  @Input() nzxCollapse = false;
  @Input() list: T[] = [];

  @Output() nzxQueryParamsChange = new EventEmitter<
    NzxTableQueryParams | NzxQueryParams
  >();

  /**
   * 组件模式，支持多选单选，默认单选
   *  - single 单选
   *  - multiple 多选
   */
  @Input() model: 'single' | 'multiple' = 'single';

  @Input() tableConfig: Array<TableSelectConfig<T>> = [];

  selectedData: T[] = [];
  setOfCheckedId = new Set<number | string>();
  checked = false;
  indeterminate = false;

  @ContentChildren(NzxKeyDirective) private dirs!: QueryList<NzxKeyDirective>;

  private propagateChange = (_: any) => {};

  ngAfterContentInit(): void {
    const list = this.dirs.toArray();
    list.forEach((d) => {
      const c = this.tableConfig.find((t) => t.key === d.key);
      if (c) {
        c.template = d.templateRef;
      }
    });
  }

  writeValue(obj: any[]): void {
    if (obj) {
      obj.forEach((i) => {
        this.updateCheckedSet(i, true);
      });
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  /** 更新选中集合 */
  updateCheckedSet(data: T, checked: boolean): void {
    if (checked) {
      if (this.model === 'single') {
        this.setOfCheckedId.clear();
        this.selectedData = [];
      }
      this.setOfCheckedId.add(data[this.uniqueKey]);
      const exited = this.selectedData.some(
        (i) => i[this.uniqueKey] === data[this.uniqueKey]
      );
      if (!exited) {
        this.selectedData.push(data);
      }
    } else {
      this.setOfCheckedId.delete(data[this.uniqueKey]);
      this.selectedData = this.selectedData.filter(
        (i) => i[this.uniqueKey] !== data[this.uniqueKey]
      );
    }
    this.propagateChange(this.selectedData);
  }

  /*** 全选 */
  onAllChecked(value: boolean): void {
    this.list.forEach((item) => this.updateCheckedSet(item, value));
    this.refreshCheckedStatus();
  }

  /*** 刷新checkbox选中状态 */
  refreshCheckedStatus(): void {
    this.checked = this.list?.every((item) =>
      this.setOfCheckedId.has(item[this.uniqueKey])
    );
    this.indeterminate =
      this.list?.some((item) =>
        this.setOfCheckedId.has(item[this.uniqueKey])
      ) && !this.checked;

    if (this.model === 'single') {
      if (this.setOfCheckedId.size > 0) {
        const value = Array.from(this.setOfCheckedId)[0];
        this.list = this.list.map((item) => {
          if (item[this.uniqueKey] === value) {
            return {
              ...item,
              disabled: false,
            };
          }
          return {
            ...item,
            // disabled: true,
          };
        });
      } else {
        this.list = this.list.map((item) => {
          return {
            ...item,
            disabled: false,
          };
        });
      }
    }
  }

  /*** 每条checkbox选中*/
  onItemChecked(data: T, checked: boolean): void {
    this.updateCheckedSet(data, checked);
    this.refreshCheckedStatus();
  }
}
