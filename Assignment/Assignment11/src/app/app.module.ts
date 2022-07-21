import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Que1Component } from './que1/que1.component';
import { Que2Component } from './que2/que2.component';
import { Que3Component } from './que3/que3.component';
import { AddProductComponent } from './add-product/add-product.component';
import { Que3detailsComponent } from './que3details/que3details.component';
import { Que4Component } from './que4/que4.component';
import { Que4childComponent } from './que4child/que4child.component';

@NgModule({
  declarations: [
    AppComponent,
    Que1Component,
    Que2Component,
    Que3Component,
    AddProductComponent,
    Que3detailsComponent,
    Que4Component,
    Que4childComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
