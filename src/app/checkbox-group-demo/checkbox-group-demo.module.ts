import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CheckboxGroupDemoComponent } from './checkbox-group-demo.component';

@NgModule({
  declarations: [CheckboxGroupDemoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzCardModule,
    NzButtonModule,
    NzCheckboxExtensionModule,
    RouterModule.forChild([
      { path: '', component: CheckboxGroupDemoComponent },
    ]),
  ],
})
export class CheckboxGroupDemoModule {}
