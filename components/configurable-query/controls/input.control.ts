import { Component } from '@angular/core';
import { NzxAbstractControl } from './abstract.control';

@Component({
  template: `
    <input
      nz-input
      type="text"
      placeholder="{{ control.placeholder }}"
      [formControl]="form.get(control.controlName)"
    />
  `,
})
export class NzxInputControlComponent extends NzxAbstractControl {}
