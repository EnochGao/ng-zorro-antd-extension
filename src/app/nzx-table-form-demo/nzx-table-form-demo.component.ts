import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TableFormComponent } from 'ng-zorro-antd-extension/table-form/table-form.component';
import { LimitMessage, TableFormConfig } from 'ng-zorro-antd-extension/table-form/type';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-nzx-table-form-demo',
  templateUrl: './nzx-table-form-demo.component.html',
  styleUrls: ['./nzx-table-form-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxTableFormDemoComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;

  tableFormConfig: TableFormConfig[] = [
    {
      header: '姓名',
      controlName: 'name',
      showRequiredTip: true,
      placeholder: '请输入姓名不超过10个字',
      maxLength: 10,
      type: 'input',
      validation: [Validators.required],
      errorTip: '必填,最多不超过10个字',
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
    {
      header: '地址',
      controlName: 'address',
      type: 'select',
      options: [
        { label: '青岛', value: '青岛' },
      ],
      validation: [Validators.required],
      errorTip: '必填',
    },
    {
      header: '小星星（自定义控件）',
      controlName: 'stars',
      type: 'template',
      validation: [Validators.required],
      errorTip: '必填',
    },
    {
      header: '班级（readonly模式）',
      controlName: 'class',
      controlMode: 'readonly',
      defaultValue: 1,
      format: (value) => `${value}班`
    },
  ];
  tableFormConfig2: TableFormConfig[] = [
    {
      header: '姓名',
      controlName: 'name',
      controlMode: 'readonly'
    },

    {
      header: '年龄',
      controlName: 'age',
      controlMode: 'readonly'
    },
    {
      header: '性别',
      controlName: 'gender',
      controlMode: 'readonly',
      format: (value) => `${value === 1 ? '男' : '女'}`
    },
    {
      header: '地址',
      controlName: 'address',
      controlMode: 'readonly',
    },
    {
      header: '小星星（自定义控件）',
      controlName: 'stars',
      controlMode: 'readonly',
    },
    {
      header: '班级',
      controlName: 'class',
      controlMode: 'readonly',
      format: (value) => `${value}班`
    },
    {
      header: 'id不在列表中展示',
      controlName: 'id',
      controlMode: 'readonly',
      isShow: false
    },
  ];

  students: any[] = [];
  loading = false;

  @ViewChild('table') private table1!: TableFormComponent;

  constructor(
    private fb: FormBuilder,
    private logger: NzMessageService,
    private cd: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      students: [[], []]
    });

    this.form2 = this.fb.group({
      students: [[], []]
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(res => {
      // console.log('value::', res);

    });
  };

  lazyLoad() {
    const list = [
      { label: '青岛', value: '青岛' },
      { label: '潍坊', value: '潍坊' },
      { label: '烟台', value: '烟台' },
    ];
    this.loading = true;

    setTimeout(() => {
      // or:
      // this.tableFormConfig[3].options = list;
      // this.table1.updateTableConfig()

      this.table1.setConfig('address', { options: list });

      this.loading = false;
      this.cd.markForCheck();
    }, 3000);
  }

  errorMsg(message: LimitMessage) {
    if (message.type === 'max') {
      this.logger.warning(message.msg);
    }
  }

  submit() {
    const students = this.form.value.students as any[];
    this.students = students.map((item: any, index: number) => {
      return {
        ...item,
        id: index + 1
      };
    });

    console.log(this.students);
  }

  customValidate = (control: AbstractControl) => {
    const valueList: Array<{ name: string; }> = control.value;
    const index = valueList.length - 1;
    let lastItem = index > -1 ? valueList[index] : null;
    const flag = valueList.some((item, i) => {
      if (i !== index) {
        return item.name === lastItem?.name;
      }
      return false;
    });

    if (flag) {
      return { tableError: '姓名不能重复' };
    }
    return null;
  };

}
