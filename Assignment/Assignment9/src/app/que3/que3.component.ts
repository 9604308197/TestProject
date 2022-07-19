import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-que3',
  templateUrl: './que3.component.html',
  styleUrls: ['./que3.component.css']
})
export class Que3Component implements OnInit {
  frmContact:any;
  constructor() { }

  ngOnInit(): void {
    this.frmContact = new FormGroup(
      {
        cid: new FormControl(""),
        cname: new FormControl(""),
        add: new FormControl(""),
        pin: new FormControl("")
      }
    )
  }
  onSubmit(contactForm: any) {
    console.log(contactForm);
  }
}