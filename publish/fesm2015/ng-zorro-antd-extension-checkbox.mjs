import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import * as i2 from 'ng-zorro-antd/checkbox';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CommonModule } from '@angular/common';

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
class CheckboxExtensionComponent {
    constructor() {
        this.checkOptions = [];
        /**
         * 自定义函数用来格式化输输入内容用来回显
         */
        this.customFormateInFn = (value) => value;
        /**
        * 自定义函数用来格式化输出内容用来接口入参
        */
        this.customFormateOutFn = (checkedList) => checkedList;
        this.nzDisabled = false;
        this.propagateChange = (_) => { };
    }
    ngOnInit() {
    }
    writeValue(v) {
        if (v) {
            let list = this.customFormateInFn(v) || [];
            list.forEach((value) => {
                const index = this.checkOptions.findIndex(i => i.value === value);
                if (index > -1) {
                    this.checkOptions[index]['checked'] = true;
                }
            });
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
    emit(value) {
        const checkedList = value.filter(i => i['checked']).map(i => i.value);
        this.propagateChange(this.customFormateOutFn(checkedList));
    }
}
CheckboxExtensionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: CheckboxExtensionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxExtensionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.0", type: CheckboxExtensionComponent, selector: "nz-checkbox-extension", inputs: { checkOptions: "checkOptions", customFormateInFn: "customFormateInFn", customFormateOutFn: "customFormateOutFn" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxExtensionComponent),
            multi: true
        },
    ], ngImport: i0, template: "<nz-checkbox-group [nzDisabled]=\"nzDisabled\" [(ngModel)]=\"checkOptions\"\n  (ngModelChange)=\"emit(checkOptions)\">\n</nz-checkbox-group>\n", styles: [""], dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.NzCheckboxGroupComponent, selector: "nz-checkbox-group", inputs: ["nzDisabled"], exportAs: ["nzCheckboxGroup"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: CheckboxExtensionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nz-checkbox-extension', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckboxExtensionComponent),
                            multi: true
                        },
                    ], template: "<nz-checkbox-group [nzDisabled]=\"nzDisabled\" [(ngModel)]=\"checkOptions\"\n  (ngModelChange)=\"emit(checkOptions)\">\n</nz-checkbox-group>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { checkOptions: [{
                type: Input
            }], customFormateInFn: [{
                type: Input
            }], customFormateOutFn: [{
                type: Input
            }] } });

class NzCheckboxExtensionModule {
}
NzCheckboxExtensionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NzCheckboxExtensionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NzCheckboxExtensionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.0", ngImport: i0, type: NzCheckboxExtensionModule, declarations: [CheckboxExtensionComponent], imports: [CommonModule,
        FormsModule,
        NzCheckboxModule], exports: [CheckboxExtensionComponent] });
NzCheckboxExtensionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NzCheckboxExtensionModule, imports: [CommonModule,
        FormsModule,
        NzCheckboxModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.0", ngImport: i0, type: NzCheckboxExtensionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        CheckboxExtensionComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        NzCheckboxModule
                    ],
                    exports: [CheckboxExtensionComponent]
                }]
        }] });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxExtensionComponent, NzCheckboxExtensionModule };
//# sourceMappingURL=ng-zorro-antd-extension-checkbox.mjs.map
