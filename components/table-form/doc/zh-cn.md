---
category: component
title: 表格表单
subtitle: nzx-table-form
order: 4
label: new
---

表格表单。整个table为一个表单控件，适合当填写的表单为一个list集合的情况。

它输出的值为数组对象，形如：`[{},{}]`，组件内部实际每一行为一个`formGroup`，也可以用来做展示。

具体使用详情查看右侧示例。

引入

```ts
import { TableFormModule } from 'ng-zorro-antd-extension/table-form/table-form.module';

```

需要注意的是三个指令作用的ng-template和自定义错误模板，他们上面所暴露的变量

|nzxTableFormTh|可定义变量|说明|
|---|---|---|
|当传入controlName时|let-config;let-index='index'|config为定义的配置项；index为循环下标|
|当未传入controlName时|let-form;let-index='index';let-disabled='disabled'|form为组件内部form；disabled为组件禁用状态|

|nzxTableFormTd|可定义变量|说明|
|---|---|---|
|当传入controlName时|let-formGroup;let-formControl='formControl';let-errorTip='errorTip';let-index='index';let-disabled='disabled'|formGroup为这一行的formGroup；formControl为当前控件的formControl；errorTip为自定义的错误提示|
|当未传入controlName时|let-formGroup;let-index='index';let-disabled='disabled'|同上|

|nzxTableFormExpand|可定义变量|说明|
|---|---|---|
|--|let-formGroup;let-index='index';let-disabled='disabled'|同上|

|错误模板|可定义变量|说明|
|---|---|---|
|--|let-control|control的值为组件内部表单formArray控件|
