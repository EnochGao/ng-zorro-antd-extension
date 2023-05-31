import { NgModule } from '@angular/core';
import { NzxTimerButtonDirective } from './timer-button.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [NzxTimerButtonDirective],
  declarations: [NzxTimerButtonDirective],
})
export class NzxTimerButtonModule {}
