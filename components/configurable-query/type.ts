import { TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NzxOptions } from 'ng-zorro-antd-extension/types';
import { NzxAbstractControl } from './controls/abstract.control';

/**
 * 查询参数
 */
export interface NzxQueryParams {
  [key: string]: any;
}

type ControlType =
  | 'input'
  | 'select'
  | 'datePicker'
  | 'rangePicker'
  | 'Template'
  | string;

/**
 * 配置项
 */
export interface NzxQueryControlOptions {
  /**
   * 控件名对应查询参数的key
   */
  controlName: string;
  /**
   * 控件类型
   */
  controlType: ControlType;

  /**
   * 查询框label
   */
  label?: string;
  /**
   * 查询框placeholder
   */
  placeholder?: string;
  /**
   * 控件为select时下拉集合
   */
  menuList?: Array<NzxOptions<any>>;
  /**
   * 控件为select时允许单独清空
   */
  nzxAllowClear?: boolean;
  /**
   * 控件为select时允许前端搜索
   */
  nzxShowSearch?: boolean;
  /**
   * 查询项所占栅格数
   */
  nzxSpan?: number;
  /**
   * 控件默认值，注意默认值重置时不会清空
   */
  default?: any;
  /**
   * 查询项label所占栅格数
   */
  nzxLSpan?: number;
  /**
   * 查询项控件所占栅格数
   */
  nzxRSpan?: number;
  /**
   * 校验错误提示
   */
  errorTip?: string;
  /**
   * 是否要折叠（nzxCollapse必须为true才生效）
   */
  collapse?: boolean;
  /**
   * 隐藏控件(主要用来携带查询参数但界面不可见)
   */
  hidden?: boolean;
  /**
   * 控件实例，可选
   */
  controlInstance?: AbstractControl;
  /**
   * 自定义模板
   */
  templateRef?: TemplateRef<unknown>;

  [key: string]: any;
}

export interface NzxQueryControlType {
  key: string;
  component: typeof NzxAbstractControl;
}

export interface NzxQueryConfig {
  controlTypes: NzxQueryControlType[];
}
