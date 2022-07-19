import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que3',
  templateUrl: './que3.component.html',
  styleUrls: ['./que3.component.css']
})
export class Que3Component implements OnInit {
  users:any =[
    {userid:1, username:'Siddhesh', status:'A'},
    {userid:2, username:'Pradip', status:'D'},
    {userid:3, username:'Aniket', status:'A'},
    {userid:4, username:'Akshay', status:''},
    {userid:5, username:'Prakhar', status:'A'} 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
