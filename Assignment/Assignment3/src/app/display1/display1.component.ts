import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  displayName : string ="Hi Angular";
  constructor() { }

  ngOnInit(): void {
  }
  onDisplayUpdate()
  {
    this.displayName="Learning Angular";
  }
}