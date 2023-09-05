import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { NzxConfigurableQueryComponent } from './configurable-query.component';
import { NzxControlDirective } from './control.directive';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzxConfigurableQueryControlComponent } from './configurable-query-control/configurable-query-control.component';
import { NzxInputControlComponent } from './controls/input.control';
import { NzxTemplateControlComponent } from './controls/template.control';
import { NzxSelectControlComponent } from './controls/select.control';
import { NzxDatePickerControlComponent } from './controls/date-picker.control';
import { NzxRangePickerControlComponent } from './controls/range-picker.control';
import { NzxQueryConfig, NzxQueryControlType } from './type';
import { NzxQueryConfigService, QUERY_CONFIG } from './query-config.service';

@NgModule({
  declarations: [
    NzxConfigurableQueryComponent,
    NzxControlDirective,
    NzxConfigurableQueryControlComponent,
    NzxInputControlComponent,
    NzxTemplateControlComponent,
    NzxSelectControlComponent,
    NzxDatePickerControlComponent,
    NzxRangePickerControlComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    NzInputModule,
    NzFormModule,
    NzGridModule,
    NzButtonModule,
    NzSelectModule,
    NzDatePickerModule,
    NzIconModule,
    NzI18nModule,
  ],

  exports: [NzxControlDirective, NzxConfigurableQueryComponent],
})
export class NzxConfigurableQueryModule {
  static forRoot(
    nzxQueryConfig: NzxQueryConfig
  ): ModuleWithProviders<NzxConfigurableQueryModule> {
    return {
      ngModule: NzxConfigurableQueryModule,
      providers: [
        {
          provide: QUERY_CONFIG,
          useValue: nzxQueryConfig,
        },
      ],
    };
  }
  static forChild(
    nzxQueryConfig: NzxQueryConfig
  ): ModuleWithProviders<NzxConfigurableQueryModule> {
    return {
      ngModule: NzxConfigurableQueryModule,
      providers: [
        {
          provide: QUERY_CONFIG,
          useValue: nzxQueryConfig,
        },
        NzxQueryConfigService,
      ],
    };
  }
}
