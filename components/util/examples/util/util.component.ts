import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

import { CommonModule } from '@angular/common';
import {
  downloadFile,
  selectFile,
  updateControlStatus,
} from 'ng-zorro-antd-extension/util';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzImageModule } from 'ng-zorro-antd/image';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'nzx-util-demo',
  templateUrl: './util.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzGridModule,
    NzFormModule,
    NzButtonModule,
    NzCardModule,
    NzImageModule,
    NzInputModule,
    NzSpaceModule,
  ],
})
export class NzxUtilExampleComponent {
  imageUrl!: string;
  form: FormGroup;

  get aliases() {
    return this.form.get('aliases') as FormArray;
  }

  private file!: File;
  constructor(
    private logger: NzMessageService,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
      }),
      aliases: this.fb.array([]),
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control('', [Validators.required]));
  }

  patchValue() {
    this.form.reset({
      userName: null,
      address: {
        street: null,
        city: null,
      },
      aliases: [],
    });
    this.aliases.clear();

    const aliases: string[] = ['zhangsan', ''];

    for (let index = 0; index < aliases.length; index++) {
      this.addAlias();
    }

    this.form.patchValue({
      userName: 'enochgao',
      address: {
        street: '',
        city: 'qingdao',
      },
      aliases,
    });
  }

  markAsDirty(): void {
    updateControlStatus(this.form);
  }

  markAsPristine() {
    updateControlStatus(this.form, true);
  }

  markAsFullClean() {
    updateControlStatus(this.form, true, (control: AbstractControl) => {
      control.markAsUntouched();
    });
  }

  remove(i: number) {
    this.aliases.removeAt(i);
  }

  logForm() {
    console.log('submit', this.form);
  }

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
