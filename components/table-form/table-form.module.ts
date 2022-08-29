import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFormComponent } from './table-form.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableFormExpandDirective } from './directive/table-expand.directive';
import { TableFormTdDirective } from './directive/table-td.directive';
import { TableFormThDirective } from './directive/table-th.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

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
    NzRadioModule,
    NzInputModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzFormModule,

  ],
  exports: [
    TableFormComponent,
    TableFormExpandDirective,
    TableFormTdDirective,
    TableFormThDirective
  ]
})
export class TableFormModule { }
