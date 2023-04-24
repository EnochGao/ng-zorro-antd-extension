import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { NzxCheckboxGroupExtensionComponent } from './checkbox-group.component';

@NgModule({
  declarations: [NzxCheckboxGroupExtensionComponent],
  imports: [CommonModule, FormsModule, NzCheckboxModule],
  exports: [NzxCheckboxGroupExtensionComponent],
})
export class NzxCheckboxExtensionModule {}
