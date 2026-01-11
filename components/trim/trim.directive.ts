import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  forwardRef,
  inject,
} from '@angular/core';

import { ɵgetDOM as getDOM } from '@angular/common';
import {
  COMPOSITION_BUFFER_MODE,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
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

  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  private _compositionMode = inject(COMPOSITION_BUFFER_MODE, {
    optional: true,
  });

  constructor() {
    if (this._compositionMode == null) {
      this._compositionMode = !this._isAndroid();
    }
  }

  @HostListener('input', ['$event'])
  input(e: Event) {
    const value = (e.target as HTMLInputElement).value[this.trimType]();
    this.setProperty('value', value);
    this._handleInput(value);
  }

  @HostListener('compositionstart', ['$event'])
  compositionstart(val: CompositionEvent) {
    this._compositionStart();
  }

  @HostListener('compositionend', ['$event'])
  compositionend(e: CompositionEvent) {
    this._compositionEnd((e.target as HTMLInputElement).value);
  }

  @HostListener('blur', ['$event'])
  blur(e: Event) {
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

  /** @internal */
  _isAndroid(): boolean {
    const userAgent = getDOM() ? getDOM().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
  }

  writeValue(value: any): void {
    if (typeof value === 'string') {
      value = value[this.trimType]();
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
