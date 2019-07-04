import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BballSpinnerComponent } from './bball-spinner/bball-spinner.component';
import { IntroWebComponent } from './intro-web/intro-web.component';

@NgModule({
  declarations: [
    AppComponent,
    BballSpinnerComponent,
    IntroWebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
