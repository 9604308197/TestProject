import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {
  
  msg:string="";
  constructor() { }

  ngOnInit(): void {
}

onSubmit(frmContact:any)
{
         if(frmContact.status==='VALID')
   {
     console.log(this.msg=" Form Submitted ");
   }
else{
  console.log(this.msg=" Form is INVALID");
}
 }

}