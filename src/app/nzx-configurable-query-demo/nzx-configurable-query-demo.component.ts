import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { QueryControlOptions } from 'ng-zorro-antd-extension/configurable-query/type';

@Component({
  selector: 'app-nzx-configurable-query-demo',
  templateUrl: './nzx-configurable-query-demo.component.html',
  styleUrls: ['./nzx-configurable-query-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxConfigurableQueryDemoComponent implements OnInit {

  controls: Array<QueryControlOptions> = [
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input',
      controlInstance: new FormControl(null, [Validators.required]),
      errorTip: '假设必填'
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
      nzxAllowClear: true
    },
    {
      controlName: 'birthday',
      label: '出生日期',
      placeholder: '日期',
      controlType: 'datePicker',
      collapse: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log();

  }

}
