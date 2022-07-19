import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {
  Sentence:string="My Angular Application";
  Trainingfees:number = 18000;
  TodayDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
