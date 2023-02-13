import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxSafeNullPipe } from 'ng-zorro-antd-extension/pipes';
import { NzxSimpleTableConfig } from 'ng-zorro-antd-extension/simple-table';
interface Person {
  id: number;
  name: string;
  post: string;
  age: number;
  class: 1 | 2;
  course?: string[];
}
@Component({
  selector: 'nzx-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeDemoComponent {
  config: Array<NzxSimpleTableConfig<Person>> = [
    { header: 'id', key: 'id', width: '50px' },
    {
      header: '姓名',
      key: 'name',
      format: (person: Person) => {
        return this.nzxSafeNullPipe.transform(person.name);
      },
    },
    { header: '年龄', key: 'age' },
    { header: '班级', key: 'class' },
    { header: '职务', key: 'post' },
    {
      header: '所修科目',
      key: 'course',
    },
  ];

  list: Person[] = [
    {
      id: 1,
      name: 'enochgao',
      age: 18,
      class: 1,
      post: '班长',
      course: ['语文', '物理'],
    },
    {
      id: 2,
      name: 'zhangsan',
      age: 19,
      class: 2,
      post: '组长',
      course: ['政治', '英语'],
    },
    { id: 3, name: '', age: 20, class: 2, post: '', course: ['数学', '英语'] },
  ];

  classMap = { 1: '一班', 2: '二班' };

  private counter = 2;

  private nzxSafeNullPipe = new NzxSafeNullPipe();

  add() {
    const classNo = Number((Math.random() + 1).toFixed()) as 1 | 2;
    this.list = [
      ...this.list,
      {
        id: ++this.counter,
        name: '',
        age: 18,
        post: '',
        class: classNo,
      },
    ];
  }

  remove(data: Person) {
    this.list = this.list.filter((i) => i.id !== data.id);
    --this.counter;
  }
}
