---
category: Components
type: Component
title: Configurable Query
subtitle: nzx-configurable-query
cover: ''
description: Generate a query form control via config items, supporting custom extended query controls and global configuration via NzxQueryConfigService.
order: 3
---

Generates a query form control via config items, supports custom extended query controls, and supports global configuration of query controls via `NzxQueryConfigService`.

## Support Version

<label type="success">v14.0.0+</label>

## When To Use

### Import

```ts
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
```

### html

```html
<!-- 
queryParamsChange distinguishes query vs reset in the latest version. Note the difference.
(queryChange)="queryParams10 = $event"
(resetChange)="queryParams10 = $event"
-->
<div>Example 1: Custom extended query control for "profession level". See examples for more usage.</div>

<nzx-configurable-query
  [controls]="controls"
  (queryParamsChange)="queryParams=$event"
>
  <ng-template nzxControl="level" let-formControl>
    <nz-rate [formControl]="formControl" nzAllowHalf></nz-rate>
  </ng-template>
</nzx-configurable-query>

Query params:
<pre>
  {{queryParams|json}}
  </pre
>
```

### Introduction

<iframe src="//player.bilibili.com/player.html?aid=618298852&bvid=BV1kh4y1P738&cid=1261329121&p=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
