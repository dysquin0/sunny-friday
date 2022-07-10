import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrls: ['./our-projects.component.css'],
})
export class OurProjectsComponent implements OnInit {
  title: string | undefined;
  description: any;
  rowOne: any;
  rowTwo: any;
  rowThree: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate('navigation.ourProjects');
        this.description = this.translation.translate(
          'ourProjectsPage.description'
        );
        this.rowOne = [
          {
            image: '../../../../../assets/images/advertisement.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card1.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
          {
            image: '../../../../../assets/images/brand-video.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card2.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
          {
            image: '../../../../../assets/images/music-video.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card3.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
        ];

        this.rowTwo = [
          {
            image: '../../../../../assets/images/media.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card4.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
          {
            image: '../../../../../assets/images/tradeshow-booth.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card5.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
          {
            image: '../../../../../assets/images/advertisement-bldg.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card6.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
        ];

        this.rowThree = [
          {
            image: '../../../../../assets/images/advertisment-phone.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card7.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
          {
            image: '../../../../../assets/images/music-video2.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card8.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
          {
            image: '../../../../../assets/images/tradeshow-booth-ceiling.png',
            title: this.translation.translate(
              'ourProjectsPage.cards.card9.header'
            ),
            videoId: 'o_l3NiAtoKo',
          },
        ];
      },
    });
  }
}
