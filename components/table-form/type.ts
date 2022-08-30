import { TemplateRef } from "@angular/core";
import { Options } from "ng-zorro-antd-extension/types";

export interface LimitMessage {
  type: 'max' | 'min';
  limit: number;
  msg: string;
}

/**
 * nzx-table-form 配置项
 */
export interface TableFormConfig {
  /** 表头名 */
  header: string;
  /** td th 宽度 */
  width?: string;
  /** 控件名 */
  controlName: string;
  /** 控件默认值 */
  defaultValue?: any;
  /** 控件类型 */
  type?: 'input' | 'date' | 'select' | 'number' | 'radio' | 'textarea' | 'template';
  /** 控件校验 */
  validation?: Array<any>;
  /** 控件错误提示 */
  errorTip?: string;
  /** 控件为select时下拉选项 */
  options?: Array<Options<any>>;
  /** 控件模式 */
  controlMode?: 'readonly' | 'edit';
  /** 控件列是否在table中展示 */
  isShow?: boolean;
  /** placeholder */
  placeholder?: string;
  /** select时，是否允许清空 */
  allowClear?: boolean;
  /** th是否展示必填星号 */
  showRequiredTip?: boolean;
  /** 自定义模板，可不填 */
  templateRef?: TemplateRef<unknown>;
  /** 最大长度 */
  maxLength?: string | number;
  /** nz-input-number时max */
  max?: number;
  /** 自定义函数用来自定义展示 */
  format?: (value: any) => any;
}


export interface TableFormHeaderConfig {
  /** 表头名 */
  header: string;
  /** td th 宽度 */
  width?: string;
  /** 控件名 */
  controlName?: string;
  /** 控件列是否在table中展示 */
  isShow?: boolean;
  /** 自定义模板，可不填 */
  templateRef?: TemplateRef<unknown>;
  /** th是否展示必填星号 */
  showRequiredTip?: boolean;
}

export interface TableFormTdConfig {
  /** td th 宽度 */
  width?: string;
  /** 控件名 */
  controlName: string;
  /** 控件列是否在table中展示 */
  isShow?: boolean;
  /** 自定义模板，可不填 */
  templateRef?: TemplateRef<unknown>;
  /** th是否展示必填星号 */
  showRequiredTip?: boolean;
  /** 控件默认值 */
  defaultValue?: any;
  /** 控件类型 */
  type?: 'input' | 'date' | 'select' | 'number' | 'radio' | 'textarea' | 'template';
  /** 控件校验 */
  validation?: Array<any>;
  /** 控件错误提示 */
  errorTip?: string;
  /** 控件为select时下拉选项 */
  options?: Array<Options>;
  /** 控件模式 */
  controlMode?: 'readonly' | 'edit';
  /** placeholder */
  placeholder?: string;
  /** select时，是否允许清空 */
  allowClear?: boolean;
  /** 最大长度 */
  maxLength?: string | number;
  /** nz-input-number时max */
  max?: number;
  /** 自定义函数用来自定义展示 */
  format?: (value: any) => any;
}
