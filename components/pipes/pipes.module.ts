import { NgModule } from '@angular/core';

import { NzxMapPipe } from './map.pipe';
import { NzxSafeNullPipe } from './safe-null.pipe';

@NgModule({
  declarations: [NzxMapPipe, NzxSafeNullPipe],
  exports: [NzxMapPipe, NzxSafeNullPipe],
})
export class NzxPipesModule {}
