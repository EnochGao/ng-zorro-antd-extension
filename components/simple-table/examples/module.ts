import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SimpleTableDemoComponent } from './simple-table-demo/simple-table-demo.component';


@NgModule({
  declarations: [
    SimpleTableDemoComponent
  ],
  imports: [
    CommonModule,
    SimpleTableModule,
    NzButtonModule

  ]
})
export class SimpleTableDemoModule { }
