import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzxPipesModule } from '../pipes.module';
import { NzxSimpleTableModule } from 'ng-zorro-antd-extension/simple-table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzxPipeExampleComponent } from './pipes/pipes.component';

@NgModule({
  imports: [CommonModule, NzxPipesModule, NzxSimpleTableModule, NzButtonModule],
  declarations: [NzxPipeExampleComponent],
})
export class NzxPipeExamplesModule {}
