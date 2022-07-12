import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {
private msg="Display this message on Display4";
  constructor() { }
  MessageNotify()
  {
    return this.msg;

  }
}
