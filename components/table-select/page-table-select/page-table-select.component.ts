/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { NzxTableAdaptor } from 'ng-zorro-antd-extension/table-adaptor';
import { NzxAbstractTableSelect } from '../abstract-table-select';
import { PageTableRequire } from '../type';

/**
 * 通用table选择组件，支持分页，确保list中有唯一标识字段
 * uniqueKey默认为id
 *
 */
@Component({
  selector: 'nzx-page-table-select',
  templateUrl: './page-table-select.component.html',
  styleUrls: ['./page-table-select.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzxPageTableSelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxPageTableSelectComponent<T extends PageTableRequire>
  extends NzxAbstractTableSelect<T>
  implements OnChanges
{
  /** loading加载条标志位 */
  @Input() loading = false;
  /** 分页总条数 */
  @Input() nzTotal = 0;

  /** 表单指令实例用来刷新重置 */
  @ViewChild(NzxTableAdaptor, { static: true })
  public nzxTableAdaptorRef!: NzxTableAdaptor;

  private cd = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['list'] || changes['nzTotal']) {
      this.refreshCheckedStatus();
    }
  }
}
