/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { NzxAbstractTableSelect } from '../abstract-table-select';
import { PageTableRequire } from '../type';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzxConfigurableQueryModule } from 'ng-zorro-antd-extension/configurable-query';
import { NzxTableAdaptorModule } from 'ng-zorro-antd-extension/table-adaptor';
import { NzxPipesModule } from 'ng-zorro-antd-extension/pipes';
/**
 * 通用table选择组件，确保list中有唯一标识字段
 * uniqueKey默认为id
 */
@Component({
  selector: 'nzx-table-select',
  templateUrl: './table-select.component.html',
  styleUrls: ['./table-select.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzxTableSelectComponent),
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzxConfigurableQueryModule,
    NzxTableAdaptorModule,
    NzxPipesModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'NzxTableSelect',
})
export class NzxTableSelectComponent<T extends PageTableRequire>
  extends NzxAbstractTableSelect<T>
  implements OnChanges
{
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list']) {
      this.refreshCheckedStatus();
    }
  }
}
