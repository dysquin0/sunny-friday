import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-btn',
  templateUrl: './contact-us-btn.component.html',
  styleUrls: ['./contact-us-btn.component.css']
})
export class ContactUsBtnComponent implements OnInit {
  contactUsBtns: any[] = [{ name: 'Contact Us', route: 'contact-us' }];
  ngOnInit(): void {
  }

}
