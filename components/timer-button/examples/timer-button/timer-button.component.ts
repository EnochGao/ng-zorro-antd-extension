import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzxTimerButtonModule } from 'ng-zorro-antd-extension/timer-button';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzxTimerButtonModule,
  ],
  selector: 'nzx-timer-button-example',
  templateUrl: './timer-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxTimerButtonExampleComponent {}
