import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconDefinition } from '@ant-design/icons-angular';
import { DownOutline, UpOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
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
    NzFormModule,
    NzIconModule.forRoot(icons),
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzInputModule
  ],
  exports: [
    ConfigurableQueryComponent,
    ControlDirective
  ]
})
export class NzxConfigurableQueryModule { }
