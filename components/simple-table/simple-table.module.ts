import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

import { ExpandDirective } from './directive/expand.directive';
import { TdDirective } from './directive/td.directive';
import { ThDirective } from './directive/th.directive';
import { SimpleTableComponent } from './simple-table.component';

@NgModule({
  declarations: [
    SimpleTableComponent,

    ThDirective,
    TdDirective,
    ExpandDirective,
  ],
  imports: [CommonModule, NzTableModule],
  exports: [ThDirective, TdDirective, ExpandDirective, SimpleTableComponent],
})
export class SimpleTableModule {}
