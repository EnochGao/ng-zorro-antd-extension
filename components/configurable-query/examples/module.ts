import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
import { NzxConfigurableQueryDemoComponent } from './nzx-configurable-query-demo/nzx-configurable-query-demo.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';


@NgModule({
  declarations: [
    NzxConfigurableQueryDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRateModule,
    NzxConfigurableQueryModule,
  ]
})
export class NzxConfigurableQueryDemoModule { }
