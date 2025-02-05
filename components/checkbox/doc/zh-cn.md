---
category: component
title: 多选框
subtitle: nzx-checkbox-group
order: 1
---

自定义选择框,选择时传出的值为数组形式如：[1,2]

提供`customFormateInFn`和`customFormateOutFn`自定义函数转换出入参格式

**注意(v19+):zorro19版本增加了`nzOptions`属性，解决了checkbox group使用不便的情况，请酌情使用此组件，现与zorro的不同之处仅仅是自定义函数转换**

## 版本支持

<label type="success">v13.0.0+</label>

## 使用

### 引入

```ts
import { NzxCheckboxModule } from 'ng-zorro-antd-extension/checkbox';
```

### html

```html
<form [formGroup]="form">
  <nzx-checkbox-group
    [customFormateInFn]="inFn"
    [customFormateOutFn]="outFn"
    [checkOptions]="checkOptions"
    formControlName="value"
  ></nzx-checkbox-group>
</form>
```

### ts

```ts
class CheckboxGroupDemoComponent implements OnInit {
  checkOptions = [
    { label: '客户信赖', value: 1 },
    { label: '技术评估', value: 2 },
  ];
  form!: FormGroup;

  inFn = (v: number) => {
    if (v === 1) return [1];
    if (v === 2) return [2];
    if (v === 3) return [1, 2];
    return [];
  };
  outFn = (v: number[]) => v.reduce((pre, cur) => pre + cur, 0);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      value: [1, []], // 0：不选 1：客户信赖，2：技术评估 3：客户信赖+技术评估
    });
  }
}
```

### 介绍使用

<iframe src="//player.bilibili.com/player.html?aid=233260069&bvid=BV1C8411B7s5&cid=1261660796&p=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
