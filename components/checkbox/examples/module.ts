import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

import { NzxCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';

import { NzxCheckboxGroupExampleComponent } from './checkbox-group/checkbox-group.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzxCheckboxExtensionModule,
  ],
  declarations: [NzxCheckboxGroupExampleComponent],
})
export class NzxCheckboxGroupExamplesModule {}
