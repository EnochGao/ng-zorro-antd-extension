import { InjectionToken } from '@angular/core';

export interface NzxConfig {
  nzxSafeNull?: SafeNull;
}

export interface SafeNull {
  placeholder?: any;
}
export type NzxConfigKey = keyof NzxConfig;

/**
 * User should provide an object implements this interface to set global configurations.
 */
export const NZX_CONFIG = new InjectionToken<NzxConfig>('nzx-config');
