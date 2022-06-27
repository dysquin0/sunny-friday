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
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
    {
      image: '../../../../../assets/images/conversion-rate-optimization.png',
      title: 'Conversion Rate Optimization',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
    {
      image: '../../../../../assets/images/email-marketing.png',
      title: 'Email Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
  ];
  rowTwo = [
    {
      image: '../../../../../assets/images/pay-per-click-advertising.png',
      title: 'Pay-per-click Marketing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
    {
      image: '../../../../../assets/images/public-relations.png',
      title: 'Public Relations',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
    {
      image: '../../../../../assets/images/review-management.png',
      title: 'Review Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
  ];

  rowThree = [
    {
      image: '../../../../../assets/images/seo.png',
      title: 'Search engine optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
    {
      image: '../../../../../assets/images/social-media-advertising.png',
      title: 'Social Media Advertising',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
    {
      image: '../../../../../assets/images/social-media-management.png',
      title: 'Social Media Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      paragraphs: {
        p1: 'Useful content should be at the core of your marketing.. ',
        p2: 'Traditional marketing is becoming less and less effective by the minute; as a forward-thinking marketer, you know there has to be a better way.',
        p3: 'Instead of pitching your products or services, you are providing truly relevant and useful content to your prospects and customers to help them solve their issues.',
        p4: 'Our annual research shows the vast majority of marketers are using content marketing. In fact, it is used by many prominent organizations in the world, including P&G, Microsoft, Cisco Systems, and John Deere. It’s also developed and executed by small businesses and one-person shops around the globe. Why? Because it works.',
        p5: 'Content marketing is good for your bottom line — and your customers.',
        p6: 'Specifically, there are four key reasons – and benefits – for enterprises to use content marketing:',
        //other variables for li
        li1: 'Increased sales',
        li2: 'Cost savings',
        li3: 'Better customer who have more loyalty',
        li4: 'Content as a profit center',
      },
    },
  ];
}
