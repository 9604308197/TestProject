import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-que2',
  templateUrl: './que2.component.html',
  styleUrls: ['./que2.component.css']
})
export class Que2Component implements OnInit {
  frmContact: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmContact = this.formBuilder.group(
      {
        fullname: '',
        role: this.formBuilder.array([])
      }
    )
  }
  get role(): FormArray {
    return this.frmContact.get("role") as FormArray
  }

  newRole(): FormGroup {
    return this.formBuilder.group(
      {
        role: ''
      }
    )
  }
  addRole()
  {
    this.role.push(this.newRole());
  }
  removeRole(i:number)
  {
    this.role.removeAt(i);
  }
  onSubmit()
  {
    console.log(this.frmContact.value)
  }

}