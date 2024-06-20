import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';
import {
  NzxConfigurableQueryComponent,
  NzxConfigurableQueryModule,
} from 'ng-zorro-antd-extension/configurable-query';
import {
  NzxQueryControlOptions,
  NzxQueryParams,
} from 'ng-zorro-antd-extension/configurable-query/type';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import {
  controls,
  controls10,
  controls2,
  controls3,
  controls4,
  controls5,
  controls6,
  controls7,
  controls8,
  controls9,
} from './config';

@Component({
  selector: 'nzx-configurable-query-demo',
  templateUrl: './configurable-query.component.html',
  styleUrls: ['./configurable-query.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRateModule,
    NzxConfigurableQueryModule,
    NzButtonModule,
    NzSpaceModule,
  ],
})
export class NzxConfigurableQueryExampleComponent implements OnInit {
  queryParams: NzxQueryParams = {};
  controls: Array<NzxQueryControlOptions> = controls;

  queryParams2: NzxQueryParams = {};
  controls2: Array<NzxQueryControlOptions> = controls2;

  queryParams3: NzxQueryParams = {};
  controls3: Array<NzxQueryControlOptions> = controls3;

  queryParams4: NzxQueryParams = {};
  controls4: Array<NzxQueryControlOptions> = controls4;

  queryParams5: NzxQueryParams = {};
  controls5: Array<NzxQueryControlOptions> = controls5;

  queryParams6: NzxQueryParams = {};
  controls6: Array<NzxQueryControlOptions> = controls6;

  queryParams7: NzxQueryParams = {};
  controls7: Array<NzxQueryControlOptions> = controls7;
  @ViewChild('query7') private query7!: NzxConfigurableQueryComponent;

  cityList = [
    { label: '青岛', value: '青岛' },
    { label: '潍坊', value: '潍坊' },
    { label: '烟台', value: '烟台' },
  ];

  queryParams8: NzxQueryParams = {};
  controls8: Array<NzxQueryControlOptions> = controls8;
  @ViewChild('query8') private query8!: NzxConfigurableQueryComponent;

  queryParams9: NzxQueryParams = {};
  controls9: Array<NzxQueryControlOptions> = controls9;
  @ViewChild('query9', { static: true })
  private query9!: NzxConfigurableQueryComponent;

  queryParams10: NzxQueryParams = {};
  controls10: Array<NzxQueryControlOptions> = controls10;

  @ViewChild('levelRef', { static: true })
  private levelRef!: TemplateRef<any>;
  @ViewChild('query10', { static: true })
  private query10!: NzxConfigurableQueryComponent;

  addGender() {
    this.query10.addControl(
      {
        controlName: 'gender',
        label: '性别',
        placeholder: '请选择',
        controlType: 'select',
        menuList: [
          { label: '男', value: 1 },
          { label: '女', value: 2 },
        ],
        controlInstance: new FormControl(1, [Validators.required]),
        errorTip: '假设必填默认',
        nzxAllowClear: true,
      },
      2
    );
  }

  addLevel() {
    this.query10.addControl(
      {
        controlName: 'level',
        label: '职业等级',
        controlType: 'Template',
        templateRef: this.levelRef,
      },
      1
    );
  }

  removeLevel() {
    this.query10.removeControl('level');
  }
  removeGender() {
    this.query10.removeControl('gender');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.query7.setControl('city', { menuList: this.cityList });
    }, 3000);
    const cacheStr = sessionStorage.getItem('cacheParams');
    if (cacheStr) {
      this.query9.setQueryParams(JSON.parse(cacheStr));
    }
    setTimeout(() => {
      this.query9.setControl('city', { menuList: this.cityList });
    }, 3000);
  }

  queryChange(params: NzxQueryParams) {
    sessionStorage.setItem('cacheParams', JSON.stringify(params));
    console.log(params);
    this.queryParams9 = params;
  }
}
