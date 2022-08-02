import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-group-demo',
  templateUrl: './checkbox-group-demo.component.html',
  styleUrls: ['./checkbox-group-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxGroupDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
