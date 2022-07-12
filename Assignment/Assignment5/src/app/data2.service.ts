import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {
  static HeaderText1 = "this is my services using static modifier";
  constructor() { }
}
