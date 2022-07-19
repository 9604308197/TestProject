import { Injectable } from '@angular/core';

export namespace Contacts
{

@Injectable({
  providedIn: 'root'
})
export class AddNewContact {

  constructor() { }
  Display()
  {
    console.log("New Contact Added....!!");
  }
}

@Injectable({
  providedIn: 'root'
})
export class EditContact {

  constructor() { }
  Display()
  {
    console.log("Contact Updated..!!");
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteContact {

  constructor() { }
  Display()
  {
    console.log("Contact Deleted..!!");
  }
}

@Injectable({
  providedIn: 'root'
})
export class ListContact {

  constructor() { }
  Display()
  {
    console.log("Contact Listed..!!");
  }
}
}
