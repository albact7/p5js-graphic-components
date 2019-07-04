import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BballSpinnerComponent } from './bball-spinner/bball-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    BballSpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
