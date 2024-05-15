<h1 align="center">
ng-zorro-antd-extension
</h1>

<div align="center">

基于 ng-zorro 的组件扩展包

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd-extension.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd-extension)
[![NPM downloads](http://img.shields.io/npm/dm/ng-zorro-antd-extension.svg?style=flat-square)](https://npmjs.org/package/ng-zorro-antd-extension)

</div>

# 文档

功能更新以及版本详情

- 请查看--->[文档地址](https://enochgao.github.io/ng-zorro-antd-extension/)
- 国内镜像--->[文档地址](http://enochgao.gitee.io/ng-zorro-antd-extension/)

## 安装

1、首先要安装 ng-zorro：[ng zorro 安装](https://ng.ant.design/docs/getting-started/zh)

2、ng zorro 安装成功之后然后再安装扩展包

使用

```bash
npm install ng-zorro-antd-extension --save
```

或者

```bash
ng add ng-zorro-antd-extension
```

3、app.module v15.11.0+

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

如需指定版本

```bash
npm install ng-zorro-antd-extension@13.0.0 --save
```

| angular | ng-zorro-antd | ng-zorro-antd-extension | LTS ENDS   |
| ------- | ------------- | ----------------------- | ---------- |
| ^17.0.0 | ^17.0.0       | ^15.6.0                 | 2025-05-15 |
| ^16.0.0 | ^16.0.0       | ^15.6.0                 | 2024-11-08 |
| ^15.0.0 | ^15.0.0       | ^15.0.0                 | 2024-05-18 |
| ^14.0.0 | ^14.0.0       | ^14.0.0                 | end        |
| ^13.0.0 | ^13.0.0       | ^13.0.0                 | end        |

如需指定版本

```bash
npm install ng-zorro-antd-extension@13.0.0 --save
```

注意：v13.0.0(只包含多选框，简单表格，映射管道)，推荐使用最新版本，具体 feature 请查看组件文档中基本使用下的版本

欢迎 star fork pr
