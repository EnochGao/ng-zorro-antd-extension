---
category: component
title: 七巧板
subtitle: nzx-jigsaw
order: 7
---

纯前端实现七巧板拼图

## 支持版本

<label type="success">v15.9.0</label>

## 基本使用

### 引入

```ts
import { NzxJigsawModule } from "ng-zorro-antd-extension/jigsaw";
```

### html

```html
<nzx-jigsaw (nzxOnFail)="fail()" (nzxOnRefresh)="refresh()" (nzxOnSuccess)="success()"></nzx-jigsaw>
```

### 内置属性

| 属性           | 类型                    | 默认值               |
| -------------- | ----------------------- | -------------------- |
| width          | 'number'                | `310`                |
| height         | 'number'                | `155`                |
| nzxLoadingText | `string`                | `'加载中...'`        |
| nzxTipText     | `string`                | `'向右滑动填充拼图'` |
| nzxBgImgUrl   | `string`\|\| `string[]` | `''`                 |

### 内置事件

| 事件         | 类型                 | 默认值 |
| ------------ | -------------------- | ------ |
| nzxOnRefresh | `EventEmitter<void>` | -      |
| nzxOnSuccess | `EventEmitter<void>` | -      |
| nzxOnFail    | `EventEmitter<void>` | -      |
