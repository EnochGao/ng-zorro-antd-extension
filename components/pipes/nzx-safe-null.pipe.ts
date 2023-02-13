import { inject, Pipe, PipeTransform } from '@angular/core';
import {
  ExtensionWithConfig,
  NzxConfigKey,
  NzxConfigService,
} from 'ng-zorro-antd-extension/core/config';

const NZ_CONFIG_MODULE_NAME: NzxConfigKey = 'nzxSafeNull';

@Pipe({
  name: 'nzxSafeNull',
})
export class NzxSafeNullPipe implements PipeTransform {
  readonly _nzModuleName: NzxConfigKey = NZ_CONFIG_MODULE_NAME;
  @ExtensionWithConfig() placeholder: string = '--';

  private nzxConfigService: NzxConfigService = inject(NzxConfigService);

  transform(value: any, placeholder = this.placeholder): string {
    if (value === null || value === void 0 || value === '') {
      return placeholder;
    }
    return value;
  }
}
