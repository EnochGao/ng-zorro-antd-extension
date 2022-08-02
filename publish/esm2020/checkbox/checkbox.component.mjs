import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/checkbox";
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
export class CheckboxExtensionComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFRekU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQWVILE1BQU0sT0FBTywwQkFBMEI7SUFnQnJDO1FBZFMsaUJBQVksR0FBb0MsRUFBRSxDQUFDO1FBQzVEOztXQUVHO1FBQ00sc0JBQWlCLEdBQStCLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDL0U7O1VBRUU7UUFDTyx1QkFBa0IsR0FBRyxDQUFDLFdBQWdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUVoRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRVgsb0JBQWUsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBc0I7UUFDL0IsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFzQixFQUFFLEVBQUU7Z0JBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQzVDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO0lBQ3pCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBRSxVQUFtQjtRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWlDO1FBQ3BDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzt1SEEvQ1UsMEJBQTBCOzJHQUExQiwwQkFBMEIsNEtBUjFCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDekQsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGLDBCQ3hDSCxnSkFHQTsyRkR1Q2EsMEJBQTBCO2tCQWJ0QyxTQUFTOytCQUNFLHVCQUF1QixtQkFHaEIsdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSwyQkFBMkIsQ0FBQzs0QkFDekQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7MEVBSVEsWUFBWTtzQkFBcEIsS0FBSztnQkFJRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBSUcsa0JBQWtCO3NCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnM8VCA9IHN0cmluZz4ge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogVDtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIG56LWNoZWNrYm94LWV4dGVuc2lvbiDoh6rlrprkuYnpgInmi6nmoYYs6YCJ5oup5pe25Lyg5Ye655qE5YC85Li65pWw57uE5b2i5byP5aaC77yaWzEsMl1cbiAqXG4gKiBodG1sOlxuICogYGBgaHRtbFxuICogIDxuei1jaGVja2JveC1leHRlbnNpb24gW2NoZWNrT3B0aW9uc109XCJjaGVja09wdGlvbnNcIiBmb3JtQ29udHJvbE5hbWU9XCJsYWJlbFwiPjwvbnotY2hlY2tib3gtZXh0ZW5zaW9uPlxuICogYGBgXG4gKiB0czpcbiAqIGBgYHRzXG4gKiAgY2hlY2tPcHRpb25zID0gW1xuICAgIHsgbGFiZWw6ICflrqLmiLfkv6HotZYnLCB2YWx1ZTogJ+WuouaIt+S/oei1licgfSxcbiAgICB7IGxhYmVsOiAn5oqA5pyv6K+E5LywJywgdmFsdWU6ICfmioDmnK/or4TkvLAnIH0sXG4gIF07XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBsYWJlbDogW11cbiAgICB9KTtcblxuICogYGBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY2hlY2tib3gtZXh0ZW5zaW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hlY2tib3guY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hFeHRlbnNpb25Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94RXh0ZW5zaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgQElucHV0KCkgY2hlY2tPcHRpb25zOiBBcnJheTxPcHRpb25zPG51bWJlciB8IHN0cmluZz4+ID0gW107XG4gIC8qKlxuICAgKiDoh6rlrprkuYnlh73mlbDnlKjmnaXmoLzlvI/ljJbovpPovpPlhaXlhoXlrrnnlKjmnaXlm57mmL5cbiAgICovXG4gIEBJbnB1dCgpIGN1c3RvbUZvcm1hdGVJbkZuOiAodmFsdWU6IGFueSkgPT4gQXJyYXk8YW55PiA9ICh2YWx1ZTogYW55KSA9PiB2YWx1ZTtcbiAgLyoqXG4gICog6Ieq5a6a5LmJ5Ye95pWw55So5p2l5qC85byP5YyW6L6T5Ye65YaF5a6555So5p2l5o6l5Y+j5YWl5Y+CXG4gICovXG4gIEBJbnB1dCgpIGN1c3RvbUZvcm1hdGVPdXRGbiA9IChjaGVja2VkTGlzdDogYW55KSA9PiBjaGVja2VkTGlzdDtcblxuICBuekRpc2FibGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBwcm9wYWdhdGVDaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodjogKHN0cmluZyB8IG51bWJlcilbXSk6IHZvaWQge1xuICAgIGlmICh2KSB7XG4gICAgICBsZXQgbGlzdCA9IHRoaXMuY3VzdG9tRm9ybWF0ZUluRm4odikgfHwgW107XG4gICAgICBsaXN0LmZvckVhY2goKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrT3B0aW9ucy5maW5kSW5kZXgoaSA9PiBpLnZhbHVlID09PSB2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgdGhpcy5jaGVja09wdGlvbnNbaW5kZXhdWydjaGVja2VkJ10gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBlbWl0KHZhbHVlOiBPcHRpb25zPG51bWJlciB8IHN0cmluZz5bXSk6IHZvaWQge1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsdWUuZmlsdGVyKGkgPT4gaVsnY2hlY2tlZCddKS5tYXAoaSA9PiBpLnZhbHVlKTtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLmN1c3RvbUZvcm1hdGVPdXRGbihjaGVja2VkTGlzdCkpO1xuICB9XG5cbn1cbiIsIjxuei1jaGVja2JveC1ncm91cCBbbnpEaXNhYmxlZF09XCJuekRpc2FibGVkXCIgWyhuZ01vZGVsKV09XCJjaGVja09wdGlvbnNcIlxuICAobmdNb2RlbENoYW5nZSk9XCJlbWl0KGNoZWNrT3B0aW9ucylcIj5cbjwvbnotY2hlY2tib3gtZ3JvdXA+XG4iXX0=