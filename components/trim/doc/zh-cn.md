---
category: directive
title: 去空格
subtitle: nzx-trim
order: 1
---

去空格指令，用来自动去除表单输入框中的前后空格

## 支持版本

<label type="success">v15.2.0+</label>

## 基本使用

### 引入

```ts
import { NzxTrimModule } from "ng-zorro-antd-extension/trim";
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
