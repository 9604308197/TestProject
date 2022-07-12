import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
@Injectable({
  providedIn: 'root'
})
export class MsgDisplayService {

  constructor(private log:LoggerService) { }

  DisplayMessage()
  {
    console.log(this.log.LoggerData());
    return this.log.LoggerData();
  }
}
