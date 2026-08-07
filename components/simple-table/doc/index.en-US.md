---
category: Components
type: Component
title: Simple Table
subtitle: nzx-simple-table
cover: ''
description: Quickly generate a table via config items, supporting custom templates. Designed for data display only, no server-side pagination.
order: 2
---

The simple table quickly generates a `table` via config items and supports custom templates. It was originally designed just for convenient data display and does not support server-side pagination.

## Support Version

<label type="success">v13.0.0+</label>

## When To Use

### Import

```typescript
import { NzxSimpleTableModule } from "ng-zorro-antd-extension/simple-table";
```

### html

```html
<nzx-simple-table [nzxConfig]="config" [nzxData]="list" [nzxExpand]="true">
  <ng-template nzxTh width="160px">
    <button nz-button nzType="primary" (click)="add()">Add</button>
  </ng-template>

  <ng-template nzxTd let-data>
    <button nz-button nzType="link" (click)="remove(data)">Delete</button>
    <button nz-button nzType="link" (click)="data.expand=!data.expand">Expand</button>
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
    { header: "Name", key: "name" },
    { header: "Age", key: "age" },
    {
      header: "Class",
      key: "class",
      format: (data: Person) => {
        if (data.class === 1) {
          return "Class 1";
        }
        return "Class 2";
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
