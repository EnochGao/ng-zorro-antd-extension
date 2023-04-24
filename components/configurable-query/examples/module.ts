import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';

import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
import { NzxConfigurableQueryExampleComponent } from './configurable-query/configurable-query.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRateModule,
    NzxConfigurableQueryModule,
  ],
  declarations: [NzxConfigurableQueryExampleComponent],
})
export class NzxConfigurableQueryExamplesModule {}
