import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nzx-table-form-demo',
  templateUrl: './nzx-table-form-demo.component.html',
  styleUrls: ['./nzx-table-form-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxTableFormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log();

  }

}
