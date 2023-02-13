---
category: pipe
title: 管道
subtitle: pipes
order: 2
label: new
---

- 映射管道(nzxMap)，可以转换数据格式，可将数组展开拼接
- 缺省管道(nzxSafeNull)，属性值为`null`、`undefined`、`''`时展示默认占位符，支持通过 nzxConfig 全局配置

引入

```ts
import { PipesModule } from "ng-zorro-antd-extension/pipes";
```

nzxSafeNull 管道支持全局配置

module:

```ts
const ngZorroExtensionConfig: NzxConfig = {
  nzxSafeNull: {
    placeholder: "空",
  },
};

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: NZX_CONFIG, useValue: ngZorroExtensionConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

html:

```html
<nzx-simple-table [nzxConfig]="config" [nzxData]="list" [nzxExpand]="true">
  <ng-template nzxTh width="160px">
    <button nz-button nzType="primary" (click)="add()">添加</button>
  </ng-template>

  <ng-template nzxTd key="class" let-data>
    {{ data.class | nzxMap : classMap }}
  </ng-template>
  <ng-template nzxTd key="course" let-data>
    {{ data.course | nzxMap : null : "*_*" | nzxSafeNull : "***" }}
  </ng-template>
  <ng-template nzxTd key="post" let-data>
    {{ data.post | nzxSafeNull : "组员" }}
  </ng-template>

  <ng-template nzxTd let-data>
    <button nz-button nzType="link" (click)="remove(data)">删除</button>
    <button nz-button nzType="link" (click)="data.expand = !data.expand">
      展开
    </button>
  </ng-template>

  <ng-template nzxExpandTr let-data> {{ data | json }} </ng-template>
</nzx-simple-table>
```

```typescript
interface Person {
  id: number;
  name: string;
  post: string;
  age: number;
  class: 1 | 2;
  course?: string[];
}
@Component({
  selector: "nzx-pipe-demo",
  templateUrl: "./pipe-demo.component.html",
  styleUrls: ["./pipe-demo.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeDemoComponent {
  config: Array<NzxSimpleTableConfig<Person>> = [
    { header: "id", key: "id", width: "50px" },
    {
      header: "姓名",
      key: "name",
      format: (person: Person) => {
        return this.nzxSafeNullPipe.transform(person.name);
      },
    },
    { header: "年龄", key: "age" },
    { header: "班级", key: "class" },
    { header: "职务", key: "post" },
    {
      header: "所修科目",
      key: "course",
    },
  ];

  list: Person[] = [
    {
      id: 1,
      name: "enochgao",
      age: 18,
      class: 1,
      post: "班长",
      course: ["语文", "物理"],
    },
    {
      id: 2,
      name: "zhangsan",
      age: 19,
      class: 2,
      post: "组长",
      course: ["政治", "英语"],
    },
    { id: 3, name: "", age: 20, class: 2, post: "", course: ["数学", "英语"] },
  ];

  classMap = { 1: "一班", 2: "二班" };

  private counter = 2;

  private nzxSafeNullPipe = new NzxSafeNullPipe();

  add() {
    const classNo = Number((Math.random() + 1).toFixed()) as 1 | 2;
    this.list = [
      ...this.list,
      {
        id: ++this.counter,
        name: "",
        age: 18,
        post: "",
        class: classNo,
      },
    ];
  }

  remove(data: Person) {
    this.list = this.list.filter((i) => i.id !== data.id);
    --this.counter;
  }
}
```
