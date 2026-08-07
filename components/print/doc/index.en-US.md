---
category: Components
type: Component
title: Print
subtitle: nzx-print
cover: ''
description: Front-end printing component. Based on vivliostyle and paged.js for paginated printing, plus a plain button print.
order: 9
label: new
---

Front-end printing. Note: paged.js is mainly compatible with Chromium-based PC browsers.

`NzxPrintModule` provides three kinds of printing:

- `nzx-print-v` based on vivliostyle (recommended)
- `nzx-print` based on paged.js
- `nzxPrint` plain print applied to a button

When using `nzx-print`, it is recommended to make the content wrapped by `nzxPrintContent` a dump component used only for display without business logic. When the dump component's data needs to be loaded asynchronously, use the `refresh` method of `nzx-print` to re-render.

## Support Version

<label type="success">v15.13.0+</label>

<label type="success">v15.14.0+</label> (nzx-print-v added)

## When To Use

### Import

```ts
import { NzxPrintModule } from 'ng-zorro-antd-extension/print';
```

### html

```html
<div nz-row nzJustify="space-between" nzAlign="middle">
	<div nz-col>Based on vivliostyle (supports pagination, header and footer)</div>
	<div nz-col>
		<button nz-button nzType="primary" (click)="nzxPrintV.print()">
			Download Print Evaluation Form
		</button>
	</div>
</div>

<div nz-row nzJustify="center">
	<nzx-print-v
		#nzxPrintV
		[enablePreview]="true"
		printTitle="HUAWEI Mate 60 Pro Evaluation Form"
	>
		<div nzxPrintHeader>
			I am header, not included in print
			<button nz-button nzType="primary" (click)="nzxPrintV.refresh()">
				Refresh
			</button>
		</div>
		<div nzxPrintContent [identifierStr]="'.mate-pro-header'">
			<nzx-good-evaluate-pdf-v></nzx-good-evaluate-pdf-v>
		</div>
	</nzx-print-v>
</div>

<div nz-row nzJustify="space-between" nzAlign="middle">
	<div nz-col>
		Based on paged.js (more bugs currently, recommend vivliostyle; supports pagination, header and footer)
	</div>
	<div nz-col>
		<button nz-button nzType="primary" (click)="nzxPrint.print()">
			Download Print Evaluation Form
		</button>
	</div>
</div>

<div nz-row nzJustify="center">
	<nzx-print
		#nzxPrint
		[enablePreview]="true"
		[identifierStr]="'.mate-pro-header'"
		[pagedCDN]="'https://unpkg.com/pagedjs/dist/paged.polyfill.js'"
		printTitle="HUAWEI Mate 60 Pro Evaluation Form"
	>
		<div nzxPrintHeader>
			I am header, not included in print
			<button nz-button nzType="primary" (click)="nzxPrint.refresh()">
				Refresh
			</button>
		</div>
		<div nzxPrintContent>
			<nzx-good-evaluate-pdf></nzx-good-evaluate-pdf>
		</div>
	</nzx-print>
</div>

<div nz-row nzJustify="space-between" nzAlign="middle">
	<div nz-col>Plain Print</div>
	<div nz-col>
		<button
			nz-button
			nzType="primary"
			nzxPrint
			[printEl]="printRef"
			printTitle="Evaluation Form"
		>
			Download Print Evaluation Form
		</button>
	</div>
</div>
<div nz-row nzJustify="center">
	<div #printRef>
		<nzx-good-evaluate-pdf></nzx-good-evaluate-pdf>
	</div>
</div>
```
