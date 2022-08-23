import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SimpleTableDemoComponent } from './simple-table-demo.component';

@NgModule({
  declarations: [
    SimpleTableDemoComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    SimpleTableModule,
    RouterModule.forChild([
      { path: '', component: SimpleTableDemoComponent }
    ])
  ]
})
export class SimpleTableDemoModule { }
