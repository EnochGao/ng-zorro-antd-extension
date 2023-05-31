import { TemplateRef } from '@angular/core';

export interface PageTableRequire {
  id: string | number;
  disabled?: boolean;
  [key: string]: any;
}

export type TableSelectMode = 'single' | 'multiple';

export interface TableSelectConfig<T = any> {
  label: string;
  key: string;
  /** data 一行数据*/
  format?: (data: T) => string | number;
  template?: TemplateRef<unknown>;
}
