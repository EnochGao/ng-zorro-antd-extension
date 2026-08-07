---
category: component
title: 打印
subtitle: nzx-print
order: 9
label: new
---

前端打印，注意：paged.js 主要兼容 Chromium 内核系列 pc 端浏览器

`NzxPrintModule`有三种打印：

- 一种是基于 vivliostyle 实现的`nzx-print-v`(也是推荐使用的)
- 一种是基于 paged.js 实现的`nzx-print`
- 另一种是作用到 button 按钮的`nzxPrint`普通打印。

在使用`nzx-print`时，推荐将`nzxPrintContent`包含的内容做成 dump 组件，只用来做纯展示，不包含业务逻辑。当 dump 组件的数据需要通过异步调用接口时，要使用`nzx-print`的`refresh`方法重新渲染。

## 版本支持

<label type="success">v15.13.0+</label>

<label type="success">v15.14.0+</label>(开始含有 nzx-print-v)

## 使用

### 引入

```ts
import { NzxPrintModule } from 'ng-zorro-antd-extension/print';
```

### html

```html
<div nz-row nzJustify="space-between" nzAlign="middle">
	<div nz-col>基于vivliostyle实现(支持分页，页眉页脚)</div>
	<div nz-col>
		<button nz-button nzType="primary" (click)="nzxPrintV.print()">
			下载打印评价表
		</button>
	</div>
</div>

<div nz-row nzJustify="center">
	<nzx-print-v
		#nzxPrintV
		[enablePreview]="true"
		printTitle="HUAWEI Mate 60 Pro评价表"
	>
		<div nzxPrintHeader>
			我是header不参与打印
			<button nz-button nzType="primary" (click)="nzxPrintV.refresh()">
				刷新
			</button>
		</div>
		<div nzxPrintContent [identifierStr]="'.mate-pro-header'">
			<nzx-good-evaluate-pdf-v></nzx-good-evaluate-pdf-v>
		</div>
	</nzx-print-v>
</div>

<div nz-row nzJustify="space-between" nzAlign="middle">
	<div nz-col>
		基于paged.js实现(目前bug比较多推荐使用vivliostyle，支持分页，页眉页脚)
	</div>
	<div nz-col>
		<button nz-button nzType="primary" (click)="nzxPrint.print()">
			下载打印评价表
		</button>
	</div>
</div>

<div nz-row nzJustify="center">
	<nzx-print
		#nzxPrint
		[enablePreview]="true"
		[identifierStr]="'.mate-pro-header'"
		[pagedCDN]="'https://unpkg.com/pagedjs/dist/paged.polyfill.js'"
		printTitle="HUAWEI Mate 60 Pro评价表"
	>
		<div nzxPrintHeader>
			我是header不参与打印
			<button nz-button nzType="primary" (click)="nzxPrint.refresh()">
				刷新
			</button>
		</div>
		<div nzxPrintContent>
			<nzx-good-evaluate-pdf></nzx-good-evaluate-pdf>
		</div>
	</nzx-print>
</div>

<div nz-row nzJustify="space-between" nzAlign="middle">
	<div nz-col>普通打印</div>
	<div nz-col>
		<button
			nz-button
			nzType="primary"
			nzxPrint
			[printEl]="printRef"
			printTitle="评价表"
		>
			下载打印评价表
		</button>
	</div>
</div>
<div nz-row nzJustify="center">
	<div #printRef>
		<nzx-good-evaluate-pdf></nzx-good-evaluate-pdf>
	</div>
</div>
```
