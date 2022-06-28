import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.css']
})
export class AboutUsSectionComponent implements OnInit {

 

  ngOnInit(): void {
  }
  title = 'About us';
  displayURL;
  constructor(private sanitizer: DomSanitizer) {
    this.displayURL = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/KM8ZXY0lNdU');
  }
  aboutUs = [
    {
      subtitle:'We believe that companies are like human beings, they exist and grow by virtue of the good in them.',
      description1: 'That\'s why we at SunnyFriday are consumer-oriented, not boardroom-oriented.',
      description2: ' We have a practical approach to strategy, combined with humility and empathy.'
    },
  ];

  
}
