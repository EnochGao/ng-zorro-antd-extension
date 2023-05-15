---
category: directive
title: 查询连接器
subtitle: nzx-table-adaptor
order: 2
label: new
---

用来链接 nz-table 和查询组件，方便进行分页查询

## 支持版本

<label type="success">v15.2.0+</label>

## 基本使用

### 引入

```ts
import { NzxTableAdaptorModule } from "ng-zorro-antd-extension/table-adaptor";
```

### html

```html
<nzx-configurable-query
  #configQuery
  [nzxCollapse]="false"
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
另外可以继承`NzxPageTableBase`类，减少属性书写
```ts
export class NzxPageTableBase<T = any> {
  /** 列表数据 */
  list: Array<T> = [];
  /** loading加载条标志位 */
  loading = false;
  /** 分页总条数 */
  nzTotal = 0;

  /** 表单指令实例用来刷新重置 */
  @ViewChild(NzxTableAdaptor, { static: true })
  public nzxTableAdaptorRef!: NzxTableAdaptor;
}
```
详见示例Page Table Basic
### 内置属性

| 属性        | 类型                         | 默认值       | 说明         |
| ----------- | ---------------------------- | ------------ | ------------ |
| enableCache | boolean                      | false        | 缓存查询条件 |
| queryParams | `Partial<NzxTableQueryParams>` | {}           | 查询组件值   |
| dateFormat  | string                       | 'yyyy-MM-dd' | 日期格式化   |

### 内置方法

| 属性                     | 类型                | 默认值 | 说明                             |
| ------------------------ | ------------------- | ------ | -------------------------------- |
| nzxQueryParams           | NzxTableQueryParams | -      | 用来调接口查询                   |
| nzxQueryCacheQueryParams | NzxTableQueryParams | -      | 可选，用来设置查询祖甲氨参数回显 |
