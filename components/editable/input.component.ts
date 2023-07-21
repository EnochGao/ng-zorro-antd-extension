import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nzx-editable-input',
  template: `<input nz-input id="name" name="name" placeholder="请输入" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NzxEditInputComponent {}
