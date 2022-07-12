import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-que3-det',
  templateUrl: './que3-det.component.html',
  styleUrls: ['./que3-det.component.css']
})
export class Que3DetComponent implements OnInit {
  @Input('propEmpName') Name:any;
  @Input('propLeaveBal') LeaveBal:any;
  constructor() { }

  ngOnInit(): void {
  }

}
