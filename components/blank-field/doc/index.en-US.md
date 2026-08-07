---
category: Components
type: Component
title: Blank Field
subtitle: nzx-blank-filed
cover: ''
description: A blank form control that makes it easy to display custom content within Angular forms.
order: 5
---

A blank form control that makes it easy to display custom content within Angular forms.

## Support Version

<label type="success">v13.3.0+</label>

## When To Use

### Import

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
