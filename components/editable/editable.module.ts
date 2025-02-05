import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzxEditableComponent } from './editable.component';
@NgModule({
  declarations: [],
  imports: [NzxEditableComponent],
  exports: [NzxEditableComponent],
})
export class NzxEditableModule {}
