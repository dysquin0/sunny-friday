import { Component, OnInit } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';
@Component({
  selector: 'app-contact-us-btn',
  templateUrl: './contact-us-btn.component.html',
  styleUrls: ['./contact-us-btn.component.css'],
})
export class ContactUsBtnComponent implements OnInit {
  label: string | undefined;
  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.label = this.translation.translate('common.contactUs');
      },
    });
  }
}
