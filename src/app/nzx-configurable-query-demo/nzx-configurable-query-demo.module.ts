import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzxConfigurableQueryDemoComponent } from './nzx-configurable-query-demo.component';
import { RouterModule } from '@angular/router';
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
import { NgZorroAntdModule } from '../zorro.module';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NzxConfigurableQueryDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzRateModule,
    NzxConfigurableQueryModule,
    RouterModule.forChild([
      { path: '', component: NzxConfigurableQueryDemoComponent }
    ])
  ]
})
export class NzxConfigurableQueryDemoModule { }