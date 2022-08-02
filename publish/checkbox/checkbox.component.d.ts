import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
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
export declare class CheckboxExtensionComponent implements OnInit, ControlValueAccessor {
    checkOptions: Array<Options<number | string>>;
    /**
     * 自定义函数用来格式化输输入内容用来回显
     */
    customFormateInFn: (value: any) => Array<any>;
    /**
    * 自定义函数用来格式化输出内容用来接口入参
    */
    customFormateOutFn: (checkedList: any) => any;
    nzDisabled: boolean;
    private propagateChange;
    constructor();
    ngOnInit(): void;
    writeValue(v: (string | number)[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    emit(value: Options<number | string>[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxExtensionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxExtensionComponent, "nz-checkbox-extension", never, { "checkOptions": "checkOptions"; "customFormateInFn": "customFormateInFn"; "customFormateOutFn": "customFormateOutFn"; }, {}, never, never, false>;
}
