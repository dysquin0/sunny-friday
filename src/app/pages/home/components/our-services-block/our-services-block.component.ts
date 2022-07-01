import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-our-services-block',
  templateUrl: './our-services-block.component.html',
  styleUrls: ['./our-services-block.component.css'],
})
export class OurServicesBlockComponent implements OnInit {
  title: string | undefined;
  link: any;
  cards: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate('navigation.ourServices');
        this.link = {
          label: this.translation.translate('homePage.ourServices.navlink'),
          link: '/our-services',
        };
        this.cards = [
          {
            image: '../../../../../assets/images/content-marketing.png',
            title: this.translation.translate(
              'homePage.ourServices.cards.card1.header'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.p1'
              ),
              p2: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.p2'
              ),
              p3: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.p3'
              ),
              p4: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.p4'
              ),
              p5: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.p5'
              ),
              p6: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.p6'
              ),
              //other variables for li
              li1: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.li1'
              ),
              li2: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.li2'
              ),
              li3: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.li3'
              ),
              li4: this.translation.translate(
                'homePage.ourServices.cards.card1.paragraphs.li4'
              ),
            },
          },
          {
            image:
              '../../../../../assets/images/conversion-rate-optimization.png',
            title: this.translation.translate(
              'homePage.ourServices.cards.card2.header'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.p1'
              ),
              p2: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.p2'
              ),
              p3: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.p3'
              ),
              p4: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.p4'
              ),
              p5: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.p5'
              ),
              p6: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.p6'
              ),
              //other variables for li
              li1: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.li1'
              ),
              li2: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.li2'
              ),
              li3: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.li3'
              ),
              li4: this.translation.translate(
                'homePage.ourServices.cards.card2.paragraphs.li4'
              ),
            },
          },
          {
            image: '../../../../../assets/images/email-marketing.png',
            title: this.translation.translate(
              'homePage.ourServices.cards.card3.header'
            ),
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
            paragraphs: {
              p1: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.p1'
              ),
              p2: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.p2'
              ),
              p3: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.p3'
              ),
              p4: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.p4'
              ),
              p5: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.p5'
              ),
              p6: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.p6'
              ),
              //other variables for li
              li1: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.li1'
              ),
              li2: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.li2'
              ),
              li3: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.li3'
              ),
              li4: this.translation.translate(
                'homePage.ourServices.cards.card3.paragraphs.li4'
              ),
            },
          },
        ];
      },
    });
  }
}
