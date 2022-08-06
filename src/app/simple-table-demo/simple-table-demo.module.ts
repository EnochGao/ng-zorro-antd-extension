import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableDemoComponent } from './simple-table-demo.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { NgZorroAntdModule } from '../zorro.module';

@NgModule({
  declarations: [
    SimpleTableDemoComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SimpleTableModule,
    MarkdownModule.forChild(),
    RouterModule.forChild([
      { path: '', component: SimpleTableDemoComponent }
    ])
  ]
})
export class SimpleTableDemoModule { }
