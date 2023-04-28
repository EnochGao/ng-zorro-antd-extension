/* eslint-disable @angular-eslint/directive-class-suffix */
import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  inject,
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
  @Input() cacheQuery = false;
  @Input() dateFormat = 'yyyy-MM-dd';

  @Output() nzxQueryParams: EventEmitter<NzxTableQueryParams> =
    new EventEmitter();
  @Output() nzxQueryCacheQueryParams: EventEmitter<NzxTableQueryParams> =
    new EventEmitter();

  private pageIndex = 1;
  private pageSize = 10;
  private nzTableParam!: NzTableQueryParams;
  private destroy$ = new Subject();
  private nzxConfigService!: NzxConfigService;

  private nzTable: NzTableComponent<any> = inject(NzTableComponent);
  private nzTableDataService: NzTableDataService<any> =
    inject(NzTableDataService);

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.cacheQuery) {
      const str = sessionStorage.getItem(CACHE_KEY + this.router.url);
      if (str) {
        const page = JSON.parse(str);
        this.pageSize = page.pageSize;
        this.pageIndex = page.pageIndex;

        for (const key in page) {
          if (
            Object.prototype.hasOwnProperty.call(page, key) &&
            key !== 'pageSize' &&
            key !== 'pageIndex'
          ) {
            this.queryParams[key] = page[key];
          }
        }

        this.nzxQueryCacheQueryParams.emit(page);
      }
    }

    // this.pageIndex = this.queryParams?.pageIndex || 1;
    // this.pageSize = this.queryParams?.pageSize || 10;
    this.nzTable.nzFrontPagination = false;
    // 用来解决nzTable分页不能及时更新界面问题
    this.nzTableDataService.updateFrontPagination(false);
    this.nzTable.nzPageIndex = this.pageIndex;
    this.nzTableDataService.updatePageIndex(this.pageIndex);
    this.nzTable.nzPageSize = this.pageSize;
    this.nzTableDataService.updatePageSize(this.pageSize);
    this.nzTable.nzShowSizeChanger = true;

    this.nzTable.nzQueryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((queryParams: NzTableQueryParams) => {
        this.pageIndex = queryParams.pageIndex;
        this.pageSize = queryParams.pageSize;
        this.nzTableParam = queryParams;
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
    setTimeout(() => {
      if (currentPage) {
        this.emit();
      } else {
        this.queryToFirstPage();
      }
    }, 0);
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
    this.queryToFirstPage();
  }

  private queryToFirstPage() {
    this.pageIndex = 1;
    this.nzTableDataService.updatePageIndex(this.pageIndex);
    this.emit();
  }

  private emit() {
    const queryParams = Object.assign(this.queryParams, {
      pageSize: this.pageSize,
      pageIndex: this.pageIndex,
      sort: this.nzTableParam?.sort,
      filter: this.nzTableParam?.filter,
    });

    if (this.cacheQuery) {
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
