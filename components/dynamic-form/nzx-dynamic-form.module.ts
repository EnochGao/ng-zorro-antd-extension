import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [],
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
