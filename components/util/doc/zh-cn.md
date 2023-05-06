---
category: util
title: 工具函数
subtitle: util
order: 1
label: new
---

常用工具函数，减少项目包体积

## 支持版本

<label type="success">v15.4.0+</label>

## 基本使用

### 引入

```typescript
import { cloneDeep, isArray, isDate, isNumber, isEmpty, isObject, isString, toNumber, toString, trimObject, validForm } from "ng-zorro-antd-extension/util";
```

### ts

```typescript
class demo {
  form: FormGroup = inject(FormBuilder).group({
    name: [{ value: "EnochGao", disabled: true }],
  });

  constructor() {
    validForm(form);
    console.log(cloneDeep({}));
  }
}
```
