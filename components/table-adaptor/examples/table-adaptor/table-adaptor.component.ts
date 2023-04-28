import { Component, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  NzxTableAdaptor,
  NzxTableAdaptorModule,
  NzxTableQueryParams,
} from 'ng-zorro-antd-extension/table-adaptor';
import {
  NzxConfigurableQueryComponent,
  NzxConfigurableQueryModule,
  NzxQueryControlOptions,
} from 'ng-zorro-antd-extension/configurable-query';
import { NzTableModule } from 'ng-zorro-antd/table';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

interface RandomUser {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,

    FormsModule,
    NzCheckboxModule,

    NzButtonModule,
    NzTableModule,
    NzxConfigurableQueryModule,
    NzxTableAdaptorModule,
  ],
  selector: 'nzx-table-adaptor-example',
  templateUrl: './table-adaptor.component.html',
})
export class NzxTableAdaptorExampleComponent {
  controls: Array<NzxQueryControlOptions> = [
    {
      controlName: 'nat',
      label: '国籍',
      placeholder: '国籍',
      controlType: 'input',
    },
  ];

  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' },
  ];

  list: RandomUser[] = [];
  loading = true;
  total = 1;

  cacheQuery = false;

  @ViewChild('adaptor') private adaptorRef!: NzxTableAdaptor;
  @ViewChild('configQuery', { static: true })
  private configQuery!: NzxConfigurableQueryComponent;

  constructor(private http: HttpClient) {}

  cache(data: any) {
    console.log('cache::', data);

    this.configQuery.setQueryParams({ nat: 'cn' });
  }

  refresh(current: boolean = false) {
    this.adaptorRef.refresh(current);
  }

  loadData(params: NzxTableQueryParams) {
    console.log('查询参数', params);
    this.loading = true;

    this.getUsers(params).subscribe((data) => {
      this.loading = false;
      this.total = 200;
      this.list = data.results;
    });
  }

  private getUsers(
    params: NzxTableQueryParams
  ): Observable<{ results: RandomUser[] }> {
    const { pageSize, pageIndex, sort, filter, nat } = params;
    const currentSort = sort.find((item: any) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;

    let httpParams = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`)
      .append('nat', `${nat}`);

    filter.forEach((f) => {
      f.value.forEach((value: any) => {
        httpParams = httpParams.append(f.key, value);
      });
    });
    return this.http
      .get<{ results: RandomUser[] }>('https://api.randomuser.me/', {
        params: httpParams,
      })
      .pipe(catchError(() => of({ results: [] })));
  }
}
