import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-message-us',
  templateUrl: './message-us.component.html',
  styleUrls: ['./message-us.component.css']
})
export class MessageUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }

}
