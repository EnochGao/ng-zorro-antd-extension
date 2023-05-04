---
category: component
title: 表格表单
subtitle: nzx-table-form
order: 4
---

表格表单。整个 table 为一个表单控件，适合当填写的表单为一个 list 集合的情况。

它输出的值为数组对象，形如：`[{},{}]`，组件内部实际每一行为一个`formGroup`，也可以用来做展示。

具体使用详情查看右侧示例。

## 支持版本

<label type="success">v14.0.0+</label>

## 基本使用

### 引入

```ts
import { NzxTableFormModule } from "ng-zorro-antd-extension/table-form";
```

需要注意的是三个指令作用的 ng-template 和自定义错误模板，他们上面所暴露的变量

| nzxTableFormTh          | 可定义变量                                         | 说明                                          |
| ----------------------- | -------------------------------------------------- | --------------------------------------------- |
| 当传入 controlName 时   | let-config;let-index='index'                       | config 为定义的配置项；index 为循环下标       |
| 当未传入 controlName 时 | let-form;let-index='index';let-disabled='disabled' | form 为组件内部 form；disabled 为组件禁用状态 |

| nzxTableFormTd          | 可定义变量                                                                                                    | 说明                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 当传入 controlName 时   | let-formGroup;let-formControl='formControl';let-errorTip='errorTip';let-index='index';let-disabled='disabled' | formGroup 为这一行的 formGroup；formControl 为当前控件的 formControl；errorTip 为自定义的错误提示 |
| 当未传入 controlName 时 | let-formGroup;let-index='index';let-disabled='disabled'                                                       | 同上                                                                                              |

| nzxTableFormExpand | 可定义变量                                              | 说明 |
| ------------------ | ------------------------------------------------------- | ---- |
| --                 | let-formGroup;let-index='index';let-disabled='disabled' | 同上 |

| 错误模板 | 可定义变量  | 说明                                      |
| -------- | ----------- | ----------------------------------------- |
| --       | let-control | control 的值为组件内部表单 formArray 控件 |
