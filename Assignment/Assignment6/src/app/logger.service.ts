import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  LoggerData()
  {
    console.log("Admin logged today at 11 am ..!!");
    return "Admin logged today at 11 am ..!!";
  }
}
