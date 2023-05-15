import { Directive, ViewChild } from '@angular/core';
import { NzxTableAdaptor } from './table-adaptor.directive';

@Directive()
export class NzxPageTableBase<T = any> {
  /** 列表数据 */
  list: Array<T> = [];
  /** loading加载条标志位 */
  loading = false;
  /** 分页总条数 */
  nzTotal = 0;

  /** 表单指令实例用来刷新重置 */
  @ViewChild(NzxTableAdaptor, { static: true })
  public nzxTableAdaptorRef!: NzxTableAdaptor;
}
