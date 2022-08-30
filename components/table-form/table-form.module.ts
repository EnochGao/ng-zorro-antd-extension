import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableFormExpandDirective } from './directive/table-expand.directive';
import { TableFormTdDirective } from './directive/table-td.directive';
import { TableFormThDirective } from './directive/table-th.directive';
import { TableFormComponent } from './table-form.component';

@NgModule({
  declarations: [
    TableFormComponent,
    TableFormExpandDirective,
    TableFormTdDirective,
    TableFormThDirective
  ],
  imports: [
    CommonModule,
    NzTableModule,
    ReactiveFormsModule,
    NzFormModule,
    NzRadioModule,
    NzInputModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzSelectModule,
  ],
  exports: [
    TableFormComponent,
    TableFormExpandDirective,
    TableFormTdDirective,
    TableFormThDirective
  ]
})
export class TableFormModule {
}
