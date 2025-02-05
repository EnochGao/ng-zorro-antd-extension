import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzxPrintComponent } from './nzx-print.component';
import { NzxPrintDirective } from './nzx-print.directive';
import { NzxPrintVComponent } from './nzx-print-v.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzxPrintContentDirective } from './nzx-print-content.directive';

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
