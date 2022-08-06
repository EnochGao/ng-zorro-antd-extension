import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzxSimpleTableConfig } from 'ng-zorro-antd-extension/simple-table';
interface Person {
  id: number;
  name: string;
  age: number;
  class: 1 | 2;
}

@Component({
  selector: 'app-simple-table-demo',
  templateUrl: './simple-table-demo.component.html',
  styleUrls: ['./simple-table-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTableDemoComponent implements OnInit {

  config: Array<NzxSimpleTableConfig<Person>> = [
    { header: 'id', key: 'id', width: '50px', },
    { header: '姓名', key: 'name', },
    { header: '年龄', key: 'age', },
    {
      header: '班级', key: 'class',
      /**
       * 数据格式化函数
       */
      format: (data: Person) => {
        if (data.class === 1) {
          return '一班';
        }
        return '二班';
      }
    }
  ];

  list: Person[] = [
    { id: 1, name: 'enochgao', age: 18, class: 1 },
    { id: 2, name: 'zhangsan', age: 19, class: 2 },
  ];

  private counter = 2;

  constructor() { }

  ngOnInit(): void {
    console.log();
  }

  add() {
    const classNo = Number((Math.random() + 1).toFixed()) as (1 | 2);
    this.list = [...this.list, { id: ++this.counter, name: `xxx${this.counter}`, age: 18, class: classNo }];
  }

  remove(data: Person) {
    this.list = this.list.filter(i => i.id !== data.id);
    --this.counter;
  }

}
