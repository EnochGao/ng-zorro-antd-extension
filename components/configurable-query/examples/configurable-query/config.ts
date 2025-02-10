import { FormControl, Validators } from '@angular/forms';
import { NzxQueryControlOptions } from 'ng-zorro-antd-extension/configurable-query/type';

export const controls: Array<NzxQueryControlOptions> = [
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

export const controls2: Array<NzxQueryControlOptions> = [
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
  },
  {
    controlName: 'birthday',
    label: '出生日期',
    placeholder: '日期',
    controlType: 'datePicker',
  },
];

export const controls3: Array<NzxQueryControlOptions> = [
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
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

export const controls4: Array<NzxQueryControlOptions> = [
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
    nzxClass: 'test',
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

export const controls5: Array<NzxQueryControlOptions> = [
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
    default: 1,
  },
  {
    controlName: 'searchKey',
    placeholder: '搜索内容',
    nzxSpan: 9,
    nzxRSpan: 24,
    controlType: 'input',
  },
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
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

export const controls6: Array<NzxQueryControlOptions> = [
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
    default: 1,
  },
  {
    controlName: 'searchKey',
    placeholder: '搜索内容',
    nzxSpan: 9,
    nzxRSpan: 24,
    controlType: 'input',
  },
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
    collapse: true,
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
    collapse: true,
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

export const controls7: Array<NzxQueryControlOptions> = [
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
  },
  {
    controlName: 'city',
    label: '城市',
    placeholder: '城市',
    controlType: 'select',
    menuList: [
      { label: '青岛', value: '青岛' },
      { label: '潍坊', value: '潍坊' },
    ],
  },
  {
    controlName: 'gender',
    label: '性别',
    placeholder: '性别',
    controlType: 'select',
    menuList: [
      { label: '男', value: '男' },
      { label: '女', value: '女' },
    ],
  },
];

export const controls8: Array<NzxQueryControlOptions> = [
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
  },
  {
    controlName: 'city',
    label: '城市',
    placeholder: '城市',
    controlType: 'select',
    menuList: [
      { label: '青岛', value: '青岛' },
      { label: '潍坊', value: '潍坊' },
    ],
  },
];

export const controls9: Array<NzxQueryControlOptions> = [
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
  },
  {
    controlName: 'city',
    label: '城市',
    placeholder: '城市',
    controlType: 'select',
    menuList: [
      { label: '青岛', value: '青岛' },
      { label: '潍坊', value: '潍坊' },
    ],
  },
];

export const controls10: Array<NzxQueryControlOptions> = [
  {
    controlName: 'name',
    label: '姓名',
    placeholder: '姓名',
    controlType: 'input',
  },

  {
    controlName: 'birthday',
    label: '出生日期',
    placeholder: '日期',
    controlType: 'datePicker',
  },
];
