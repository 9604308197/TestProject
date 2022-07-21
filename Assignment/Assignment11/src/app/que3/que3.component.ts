import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que3',
  templateUrl: './que3.component.html',
  styleUrls: ['./que3.component.css']
})
export class Que3Component implements OnInit {
  UserData:any=[];
  selectedUId:number=0;
  constructor() { }

  ngOnInit(): void {
    this.UserData = [
      {uid:1,dname:"Purvi", status:"Active", roleassign:"Director"},
      {uid:2,dname:"Carlos", status:"Disabled", roleassign:"Employee"},
      {uid:3,dname:"Riya", status:"Active", roleassign:"Manager"},
      {uid:4,dname:"Rony", status:"Active", roleassign:"Boss"},
      {uid:5,dname:"Alex", status:"Active", roleassign:"Employee"},
     
    ]
  }

  onDetails(selectedId:number){
    this.selectedUId = selectedId;
  }
}
