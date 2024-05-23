import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ExtensionWithConfig,
  NzxConfigKey,
  NzxConfigService,
} from 'ng-zorro-antd-extension/core/config';

const NZ_CONFIG_MODULE_NAME: NzxConfigKey = 'nzxSafeUrl';

@Pipe({
  name: 'nzxSafeUrl',
})
export class NzxSafeUrlPipe implements PipeTransform {
  readonly _nzModuleName: NzxConfigKey = NZ_CONFIG_MODULE_NAME;
  @ExtensionWithConfig() protocol: 'http' | 'https' | undefined;

  private nzxConfigService: NzxConfigService = inject(NzxConfigService);
  private domSanitizer: DomSanitizer = inject(DomSanitizer);

  transform(value: string, protocol = this.protocol): SafeUrl {
    if (/^(http|https|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value)) {
      if (protocol) {
        value = value.replace(/^(http|https)/, protocol);
      }
      return this.domSanitizer.bypassSecurityTrustUrl(value);
    }

    return value;
  }
}
