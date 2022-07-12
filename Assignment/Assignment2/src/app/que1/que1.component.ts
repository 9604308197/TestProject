import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {
Result :string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.Result = this.AddC();

  }
  AddC():string{
return "Rohit Kumar";
  }

}
