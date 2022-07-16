import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.css'],
})
export class AboutUsSectionComponent implements OnInit {
  title: any;
  displayURL;
  aboutUs: any;

  constructor(
    private sanitizer: DomSanitizer,
    private translation: L10nTranslationService
  ) {
    this.displayURL = sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/KM8ZXY0lNdU'
    );
  }

  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate('navigation.aboutUs');
        this.aboutUs = [
          {
            subtitle: this.translation.translate('aboutUsPage.subheader'),
            description1: this.translation.translate(
              'aboutUsPage.description1'
            ),
            description2: this.translation.translate(
              'aboutUsPage.description2'
            ),
          },
        ];
      },
    });
  }
}
