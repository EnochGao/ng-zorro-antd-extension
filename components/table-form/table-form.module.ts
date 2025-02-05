import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberLegacyModule } from 'ng-zorro-antd/input-number-legacy';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';

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
