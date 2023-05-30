import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';

import { NzxTableAdaptorModule } from 'ng-zorro-antd-extension/table-adaptor';
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
import { NzxPageTableSelectComponent } from './page-table-select/page-table-select.component';

import { NzxKeyDirective } from './key.directive';
import { NzxTableSelectComponent } from './table-select/table-select.component';
import { NzxPipesModule } from 'ng-zorro-antd-extension/pipes';

@NgModule({
  declarations: [
    NzxKeyDirective,
    NzxTableSelectComponent,
    NzxPageTableSelectComponent,
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzxConfigurableQueryModule,
    NzxTableAdaptorModule,
    NzxPipesModule,
  ],
  exports: [
    NzxKeyDirective,
    NzxTableSelectComponent,
    NzxPageTableSelectComponent,
  ],
})
export class NzxTableSelectModule {}
