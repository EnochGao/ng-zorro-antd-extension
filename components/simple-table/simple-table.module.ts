import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';

import { ExpandDirective } from './directive/expand.directive';
import { TdDirective } from './directive/td.directive';
import { ThDirective } from './directive/th.directive';
import { NzxSimpleTableComponent } from './simple-table.component';

@NgModule({
  declarations: [
    NzxSimpleTableComponent,

    ThDirective,
    TdDirective,
    ExpandDirective,
  ],
  imports: [CommonModule, NzTableModule],
  exports: [ThDirective, TdDirective, ExpandDirective, NzxSimpleTableComponent],
})
export class NzxSimpleTableModule {}
