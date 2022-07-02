import { Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { L10nSchema } from 'angular-l10n/lib/models/types';
import {
  L10N_CONFIG,
  L10nConfig,
  L10N_LOCALE,
  L10nLocale,
  L10nTranslationService,
} from 'angular-l10n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sunny-friday';
  schema: L10nSchema[] | undefined;

  constructor(
    @Inject(L10N_LOCALE) public locale: L10nLocale,
    @Inject(L10N_CONFIG) private l10nConfig: L10nConfig,
    private translation: L10nTranslationService,
    private router: Router
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

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  setLocale(locale: L10nLocale): void {
    this.translation.setLocale(locale);
  }
}
