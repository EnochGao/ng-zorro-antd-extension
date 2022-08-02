import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CheckboxExtensionComponent } from './checkbox.component';

@NgModule({
  declarations: [
    CheckboxExtensionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzCheckboxModule
  ],
  exports: [NzCheckboxModule, CheckboxExtensionComponent]
})
export class NzCheckboxExtensionModule { }
