import { ModuleWithProviders, NgModule } from '@angular/core';

import { NzxConfigurableQueryComponent } from './configurable-query.component';
import { NzxControlDirective } from './control.directive';
import { NzxQueryConfigService, QUERY_CONFIG } from './query-config.service';
import { NzxQueryConfig } from './type';

@NgModule({
  imports: [NzxControlDirective, NzxConfigurableQueryComponent],
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
