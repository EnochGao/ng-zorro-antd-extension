---
category: component
title: 七巧板
subtitle: nzx-jigsaw
order: 7
label: new
---

七巧板拼图

## 支持版本

<label type="success">v15.9.0</label>

## 基本使用

### 引入

```ts
import { NzxJigsawModule } from "ng-zorro-antd-extension/jigsaw";
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
