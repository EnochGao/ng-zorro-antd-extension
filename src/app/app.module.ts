import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';

import zh from '@angular/common/locales/zh';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSliderModule } from 'ng-zorro-antd/slider';

registerLocaleData(zh);

const routes: Routes = [
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./checkbox-group-demo/checkbox-group-demo.module').then(
        (m) => m.CheckboxGroupDemoModule
      ),
  },
  {
    path: 'simple-table',
    loadChildren: () =>
      import('./simple-table-demo/simple-table-demo.module').then(
        (m) => m.SimpleTableDemoModule
      ),
  },
  {
    path: 'nzx-configurable-query',
    loadChildren: () =>
      import(
        './nzx-configurable-query-demo/nzx-configurable-query-demo.module'
      ).then((m) => m.NzxConfigurableQueryDemoModule),
  },
  {
    path: 'nzx-map-pipe',
    loadChildren: () =>
      import('./nzx-map-pipe-demo/nzx-map-pipe-demo.module').then(
        (m) => m.NzxMapPipeDemoModule
      ),
  },
  {
    path: 'nzx-table-form',
    loadChildren: () =>
      import('./nzx-table-form-demo/nzx-table-form-demo.module').then(
        (m) => m.NzxMapPipeDemoModule
      ),
  },
  { path: '**', redirectTo: 'checkbox', pathMatch: 'full' },
];

const ngZorroConfig: NzConfig = {
  // 注意组件名称没有 nz 前缀
  // table: { nzSize: 'small', nzBordered: true, },
  // descriptions: { nzSize: 'small', nzBordered: true },
  // button: { nzSize: 'small' },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NzGridModule,
    NzIconModule,
    NzLayoutModule,
    NzSliderModule,
    NzMenuModule,
    NzCheckboxExtensionModule,
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
