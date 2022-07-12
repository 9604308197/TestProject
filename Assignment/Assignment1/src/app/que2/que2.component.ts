import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que2',
  templateUrl: './que2.component.html',
  styleUrls: ['./que2.component.css']
})
export class Que2Component implements OnInit {
  ShowText:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onToggle()
  {
    this.ShowText = !this.ShowText;
  }

}
