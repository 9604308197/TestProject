import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }

  DisplayData2Service()
  {
    console.log("DispayData2");
    return "DispayData2";
  }
}
