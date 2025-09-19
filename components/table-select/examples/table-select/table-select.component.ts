import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

import { NzxTableFormComponent } from 'ng-zorro-antd-extension/table-form';
import {
  NzxLimitMessage,
  NzxTableFormConfig,
} from 'ng-zorro-antd-extension/table-form/type';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxPipesModule } from 'ng-zorro-antd-extension/pipes';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzxTableFormModule } from 'ng-zorro-antd-extension/table-form';
import { NzxTableSelectModule } from 'ng-zorro-antd-extension/table-select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nzx-table-select-demo',
  templateUrl: './table-select.component.html',
  styleUrls: ['./table-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzxPipesModule,
    NzRateModule,
    NzSwitchModule,
    NzRadioModule,
    NzCardModule,
    NzxTableSelectModule,
  ],
})
export class NzxTableSelectExampleComponent {
  settingForm: FormGroup;
  listOfSwitch = [{ name: 'Disable', formControlName: 'disabled' }];
  listOfRadio = [
    {
      name: 'Mode',
      formControlName: 'mode',
      listOfOption: [
        { value: 'single', label: '单选' },
        { value: 'multiple', label: '多选' },
      ],
    },
  ];

  selected = [];
  tableConfig = [
    { label: '姓名', key: 'name' },
    { label: '年龄', key: 'age' },
    {
      label: '班级',
      key: 'class',
      format: (data: any) => {
        return `${data.class}班`;
      },
    },
    { label: 'stars', key: 'stars' },
  ];

  list = [
    { id: 1, name: '张三', age: 18, class: 1, stars: 1 },
    { id: 2, name: '李四', age: 19, class: 3, stars: 2 },
    { id: 3, name: 'enochgao', age: 20, class: 2, stars: 3 },
    { id: 4, name: 'enochgao', age: 20, class: 2, stars: 4 },
    { id: 5, name: 'enochgao', age: 20, class: 2, stars: 5 },
    { id: 6, name: 'enochgao', age: 20, class: 2, stars: 1 },
    { id: 7, name: 'enochgao', age: 20, class: 2, stars: 2 },
    { id: 8, name: 'enochgao', age: 20, class: 2, stars: 3 },
    { id: 9, name: 'enochgao', age: 20, class: 2, stars: 4 },
    { id: 10, name: 'enochgao', age: 20, class: 2, stars: 5 },
    { id: 11, name: 'enochgao', age: 20, class: 2, stars: 1 },
  ];

  constructor(private cd: ChangeDetectorRef, private fb: FormBuilder) {
    this.settingForm = this.fb.group({
      disabled: false,

      mode: 'single',
    });
  }
}
