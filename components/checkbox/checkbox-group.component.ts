import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { NzCheckboxModule, NzCheckboxOption } from 'ng-zorro-antd/checkbox';

/**
 * nzx-checkbox-group
 * 自定义选择框,选择时传出的值为数组形式如：[1,2]
 */
@Component({
  selector: 'nzx-checkbox-group',
  exportAs: 'NzxCheckboxGroup',
  imports: [FormsModule, NzCheckboxModule],
  template: `
    <nz-checkbox-group
      [nzDisabled]="nzDisabled"
      [ngModel]="selectValue"
      [nzOptions]="checkOptions"
      (ngModelChange)="valueChange($event)"
    >
    </nz-checkbox-group>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzxCheckboxGroupComponent),
      multi: true,
    },
  ],
})
export class NzxCheckboxGroupComponent implements ControlValueAccessor {
  private cd = inject(ChangeDetectorRef);

  @Input() checkOptions: Array<NzCheckboxOption> = [];

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
  selectValue = [];

  private propagateChange = (_: any) => {};

  writeValue(v: (string | number)[] | any): void {
    console.log(v);
    if (v) {
      this.selectValue = this.customFormateInFn(v);
    } else {
      this.selectValue = [];
    }
    this.cd.markForCheck();
  }

  /**更新视图 */
  updateView() {
    this.cd.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.nzDisabled = isDisabled;
    this.cd.markForCheck();
  }

  valueChange(value: Array<number | string>): void {
    console.log(value);
    this.propagateChange(this.customFormateOutFn(value));
  }
}
