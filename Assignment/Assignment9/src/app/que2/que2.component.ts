import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que2',
  templateUrl: './que2.component.html',
  styleUrls: ['./que2.component.css']
})
export class Que2Component implements OnInit {
  childShow:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  onDestroyHandler()
  {
    this.childShow =! this.childShow;
  }

}
