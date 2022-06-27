import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css'],
})
export class OurProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'Our projects';
  rowOne = [
    {
      image: '../../../../../assets/images/advertisement.png',
      title: 'Advertisement',
      videoId: 'QAcV-Sg2iHM',
    },
    {
      image: '../../../../../assets/images/brand-video.png',
      title: 'Brand Video',
      videoId: 'QAcV-Sg2iHM',
    },
    {
      image: '../../../../../assets/images/music-video.png',
      title: 'Music Video',
      videoId: 'QAcV-Sg2iHM',
    },
  ];

  rowTwo = [
    {
      image: '../../../../../assets/images/media.png',
      title: 'Brand Video',
      videoId: 'QAcV-Sg2iHM',
    },
    {
      image: '../../../../../assets/images/tradeshow-booth.png',
      title: 'Tradeshow Booth',
      videoId: 'QAcV-Sg2iHM',
    },
    {
      image: '../../../../../assets/images/advertisement-bldg.png',
      title: 'Advertisement',
      videoId: 'QAcV-Sg2iHM',
    },
  ];

  rowThree = [
    {
      image: '../../../../../assets/images/advertisment-phone.png',
      title: 'Advertisement',
      videoId: 'QAcV-Sg2iHM',
    },
    {
      image: '../../../../../assets/images/music-video2.png',
      title: 'Music Video',
      videoId: 'QAcV-Sg2iHM',
    },
    {
      image: '../../../../../assets/images/tradeshow-booth-ceiling.png',
      title: 'Tradeshow Booth',
      videoId: 'QAcV-Sg2iHM',
    },
  ];
}
