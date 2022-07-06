import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';
@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css'],
})
export class HomeBannerComponent implements OnInit {
  header: string | undefined;
  paragraph: string | undefined;

  constructor(private translation: L10nTranslationService) {}

  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.header = this.translation.translate('homePage.banner.header');
        this.paragraph = this.translation.translate(
          'homePage.banner.paragraph'
        );
      },
    });
  }
}
