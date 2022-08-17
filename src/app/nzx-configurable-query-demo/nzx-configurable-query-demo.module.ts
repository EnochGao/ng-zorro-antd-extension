import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzxConfigurableQueryDemoComponent } from './nzx-configurable-query-demo.component';
import { RouterModule } from '@angular/router';
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
import { NgZorroAntdModule } from '../zorro.module';



@NgModule({
  declarations: [
    NzxConfigurableQueryDemoComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzxConfigurableQueryModule,
    RouterModule.forChild([
      { path: '', component: NzxConfigurableQueryDemoComponent }
    ])
  ]
})
export class NzxConfigurableQueryDemoModule { }
