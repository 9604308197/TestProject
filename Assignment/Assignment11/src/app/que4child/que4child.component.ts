import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-que4child',
  templateUrl: './que4child.component.html',
  styleUrls: ['./que4child.component.css']
})
export class Que4childComponent implements OnInit {
  @Output()  EventProUpdate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(frmProduct:any)
  {
    this.EventProUpdate.emit(frmProduct.value);
  }

}