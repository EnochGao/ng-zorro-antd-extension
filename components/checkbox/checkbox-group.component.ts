import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Options } from 'ng-zorro-antd-extension/types';

/**
 * nzx-checkbox-group
 * 自定义选择框,选择时传出的值为数组形式如：[1,2]
 *
 */
@Component({
  selector: 'nzx-checkbox-group',
  exportAs: 'nzxCheckboxGroupExtension',
  template: `
    <nz-checkbox-group
      [nzDisabled]="nzDisabled"
      [ngModel]="_checkOptions"
      (ngModelChange)="valueChange($event)"
    >
    </nz-checkbox-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupExtensionComponent),
      multi: true,
    },
  ],
})
export class CheckboxGroupExtensionComponent implements ControlValueAccessor {
  @Input() set checkOptions(value: Array<Options<string | number>>) {
    this._checkOptions = value.map((i) => {
      return { ...i, checked: false };
    });
  }

  _checkOptions: Array<{
    label: string;
    value: number | string;
    disabled?: boolean;
    checked?: boolean;
  }> = [];

  /**
   * 自定义函数用来格式化输输入内容用来回显
   */
  @Input() customFormateInFn: (value: any) => Array<any> = (
    value: any
  ): Array<any> => value;
  /**
   * 自定义函数用来格式化输出内容用来接口入参
   */
  @Input() customFormateOutFn: (value: any) => any = (checkedList: any) =>
    checkedList;

  nzDisabled = false;
  private templateValue: any;
  private propagateChange = (_: any) => {};

  constructor(private cd: ChangeDetectorRef) {}

  writeValue(v: (string | number)[] | any): void {
    this._checkOptions.forEach((i) => (i['checked'] = false));
    this.templateValue = v;
    this._updateView();
  }

  /**更新视图 */
  updateView() {
    setTimeout(() => {
      this._updateView();
    }, 0);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.nzDisabled = isDisabled;
    this.cd.markForCheck();
  }

  valueChange(
    value: Array<{
      label: string;
      value: number | string;
      checked?: boolean;
    }>
  ): void {
    const checkedList = value.filter((i) => i['checked']).map((i) => i.value);
    this.propagateChange(this.customFormateOutFn(checkedList));
  }

  private _updateView() {
    let list = this.customFormateInFn(this.templateValue) || [];
    list.forEach((value: string | number) => {
      const index = this._checkOptions.findIndex((i) => i.value === value);
      if (index > -1) {
        this._checkOptions[index]['checked'] = true;
      }
    });
    this.cd.markForCheck();
  }
}
