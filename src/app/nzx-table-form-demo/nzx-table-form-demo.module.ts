import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'ng-zorro-antd-extension/pipes';
import { TableFormModule } from 'ng-zorro-antd-extension/table-form/table-form.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzxTableFormDemoComponent } from './nzx-table-form-demo.component';


@NgModule({
  declarations: [
    NzxTableFormDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    PipesModule,
    TableFormModule,
    RouterModule.forChild([
      { path: '', component: NzxTableFormDemoComponent }
    ])
  ]
})
export class NzxMapPipeDemoModule { }
