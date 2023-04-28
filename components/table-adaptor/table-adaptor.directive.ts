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
import { format, isDate } from 'date-fns';
import {
  NzxConfigKey,
  NzxConfigService,
} from 'ng-zorro-antd-extension/core/config';
import { trimObject } from 'ng-zorro-antd-extension/util';
import {
  NzTableComponent,
  NzTableDataService,
  NzTableQueryParams,
} from 'ng-zorro-antd/table';
import { Subject, takeUntil } from 'rxjs';

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

  @Input() queryParams: Partial<NzxTableQueryParams> = {};
  @Input() enableCache = false;
  @Input() dateFormat = 'yyyy-MM-dd';

  @Output() nzxQueryParams: EventEmitter<NzxTableQueryParams> =
    new EventEmitter();
  @Output() nzxQueryCacheQueryParams: EventEmitter<NzxTableQueryParams> =
    new EventEmitter();

  private nzTableQueryParams!: NzTableQueryParams;
  private destroy$ = new Subject();
  private nzxConfigService!: NzxConfigService;

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
      .subscribe((queryParams: NzTableQueryParams) => {
        this.nzTableQueryParams = queryParams;
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
    this.destroy$.complete();
    this.destroy$.unsubscribe();
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
  reset(queryParams?: any) {
    if (queryParams) {
      this.queryParams = queryParams;
    } else {
      for (const key in this.queryParams) {
        if (Object.prototype.hasOwnProperty.call(this.queryParams, key)) {
          this.queryParams[key] = '';
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
    const queryParams: NzxTableQueryParams = {
      ...this.queryParams,
      ...this.nzTableQueryParams,
    };

    if (this.enableCache) {
      sessionStorage.setItem(
        CACHE_KEY + this.router.url,
        JSON.stringify(queryParams)
      );
    }

    for (const key in queryParams) {
      if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
        if (isDate(queryParams[key])) {
          queryParams[key] = format(queryParams[key], this.dateFormat);
        }
        if (Array.isArray(queryParams[key])) {
          queryParams[key] = queryParams[key].map((el: any) => {
            if (isDate(el)) {
              return format(el, this.dateFormat);
            }
            return el;
          });
        }
      }
    }

    this.nzxQueryParams.emit(trimObject(queryParams));
  }
}
