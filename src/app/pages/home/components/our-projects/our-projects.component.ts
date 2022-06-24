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
      videoId: 'ty3U4R8fbLI',
    },
    {
      image: '../../../../../assets/images/brand-video.png',
      title: 'Brand Video',
      videoId: 'rTJ6JAGaKz0',
    },
    {
      image: '../../../../../assets/images/music-video.png',
      title: 'Music Video',
      videoId: 'QAcV-Sg2iHM',
    },
  ];
}
