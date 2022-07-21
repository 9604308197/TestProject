import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
@Output()  EventProUpdate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(frmProduct:any)
  {
    // console.log("Employee ", frmEmployee.value);
    // console.log("Employee ", frmEmployee.status);
    this.EventProUpdate.emit(frmProduct.value);
  }

}
