import { NgModule } from '@angular/core';
import { NzxTimerButtonDirective } from './timer-button.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [NzxTimerButtonDirective],
  exports: [NzxTimerButtonDirective],
})
export class NzxTimerButtonModule {}
