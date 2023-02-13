import { NgModule } from '@angular/core';

import { MapPipe } from './map.pipe';
import { NzxSafeNullPipe } from './nzx-safe-null.pipe';

@NgModule({
  declarations: [MapPipe, NzxSafeNullPipe],
  exports: [MapPipe, NzxSafeNullPipe],
})
export class PipesModule {}
