import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {
  colorCode:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  onBlue()
  {
    this.colorCode = "blue";
  }
  onRed()
  {
    this.colorCode = "red";
  }
  onGreen()
  {
    this.colorCode = "green";
  }


}
