import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.css'],
})
export class PreFooterComponent implements OnInit {
  header: string | undefined;
  paragraph: string | undefined;
  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.header = this.translation.translate('common.preFooter.header');
        this.paragraph = this.translation.translate(
          'common.preFooter.paragraph'
        );
      },
    });
  }
}
