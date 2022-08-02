import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPipe } from './map.pipe';


@NgModule({
  declarations: [
    MapPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapPipe
  ]
})
export class PipesModule { }
