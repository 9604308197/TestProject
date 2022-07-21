import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {

  GridData:any=[];
  GridData2:any=[];
  selectedEId:number=0;
  constructor() { }

  ngOnInit(): void {
    this.GridData = [
      {eid:1,ename:"Radha", salary:"50000"},
      {eid:2,ename:"Carmen", salary:"40000"},
      {eid:3,ename:"Pablo", salary:"60000"},
      {eid:4,ename:"Suzen", salary:"50000"},
      {eid:5,ename:"Rony", salary:"40000"}
     ]
  }

  onSelect(EmpRow:any){
  this.GridData2.push(EmpRow);
  }
}
