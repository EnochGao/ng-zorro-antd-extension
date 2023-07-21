import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzxEditableComponent } from './editable.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzxEditInputComponent } from './input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxEditableDetailDirective } from './editable-detail.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NzxEditableComponent,
    NzxEditInputComponent,
    NzxEditableDetailDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
  ],
  exports: [NzxEditableComponent, NzxEditableDetailDirective],
})
export class NzxEditableModule {}
