import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  //templateUrl: './display1.component.html',
  //styleUrls: ['./display1.component.css']
  template:'<h1>Display 1</h1>',
  styles:['h1 {color:red}']
})
export class Display1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
