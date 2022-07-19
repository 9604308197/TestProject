import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Que1Component } from './que1/que1.component';
import { Que2Component } from './que2/que2.component';
import { Que3Component } from './que3/que3.component';

const routes: Routes = [
  {path:'que1', component:Que1Component},
  {path:'que2', component:Que2Component},
  {path:'que3', component:Que3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
