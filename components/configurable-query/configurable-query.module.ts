import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { DownOutline, UpOutline } from '@ant-design/icons-angular/icons';

import { ConfigurableQueryComponent } from './configurable-query.component';
import { ControlDirective } from './control.directive';

const icons: IconDefinition[] = [
  DownOutline,
  UpOutline,
];

@NgModule({
  declarations: [
    ConfigurableQueryComponent,
    ControlDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NzInputModule,
    NzFormModule,
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzIconModule.forRoot(icons),
  ],
  exports: [
    ControlDirective,
    ConfigurableQueryComponent,
  ]
})
export class NzxConfigurableQueryModule { }
