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

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DocgeniTemplateModule,
    NzIconModule,
    RouterModule.forRoot([]),
  ],
  providers: [...DOCGENI_SITE_PROVIDERS, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [RootComponent],
})
export class AppModule {}
