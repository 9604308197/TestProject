import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {

  contactID : number = 123;
  contactName : String = "Siddhesh Chaudhari";
  company : String ="Shaurya TechnoSoft";
  dueAmount : number = 4555;
  phone : any = 9999999999;
  area = "south zone";
  
  constructor() { }

  ngOnInit(): void {
  }

}
