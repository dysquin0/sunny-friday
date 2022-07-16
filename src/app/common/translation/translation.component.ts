import { Component, Inject, OnInit } from '@angular/core';
import { L10nSchema } from 'angular-l10n/lib/models/types';
import {
  L10N_CONFIG,
  L10nConfig,
  L10N_LOCALE,
  L10nLocale,
  L10nTranslationService,
} from 'angular-l10n';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css'],
})
export class TranslationComponent implements OnInit {
  schema: L10nSchema[] | undefined;
  selected: any;
  flag: any;

  english: any;
  norwegianBokmal: any;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    @Inject(L10N_CONFIG) private l10nConfig: L10nConfig,
    private translation: L10nTranslationService
  ) {}

  ngOnInit() {
    this.schema = this.l10nConfig.schema;
    this.selected = this.schema[0].locale;
    this.flag = this.schema[0].text;

    this.english = this.schema[0];
    this.norwegianBokmal = this.schema[1];
  }

  setLocale(locale: L10nLocale): void {
    this.translation.setLocale(locale);
    this.flag =
      locale.language === 'en-US'
        ? '../../../assets/svg/united-states.svg'
        : '../../../assets/svg/norway.svg';
  }
}
