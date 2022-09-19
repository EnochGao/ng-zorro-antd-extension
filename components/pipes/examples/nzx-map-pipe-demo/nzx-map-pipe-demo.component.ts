import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzxSimpleTableConfig } from 'ng-zorro-antd-extension/simple-table';
interface Person {
  id: number;
  name: string;
  age: number;
  class: 1 | 2;
  course?: string[];
}
@Component({
  selector: 'nzx-map-pipe-demo',
  templateUrl: './nzx-map-pipe-demo.component.html',
  styleUrls: ['./nzx-map-pipe-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxMapPipeDemoComponent implements OnInit {
  list: Person[] = [
    { id: 1, name: 'enochgao', age: 18, class: 1, course: ['语文', '物理'] },
    { id: 2, name: 'zhangsan', age: 19, class: 2, course: ['政治', '英语'] },
  ];

  classMap = { 1: '一班', 2: '二班' };

  private counter = 2;

  constructor() {}

  ngOnInit(): void {
    console.log();
  }

  add() {
    const classNo = Number((Math.random() + 1).toFixed()) as 1 | 2;
    this.list = [
      ...this.list,
      {
        id: ++this.counter,
        name: `xxx${this.counter}`,
        age: 18,
        class: classNo,
        course: [Math.random().toString(), Math.random().toString()],
      },
    ];
  }

  remove(data: Person) {
    this.list = this.list.filter((i) => i.id !== data.id);
    --this.counter;
  }
}
