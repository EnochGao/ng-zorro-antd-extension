import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupDemoComponent } from './checkbox-group-demo/checkbox-group-demo.component';

import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckboxGroupDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxExtensionModule,
  ]
})
export class CheckboxGroupDemoModule { }
