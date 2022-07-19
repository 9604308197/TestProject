import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {
text:string="";
  constructor() { 
    console.log("que1 constructor");
  }
  ngOnInit(): void {
    console.log("que1 ngOnInit");
  }
  onTextHandler(){
     this.text="Hello Angular";
  }

}