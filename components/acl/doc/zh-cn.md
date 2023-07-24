---
category: directive
title: 访问控制
subtitle: nzx-acl
order: 5
---

简单实现访问控制

## 支持版本

<label type="success">v15.9.0</label>

## 基本使用

### 引入

```ts
import { NzxAclModule, NzxAclService } from "ng-zorro-antd-extension/acl";
```

appModule 中

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
