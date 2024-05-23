/**
 * 通用下拉选项
 */
export interface NzxOptions<T = string> {
  label: string;
  value: T;
  [key: string]: any;
}
