---
category: component
title: 查询组件
subtitle: nzx-configurable-query
order: 3
label: new
---

通过配置项生成一个查询表单控件，支持自定义拓展

引入

```ts
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
```

使用

```html
  <div>例子1： 自定义拓展查询职业等级，更多使用方法请查看示例</div>

  <nzx-configurable-query [controls]="controls" (queryParamsChange)="queryParams=$event">
    <ng-template nzxControl="level" let-formControl>
      <nz-rate [formControl]="formControl" nzAllowHalf></nz-rate>
    </ng-template>
  </nzx-configurable-query>

  查询参数：
  <pre>
  {{queryParams|json}}
  </pre>

```
