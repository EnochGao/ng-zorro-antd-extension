import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

import { NzxConfig, NzxConfigKey, NZX_CONFIG } from './config';

const isDefined = function (value?: any): boolean {
  return value !== void 0;
};

@Injectable({
  providedIn: 'root',
})
export class NzxConfigService {
  private configUpdated$ = new Subject<keyof NzxConfig>();

  /** Global config holding property. */
  private readonly config: NzxConfig;

  constructor(@Optional() @Inject(NZX_CONFIG) defaultConfig?: NzxConfig) {
    this.config = defaultConfig || {};
  }

  getConfig(): NzxConfig {
    return this.config;
  }

  getConfigForComponent<T extends NzxConfigKey>(
    componentName: T
  ): NzxConfig[T] {
    return this.config[componentName];
  }

  getConfigChangeEventForComponent(
    componentName: NzxConfigKey
  ): Observable<void> {
    return this.configUpdated$.pipe(
      filter((n) => n === componentName),
      mapTo(undefined)
    );
  }

  set<T extends NzxConfigKey>(componentName: T, value: NzxConfig[T]): void {
    this.config[componentName] = { ...this.config[componentName], ...value };
    this.configUpdated$.next(componentName);
  }
}

/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */

export function ExtensionWithConfig<T>() {
  return function ConfigDecorator(
    target: any,
    propName: any,
    originalDescriptor?: TypedPropertyDescriptor<T>
  ): any {
    const privatePropName = `$$__zorroExtensionConfigDecorator__${propName}`;

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true,
      enumerable: false,
    });

    return {
      get(): T | undefined {
        const originalValue = originalDescriptor?.get
          ? originalDescriptor.get.bind(this)()
          : this[privatePropName];
        const assignedByUser =
          (this.propertyAssignCounter?.[propName] || 0) > 1;
        const configValue = this.nzxConfigService.getConfigForComponent(
          this._nzModuleName
        )?.[propName];
        if (assignedByUser && isDefined(originalValue)) {
          return originalValue;
        } else {
          return isDefined(configValue) ? configValue : originalValue;
        }
      },
      set(value?: T): void {
        // If the value is assigned, we consider the newly assigned value as 'assigned by user'.
        this.propertyAssignCounter = this.propertyAssignCounter || {};
        this.propertyAssignCounter[propName] =
          (this.propertyAssignCounter[propName] || 0) + 1;

        if (originalDescriptor?.set) {
          originalDescriptor.set.bind(this)(value!);
        } else {
          this[privatePropName] = value;
        }
      },
      configurable: true,
      enumerable: true,
    };
  };
}
