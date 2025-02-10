import { NgModule } from '@angular/core';

import { NzxPageTableSelectComponent } from './page-table-select/page-table-select.component';

import { NzxKeyDirective } from './key.directive';
import { NzxTableSelectComponent } from './table-select/table-select.component';

@NgModule({
  imports: [
    NzxKeyDirective,
    NzxTableSelectComponent,
    NzxPageTableSelectComponent,
  ],
  exports: [
    NzxKeyDirective,
    NzxTableSelectComponent,
    NzxPageTableSelectComponent,
  ],
})
export class NzxTableSelectModule {}
