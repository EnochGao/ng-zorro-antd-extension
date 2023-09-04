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
import { NzxControlDirective } from './control.directive';
import { NzI18nModule } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [NzxConfigurableQueryComponent, NzxControlDirective],
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
    NzI18nModule,
  ],
  exports: [NzxControlDirective, NzxConfigurableQueryComponent],
})
export class NzxConfigurableQueryModule {}
