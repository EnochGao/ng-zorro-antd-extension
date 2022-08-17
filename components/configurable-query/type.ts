import { TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';

export interface Options<T = any> {
  label: string;
  value: T;
}

export interface QueryControlOptions {
  controlName: string;
  label?: string;
  placeholder?: string;
  controlType: string | 'Template';
  menuList?: Array<Options<any>>;
  nzAllowClear?: boolean;
  nzSpan: number;
  nzLSpan?: number;
  nzRSpan?: number;
  controlInstance: AbstractControl;
  templateRef?: TemplateRef<unknown>;
}
