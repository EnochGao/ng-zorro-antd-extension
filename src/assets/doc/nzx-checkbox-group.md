# nzx-checkbox-group

自定义选择框,选择时传出的值为数组形式如：[1,2]

提供`customFormateInFn`和`customFormateOutFn`自定义函数转换出入参格式

```ts
// 引入
import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';
```

 html:

 ```html
<form [formGroup]="form">
  <nzx-checkbox-group [customFormateInFn]="inFn" [customFormateOutFn]="outFn"
    [checkOptions]="checkOptions" formControlName="value"></nzx-checkbox-group>
</form>

{{form.value|json}}
 ```

 ts:

 ```ts
class CheckboxGroupDemoComponent implements OnInit {
  checkOptions = [
    { label: '客户信赖', value: 1 },
    { label: '技术评估', value: 2 },
  ];
  form!: FormGroup;

  inFn = (v: number) => {
    if (v = 1) return [1];
    if (v = 2) return [2];
    if (v = 3) return [1, 2];
    return [];
  };
  outFn = (v: number[]) => v.reduce((pre, cur) => pre + cur, 0);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      value: [1, []] // 0：不选 1：客户信赖，2：技术评估 3：客户信赖+技术评估
    });
  }
}
 ```
