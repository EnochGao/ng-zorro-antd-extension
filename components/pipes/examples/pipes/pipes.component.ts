import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzxPipesModule, NzxSafeNullPipe } from 'ng-zorro-antd-extension/pipes';
import {
  NzxSimpleTableConfig,
  NzxSimpleTableModule,
} from 'ng-zorro-antd-extension/simple-table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
interface Person {
  id: number;
  name: string;
  post: string;
  age: number;
  class: 1 | 2;
  course?: string[];
}
@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzxPipesModule,
    NzxSimpleTableModule,
    NzButtonModule,
  ],
  selector: 'nzx-pipe-demo',
  templateUrl: './pipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxPipeExampleComponent {
  unsafeUrl = 'http://www.runoob.com/images/pulpit.jpg';

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
