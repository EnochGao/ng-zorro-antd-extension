---
category: Components
type: Util
title: Util
subtitle: util
cover: ''
description: Common utility functions to help reduce your project bundle size. See method comments for usage.
order: 1
label: new
---

Common utility functions to help reduce your project bundle size. See method comments for usage details.

| Function                 | Description                                                                          | Version                                 |
| ------------------------ | ----------------------------------------------------------------------------------- | -------------------------------------- |
| cloneDeep                | deep clone                                                                          | -                                      |
| isArray                  | check if value is an array                                                          | -                                      |
| isDate                   | check if value is a Date                                                            | -                                      |
| isNumber                 | check if value is a Number                                                          | -                                      |
| isEmpty                  | check if a value is empty, including undefined, null, empty string, empty array, empty object | -                          |
| isObject                 | check if value is an Object                                                         | -                                      |
| isString                 | check if value is a String                                                          | -                                      |
| toNumber                 | convert to number                                                                   | -                                      |
| toString                 | convert to string                                                                   | -                                      |
| trimObject               | trim empty object                                                                   | -                                      |
| updateControlStatus      | update form control status                                                          | <label type="success">v15.5.0+</label> |
| selectFile               | select file                                                                         | <label type="success">v15.5.0+</label> |
| downloadFile             | download file                                                                       | <label type="success">v15.5.0+</label> |
| scrollToFirstInvalidControl | scroll page to the first invalid form control, usually used with updateControlStatus | <label type="success">v17.4+</label> |
| getElementByTag          | get all elements with the specified tag under the current document                 | <label type="success">v17.4+</label>   |

## Support Version

<label type="success">v15.4.0+</label>

## When To Use

### Import

```typescript
import { cloneDeep,xxxx.. } from "ng-zorro-antd-extension/util";

```

### ts

```typescript
class Demo {
  form: FormGroup = inject(FormBuilder).group({
    name: [{ value: 'EnochGao', disabled: true }],
  });

  constructor() {
    validForm(form);
    console.log(cloneDeep({}));
  }
}
```
