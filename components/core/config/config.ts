import { InjectionToken } from '@angular/core';

export interface NzxConfig {
  nzxSafeNull?: SafeNull;
  nzxSafeUrl?: SafeUrl;
  nzxTrim?: Trim;
  nzxTableAdaptor?: TableAdaptor;
  nzxTimerButton?: TimerButton;
}

export interface SafeNull {
  placeholder?: any;
}
export interface SafeUrl {
  protocol: 'http' | 'https';
}
export interface Trim {
  trimType: 'trim' | 'trimStart' | 'trimEnd';
}
export interface TableAdaptor {
  enableCache: boolean;
  dateFormat: string;
  customFormateOutFn: (queryParams: any) => any;
}
export interface TimerButton {
  duration: number;
}

export type NzxConfigKey = keyof NzxConfig;

/**
 * User should provide an object implements this interface to set global configurations.
 */
export const NZX_CONFIG = new InjectionToken<NzxConfig>('nzx-config');
