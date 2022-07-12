import { Component, OnInit } from '@angular/core';
interface IContact {
  contactName:string,
  contactAdd:string,
  contactPh:number,
  areaCode:string;
  
}
@Component({
  selector: 'app-que2',
  templateUrl: './que2.component.html',
  styleUrls: ['./que2.component.css']
})
export class Que2Component implements OnInit {
arrContact:IContact={contactName:"",contactAdd:"",contactPh:0,areaCode:""}
  constructor() { }

  ngOnInit(): void {

  }
  Display()
  {
    this.arrContact = {contactName:'Nidhi Singh',contactAdd:'Baner,Pune',contactPh:1234567890,areaCode:'south zone'};
   
    console.log(this.arrContact);
  }

}
