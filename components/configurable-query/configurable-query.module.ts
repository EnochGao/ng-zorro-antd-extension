import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurableQueryComponent } from './configurable-query.component';
import { ControlDirective } from './control.directive';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AlertOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition, } from '@ant-design/icons-angular';
import { NzFormModule } from 'ng-zorro-antd/form';

const icons: IconDefinition[] = [AlertOutline];

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
