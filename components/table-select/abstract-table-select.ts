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
import { PageTableRequire, TableSelectConfig, TableSelectMode } from './type';
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
  /** 唯一标识字段，默认字段为id, 可以使用.分隔层级
   * 比如login对象下的uuid可以使用传入'login.uuid'等同于['login','uuid']*/
  @Input() uniqueKey: string | string[] = 'id';
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
  @Input() mode: TableSelectMode = 'single';

  @Input() tableConfig: Array<TableSelectConfig<T>> = [];

  selectedData: T[] = [];
  setOfCheckedId = new Set<number | string>();
  checked = false;
  indeterminate = false;

  @ContentChildren(NzxKeyDirective) private dirs!: QueryList<NzxKeyDirective>;
  isDisabled = false;

  private propagateChange = (_: any) => {};

  ngAfterContentInit(): void {
    const list = this.dirs.toArray();
    list.forEach((d) => {
      const c = this.tableConfig?.find((t) => t.key === d.key);
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

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    this.updateDisabledState();
  }

  updateDisabledState() {
    this.list = this.list.map((item) => {
      return {
        ...item,
        disabled: this.isDisabled,
      };
    });
  }

  /** 更新选中集合 */
  updateCheckedSet(data: T, checked: boolean): void {
    if (checked) {
      if (this.mode === 'single') {
        this.setOfCheckedId.clear();
        this.selectedData = [];
      }
      this.setOfCheckedId.add(this.getValue(data, this.uniqueKey));
      const exited = this.selectedData.some(
        (i) =>
          this.getValue(i, this.uniqueKey) ===
          this.getValue(data, this.uniqueKey)
      );
      if (!exited) {
        this.selectedData.push(data);
      }
    } else {
      this.setOfCheckedId.delete(this.getValue(data, this.uniqueKey));
      this.selectedData = this.selectedData.filter(
        (i) =>
          this.getValue(i, this.uniqueKey) ===
          this.getValue(data, this.uniqueKey)
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
      this.setOfCheckedId.has(this.getValue(item, this.uniqueKey))
    );
    this.indeterminate =
      this.list?.some((item) =>
        this.setOfCheckedId.has(this.getValue(item, this.uniqueKey))
      ) && !this.checked;
  }

  /*** 每条checkbox选中*/
  onItemChecked(data: T, checked: boolean): void {
    this.updateCheckedSet(data, checked);
    this.refreshCheckedStatus();
  }

  getValue(obj: any, keys: string[] | string): any {
    if (!obj || !keys) {
      return undefined;
    }
    if (typeof keys === 'string') {
      keys = keys.split('.');
    }
    if (keys.length === 1) {
      return obj[keys[0]];
    }
    return this.getValue(obj[keys[0]], keys.slice(1));
  }
}
