import { TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export interface Options<T = any> {
  label: string;
  value: T;
}

export interface QueryControlOptions {
  controlName: string;
  controlType: 'input' | 'select' | 'datePicker' | 'rangePicker' | 'Template';
  label?: string;
  placeholder?: string;
  menuList?: Array<Options<any>>;
  nzxAllowClear?: boolean;
  nzxSpan?: number;
  nzxLSpan?: number;
  nzxRSpan?: number;
  errorTip?: string;
  collapse?: boolean;
  controlInstance?: AbstractControl;
  templateRef?: TemplateRef<unknown>;
}
