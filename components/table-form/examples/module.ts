import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'ng-zorro-antd-extension/pipes';
import { TableFormModule } from 'ng-zorro-antd-extension/table-form/table-form.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzxTableFormDemoComponent } from './nzx-table-form-demo/nzx-table-form-demo.component';

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
  ]
})
export class NzxMapPipeDemoModule { }
