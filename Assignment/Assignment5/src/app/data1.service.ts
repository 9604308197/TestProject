import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { }
  public HeaderText = "this is my services using public modifier";
  // Testservice()
  // {
  //   console.log("Hello");
  // }
}
