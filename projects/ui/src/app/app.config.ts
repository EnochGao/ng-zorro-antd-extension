import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import './doc/markdown/index';

import { routes } from './app.routes';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { nzx_zh_CN } from 'ng-zorro-antd-extension/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideNzDateFnsAdapter } from 'ng-zorro-antd/core/time';

// 文档站 markdown 渲染配置（prismjs 高亮 + 自定义 renderer）封装在 doc/markdown/index 中，
// 这里导入以确保全局 marked 单例与组件内渲染行为一致（对标 NG-ZORRO scripts/site/markdown）。

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: NZ_I18N,
      useValue: {
        ...zh_CN,
        ...nzx_zh_CN,
      },
    },
    provideNzDateFnsAdapter(),
  ],
};
