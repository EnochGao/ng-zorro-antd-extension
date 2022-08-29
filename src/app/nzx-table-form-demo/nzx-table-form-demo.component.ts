import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableFormConfig } from 'ng-zorro-antd-extension/table-form/type';

@Component({
  selector: 'app-nzx-table-form-demo',
  templateUrl: './nzx-table-form-demo.component.html',
  styleUrls: ['./nzx-table-form-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxTableFormDemoComponent implements OnInit {
  form: FormGroup;

  tableFormConfig: TableFormConfig[] = [
    {
      header: '名字',
      controlName: 'name',
      type: 'input',
      validation: [Validators.required],
      errorTip: '必填',
    },
    {
      header: '年龄',
      controlName: 'age',
      defaultValue: 18,
      type: 'number',
      validation: [Validators.required],
      errorTip: '必填',
    },
    {
      header: '性别',
      controlName: 'gender',
      type: 'radio',
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
      defaultValue: 1,
      validation: [Validators.required],
      errorTip: '必填',
    },
  ];

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      students: [[], []]
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(res => {
      console.log('value::', res);

    });
  }

  submit() {

  }

}
