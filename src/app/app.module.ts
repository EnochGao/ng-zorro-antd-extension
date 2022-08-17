import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';

import en from '@angular/common/locales/en';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from './zorro.module';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

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
    RouterModule.forRoot(
      [
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
        {
          path: 'nzx-configurable-query',
          loadChildren: () => import('./nzx-configurable-query-demo/nzx-configurable-query-demo.module').then((m) => m.NzxConfigurableQueryDemoModule)
        },
        { path: '**', redirectTo: 'checkbox', pathMatch: 'full' },
      ], {
      // enableTracing: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
