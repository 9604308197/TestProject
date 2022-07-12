import { Component, OnInit } from '@angular/core';
import {Data2Service} from '../data2.service';
@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {

  constructor() { }
  Result1=Data2Service.HeaderText1;
  ngOnInit(): void {
   
  }

}
