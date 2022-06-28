import { Component, Inject, OnInit } from '@angular/core';
import {
  L10N_CONFIG,
  L10nConfig,
  L10N_LOCALE,
  L10nLocale,
  L10nTranslationService,
} from 'angular-l10n';
import { L10nSchema } from 'angular-l10n/lib/models/types';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css'],
})
export class TranslationComponent implements OnInit {
  schema: L10nSchema[] | undefined;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    @Inject(L10N_CONFIG) private l10nConfig: L10nConfig,
    private translation: L10nTranslationService
  ) {}

  ngOnInit() {
    this.schema = this.l10nConfig.schema;

    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        console.log(locale);
        console.log(this.translation.data);
      },
    });
    this.translation.onError().subscribe({
      next: (error: any) => {
        if (error) console.log(error);
      },
    });
  }

  setLocale(locale: L10nLocale): void {
    this.translation.setLocale(locale);
  }
}
