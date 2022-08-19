import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocgeniTemplateModule } from '@docgeni/template';

import { registerLocaleData } from '@angular/common';
import { DOCGENI_SITE_PROVIDERS, RootComponent } from './content/index';

import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

registerLocaleData(en);

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, DocgeniTemplateModule, RouterModule.forRoot([])],
  providers: [...DOCGENI_SITE_PROVIDERS, { provide: NZ_I18N, useValue: en_US },],
  bootstrap: [RootComponent]
})
export class AppModule {
}
