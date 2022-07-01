import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.css'],
})
export class FindUsComponent implements OnInit {
  title: any;
  headquarters: any;
  telephone: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate('contactUsPage.findUs.header');
        this.headquarters = this.translation.translate(
          'contactUsPage.findUs.headquarters'
        );
        this.telephone = this.translation.translate(
          'contactUsPage.findUs.telephone'
        );
      },
    });
  }
}
