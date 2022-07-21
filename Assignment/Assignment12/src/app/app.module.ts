import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Que1Component } from './que1/que1.component';
import { Que2Component } from './que2/que2.component';
import { Que1childComponent } from './que1child/que1child.component';

@NgModule({
  declarations: [
    AppComponent,
    Que1Component,
    Que2Component,
    Que1childComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
