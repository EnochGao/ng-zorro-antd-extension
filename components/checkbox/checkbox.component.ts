import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Options<T = string> {
  label: string;
  value: T;
  [key: string]: any;
}

/**
 * nz-checkbox-extension 自定义选择框,选择时传出的值为数组形式如：[1,2]
 *
 * html:
 * ```html
 *  <nz-checkbox-extension [checkOptions]="checkOptions" formControlName="label"></nz-checkbox-extension>
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
  selector: 'nz-checkbox-extension',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxExtensionComponent),
      multi: true
    },
  ]
})
export class CheckboxExtensionComponent implements OnInit, ControlValueAccessor {

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

  constructor() { }

  ngOnInit(): void {
  }

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
