# nzx-map-pipe

映射管道，可以转换数据格式，

```ts
// 引入
import { PipesModule } from 'ng-zorro-antd-extension/pipes';
```

html:

```html
<nzx-simple-table [nzxConfig]="[
{ header: 'id', key: 'id', width: '50px' },
{ header: '姓名', key: 'name' },
{ header: '班级', key: 'class' },
{ header: '年龄', key: 'age' },
{ header: '所修科目', key: 'course' }

]" [nzxData]="list" [nzxExpand]="true">

  <ng-template nzxTh width="160px">
    <button nz-button nzType="primary" (click)="add()">添加</button>
  </ng-template>

  <ng-template nzxTd key="class" let-data>
    {{data.class|nzxMap:classMap}}
  </ng-template>
  <ng-template nzxTd key="course" let-data>
    {{data.course|nzxMap:null:'*_*'}}
  </ng-template>

  <ng-template nzxTd let-data>
    <button nz-button nzType="link" (click)="remove(data)">删除</button>
    <button nz-button nzType="link" (click)="data.expand=!data.expand">展开</button>
  </ng-template>

  <ng-template nzxExpandTr let-data>
    {{data|json}}
  </ng-template>

</nzx-simple-table>
```

```typescript
interface Person {
  id: number;
  name: string;
  age: number;
  class: 1 | 2;
  course?: string[];
}
@Component({
  selector: 'app-nzx-map-pipe-demo',
  templateUrl: './nzx-map-pipe-demo.component.html',
  styleUrls: ['./nzx-map-pipe-demo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzxMapPipeDemoComponent implements OnInit {

  list: Person[] = [
    { id: 1, name: 'enochgao', age: 18, class: 1, course: ['语文', '物理'] },
    { id: 2, name: 'zhangsan', age: 19, class: 2, course: ['政治', '英语'] },
  ];

  classMap = { 1: '一班', 2: '二班' };

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

```
