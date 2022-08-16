---
title: nzx-simple-table
order: 3
---

简单table通过配置项快速生成一个table，支持自定义template，初衷只是为了数据展示方便，暂时不支持服务端分页

```typescript
import { SimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
```

html:

```html
<nzx-simple-table [nzxConfig]="config" [nzxData]="list" [nzxExpand]="true">
  <ng-template nzxTh width="160px">
    <button nz-button nzType="primary" (click)="add()">添加</button>
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

ts:

```typescript
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
```
