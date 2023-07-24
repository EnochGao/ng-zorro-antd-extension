---
category: component
title: 可编辑组件
subtitle: nzx-editable
order: 8
label: new
---

双击或者单击按钮，实现内容区域可编辑，默认类型统一（数字、字符串），
根据情况可选择使用 ng-zorro 中的 Typography

## 支持版本

<label type="success">v15.10.0+</label>

## 基本使用

### 引入

```ts
import { NzxEditableModule } from "ng-zorro-antd-extension/editable";
```

### html

```html
<span nzx-editable [(nzxContent)]="item.country" [nzxShowBtn]="false"></span>
```
