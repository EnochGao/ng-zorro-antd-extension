import { Component, ViewChild } from '@angular/core';


import { HttpClient, HttpParams } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Observable, catchError, of } from 'rxjs';

import {
  NzxConfigurableQueryModule,
  NzxQueryControlOptions,
} from 'ng-zorro-antd-extension/configurable-query';
import {
  NzxTableAdaptor,
  NzxTableAdaptorModule,
  NzxTableQueryParams,
} from 'ng-zorro-antd-extension/table-adaptor';

interface RandomUser {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
}

@Component({
  imports: [
    FormsModule,
    NzButtonModule,
    NzTableModule,
    NzxConfigurableQueryModule,
    NzxTableAdaptorModule
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

  @ViewChild('adaptor') private adaptorRef!: NzxTableAdaptor;

  constructor(private http: HttpClient) {}

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
