import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NzxTableSelectModule } from 'ng-zorro-antd-extension/table-select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { Observable, catchError, of } from 'rxjs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzxTableQueryParams } from 'ng-zorro-antd-extension/table-adaptor';
import { NzxQueryControlOptions } from 'ng-zorro-antd-extension/configurable-query';
import { NzImageModule } from 'ng-zorro-antd/image';

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
    NzImageModule,
    NzButtonModule,
    NzCardModule,
    NzRateModule,
    NzMessageModule,
    NzxTableSelectModule,
  ],
})
export class NzxPageTableSelectExampleComponent {
  selected = [];
  list: any[] = [];
  controls: Array<NzxQueryControlOptions> = [
    {
      controlName: 'nat',
      label: '国籍',
      placeholder: '国籍',
      controlType: 'input',
    },
  ];
  total = 0;

  tableConfig = [
    {
      label: '姓名',
      key: 'name',
      format: (data: any) => {
        return `${data.name.first}${data.name.last}`;
      },
    },
    { label: '性别', key: 'gender' },
    { label: '国籍', key: 'nat' },
    { label: 'Email', key: 'email' },
    { label: 'photo', key: 'picture' },
  ];

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  queryParamsChange(params: NzxTableQueryParams) {
    console.log('ssssssss', params);

    this.getUsers(params).subscribe((res) => {
      console.log('result::', res);
      this.list = res.results;
      this.total = 200;
      this.cd.markForCheck();
    });
  }

  private getUsers(
    params: NzxTableQueryParams
  ): Observable<{ results: any[] }> {
    const { pageSize, pageIndex, sort, filter, nat } = params;

    let httpParams = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('nat', `${nat}`);

    return this.http
      .get<{ results: any[] }>('https://api.randomuser.me/', {
        params: httpParams,
      })
      .pipe(catchError(() => of({ results: [] })));
  }
}
