<h1 align="center">
ng-zorro-antd-extension
</h1>

<div align="center">

Component package based on ng-zorro-antd

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd-extension.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd-extension)
[![NPM downloads](http://img.shields.io/npm/dm/ng-zorro-antd-extension.svg?style=flat-square)](https://npmjs.org/package/ng-zorro-antd-extension)
[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=flat&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/EnochGao/ng-zorro-antd-extension)
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
| ^21.0.0 | ^21.0.0       | ^21.0.0                 | 2027-05-19      |
| ^20.0.0 | ^20.0.0       | ^20.0.0                 | 2026-11-28      |
| ^19.0.0 | ^19.0.0       | ^19.0.0                 | 2026-05-19      |
| ^18.0.0 | ^18.0.0       | ^18.0.0                 | 2025-11-19(end) |
| ^17.0.0 | ^17.0.0       | ^15.6.0                 | 2025-05-15(end) |
| ^16.0.0 | ^16.0.0       | ^15.6.0                 | 2024-11-08(end) |
| ^15.0.0 | ^15.0.0       | ^15.0.0                 | 2024-05-18(end) |
| ^14.0.0 | ^14.0.0       | ^14.0.0                 | end             |
| ^13.0.0 | ^13.0.0       | ^13.0.0                 | end             |

Install the specified version if required using:

```bash
npm install ng-zorro-antd-extension@13.0.0 --save
```

v13.0.0(contains only multi-select, simple table, mapping pipeline), v15.0.0+ is recommended

Welcome to [github](https://github.com/EnochGao/ng-zorro-antd-extension) star fork pr
