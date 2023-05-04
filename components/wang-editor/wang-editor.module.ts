import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzxWangEditorDirective } from './wang-editor.component';
import { NzxWangToolbarDirective } from './wang-toolbar.component';

@NgModule({
  declarations: [NzxWangToolbarDirective, NzxWangEditorDirective],
  imports: [CommonModule],
  exports: [NzxWangToolbarDirective, NzxWangEditorDirective],
})
export class NzxWangEditorModule {}
