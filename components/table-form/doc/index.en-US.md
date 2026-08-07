---
category: Components
type: Component
title: Table Form
subtitle: nzx-table-form
cover: ''
description: A table form where the whole table is a single form control, suitable for forms that are a list collection.
order: 4
---

Table form. The entire table is a single form control, suitable for scenarios where the filled form is a list collection.

It outputs an array of objects, shaped like: `[{},{}]`. Internally each row is a `formGroup`, and can also be used for display.

See the examples on the right for detailed usage.

## Support Version

<label type="success">v14.0.0+</label>

## When To Use

### Import

```ts
import { NzxTableFormModule } from "ng-zorro-antd-extension/table-form";
```

Note the variables exposed by the three directives' `ng-template` and the custom error template:

| nzxTableFormTh          | Available Variables                                      | Description                                                  |
| ----------------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| When controlName passed | let-config;let-index='index'                             | config is the defined config item; index is the loop index  |
| When controlName absent | let-form;let-index='index';let-disabled='disabled'      | form is the internal form; disabled is the component disabled state |

| nzxTableFormTd          | Available Variables                                                                                                  | Description                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| When controlName passed | let-formGroup;let-formControl='formControl';let-errorTip='errorTip';let-index='index';let-disabled='disabled'      | formGroup is this row's formGroup; formControl is the current control's formControl; errorTip is custom error tip |
| When controlName absent | let-formGroup;let-index='index';let-disabled='disabled'                                                             | same as above                                                                                            |

| nzxTableFormExpand | Available Variables                                    | Description |
| ------------------ | ------------------------------------------------------ | ----------- |
| --                 | let-formGroup;let-index='index';let-disabled='disabled' | same as above |

| Error Template | Available Variables | Description                                |
| -------------- | ------------------- | ------------------------------------------ |
| --             | let-control         | control is the internal formArray control |
