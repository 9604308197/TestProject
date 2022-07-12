import { Injectable } from '@angular/core';
import { Data2Service } from './data2.service';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor(private data2:Data2Service) { }

  DisplayData1Service()
  {
    
    console.log("DisplayData1");
    return this.data2.DisplayData2Service();
  }
}
