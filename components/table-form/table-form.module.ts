import { NgModule } from '@angular/core';

import { NzxTableFormExpandDirective } from './directive/table-expand.directive';
import { NzxTableFormTdDirective } from './directive/table-td.directive';
import { NzxTableFormThDirective } from './directive/table-th.directive';
import { NzxTableFormComponent } from './table-form.component';

@NgModule({
  imports: [
    NzxTableFormComponent,
    NzxTableFormTdDirective,
    NzxTableFormThDirective,
    NzxTableFormExpandDirective,
  ],
  exports: [
    NzxTableFormComponent,
    NzxTableFormTdDirective,
    NzxTableFormThDirective,
    NzxTableFormExpandDirective,
  ],
})
export class NzxTableFormModule {}
