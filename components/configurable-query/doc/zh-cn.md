---
category: component
title: 查询组件
subtitle: nzx-configurable-query
order: 3
---

通过配置项生成一个查询表单控件，支持自定义拓展查询控件，使用NzxQueryConfigService支持全局配置查询控件

## 版本支持

<label type="success">v14.0.0+</label>

## 使用

### 引入

```ts
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
```

### html

```html
<!-- 
queryParamsChange最新版本区分出查询还是重置，注意甄别
(queryChange)="queryParams10 = $event"
(resetChange)="queryParams10 = $event"
-->
<div>例子1： 自定义拓展查询职业等级，更多使用方法请查看示例</div>

<nzx-configurable-query
  [controls]="controls"
  (queryParamsChange)="queryParams=$event"
>
  <ng-template nzxControl="level" let-formControl>
    <nz-rate [formControl]="formControl" nzAllowHalf></nz-rate>
  </ng-template>
</nzx-configurable-query>

查询参数：
<pre>
  {{queryParams|json}}
  </pre
>
```

### 使用介绍

<iframe src="//player.bilibili.com/player.html?aid=618298852&bvid=BV1kh4y1P738&cid=1261329121&p=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
