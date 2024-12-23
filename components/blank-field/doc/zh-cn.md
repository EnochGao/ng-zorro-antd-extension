---
category: component
title: 空表单控件
subtitle: nzx-blank-filed
order: 5
---

空表单控件，方便 angular 表单中自定义显示

## 版本支持

<label type="success">v13.3.0+</label>

## 使用

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
