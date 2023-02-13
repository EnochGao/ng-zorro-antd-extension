import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'ng-zorro-antd-extension/pipes';
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxPipeDemoComponent } from './nzx-pipe-demo.component';

@NgModule({
  declarations: [NzxPipeDemoComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    SimpleTableModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: NzxPipeDemoComponent }]),
  ],
})
export class NzxMapPipeDemoModule {}
