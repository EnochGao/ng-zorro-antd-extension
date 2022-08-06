import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupDemoComponent } from './checkbox-group-demo.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../zorro.module';


@NgModule({
  declarations: [
    CheckboxGroupDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzCheckboxExtensionModule,
    MarkdownModule.forChild(),
    RouterModule.forChild([
      { path: '', component: CheckboxGroupDemoComponent }
    ])
  ]
})
export class CheckboxGroupDemoModule { }
