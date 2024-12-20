import { Inject, InjectionToken, Optional } from '@angular/core';
import { NzxQueryConfig, NzxQueryControlType } from './type';

export const QUERY_CONFIG = new InjectionToken<NzxQueryControlType[]>(
  'QUERY_CONFIG'
);

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NzxDatePickerControlComponent } from './controls/date-picker.control';
import { NzxInputControlComponent } from './controls/input.control';
import { NzxRangePickerControlComponent } from './controls/range-picker.control';
import { NzxSelectControlComponent } from './controls/select.control';
import { NzxTemplateControlComponent } from './controls/template.control';

/**
 * 用来动态添加control type类型控件
 */
@Injectable({ providedIn: 'root' })
export class NzxQueryConfigService {
  private controlTypePoll: NzxQueryControlType[] = [
    { key: 'input', component: NzxInputControlComponent },
    { key: 'select', component: NzxSelectControlComponent },
    { key: 'Template', component: NzxTemplateControlComponent },
    { key: 'datePicker', component: NzxDatePickerControlComponent },
    { key: 'rangePicker', component: NzxRangePickerControlComponent },
  ];

  controlTypes$ = new BehaviorSubject<NzxQueryControlType[]>(
    this.controlTypePoll
  );

  constructor(
    @Optional()
    @Inject(QUERY_CONFIG)
    nzxQueryConfig: NzxQueryConfig
  ) {
    if (nzxQueryConfig) {
      if (
        nzxQueryConfig.controlTypes &&
        nzxQueryConfig.controlTypes.length > 0
      ) {
        nzxQueryConfig.controlTypes.forEach((i) => {
          this.addControlType(i);
        });
        this.refreshControlType();
      }
    }
  }

  /** 添加controlType 类型控件 */
  addControlType(controlType: NzxQueryControlType) {
    const find = this.controlTypePoll.some((i) => i.key === controlType.key);
    if (find) {
      throw `ControlType:: ${controlType.key} already exists !`;
    }
    this.controlTypePoll.push(controlType);
  }

  /** 删除controlType 类型控件 */
  removeControlType(key: string) {
    const find = this.controlTypePoll.some((i) => i.key === key);
    if (find) {
      this.controlTypePoll = this.controlTypePoll.filter((i) => i.key !== key);
    } else {
      throw `ControlType:: ${key} not exists !`;
    }
  }

  /** 刷新 */
  refreshControlType() {
    this.controlTypes$.next(this.controlTypePoll);
  }
}
