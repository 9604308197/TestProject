import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-details2',
  templateUrl: './emp-details2.component.html',
  styleUrls: ['./emp-details2.component.css']
})
export class EmpDetails2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   ngOnDestroy()
   {
    console.log("childshow Destroy");
   }  

}
