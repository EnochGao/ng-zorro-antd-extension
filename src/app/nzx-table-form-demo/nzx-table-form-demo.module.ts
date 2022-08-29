import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'ng-zorro-antd-extension/pipes';
import { TableFormModule } from 'ng-zorro-antd-extension/table-form/table-form.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxTableFormDemoComponent } from './nzx-table-form-demo.component';


@NgModule({
  declarations: [
    NzxTableFormDemoComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    PipesModule,
    TableFormModule,
    RouterModule.forChild([
      { path: '', component: NzxTableFormDemoComponent }
    ])
  ]
})
export class NzxMapPipeDemoModule { }
