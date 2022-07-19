import { Injectable } from '@angular/core';
import {EmployeesModule} from './employees.module';
@Injectable({
  providedIn: EmployeesModule
})
export class Data2Service {

  constructor() { }

  DisplayEmployee()
  {
    return "We are in data2 service";
  }


}
