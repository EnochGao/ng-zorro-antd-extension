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

import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzxConfigurableQueryItemComponent } from './configurable-query-item/configurable-query-item.component';
import { NzxConfigurableQueryComponent } from './configurable-query.component';
import { NzxControlDirective } from './control.directive';
import { NzxDatePickerControlComponent } from './controls/date-picker.control';
import { NzxInputControlComponent } from './controls/input.control';
import { NzxRangePickerControlComponent } from './controls/range-picker.control';
import { NzxSelectControlComponent } from './controls/select.control';
import { NzxTemplateControlComponent } from './controls/template.control';
import { NzxQueryConfigService, QUERY_CONFIG } from './query-config.service';
import { NzxQueryConfig } from './type';

@NgModule({
  declarations: [
    NzxConfigurableQueryComponent,
    NzxControlDirective,
    NzxConfigurableQueryItemComponent,
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
