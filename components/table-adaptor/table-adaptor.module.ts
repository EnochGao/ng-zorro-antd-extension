import { NgModule } from '@angular/core';
import { NzxTableAdaptor } from './table-adaptor.directive';

@NgModule({
  imports: [NzxTableAdaptor],
  exports: [NzxTableAdaptor],
})
export class NzxTableAdaptorModule {}
