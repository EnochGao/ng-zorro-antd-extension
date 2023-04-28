---
category: directive
title: 查询连接器
subtitle: nzx-table-adaptor
order: 2
label: new
---

用来链接 table 和查询组件，方便进行分页查询

## 基本使用

### 版本

<label type="success">v15.2.0+</label>

### 引入

```ts
import { NzxTableAdaptorModule } from "ng-zorro-antd-extension/table-adaptor";
```

### html

```html
<input nz-input [(ngModel)]="value" nzxTrim />

<textarea rows="4" nz-input formControlName="value" nzxTrim trimType="trimEnd"></textarea>
```

### 内置属性

| 属性     | 类型                           | 默认值 |
| -------- | ------------------------------ | ------ |
| trimType | `trim \| trimStart \| trimEnd` | trim   |
