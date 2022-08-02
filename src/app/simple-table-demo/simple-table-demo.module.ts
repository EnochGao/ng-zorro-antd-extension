import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableDemoComponent } from './simple-table-demo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SimpleTableDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SimpleTableDemoComponent }
    ])
  ]
})
export class SimpleTableDemoModule { }
