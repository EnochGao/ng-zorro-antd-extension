---
category: Components
type: 组件
title: Blank Field
subtitle: nzx-blank-filed
cover: ''
description: 空表单控件，方便在 Angular 表单中自定义显示内容。
order: 5
---

空表单控件，方便 angular 表单中自定义显示

## 支持版本

<label type="success">v13.3.0+</label>

## 何时使用

### 引入

```ts
import { NzxBlankFieldModule } from "ng-zorro-antd-extension/blank-field";
```

### html

```html
<div [formGroup]="form">
  <nzx-blank-field formControlName="name">
    <ng-template let-data let-disabled="disabled">
      <p>data: {{ data }}</p>
      <p>disabled: {{ disabled }}</p>
    </ng-template>
  </nzx-blank-field>
</div>
```

### ts

```ts
  form: FormGroup = inject(FormBuilder).group({
    name: [{ value: 'EnochGao', disabled: true }],
  });
```
