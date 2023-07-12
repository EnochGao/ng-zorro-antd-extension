import { NgModule } from '@angular/core';
import { NzxJigsawComponent } from './jigsaw.component';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [CommonModule, NzIconModule],
  declarations: [NzxJigsawComponent],
  exports: [NzxJigsawComponent],
})
export class NzxJigsawModule {}
