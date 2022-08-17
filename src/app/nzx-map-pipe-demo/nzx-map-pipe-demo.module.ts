import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'ng-zorro-antd-extension/pipes';
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { NgZorroAntdModule } from '../zorro.module';
import { NzxMapPipeDemoComponent } from './nzx-map-pipe-demo.component';



@NgModule({
  declarations: [
    NzxMapPipeDemoComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SimpleTableModule,
    PipesModule,
    RouterModule.forChild([
      { path: '', component: NzxMapPipeDemoComponent }
    ])
  ]
})
export class NzxMapPipeDemoModule { }
