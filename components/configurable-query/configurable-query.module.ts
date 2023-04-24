import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { NzxConfigurableQueryComponent } from './configurable-query.component';
import { ControlDirective } from './control.directive';

@NgModule({
  declarations: [NzxConfigurableQueryComponent, ControlDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NzInputModule,
    NzFormModule,
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzIconModule,
  ],
  exports: [ControlDirective, NzxConfigurableQueryComponent],
})
export class NzxConfigurableQueryModule {}
