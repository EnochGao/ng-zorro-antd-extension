import { Component, inject } from '@angular/core';

import { NzxJigsawModule } from 'ng-zorro-antd-extension/jigsaw';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  imports: [NzxJigsawModule],
  selector: 'nzx-jigsaw-example',
  template: `
    <nzx-jigsaw
      (nzxOnFail)="fail()"
      (nzxOnRefresh)="refresh()"
      (nzxOnSuccess)="success()"
    ></nzx-jigsaw>
  `,
})
export class NzxJigsawExampleComponent {
  logger = inject(NzMessageService);

  fail() {
    this.logger.error('验证失败');
  }

  refresh() {
    this.logger.warning('验证刷新');
  }
  success() {
    this.logger.success('验证成功');
  }
}
