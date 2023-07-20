import { NgModule } from '@angular/core';

import { NzxMapPipe } from './map.pipe';
import { NzxSafeNullPipe } from './safe-null.pipe';
import { NzxSafeUrlPipe } from './safe-url.pipe';
import { NzxSafeStylePipe } from './safe-style.pipe';
import { NzxSafeHtmlPipe } from './safe-html.pipe';
import { NzxSafeResourceUrlPipe } from './safe-resource-url.pipe';
import { NzxSafeScriptPipe } from './safe-script.pipe';

@NgModule({
  declarations: [
    NzxMapPipe,
    NzxSafeNullPipe,
    NzxSafeUrlPipe,
    NzxSafeStylePipe,
    NzxSafeHtmlPipe,
    NzxSafeResourceUrlPipe,
    NzxSafeScriptPipe,
  ],
  exports: [
    NzxMapPipe,
    NzxSafeNullPipe,
    NzxSafeUrlPipe,
    NzxSafeStylePipe,
    NzxSafeHtmlPipe,
    NzxSafeResourceUrlPipe,
    NzxSafeScriptPipe,
  ],
})
export class NzxPipesModule {}
