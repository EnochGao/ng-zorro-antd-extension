import { NgModule } from '@angular/core';
import { NzxPrintContentDirective } from './nzx-print-content.directive';
import { NzxPrintVComponent } from './nzx-print-v.component';
import { NzxPrintComponent } from './nzx-print.component';
import { NzxPrintDirective } from './nzx-print.directive';

@NgModule({
  imports: [
    NzxPrintComponent,
    NzxPrintVComponent,
    NzxPrintDirective,
    NzxPrintContentDirective,
  ],
  exports: [
    NzxPrintComponent,
    NzxPrintVComponent,
    NzxPrintContentDirective,
    NzxPrintDirective,
  ],
})
export class NzxPrintModule {}
