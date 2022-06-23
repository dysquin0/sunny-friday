import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css'],
})
export class OurProjectsComponent implements OnInit {
  ngOnInit(): void {}
  title = 'Our projects';
  link = {
    label: 'See More',
    link: '/our-services',
  };
  cards = [
    {
      image: '../../../../../assets/images/advertisement.png',
      title: 'Advertisement',
    },
    {
      image: '../../../../../assets/images/brand-video.png',
      title: 'Brand Video',
    },
    {
      image: '../../../../../assets/images/music-video.png',
      title: 'Music Video',
    },
  ];
}
