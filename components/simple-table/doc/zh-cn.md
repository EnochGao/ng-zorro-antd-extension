---
category: component
title: 简单表格
subtitle: nzx-simple-table
order: 2
---

简单 table 通过配置项快速生成一个 table，支持自定义 template，初衷只是为了数据展示方便，不支持服务端分页

## 版本支持

<label type="success">v13.0.0+</label>

## 使用

### 引入

```typescript
import { NzxSimpleTableModule } from "ng-zorro-antd-extension/simple-table";
```

### html

```html
<nzx-simple-table [nzxConfig]="config" [nzxData]="list" [nzxExpand]="true">
  <ng-template nzxTh width="160px">
    <button nz-button nzType="primary" (click)="add()">添加</button>
  </ng-template>

  <ng-template nzxTd let-data>
    <button nz-button nzType="link" (click)="remove(data)">删除</button>
    <button nz-button nzType="link" (click)="data.expand=!data.expand">展开</button>
  </ng-template>

  <ng-template nzxExpandTr let-data> {{data|json}} </ng-template>
</nzx-simple-table>
```

### ts

```typescript
interface Person {
  id: number;
  name: string;
  age: number;
  class: 1 | 2;
}

@Component({
  selector: "app-simple-table-demo",
  templateUrl: "./simple-table-demo.component.html",
  styleUrls: ["./simple-table-demo.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTableDemoComponent {
  config: Array<NzxSimpleTableConfig<Person>> = [
    { header: "id", key: "id", width: "50px" },
    { header: "姓名", key: "name" },
    { header: "年龄", key: "age" },
    {
      header: "班级",
      key: "class",
      /**
       * 数据格式化函数
       */
      format: (data: Person) => {
        if (data.class === 1) {
          return "一班";
        }
        return "二班";
      },
    },
  ];

  list: Person[] = [
    { id: 1, name: "enochgao", age: 18, class: 1 },
    { id: 2, name: "zhangsan", age: 19, class: 2 },
  ];

  private counter = 2;

  add() {
    const classNo = Number((Math.random() + 1).toFixed()) as 1 | 2;
    this.list = [...this.list, { id: ++this.counter, name: `xxx${this.counter}`, age: 18, class: classNo }];
  }

  remove(data: Person) {
    this.list = this.list.filter((i) => i.id !== data.id);
    --this.counter;
  }
}
```
