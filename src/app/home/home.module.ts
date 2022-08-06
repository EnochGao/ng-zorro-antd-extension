import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ]
})
export class HomeModule { }
