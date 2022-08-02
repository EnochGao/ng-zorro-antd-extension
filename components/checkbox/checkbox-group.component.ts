import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Options<T = string> {
  label: string;
  value: T;
  [key: string]: any;
}

/**
 * nzx-checkbox-group
 * 自定义选择框,选择时传出的值为数组形式如：[1,2]
 *
 * html:
 * ```html
 *  <nzx-checkbox-group [checkOptions]="checkOptions" formControlName="label"></nzx-checkbox-group>
 * ```
 * ts:
 * ```ts
 *  checkOptions = [
    { label: '客户信赖', value: '客户信赖' },
    { label: '技术评估', value: '技术评估' },
  ];
    this.form = this.fb.group({
      label: []
    });
 * ```
 */

@Component({
  selector: 'nzx-checkbox-group',
  exportAs: 'nzxCheckboxGroupExtension',
  template: `
    <nz-checkbox-group [nzDisabled]="nzDisabled" [(ngModel)]="checkOptions"
    (ngModelChange)="emit(checkOptions)">
    </nz-checkbox-group>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupExtensionComponent),
      multi: true
    },
  ]
})
export class CheckboxGroupExtensionComponent implements ControlValueAccessor {

  @Input() checkOptions: Array<Options<number | string>> = [];
  /**
   * 自定义函数用来格式化输输入内容用来回显
   */
  @Input() customFormateInFn: (value: any) => Array<any> = (value: any) => value;
  /**
  * 自定义函数用来格式化输出内容用来接口入参
  */
  @Input() customFormateOutFn = (checkedList: any) => checkedList;

  nzDisabled = false;

  private propagateChange = (_: any) => { };

  writeValue(v: (string | number)[]): void {
    if (v) {
      let list = this.customFormateInFn(v) || [];
      list.forEach((value: string | number) => {
        const index = this.checkOptions.findIndex(i => i.value === value);
        if (index > -1) {
          this.checkOptions[index]['checked'] = true;
        }
      });
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.nzDisabled = isDisabled;
  }

  emit(value: Options<number | string>[]): void {
    const checkedList = value.filter(i => i['checked']).map(i => i.value);
    this.propagateChange(this.customFormateOutFn(checkedList));
  }

}
