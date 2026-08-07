---
category: Components
type: Pipe
title: Pipes
subtitle: pipes
cover: ''
description: Mapping pipe (nzxMap) to transform data formats and expand/concat arrays; safe-null pipe (nzxSafeNull) to show a default placeholder for null/undefined/empty values, configurable globally via nzxConfig.
order: 2
---

- Mapping pipe (nzxMap): transforms data formats and can expand/concat arrays
- Safe-null pipe (nzxSafeNull): shows a default placeholder when the value is `null`, `undefined`, or `''`; supports global configuration via nzxConfig

## Support Version

| pipe               | version support                         |
| ------------------ | --------------------------------------- |
| nzxMap             | <label type="success">v13.0.0+</label>  |
| nzxSafeNull        | <label type="success">v14.0.0+</label>  |
| nzxSafeHtml        | <label type="success">v15.10.0+</label> |
| nzxSafeResourceUrl | <label type="success">v15.10.0+</label> |
| nzxSafeScript      | <label type="success">v15.10.0+</label> |
| nzxSafeStyle       | <label type="success">v15.10.0+</label> |
| nzxSafeUrl         | <label type="success">v15.10.0+</label> |

## When To Use

### Import

```ts
import { NzxPipesModule } from "ng-zorro-antd-extension/pipes";
```
