import { InjectionToken } from '@angular/core';

export interface NzxConfig {
  nzxSafeNull?: SafeNull;
  nzxTrim?: Trim;
  nzxTableAdaptor?: TableAdaptor;
}

export interface SafeNull {
  placeholder?: any;
}
export interface Trim {
  trimType: 'trim' | 'trimStart' | 'trimEnd';
}
export interface TableAdaptor {}

export type NzxConfigKey = keyof NzxConfig;

/**
 * User should provide an object implements this interface to set global configurations.
 */
export const NZX_CONFIG = new InjectionToken<NzxConfig>('nzx-config');
