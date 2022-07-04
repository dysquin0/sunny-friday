import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.css']
})
export class MeetTheTeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Meet the Team';
  rowOne = [
    {
      image: '../../../../../assets/images/marcia.png',
      title: 'Marcia Riggs',
      description:
        'Head of Sunny Friday',
    },
    {
      image: '../../../../../assets/images/dong.png',
      title: 'Dong Baker',
      description:
        'Creative Director',
    },
    {
      image: '../../../../../assets/images/amie.png',
      title: 'Amie Weber',
      description:
        'Video Producer',
    }
  ];
  rowTwo = [
    {
      image: '../../../../../assets/images/buck.png',
      title: 'Buck Estes',
      description:
        'Multimedia Producer',
    },
    {
      image: '../../../../../assets/images/truman.png',
      title: 'Truman Rhodes',
      description:
        'Video Producer',
    },
    {
      image: '../../../../../assets/images/gregory.png',
      title: 'Gregory Lopez',
      description:
        'Video Editor',
    }
  ];
  rowThree = [
    {
      image: '../../../../../assets/images/susie.png',
      title: 'Susie Mathis',
      description:
        'Social Media Coordinator',
    },
    {
      image: '../../../../../assets/images/britanny.png',
      title: 'Britanny Oneal',
      description:
        'Story Producer',
    },
    {
      image: '../../../../../assets/images/vilma.png',
      title: 'Vilma Alvarez',
      description:
        'Senior Brand Manager',
    }
  ];
}
