import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css'],
})
export class OurValuesComponent implements OnInit {
  title: any;
  values: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate('aboutUsPage.ourValues.header');
        this.values = [
          {
            image: '../../../../../assets/images/champions.svg',
            description: this.translation.translate(
              'aboutUsPage.ourValues.value1'
            ),
          },
          {
            image: '../../../../../assets/images/fun.svg',
            description: this.translation.translate(
              'aboutUsPage.ourValues.value2'
            ),
          },
          {
            image: '../../../../../assets/images/pinwheel.svg',
            description: this.translation.translate(
              'aboutUsPage.ourValues.value3'
            ),
          },
          {
            image: '../../../../../assets/images/box.svg',
            description: this.translation.translate(
              'aboutUsPage.ourValues.value4'
            ),
          },
          {
            image: '.w./../../../../assets/images/partner.svg',
            description: this.translation.translate(
              'aboutUsPage.ourValues.value5'
            ),
          },
          {
            image: '../../../../../assets/images/other-companies.svg',
            description: this.translation.translate(
              'aboutUsPage.ourValues.value6'
            ),
          },
        ];
      },
    });
  }
}
