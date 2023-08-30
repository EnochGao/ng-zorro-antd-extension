import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DocgeniTemplateModule } from '@docgeni/template';

import { registerLocaleData } from '@angular/common';
import { DOCGENI_SITE_PROVIDERS, RootComponent } from './content/index';

import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzxConfig, NZX_CONFIG } from 'ng-zorro-antd-extension/core/config';
import { NzxAclModule } from 'ng-zorro-antd-extension/acl';
import { nzx_zh_CN } from 'ng-zorro-antd-extension/i18n';

registerLocaleData(zh);

const ngZorroConfig: NzConfig = {
  // 注意组件名称没有 nz 前缀
  table: { nzSize: 'small', nzBordered: true },
};

const ngZorroExtensionConfig: NzxConfig = {
  nzxSafeNull: {
    placeholder: '空',
  },
};

const customLanguagePack = {
  ...zh_CN,
  ...nzx_zh_CN,
};

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DocgeniTemplateModule,
    NzIconModule,
    NzxAclModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  providers: [
    ...DOCGENI_SITE_PROVIDERS,
    { provide: NZ_I18N, useValue: customLanguagePack },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: NZX_CONFIG, useValue: ngZorroExtensionConfig },
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
