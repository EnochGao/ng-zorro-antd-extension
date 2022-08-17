import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurableQueryComponent } from './configurable-query.component';
import { ControlDirective } from './control.directive';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConfigurableQueryComponent,
    ControlDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
  ],
  exports: [
    ConfigurableQueryComponent,
    ControlDirective
  ]
})
export class ConfigurableQueryModule { }
