---
title: 首页
order: 10
hero:
  title: NG-ZORRO-EXTENSION
  description: 基于ng-zorro-antd的组件扩展包

features:
  - icon: https://angular.cn/assets/images/logos/angular/angular.svg
    title: Angular
    description: 基于Angular
  - icon: https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg
    title: NG-ZORRO
    description: 基于ng-zorro-antd
---

<div align="center">

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd-extension.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd-extension)
[![NPM downloads](http://img.shields.io/npm/dm/ng-zorro-antd-extension.svg?style=flat-square)](https://npmjs.org/package/ng-zorro-antd-extension)

</div>

## 安装

1、首先要安装 ng-zorro-antd：[安装](https://ng.ant.design/docs/getting-started/zh)

2、ng-zorro-antd 安装成功之后然后再安装扩展包

使用

```bash
npm install ng-zorro-antd-extension --save
```

或者

```bash
ng add ng-zorro-antd-extension
```

3、app.module <label type="success">v15.11.0+</label>

```ts
import zh from "@angular/common/locales/zh";
import { NZ_I18N, zh_CN } from "ng-zorro-antd/i18n";
import { nzx_zh_CN } from "ng-zorro-antd-extension/i18n";

registerLocaleData(zh);

const customLanguagePack = {
  ...zh_CN,
  ...nzx_zh_CN,
};

@NgModule({
  declarations: [],
  imports: [],
  providers: [{ provide: NZ_I18N, useValue: customLanguagePack }],
  bootstrap: [RootComponent],
})
export class AppModule {}
```

| angular | ng-zorro-antd | ng-zorro-antd-extension | LTS ends   |
| ------- | ------------- | ----------------------- | ---------- |
| ^13.0.0 | ^13.0.0       | ^13.0.0                 | end        |
| ^14.0.0 | ^14.0.0       | ^14.0.0                 | end        |
| ^15.0.0 | ^15.0.0       | ^15.0.0                 | 2024-05-18 |
| ^16.0.0 | ^16.0.0       | ^15.6.0                 | 2024-11-08 |
| ^17.0.0 | ^17.0.0       | ^17.0.0                 | 2025-05-15 |

如需指定版本

```bash
npm install ng-zorro-antd-extension@13.0.0 --save
```

注意：v13.0.0(只包含多选框，简单表格，映射管道)，推荐使用 15.0.0+版本，具体 feature 请查看组件文档中基本使用下的版本

### 使用介绍

<iframe  src="//player.bilibili.com/player.html?aid=873336769&bvid=BV1kN4y1Q7vv&cid=1261626841&p=1&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

欢迎在 [github](https://github.com/EnochGao/ng-zorro-antd-extension) star fork pr
