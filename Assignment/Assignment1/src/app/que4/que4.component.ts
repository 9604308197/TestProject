import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que4',
  templateUrl: './que4.component.html',
  styleUrls: ['./que4.component.css']
})
export class Que4Component implements OnInit {
  colorType:color=color.None;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(No:any)
  {
    if(No === 1) {
      this.colorType = color.Red;
    } else if(No === 2 ) {
      this.colorType = color.Green;
    } else if(No === 3) {
      this.colorType = color.Blue;
    } else if(No === 4) {
      this.colorType = color.Black;
    } else
    {
      this.colorType = color.None
    }
  }
}

enum color {

  Red = "Red",
  Green = "Green",
  Blue = "Blue",
  Black="Black",
  None = "None"
}
