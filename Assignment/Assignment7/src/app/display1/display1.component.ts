import { Component, OnInit } from '@angular/core';
import { Contacts } from '../data1.service';
@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  constructor() { }

  ngOnInit(): void {

   }
  onClick1()
  {
    const data1 = new Contacts.AddNewContact();
    data1.Display();

  }

  onClick2()
  {
    const data2 = new Contacts.EditContact();
    data2.Display();
  }

  onClick3()
  {
    const data3 = new Contacts.DeleteContact();
    data3.Display();
  }

  onClick4()
  {
    const data4 = new Contacts.ListContact();
    data4.Display();
  }
}
