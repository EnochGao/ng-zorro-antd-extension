import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

import { NzxTableFormComponent } from 'ng-zorro-antd-extension/table-form';
import {
  NzxLimitMessage,
  NzxTableFormConfig,
} from 'ng-zorro-antd-extension/table-form/type';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxPipesModule } from 'ng-zorro-antd-extension/pipes';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzxTableFormModule } from 'ng-zorro-antd-extension/table-form';

@Component({
  selector: 'nzx-page-table-select-demo',
  templateUrl: './page-table-select.component.html',
  styleUrls: ['./page-table-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzxPipesModule,
    NzTableModule,
    NzRateModule,
    NzMessageModule,
    NzxTableFormModule,
  ],
})
export class NzxPageTableSelectExampleComponent {}
