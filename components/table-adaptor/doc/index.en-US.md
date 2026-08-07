---
category: Components
type: Directive
title: Table Adaptor
subtitle: nzx-table-adaptor
cover: ''
description: Connects nz-table with the query component to facilitate paginated queries.
order: 2
---

Used to link `nz-table` and the query component to facilitate paginated queries.

## Support Version

<label type="success">v15.2.0+</label>

## When To Use

### Import

```ts
import { NzxTableAdaptorModule } from "ng-zorro-antd-extension/table-adaptor";
```

### html

```html
<nzx-configurable-query
  #configQuery
  [controls]="controls"
  (queryChange)="adaptor.refresh()"
  (resetChange)="adaptor.reset()"
>
</nzx-configurable-query>

<nz-table
  nzxTableAdaptor
  #adaptor="NzxTableAdaptor"
  [enableCache]="true"
  [queryParams]="configQuery.queryParams"
  (nzxQueryParams)="loadData($event)"
  (nzxQueryCacheQueryParams)="configQuery.setQueryParams($event)"
  #nzTable
  [nzData]="list"
  [nzLoading]="loading"
  [nzTotal]="total"
>
</nz-table>
```

You can also extend the `NzxPageTableBase` class to reduce property boilerplate:

```ts
export class NzxPageTableBase<T = any> {
  /** list data */
  list: Array<T> = [];
  /** loading flag */
  loading = false;
  /** total count for pagination */
  nzTotal = 0;

  /** form directive instance for refresh/reset */
  @ViewChild(NzxTableAdaptor, { static: true })
  public nzxTableAdaptorRef!: NzxTableAdaptor;
}
```

See example "Page Table Basic" for details.

### Built-in Properties

| Property     | Type                         | Default Value | Description        |
| ------------ | ---------------------------- | ------------- | ------------------ |
| enableCache  | boolean                      | false         | cache query params |
| queryParams  | `Partial<NzxTableQueryParams>` | {}         | query component value |
| dateFormat   | string                       | 'yyyy-MM-dd'  | date format        |

### Built-in Methods

| Property               | Type                | Default Value | Description                                  |
| ---------------------- | ------------------- | ------------- | -------------------------------------------- |
| nzxQueryParams         | NzxTableQueryParams | -             | used to call the API for querying            |
| nzxQueryCacheQueryParams | NzxTableQueryParams | -          | optional, used to set query params for echo  |
