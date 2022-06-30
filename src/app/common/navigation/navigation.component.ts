import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  navItems: any;
  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.navItems = [
          {
            name: this.translation.translate('navigation.home'),
            route: 'home',
          },
          {
            name: this.translation.translate('navigation.ourServices'),
            route: 'our-services',
          },
          {
            name: this.translation.translate('navigation.aboutUs'),
            route: 'about-us',
          },
          {
            name: this.translation.translate('navigation.workWithUs'),
            route: 'work-with-us',
          },
        ];
      },
    });
  }
}
