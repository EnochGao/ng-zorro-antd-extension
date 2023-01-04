import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupDemoComponent } from './checkbox-group-demo/checkbox-group-demo.component';

import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [CheckboxGroupDemoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzCheckboxExtensionModule,
  ],
})
export class CheckboxGroupDemoModule {}
