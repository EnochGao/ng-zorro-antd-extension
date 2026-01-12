import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  NzxQueryControlOptions,
  NzxQueryParams,
} from 'ng-zorro-antd-extension/configurable-query';
import { NzxTableQueryParams } from 'ng-zorro-antd-extension/table-adaptor';
import { NzxTableSelectModule } from 'ng-zorro-antd-extension/table-select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzImageModule } from 'ng-zorro-antd/image';
import { Observable, catchError, finalize, of } from 'rxjs';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'nzx-page-table-select-demo',
  templateUrl: './page-table-select.component.html',
  styleUrls: ['./page-table-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzImageModule,
    NzButtonModule,
    NzCardModule,
    NzSwitchModule,
    NzRadioModule,
    NzxTableSelectModule,
  ],
})
export class NzxPageTableSelectExampleComponent {
  private http = inject(HttpClient);
  private cd = inject(ChangeDetectorRef);
  private fb = inject(FormBuilder);

  settingForm: FormGroup;
  listOfSwitch = [{ name: 'Disable', formControlName: 'disabled' }];
  listOfRadio = [
    {
      name: 'Mode',
      formControlName: 'mode',
      listOfOption: [
        { value: 'single', label: '单选' },
        { value: 'multiple', label: '多选' },
      ],
    },
  ];

  selected = [];
  loading = false;

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

  constructor() {
    this.settingForm = this.fb.group({
      disabled: false,

      mode: 'single',
    });
  }

  queryParamsChange(params: any) {
    this.loading = true;
    this.getUsers(params)
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        })
      )
      .subscribe((res) => {
        console.log('result::', res);
        this.list = res.results;
        this.total = 200;
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
