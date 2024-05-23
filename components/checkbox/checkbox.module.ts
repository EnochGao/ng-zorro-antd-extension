import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { NzxCheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  declarations: [NzxCheckboxGroupComponent],
  imports: [CommonModule, FormsModule, NzCheckboxModule],
  exports: [NzxCheckboxGroupComponent],
})
export class NzxCheckboxModule {}
