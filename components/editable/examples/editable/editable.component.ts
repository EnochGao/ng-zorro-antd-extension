import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzxEditableModule } from 'ng-zorro-antd-extension/editable';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
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
    NzDescriptionsModule,
    NzxEditableModule,
  ],
  selector: 'nzx-editable-example',
  templateUrl: './editable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxEditableExampleComponent {
  userDetail = {
    userName: 'enochgao',
    age: null,
    live: 'QingDao',
  };

  list = [
    {
      name: 'EnochGao',
      age: 18,
      country: 'china',
    },
    {
      name: 'zhangsan',
      age: 20,
      country:
        'china england usa china england usa china england usa china england usa',
    },
  ];

  log() {
    console.log('list string:::', JSON.stringify(this.list));
    console.log('list:::', this.list);
  }

  logDetail() {
    console.log('userDetail string:::', JSON.stringify(this.userDetail));
    console.log('userDetail:::', this.userDetail);
  }
}
