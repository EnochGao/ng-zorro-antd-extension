import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NzxPrintComponent,
  NzxPrintContentDirective,
} from './nzx-print.component';
import { NzxPrintDirective } from './nzx-print.directive';

@NgModule({
  declarations: [
    NzxPrintComponent,
    NzxPrintContentDirective,
    NzxPrintDirective,
  ],
  imports: [CommonModule],
  exports: [NzxPrintComponent, NzxPrintContentDirective, NzxPrintDirective],
})
export class NzxPrintModule {}
