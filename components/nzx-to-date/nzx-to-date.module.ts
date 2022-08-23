import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzxToDateDirective } from './nzx-to-date.directive';



@NgModule({
  declarations: [
    NzxToDateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NzxToDateDirective
  ]
})
export class NzxToDateModule { }
