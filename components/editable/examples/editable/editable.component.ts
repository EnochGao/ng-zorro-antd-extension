import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzxEditableModule } from 'ng-zorro-antd-extension/editable';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzxEditableModule,
    NzInputModule,
  ],
  selector: 'nzx-editable-example',
  templateUrl: './editable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxEditableExampleComponent {
  textValue = 'aa';

  list = [
    {
      name: 'EnochGao',
      age: 18,
    },
    {
      name: 'zhangsan',
      age: 20,
    },
  ];

  log() {
    console.log('list string:::', JSON.stringify(this.list));
    console.log('list:::', this.list);
  }
}
