import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzxMapPipeDemoComponent } from './nzx-map-pipe-demo.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { PipesModule } from 'ng-zorro-antd-extension/pipes';
import { NgZorroAntdModule } from '../zorro.module';



@NgModule({
  declarations: [
    NzxMapPipeDemoComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SimpleTableModule,
    PipesModule,
    MarkdownModule.forChild(),
    RouterModule.forChild([
      { path: '', component: NzxMapPipeDemoComponent }
    ])
  ]
})
export class NzxMapPipeDemoModule { }
