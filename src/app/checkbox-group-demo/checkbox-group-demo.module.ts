import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupDemoComponent } from './checkbox-group-demo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CheckboxGroupDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CheckboxGroupDemoComponent }
    ])
  ]
})
export class CheckboxGroupDemoModule { }
