import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navItems: any[] = [
    { name: 'Home', route: 'home' },
    { name: 'Our Services', route: 'our-services' },
    { name: 'About us', route: 'about-us' },
    { name: 'Work with Us', route: 'work-with-us' }
  ];

  ngOnInit(): void {
  }

}
