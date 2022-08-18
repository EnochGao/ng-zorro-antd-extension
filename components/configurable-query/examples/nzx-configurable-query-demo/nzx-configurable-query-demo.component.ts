import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NzxQueryParams, QueryControlOptions } from 'ng-zorro-antd-extension/configurable-query/type';

@Component({
  selector: 'app-nzx-configurable-query-demo',
  templateUrl: './nzx-configurable-query-demo.component.html',
  styleUrls: ['./nzx-configurable-query-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxConfigurableQueryDemoComponent implements OnInit {

  queryParams: NzxQueryParams = {};

  controls: Array<QueryControlOptions> = [
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input'
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
      controlInstance: new FormControl(1, [Validators.required]),
      errorTip: '假设必填默认',
      nzxAllowClear: true
    },
    {
      controlName: 'birthday',
      label: '出生日期',
      placeholder: '日期',
      controlType: 'datePicker',
      collapse: true
    },
    {
      controlName: 'level',
      label: '职业等级',
      controlType: 'Template',
      collapse: true
    }
  ];
  queryParams2: NzxQueryParams = {};

  controls2: Array<QueryControlOptions> = [
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input'
    },
    {
      controlName: 'birthday',
      label: '出生日期',
      placeholder: '日期',
      controlType: 'datePicker',
    }
  ];
  queryParams3: NzxQueryParams = {};

  controls3: Array<QueryControlOptions> = [
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input'
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
      controlInstance: new FormControl(1, [Validators.required]),
      errorTip: '假设必填默认',
      nzxAllowClear: true
    },
    {
      controlName: 'birthday',
      label: '出生日期',
      placeholder: '日期',
      controlType: 'datePicker',
      collapse: true
    },
    {
      controlName: 'level',
      label: '职业等级',
      controlType: 'Template',
      collapse: true
    }

  ];
  queryParams4: NzxQueryParams = {};

  controls4: Array<QueryControlOptions> = [
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input'
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
      controlInstance: new FormControl(1, [Validators.required]),
      errorTip: '假设必填默认',
      nzxAllowClear: true
    },
    {
      controlName: 'birthday',
      label: '出生日期',
      placeholder: '日期',
      controlType: 'datePicker',
      collapse: true
    },
    {
      controlName: 'level',
      label: '职业等级',
      controlType: 'Template',
      collapse: true
    }

  ];
  queryParams5: NzxQueryParams = {};

  controls5: Array<QueryControlOptions> = [
    {
      controlName: 'searchType',
      placeholder: '请选择',
      nzxSpan: 3,
      nzxRSpan: 24,
      controlType: 'select',
      menuList: [
        { label: '班级', value: 1 },
        { label: '姓名', value: 2 },
      ],
      default: 1
    },
    {
      controlName: 'searchKey',
      placeholder: '搜索内容',
      nzxSpan: 9,
      nzxRSpan: 24,
      controlType: 'input'
    },
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input'
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
      controlInstance: new FormControl(1, [Validators.required]),
      errorTip: '假设必填默认',
      nzxAllowClear: true
    },
    {
      controlName: 'birthday',
      label: '出生日期',
      placeholder: '日期',
      controlType: 'datePicker',
      collapse: true
    },
    {
      controlName: 'level',
      label: '职业等级',
      controlType: 'Template',
      collapse: true
    }

  ];
  queryParams6: NzxQueryParams = {};

  controls6: Array<QueryControlOptions> = [
    {
      controlName: 'searchType',
      placeholder: '请选择',
      nzxSpan: 3,
      nzxRSpan: 24,
      controlType: 'select',
      menuList: [
        { label: '班级', value: 1 },
        { label: '姓名', value: 2 },
      ],
      default: 1
    },
    {
      controlName: 'searchKey',
      placeholder: '搜索内容',
      nzxSpan: 9,
      nzxRSpan: 24,
      controlType: 'input'
    },
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input',
      collapse: true

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
      controlInstance: new FormControl(1, [Validators.required]),
      errorTip: '假设必填默认',
      nzxAllowClear: true,
      collapse: true

    },
    {
      controlName: 'birthday',
      label: '出生日期',
      placeholder: '日期',
      controlType: 'datePicker',
      collapse: true
    },
    {
      controlName: 'level',
      label: '职业等级',
      controlType: 'Template',
      collapse: true
    }

  ];

  queryParams7: NzxQueryParams = {};

  controls7: Array<QueryControlOptions> = [
    {
      controlName: 'name',
      label: '姓名',
      placeholder: '姓名',
      controlType: 'input'
    },
    {
      controlName: 'city',
      label: '城市',
      placeholder: '城市',
      controlType: 'select',
      menuList: [
        { label: '班级', value: 1 },
        { label: '姓名', value: 2 },
      ],
    },
  ];


  cityList = [
    { label: '青岛', value: '青岛' },
    { label: '潍坊', value: '潍坊' },
    { label: '烟台', value: '烟台' },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log();

    setTimeout(() => {
      this.controls7[1].menuList = this.cityList;
    }, 3000);
  }

}
