import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';

import en from '@angular/common/locales/en';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from './zorro.module';

import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { MarkdownModule } from 'ngx-markdown';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NzCheckboxExtensionModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    RouterModule.forRoot(
      [
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
        },
        {
          path: 'checkbox',
          loadChildren: () => import('./checkbox-group-demo/checkbox-group-demo.module').then((m) => m.CheckboxGroupDemoModule)
        },
        {
          path: 'simple-table',
          loadChildren: () => import('./simple-table-demo/simple-table-demo.module').then((m) => m.SimpleTableDemoModule)
        },
        {
          path: 'nzx-map-pipe',
          loadChildren: () => import('./nzx-map-pipe-demo/nzx-map-pipe-demo.module').then((m) => m.NzxMapPipeDemoModule)
        },
        { path: '**', redirectTo: 'home', pathMatch: 'full' },
      ], {
      // enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
