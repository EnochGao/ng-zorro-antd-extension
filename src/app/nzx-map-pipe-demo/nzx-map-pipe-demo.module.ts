import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzxMapPipeDemoComponent } from './nzx-map-pipe-demo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NzxMapPipeDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NzxMapPipeDemoComponent }
    ])
  ]
})
export class NzxMapPipeDemoModule { }
