import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

import { CommonModule } from '@angular/common';
import {
  downloadFile,
  selectFile,
} from 'ng-zorro-antd-extension/util/lib/fileUtil';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'nzx-util-demo',
  templateUrl: './util.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    NzMessageModule,
    NzCardModule,
    NzImageModule,
  ],
})
export class NzxUtilExampleComponent {
  imageUrl!: string;

  private file!: File;
  constructor(
    private logger: NzMessageService,
    private cd: ChangeDetectorRef
  ) {}

  selectFile() {
    selectFile('.jpg').subscribe((file) => {
      console.log('单文件选择了', file);
      this.logger.success(
        `您选择了文件：${file?.name}，现在你可以进行下载文件了`,
        {
          nzDuration: 4000,
        }
      );

      if (file) {
        this.file = file;
        this.imageUrl = URL.createObjectURL(file);
        console.log('url', this.imageUrl);

        this.cd.markForCheck();
      }
    });
  }

  selectMultipleFile() {
    selectFile('image/*,.pdf', true).subscribe((files) => {
      console.log('多文件选择了', files);
    });
  }

  downloadFile() {
    if (this.file) {
      downloadFile(this.file, '测试文件');
    } else {
      this.logger.warning(`请先选择文件`);
    }
  }
}
