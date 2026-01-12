import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NzxPipesModule } from 'ng-zorro-antd-extension/pipes';
import { NzxTableSelectModule } from 'ng-zorro-antd-extension/table-select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

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
  private cd = inject(ChangeDetectorRef);
  private fb = inject(FormBuilder);

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

  constructor() {
    this.settingForm = this.fb.group({
      disabled: false,

      mode: 'single',
    });
  }
}
