import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {
  NzxConfigurableQueryModule,
  NzxQueryControlOptions,
  NzxQueryParams,
} from 'ng-zorro-antd-extension/configurable-query';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzRateComponent } from 'ng-zorro-antd/rate';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    NzxConfigurableQueryModule,
    NzButtonComponent,
    NzRateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  queryParams: NzxQueryParams = {};
  controls: Array<NzxQueryControlOptions> = [
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input',
      controlInstance: new FormControl(null, [Validators.required]),
      errorTip: '必填',
    },
    {
      label: '占位',
    },
    {
      controlName: 'gender',
      label: '性别',
      placeholder: '请选择',
      controlType: 'select',
      menuList: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
      nzxAllowClear: true,
    },
    {
      controlName: 'birthday',
      label: '出生日期',
      placeholder: '日期',
      controlType: 'datePicker',
      collapse: true,
    },
    {
      controlName: 'level',
      label: '职业等级',
      controlType: 'Template',
      collapse: true,
    },
  ];
}
