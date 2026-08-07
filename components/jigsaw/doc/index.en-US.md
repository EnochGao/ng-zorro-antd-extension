---
category: Components
type: Component
title: Jigsaw
subtitle: nzx-jigsaw
cover: ''
description: A pure front-end jigsaw puzzle slider verification component.
order: 7
---

A pure front-end jigsaw puzzle slider verification component.

## Support Version

<label type="success">v15.9.0+</label>

## When To Use

### Import

```ts
import { NzxJigsawModule } from "ng-zorro-antd-extension/jigsaw";
```

### html

```html
<nzx-jigsaw (nzxOnFail)="fail()" (nzxOnRefresh)="refresh()" (nzxOnSuccess)="success()"></nzx-jigsaw>
```

### Built-in Properties

| Property       | Type                   | Default Value       |
| -------------- | ---------------------- | ------------------- |
| width          | number                 | `310`               |
| height         | number                 | `155`               |
| nzxLoadingText | `string`               | `'Loading...'`      |
| nzxTipText     | `string`               | `'Slide right to fill the puzzle'` |
| nzxBgImgUrl    | `string` \| `string[]` | `''`                |

### Built-in Events

| Event       | Type                 | Default Value |
| ----------- | -------------------- | ------------- |
| nzxOnRefresh | `EventEmitter<void>` | -             |
| nzxOnSuccess | `EventEmitter<void>` | -             |
| nzxOnFail    | `EventEmitter<void>` | -             |
