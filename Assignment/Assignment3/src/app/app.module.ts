import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Que1Component } from './que1/que1.component';
import { Que2Component } from './que2/que2.component';
import { Que3Component } from './que3/que3.component';
import { Que4Component } from './que4/que4.component';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';
import { Display3Component } from './display3/display3.component';
import { Display4Component } from './display4/display4.component';
import { Display5Component } from './display5/display5.component';
import { Display4DetComponent } from './display4-det/display4-det.component';
import { Display5DetComponent } from './display5-det/display5-det.component';
import { Que3DetComponent } from './que3-det/que3-det.component';

@NgModule({
  declarations: [
    AppComponent,
    Que1Component,
    Que2Component,
    Que3Component,
    Que4Component,
    Display1Component,
    Display2Component,
    Display3Component,
    Display4Component,
    Display5Component,
    Display4DetComponent,
    Display5DetComponent,
    Que3DetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
