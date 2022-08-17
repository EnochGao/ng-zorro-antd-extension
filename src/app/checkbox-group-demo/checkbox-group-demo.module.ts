import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';
import { NgZorroAntdModule } from '../zorro.module';
import { CheckboxGroupDemoComponent } from './checkbox-group-demo.component';


@NgModule({
  declarations: [
    CheckboxGroupDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzCheckboxExtensionModule,
    RouterModule.forChild([
      { path: '', component: CheckboxGroupDemoComponent }
    ])
  ]
})
export class CheckboxGroupDemoModule { }
