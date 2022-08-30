import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'ng-zorro-antd-extension/pipes';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzxTableFormDemoComponent } from './nzx-table-form-demo.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { TableFormModule } from 'components/table-form';
@NgModule({
  declarations: [
    NzxTableFormDemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    PipesModule,
    NzTableModule,
    NzRateModule,
    TableFormModule,
    NzMessageModule,
    RouterModule.forChild([
      { path: '', component: NzxTableFormDemoComponent }
    ])
  ]
})
export class NzxMapPipeDemoModule { }
