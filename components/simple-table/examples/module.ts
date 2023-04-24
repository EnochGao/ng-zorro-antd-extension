import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxSimpleTableModule } from 'ng-zorro-antd-extension/simple-table';

import { NzxSimpleTableExampleComponent } from './simple-table/simple-table.component';

@NgModule({
  imports: [CommonModule, NzxSimpleTableModule, NzButtonModule],
  declarations: [NzxSimpleTableExampleComponent],
})
export class NzxSimpleTableExamplesModule {}
