import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {
fnLength:any=0;
lnLength:any=0;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(fName:any,lName:any)
  {
    this.fnLength=fName.value;
    this.lnLength=lName.value;
    console.log();
  }
  
}
