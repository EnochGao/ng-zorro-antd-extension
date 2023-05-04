import {
  Directive,
  HostListener,
  Input,
  forwardRef,
  inject,
} from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  ExtensionWithConfig,
  NzxConfigKey,
  NzxConfigService,
} from 'ng-zorro-antd-extension/core/config';

const NZ_CONFIG_MODULE_NAME: NzxConfigKey = 'nzxTrim';

@Directive({
  selector: '[nzxTrim]',
  exportAs: 'NzxTrim',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzxTrimDirective),
      multi: true,
    },
  ],
})
export class NzxTrimDirective extends DefaultValueAccessor {
  readonly _nzModuleName: NzxConfigKey = NZ_CONFIG_MODULE_NAME;
  private nzxConfigService: NzxConfigService = inject(NzxConfigService);

  /**
   * - trim 前后过滤空格
   * - trimStart 过滤前空格
   * - trimEnd 过滤后空格
   */
  @ExtensionWithConfig()
  @Input()
  trimType: 'trim' | 'trimStart' | 'trimEnd' = 'trim';

  @HostListener('input', ['$event.target.value'])
  ngOnChange = (val: string) => {
    const value = val[this.trimType]();
    this.onChange(value);
    // const normalizedValue = value == null ? '' : value;
    // this.setProperty('value', normalizedValue);
  };

  @HostListener('blur', ['$event.target.value'])
  ngOnBlur = (val: string) => {
    this.writeValue(val[this.trimType]());
    this.onTouched();
  };

  override writeValue(value: any): void {
    if (typeof value === 'string') {
      value = value[this.trimType]();
    }
    super.writeValue(value);
  }
}
