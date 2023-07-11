import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NzxJigsawModule } from 'ng-zorro-antd-extension/jigsaw';

@Component({
  standalone: true,
  imports: [CommonModule, NzxJigsawModule],
  selector: 'nzx-jigsaw-example',
  template: ` <nzx-jigsaw></nzx-jigsaw> `,
})
export class NzxJigsawExampleComponent {}
