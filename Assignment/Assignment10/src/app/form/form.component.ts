import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formClient:any;
  constructor() { }

  ngOnInit(): void {

    this.formClient = new FormGroup(
      {
        clid: new FormControl("99",[ Validators.required, Validators.minLength(6)]),
        clname: new FormControl("",[ Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        address: new FormControl("", Validators.required),
        phone: new FormControl("", Validators.pattern('^[0-9]+$'))
      }
    )
  }

  onSubmit()
  {
    console.log("Submitted",this.formClient.status);
  }
}
