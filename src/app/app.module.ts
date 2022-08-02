import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppComponent } from './app.component';

import { NzCheckboxExtensionModule } from 'ng-zorro-antd-extension/checkbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NzButtonModule,
    FormsModule,
    NzCheckboxExtensionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
