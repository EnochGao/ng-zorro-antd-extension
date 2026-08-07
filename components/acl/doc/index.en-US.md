---
category: Components
type: Directive
title: ACL
subtitle: nzx-acl
cover: ''
description: A simple front-end access control implementation.
order: 5
---

A simple implementation of access control.

## Support Version

<label type="success">v15.9.0+</label>

## When To Use

### Import

```ts
import { NzxAclModule, NzxAclService } from "ng-zorro-antd-extension/acl";
```

In appModule:

```ts
@NgModule({
  imports: [NzxAclModule.forRoot()],
})
class AppModule {}
```

### html

```html
<button
  *nzxAcl="
          'add';
          let allAcls;
          let currentAcl = currentAcl;
          dataAcl: dataAcl;
          else: elseTemp
        "
  nz-button
  nzType="dashed"
>
  add btn
</button>
<ng-template #elseTemp>add button have not permission </ng-template>
```
