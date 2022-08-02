import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nzx-map-pipe-demo',
  templateUrl: './nzx-map-pipe-demo.component.html',
  styleUrls: ['./nzx-map-pipe-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxMapPipeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
