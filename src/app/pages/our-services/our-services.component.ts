import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit {
  title: string | undefined;
  description: any;
  rowOne: any;
  rowTwo: any;
  rowThree: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate('navigation.ourServices');
        this.description = this.translation.translate(
          'ourServicesPage.description'
        );
        this.rowOne = [
          {
            image: '../../../../../assets/images/content-marketing.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card1.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
          {
            image:
              '../../../../../assets/images/conversion-rate-optimization.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card2.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
          {
            image: '../../../../../assets/images/email-marketing.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card3.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
        ];
        this.rowTwo = [
          {
            image: '../../../../../assets/images/pay-per-click-advertising.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card4.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
          {
            image: '../../../../../assets/images/public-relations.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card5.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
          {
            image: '../../../../../assets/images/review-management.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card6.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
        ];

        this.rowThree = [
          {
            image: '../../../../../assets/images/seo.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card7.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
          {
            image: '../../../../../assets/images/social-media-advertising.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card8.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
          {
            image: '../../../../../assets/images/social-media-management.png',
            title: this.translation.translate(
              'ourServicesPage.cards.card9.title'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate('ourServicesPage.paragraphs.p1'),
              p2: this.translation.translate('ourServicesPage.paragraphs.p2'),
              p3: this.translation.translate('ourServicesPage.paragraphs.p3'),
              p4: this.translation.translate('ourServicesPage.paragraphs.p4'),
              p5: this.translation.translate('ourServicesPage.paragraphs.p5'),
              p6: this.translation.translate('ourServicesPage.paragraphs.p6'),
              //other variables for li
              li1: this.translation.translate('ourServicesPage.paragraphs.li1'),
              li2: this.translation.translate('ourServicesPage.paragraphs.li2'),
              li3: this.translation.translate('ourServicesPage.paragraphs.li3'),
              li4: this.translation.translate('ourServicesPage.paragraphs.li4'),
            },
          },
        ];
      },
    });
  }
}
