import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Our services';
  rowOne = [
    {
      image: '../../../../../assets/images/content-marketing.png',
      title: 'Content Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      image: '../../../../../assets/images/conversion-rate-optimization.png',
      title: 'Conversion Rate Optimization',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      image: '../../../../../assets/images/email-marketing.png',
      title: 'Email Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
  ];
  rowTwo = [
    {
      image: '../../../../../assets/images/pay-per-click-advertising.png',
      title: 'Pay-per-click Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      image: '../../../../../assets/images/public-relations.png',
      title: 'Public Relations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      image: '../../../../../assets/images/review-management.png',
      title: 'Review Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
  ];

  rowThree = [
    {
      image: '../../../../../assets/images/seo.png',
      title: 'Search engine optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      image: '../../../../../assets/images/social-media-advertising.png',
      title: 'Social Media Advertising',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      image: '../../../../../assets/images/social-media-management.png',
      title: 'Social Media Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
  ];
}
