import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzxPipesModule } from 'ng-zorro-antd-extension/pipes';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzxTableFormModule } from 'ng-zorro-antd-extension/table-form';
import { NzxTableFormExampleComponent } from './table-form/table-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzxPipesModule,
    NzTableModule,
    NzRateModule,
    NzMessageModule,
    NzxTableFormModule,
  ],
  declarations: [NzxTableFormExampleComponent],
})
export class NzxTableFormExamplesModule {}
