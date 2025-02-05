import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  exports: [],
})
export class NzxDynamicFormModule {
  static forRoot(): ModuleWithProviders<NzxDynamicFormModule> {
    return {
      ngModule: NzxDynamicFormModule,
      providers: [],
    };
  }
}
