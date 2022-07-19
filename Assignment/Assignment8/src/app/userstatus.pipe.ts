import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userstatus'
})
export class UserstatusPipe implements PipeTransform {

  transform(data: any, ...args: unknown[]): any {
    if (data === 'A') {
      return 'Active';
    } else if (data === 'D') {
      return 'Disabled';
    } else {
      return "Invalid status !!";
    }

  }

}
