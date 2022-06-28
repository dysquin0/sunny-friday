import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css']
})
export class OurValuesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Our values';
  values = [
    {
      image: '../../../../../assets/images/champions.svg',
      description: 'We are not world champions before it’s written on the wall.'
    },
    {
      image: '../../../../../assets/images/fun.svg',
      description: 'Fun first, money second'
    },
    {
      image: '../../../../../assets/images/pinwheel.svg',
      description: 'We don’t always have to reinvent the wheel'
    },
    {
      image: '../../../../../assets/images/box.svg',
      description: 'We think outside the box'
    },
    {
      image: '.w./../../../../assets/images/partner.svg',
      description: 'Sparring partner: We don’t know your company as well as you do, so let’s work together towards a common goal'
    },
    {
      image: '../../../../../assets/images/other-companies.svg',
      description: ' If we don’t know something, we will suggest other companies who can help along the way'
    },
  ];
}
