import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css'],
})
export class OurProjectsComponent implements OnInit {
  title: string | undefined;
  link: any;
  cards: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate('navigation.ourProjects');
        this.link = {
          label: this.translation.translate('homePage.ourProjects.navlink'),
          link: '/our-projects',
        };
        this.cards = [
          {
            image: '../../../../../assets/images/advertisement.png',
            title: this.translation.translate(
              'homePage.ourProjects.cards.card1.header'
            ),
            videoId: 'ty3U4R8fbLI',
          },
          {
            image: '../../../../../assets/images/brand-video.png',
            title: this.translation.translate(
              'homePage.ourProjects.cards.card2.header'
            ),
            videoId: 'rTJ6JAGaKz0',
          },
          {
            image: '../../../../../assets/images/music-video.png',
            title: this.translation.translate(
              'homePage.ourProjects.cards.card3.header'
            ),
            videoId: 'QAcV-Sg2iHM',
          },
        ];
      },
    });
  }
}
