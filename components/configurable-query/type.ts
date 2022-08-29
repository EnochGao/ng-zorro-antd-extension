import { TemplateRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Options } from 'ng-zorro-antd-extension/types/common';

/**
 * 查询参数
 */
export interface NzxQueryParams {
  [key: string]: any;
}

/**
 * 配置项
 */
export interface QueryControlOptions {
  /**
   * 控件名对应查询参数的key
   */
  controlName: string;
  /**
   * 控件类型
   */
  controlType: 'input' | 'select' | 'datePicker' | 'rangePicker' | 'Template';
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
  menuList?: Array<Options<any>>;
  /**
  * 控件为select时允许单独清空
  */
  nzxAllowClear?: boolean;
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
   * 是否要隐藏
   */
  collapse?: boolean;
  /**
   * 控件实例，可选
   */
  controlInstance?: AbstractControl;
  /**
   * 自定义模板
   */
  templateRef?: TemplateRef<unknown>;
}
