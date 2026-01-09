/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  inject,
  TemplateRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface Context {
  disabled: boolean;
  $implicit: any;
}
@Component({
  selector: 'nzx-blank-field',
  template: `
    <ng-container
      *ngTemplateOutlet="templateRefExp; context: contextExp"
    ></ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzxBlankFieldComponent),
      multi: true,
    },
  ],
})
export class NzxBlankFieldComponent implements ControlValueAccessor {
  private cd = inject(ChangeDetectorRef);

  contextExp: Context = {
    disabled: false,
    $implicit: null,
  } as Context;

  @ContentChild(TemplateRef) templateRefExp!: TemplateRef<Context>;

  private propagateChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {
    this.contextExp.disabled = isDisabled;
    this.cd.markForCheck();
  }

  writeValue(obj: any): void {
    this.contextExp.$implicit = obj;
    this.cd.markForCheck();
  }
}
