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
import { cloneDeep,xxxx.. } from "ng-zorro-antd-extension/util";

```

### ts

```typescript
class Demo {
  form: FormGroup = inject(FormBuilder).group({
    name: [{ value: "EnochGao", disabled: true }],
  });

  constructor() {
    validForm(form);
    console.log(cloneDeep({}));
  }
}
```

| 函数                | 说明                                                                     | 版本                                   |
| ------------------- | ------------------------------------------------------------------------ | -------------------------------------- |
| cloneDeep           | 深克隆                                                                   | -                                      |
| isArray             | 判断是否为数组                                                           | -                                      |
| isDate              | 判断是否为 Date                                                          | -                                      |
| isNumber            | 判断是否为 Number                                                        | -                                      |
| isEmpty             | 判断一个值是否为空，包括 undefined、null、空字符串、空数组、空对象等情况 | -                                      |
| isObject            | 判断是否为 Object                                                        | -                                      |
| isString            | 判断是否为 String                                                        | -                                      |
| toNumber            | 转换为数字                                                               | -                                      |
| toString            | 转换为字符串                                                             | -                                      |
| trimObject          | 去空对象                                                                 | -                                      |
| updateControlStatus | 更新表单控件状态                                                         | <label type="success">v15.5.0+</label> |
| selectFile          | 选择文件                                                                 | <label type="success">v15.5.0+</label> |
| downloadFile        | 下载文件                                                                 | <label type="success">v15.5.0+</label> |
