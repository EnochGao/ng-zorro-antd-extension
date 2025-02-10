import { NgModule } from '@angular/core';

import { NzxExpandDirective } from './directive/expand.directive';
import { NzxTdDirective } from './directive/td.directive';
import { NzxThDirective } from './directive/th.directive';
import { NzxSimpleTableComponent } from './simple-table.component';

@NgModule({
  imports: [
    NzxSimpleTableComponent,
    NzxThDirective,
    NzxTdDirective,
    NzxExpandDirective,
  ],
  exports: [
    NzxThDirective,
    NzxTdDirective,
    NzxExpandDirective,
    NzxSimpleTableComponent,
  ],
})
export class NzxSimpleTableModule {}
