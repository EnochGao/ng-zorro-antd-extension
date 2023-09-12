import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Optional,
  Renderer2,
  forwardRef,
  inject,
} from '@angular/core';

import { ɵgetDOM as getDOM } from '@angular/common';
import {
  DefaultValueAccessor,
  NG_VALUE_ACCESSOR,
  COMPOSITION_BUFFER_MODE,
  ControlValueAccessor,
} from '@angular/forms';
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
export class NzxTrimDirective implements ControlValueAccessor {
  readonly _nzModuleName: NzxConfigKey = NZ_CONFIG_MODULE_NAME;
  private nzxConfigService: NzxConfigService = inject(NzxConfigService);
  private _composing = false;

  onChange = (_: any) => {};
  onTouched = () => {};

  /**
   * - trim 前后过滤空格
   * - trimStart 过滤前空格
   * - trimEnd 过滤后空格
   */
  @ExtensionWithConfig()
  @Input()
  trimType: 'trim' | 'trimStart' | 'trimEnd' = 'trim';

  @HostListener('input', ['$event.target.value'])
  input(val: string) {
    const value = val[this.trimType]();
    this.setProperty('value', value);
    (this as any)._handleInput(value);
  }

  @HostListener('compositionstart', ['$event'])
  compositionstart(val: string) {
    (this as any)._compositionStart();
  }

  @HostListener('compositionend', ['$event.target.value'])
  compositionend(val: any) {
    (this as any)._compositionEnd(val);
  }

  @HostListener('blur', ['$event.target.value'])
  blur(val: string) {
    this.onTouched();
  }
  /** @internal */
  _handleInput(value: any): void {
    if (!this._compositionMode || (this._compositionMode && !this._composing)) {
      this.onChange(value);
    }
  }

  /** @internal */
  _compositionStart(): void {
    this._composing = true;
  }

  /** @internal */
  _compositionEnd(value: any): void {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }

  constructor(
    private _renderer: Renderer2,
    private _elementRef: ElementRef,
    @Optional()
    @Inject(COMPOSITION_BUFFER_MODE)
    private _compositionMode: boolean
  ) {
    if (this._compositionMode == null) {
      this._compositionMode = !this._isAndroid();
    }
  }

  _isAndroid(): boolean {
    const userAgent = getDOM() ? getDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
  }

  writeValue(value: any): void {
    if (typeof value === 'string') {
      value = value[this.trimType]();
      console.log(value);
    }
    const normalizedValue = value == null ? '' : value;
    this.setProperty('value', normalizedValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setProperty(key: string, value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
}
