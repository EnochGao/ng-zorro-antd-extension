---
category: Components
type: Component
title: Checkbox
subtitle: nzx-checkbox-group
cover: ''
description: Custom checkbox group that emits an array value (e.g. [1,2]), with custom in/out format functions.
order: 1
---

A custom checkbox group that emits values as an array, e.g. `[1,2]`.

Provides `customFormateInFn` and `customFormateOutFn` to transform the in/out parameter formats.

**Note (v19+):** zorro v19 added the `nzOptions` property which solves the inconvenience of the checkbox group. Please use it as appropriate. The only difference from zorro now is the custom in/out format functions.

## Support Version

<label type="success">v13.0.0+</label>

## When To Use

### Import

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
    { label: 'Customer Trust', value: 1 },
    { label: 'Tech Evaluation', value: 2 },
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
      value: [1, []], // 0: none 1: Customer Trust 2: Tech Evaluation 3: both
    });
  }
}
```

### Introduction

<iframe src="//player.bilibili.com/player.html?aid=233260069&bvid=BV1C8411B7s5&cid=1261660796&p=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
