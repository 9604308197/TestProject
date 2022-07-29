import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  
  constructor(private fob:FormBuilder) { }
formEmp:any;
qualification:any=['BA','BCS','MCA','MCS'];
str:string="";

  ngOnInit(): void {
    this.formEmp=this.fob.group({
    name:['',[Validators.required]],
    num:[''],
    gender:[''],
    education:[''],
    course:['']
    })
  }

onSubmit()
{
console.log(this.str="Form Submitted");

return(this.str="Form Submitted");
}

}
