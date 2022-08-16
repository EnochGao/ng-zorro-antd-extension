import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from 'ng-zorro-antd-extension/pipes';
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxMapPipeDemoComponent } from './nzx-map-pipe-demo/nzx-map-pipe-demo.component';


@NgModule({
  declarations: [
    NzxMapPipeDemoComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    SimpleTableModule,
    NzButtonModule,
  ]
})
export class NzxMapPipeDemoModule { }
