import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzxToDateDemoComponent } from '../nzx-to-date-demo/nzx-to-date-demo.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    NzxToDateDemoComponent
  ],
  imports: [
    CommonModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: NzxToDateDemoComponent }
    ])
  ]
})
export class NzxToDateDemoModule { }
