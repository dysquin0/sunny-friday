import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.css'],
})
export class GlobalFooterComponent implements OnInit {
  copyright: string | undefined;
  privacyPolicy: string | undefined;
  termsAndCondition: string | undefined;
  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.copyright = this.translation.translate(
          'common.globalFooter.copyright'
        );
        this.privacyPolicy = this.translation.translate(
          'common.globalFooter.privacyPolicy'
        );
        this.termsAndCondition = this.translation.translate(
          'common.globalFooter.termsAndCondition'
        );
      },
    });
  }
}
