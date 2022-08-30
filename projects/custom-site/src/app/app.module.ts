import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocgeniTemplateModule } from '@docgeni/template';

import { registerLocaleData } from '@angular/common';
import { DOCGENI_SITE_PROVIDERS, RootComponent } from './content/index';

import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';


import { PlusOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [PlusOutline];

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DocgeniTemplateModule,
    NzIconModule.forRoot(icons),
    RouterModule.forRoot([]),
  ],
  providers: [
    ...DOCGENI_SITE_PROVIDERS,
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
