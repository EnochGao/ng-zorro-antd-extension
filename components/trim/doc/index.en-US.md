---
category: Components
type: Directive
title: Trim
subtitle: nzx-trim
cover: ''
description: A trim directive that automatically removes leading and trailing spaces from form input boxes.
order: 1
---

A trim directive that automatically removes leading and trailing spaces from form input boxes.

## Support Version

<label type="success">v15.2.0+</label>

## When To Use

### Import

```ts
import { NzxTrimModule } from "ng-zorro-antd-extension/trim";
```

### html

```html
<input nz-input [(ngModel)]="value" nzxTrim />

<textarea rows="4" nz-input formControlName="value" nzxTrim trimType="trimEnd"></textarea>
```

### Built-in Properties

| Property  | Type                           | Default Value |
| --------- | ------------------------------ | ------------- |
| trimType  | `trim \| trimStart \| trimEnd` | trim          |

### Introduction

<iframe src="//player.bilibili.com/player.html?aid=490987696&bvid=BV15N411W7wW&cid=1265460065&p=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
