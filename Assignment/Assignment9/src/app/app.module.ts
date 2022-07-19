import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Que1Component } from './que1/que1.component';
import { Que2Component } from './que2/que2.component';
import { Que3Component } from './que3/que3.component';
import { UserDetails1Component } from './user-details1/user-details1.component';
import { EmpDetails2Component } from './emp-details2/emp-details2.component';

@NgModule({
  declarations: [
    AppComponent,
    Que1Component,
    Que2Component,
    Que3Component,
    UserDetails1Component,
    EmpDetails2Component
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
