import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { NgZorroAntdModule } from '../zorro.module';
import { SimpleTableDemoComponent } from './simple-table-demo.component';

@NgModule({
  declarations: [
    SimpleTableDemoComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SimpleTableModule,
    RouterModule.forChild([
      { path: '', component: SimpleTableDemoComponent }
    ])
  ]
})
export class SimpleTableDemoModule { }
