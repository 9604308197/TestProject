import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que4',
  templateUrl: './que4.component.html',
  styleUrls: ['./que4.component.css']
})
export class Que4Component implements OnInit {

  ProductsData:any =[
    {productId:1,productname:"Dell laptop",price:42000, size:"med", status:"active"},
    {productId:2,productname:"HP laptop",price:41000, size:"med", status:"active"},
  ];
  selectPId:any;
  constructor() { }

  ngOnInit(): void {
  }

  onProductUpdate(product:any)
  {
    this.ProductsData.push(product);
  }
  onEdit(product:any)
  {
    this.selectPId = product.productId;
  }
}