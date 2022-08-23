import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzxConfigurableQueryDemoComponent } from './nzx-configurable-query-demo.component';


@NgModule({
  declarations: [
    NzxConfigurableQueryDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRateModule,
    NzxConfigurableQueryModule,
    RouterModule.forChild([
      { path: '', component: NzxConfigurableQueryDemoComponent }
    ])
  ]
})
export class NzxConfigurableQueryDemoModule { }
