/* eslint-disable @angular-eslint/directive-class-suffix */
import {
  Directive,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { Subject, takeUntil } from 'rxjs';
import { format, isDate } from 'date-fns';
import {
  NzTableComponent,
  NzTableDataService,
  NzTableQueryParams,
} from 'ng-zorro-antd/table';

import { trimObject } from 'ng-zorro-antd-extension/util';
import {
  ExtensionWithConfig,
  NzxConfigKey,
  NzxConfigService,
} from 'ng-zorro-antd-extension/core/config';

const NZ_CONFIG_MODULE_NAME: NzxConfigKey = 'nzxTableAdaptor';

export interface NzxTableQueryParams extends NzTableQueryParams {
  [key: string]: string | number | Date | any;
}

const CACHE_KEY = 'NZX_TABLE_ADAPTOR';

@Directive({
  selector: 'nz-table[nzxTableAdaptor]',
  exportAs: 'NzxTableAdaptor',
})
export class NzxTableAdaptor implements OnInit, OnDestroy {
  readonly _nzModuleName: NzxConfigKey = NZ_CONFIG_MODULE_NAME;

  @Input() set queryParams(value: any) {
    this._queryParams = value;
  }
  get queryParams() {
    return this._queryParams;
  }

  @ExtensionWithConfig() @Input() enableCache = false;
  @ExtensionWithConfig() @Input() dateFormat = 'yyyy-MM-dd';

  @ExtensionWithConfig() @Input() customFormateOutFn: (params: any) => any = (
    params: any
  ) => {
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        if (isDate(params[key])) {
          params[key] = format(params[key], this.dateFormat);
        }
        if (Array.isArray(params[key])) {
          params[key] = params[key].map((el: any) => {
            if (isDate(el)) {
              return format(el, this.dateFormat);
            }
            return el;
          });
        }
      }
    }

    return trimObject(params);
  };

  @Output() nzxQueryParams: EventEmitter<NzxTableQueryParams> =
    new EventEmitter();
  @Output() nzxQueryCacheQueryParams: EventEmitter<NzxTableQueryParams> =
    new EventEmitter();

  private _queryParams: Partial<NzxTableQueryParams> = {};

  private nzTableQueryParams!: NzTableQueryParams;
  private destroy$ = new Subject<void>();
  private nzxConfigService: NzxConfigService = inject(NzxConfigService);

  private nzTable: NzTableComponent<any> = inject(NzTableComponent);

  private nzTableDataService: NzTableDataService<any> =
    inject(NzTableDataService);

  constructor(private router: Router) {
    // 服务端分页
    setTimeout(() => {
      this.nzTable.nzShowSizeChanger = true;
      this.nzTable.nzFrontPagination = false;
      this.nzTableDataService.updateFrontPagination(false);
    }, 0);

    // 用来解决nzTable分页不能及时更新界面问题
    this.nzTable.nzQueryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: NzTableQueryParams) => {
        this.nzTableQueryParams = params;
        this.emit();
      });

    this.nzTable.nzCurrentPageDataChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: any) => {
        if (this.nzTable.nzData.length === 0 && this.nzTable.nzTotal > 0) {
          const index: number = this.nzTable.nzPageIndex - 1;
          this.nzTable.onPageIndexChange(index);
        }
      });
  }

  ngOnInit() {
    this.nzTableDataService.updatePageIndex(1);
    this.nzTableDataService.updatePageSize(10);

    if (this.enableCache) {
      const str = sessionStorage.getItem(CACHE_KEY + this.router.url);
      if (str) {
        const page = JSON.parse(str);
        this.nzTableDataService.updatePageIndex(page.pageIndex);
        this.nzTableDataService.updatePageSize(page.pageSize);
        this.nzxQueryCacheQueryParams.emit(page);
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * currentPage
   * - true 查询当前页
   * - false 跳转第一页
   *
   * 默认跳转第一页
   */
  refresh(currentPage?: boolean) {
    if (currentPage) {
      this.emit();
    } else {
      if (this.nzTable.nzPageIndex === 1) {
        // 当前页标不变主动查询一次
        this.emit();
      } else {
        this.nzTableDataService.updatePageIndex(1);
      }
    }
  }

  /**
   * 重置查询条件并查询
   */
  reset(params?: any) {
    if (params) {
      this._queryParams = params;
    } else {
      for (const key in this._queryParams) {
        if (Object.prototype.hasOwnProperty.call(this._queryParams, key)) {
          this._queryParams[key] = '';
        }
      }
    }
    if (this.nzTable.nzPageIndex === 1) {
      // 当前页标不变主动查询一次
      this.emit();
    } else {
      this.nzTableDataService.updatePageIndex(1);
    }
  }

  private emit() {
    const params: NzxTableQueryParams = {
      ...this._queryParams,
      ...this.nzTableQueryParams,
    };

    if (this.enableCache) {
      sessionStorage.setItem(
        CACHE_KEY + this.router.url,
        JSON.stringify(params)
      );
    }

    this.nzxQueryParams.emit(this.customFormateOutFn(params));
  }
}
