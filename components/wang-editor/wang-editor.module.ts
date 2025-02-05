import { NgModule } from '@angular/core';

import { NzxWangEditorDirective } from './wang-editor.component';
import { NzxWangToolbarDirective } from './wang-toolbar.component';

@NgModule({
  imports: [NzxWangToolbarDirective, NzxWangEditorDirective],
  exports: [NzxWangToolbarDirective, NzxWangEditorDirective],
})
export class NzxWangEditorModule {}
