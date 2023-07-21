import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzxEditableModule } from 'ng-zorro-antd-extension/editable';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzCardModule,
    NzSpaceModule,
    NzxEditableModule,
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
      country: 'china',
    },
    {
      name: 'zhangsan',
      age: 20,
      country: 'china england usa china england usa china england usa china england usa',
    },
  ];

  log() {
    console.log('list string:::', JSON.stringify(this.list));
    console.log('list:::', this.list);
  }
}
