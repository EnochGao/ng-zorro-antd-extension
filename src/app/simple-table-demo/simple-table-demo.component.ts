import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-table-demo',
  templateUrl: './simple-table-demo.component.html',
  styleUrls: ['./simple-table-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
