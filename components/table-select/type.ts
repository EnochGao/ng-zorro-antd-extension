import { TemplateRef } from '@angular/core';

export interface PageTableRequire {
  id: string | number;
  disabled?: boolean;
  [key: string]: any;
}

export interface TableSelectConfig<T = any> {
  label: string;
  key: string;
  /** data 一行数据*/
  format?: (data: T) => string | number;
  template?: TemplateRef<unknown>;
}
