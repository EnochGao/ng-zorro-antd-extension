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
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(zh);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


const routes: Routes = [
  {
    path: 'checkbox',
    loadChildren: () => import('./checkbox-group-demo/checkbox-group-demo.module').then((m) => m.CheckboxGroupDemoModule)
  },
  {
    path: 'simple-table',
    loadChildren: () => import('./simple-table-demo/simple-table-demo.module').then((m) => m.SimpleTableDemoModule)
  },
  {
    path: 'nzx-configurable-query',
    loadChildren: () => import('./nzx-configurable-query-demo/nzx-configurable-query-demo.module').then((m) => m.NzxConfigurableQueryDemoModule)
  },
  {
    path: 'nzx-map-pipe',
    loadChildren: () => import('./nzx-map-pipe-demo/nzx-map-pipe-demo.module').then((m) => m.NzxMapPipeDemoModule)
  },
  {
    path: 'nzx-to-date',
    loadChildren: () => import('./nzx-to-date-demo/nzx-to-date-demo.module').then((m) => m.NzxToDateDemoModule)
  },
  { path: '**', redirectTo: 'checkbox', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
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
    RouterModule.forRoot(
      routes,
      {
        // enableTracing: true,
        preloadingStrategy: PreloadAllModules
      })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
