import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navItems: any[] = [
    { name: 'home', route: 'home' },
    { name: 'about-us', route: 'about-us' },
    { name: 'our-services', route: 'our-services' },
    { name: 'work-with-us', route: 'work-with-us' },
    { name: 'contact-us', route: 'contact-us' }
  ];

  ngOnInit(): void {
  }

}
