---
category: component
title: 打印
subtitle: nzx-print
order: 9
label: new
---

前端打印，注意：paged.js 主要兼容 Chromium 内核系列 pc 端浏览器

## 支持版本

<label type="success">^15.13.0</label>

## 基本使用

### 引入

```ts
import { NzxPrintModule } from "ng-zorro-antd-extension/print";
```

### html

```html
<div nz-row nzJustify="space-between" nzAlign="middle">
  <div nz-col>普通打印</div>
  <div nz-col>
    <button nz-button nzType="primary" nzxPrint [printEl]="printRef">下载打印评价表</button>
  </div>
  <div nz-row nzJustify="center">
    <div #printRef>
      <nzx-good-evaluate-pdf></nzx-good-evaluate-pdf>
    </div>
  </div>
</div>

<nzx-print [enablePreview]="true" #nzxPrint printTitle="HUAWEI Mate 60 Pro评价表">
  <div nzxPrintContent>
    <nzx-good-evaluate-pdf></nzx-good-evaluate-pdf>
  </div>
</nzx-print>
```

`NzxPrintModule`有两种打印：

- 一种是基于 paged.js 实现的`nzx-print`(也是推荐使用的)
- 另一种是作用到 button 按钮的`nzxPrint`普通打印。

在使用`nzx-print`时，推荐将`nzxPrintContent`包含的内容做成 dump 组件，只用来做纯展示，不包含业务逻辑。当 dump 组件的数据需要通过异步调用接口时，要使用`nzx-print`的`refresh`方法重新渲染。
