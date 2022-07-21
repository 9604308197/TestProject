import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-que3details',
  templateUrl: './que3details.component.html',
  styleUrls: ['./que3details.component.css']
})
export class Que3detailsComponent implements OnInit {

 
  @Input('PropUser') UserData:any;
  constructor() { }

  ngOnInit(): void {
  }

}