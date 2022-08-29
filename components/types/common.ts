/**
 * 通用下拉选项
 */
export interface Options<T = string> {
  label: string;
  value: T;
  [key: string]: any;
}
