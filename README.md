<h1 align="center">
ng-zorro-antd-extension
</h1>

<div align="center">

Component package based on ng-zorro-antd

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd-extension.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd-extension)
[![NPM downloads](http://img.shields.io/npm/dm/ng-zorro-antd-extension.svg?style=flat-square)](https://npmjs.org/package/ng-zorro-antd-extension)

</div>

English | [简体中文](README-zh_CN.md)

## Docs

- [Docs github](https://enochgao.github.io/ng-zorro-antd-extension/)

## Installation

1、Make sure to install ng-zorro first：[ng-zorro-antd install](https://ng.ant.design/docs/getting-started/en)

2、After ng zorro is successfully installed, then install the package

Using

```bash
npm install ng-zorro-antd-extension --save
```

or

```bash
ng add ng-zorro-antd-extension
```

3、app.module v15.11.0+

```ts
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { nzx_zh_CN } from 'ng-zorro-antd-extension/i18n';

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

| angular | ng-zorro-antd | ng-zorro-antd-extension | LTS ends        |
| ------- | ------------- | ----------------------- | --------------- |
| ^17.0.0 | ^17.0.0       | ^15.6.0                 | 2025-05-15      |
| ^16.0.0 | ^16.0.0       | ^15.6.0                 | 2024-11-08(end) |
| ^15.0.0 | ^15.0.0       | ^15.0.0                 | 2024-05-18(end) |
| ^14.0.0 | ^14.0.0       | ^14.0.0                 | end             |
| ^13.0.0 | ^13.0.0       | ^13.0.0                 | end             |

Install the specified version if required using:

```bash
npm install ng-zorro-antd-extension@13.0.0 --save
```

v13.0.0(contains only multi-select, simple table, mapping pipeline), v15.0.0+ is recommended

Welcome star fork pr
