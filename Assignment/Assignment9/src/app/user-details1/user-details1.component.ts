import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-details1',
  templateUrl: './user-details1.component.html',
  styleUrls: ['./user-details1.component.css']
})
export class UserDetails1Component implements OnInit {
  @Input('propText') TextValue:any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Display 2 ngOnChanges", changes);
    const { TextValue } = changes;
    console.log(TextValue.currentValue, TextValue.previousValue);
  }
  ngOnInit(): void {
  }

}
