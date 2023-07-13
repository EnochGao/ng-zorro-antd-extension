import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NzxAclDirective } from './nzx-acl.directive';
import { NzxAclService } from './nzx-acl.service';

@NgModule({
  imports: [CommonModule],
  declarations: [NzxAclDirective],
  exports: [NzxAclDirective],
})
export class NzxAclModule {
  static forRoot(): ModuleWithProviders<NzxAclModule> {
    return {
      ngModule: NzxAclModule,
      providers: [NzxAclService],
    };
  }
}
