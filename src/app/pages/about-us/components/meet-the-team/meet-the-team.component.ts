import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.css'],
})
export class MeetTheTeamComponent implements OnInit {
  title: any;
  rowOne: any;
  rowTwo: any;
  rowThree: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate(
          'aboutUsPage.meetTheTeam.header'
        );
        this.rowOne = [
          {
            image: '../../../../../assets/images/marcia.png',
            title: 'Marcia Riggs',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.header'
            ),
          },
          {
            image: '../../../../../assets/images/dong.png',
            title: 'Dong Baker',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.creativeDirector'
            ),
          },
          {
            image: '../../../../../assets/images/amie.png',
            title: 'Amie Weber',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.videoProducer'
            ),
          },
        ];
        this.rowTwo = [
          {
            image: '../../../../../assets/images/buck.png',
            title: 'Buck Estes',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.multimediaProducer'
            ),
          },
          {
            image: '../../../../../assets/images/truman.png',
            title: 'Truman Rhodes',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.videoProducer'
            ),
          },
          {
            image: '../../../../../assets/images/gregory.png',
            title: 'Gregory Lopez',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.videoEditor'
            ),
          },
        ];
        this.rowThree = [
          {
            image: '../../../../../assets/images/susie.png',
            title: 'Susie Mathis',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.socMedCoordinator'
            ),
          },
          {
            image: '../../../../../assets/images/britanny.png',
            title: 'Britanny Oneal',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.storyProducer'
            ),
          },
          {
            image: '../../../../../assets/images/vilma.png',
            title: 'Vilma Alvarez',
            description: this.translation.translate(
              'aboutUsPage.meetTheTeam.seniorBrandManager'
            ),
          },
        ];
      },
    });
  }
}
