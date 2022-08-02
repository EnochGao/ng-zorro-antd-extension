import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CheckboxGroupExtensionComponent } from './checkbox-group.component';

@NgModule({
  declarations: [
    CheckboxGroupExtensionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzCheckboxModule
  ],
  exports: [CheckboxGroupExtensionComponent]
})
export class NzCheckboxExtensionModule { }
