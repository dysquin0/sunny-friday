import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';

@Component({
  selector: 'app-message-us',
  templateUrl: './message-us.component.html',
  styleUrls: ['./message-us.component.css'],
})
export class MessageUsComponent implements OnInit {
  title: any;
  p1: any;
  p2: any;
  fullName: any;
  emailAddress: any;
  message: any;
  submit: any;
  errorFullName: any;
  errorEmailAddress: any;
  errorMessage: any;
  phFullName: any;
  phEmailAddress: any;
  phMessage: any;

  constructor(private translation: L10nTranslationService) {}
  ngOnInit(): void {
    this.translation.onChange().subscribe({
      next: (locale: L10nLocale) => {
        this.title = this.translation.translate(
          'contactUsPage.messageUs.header'
        );
        this.p1 = this.translation.translate(
          'contactUsPage.messageUs.paragraph.p1'
        );
        this.p2 = this.translation.translate(
          'contactUsPage.messageUs.paragraph.p2'
        );
        this.fullName = this.translation.translate(
          'contactUsPage.messageUs.form.fullName'
        );
        this.emailAddress = this.translation.translate(
          'contactUsPage.messageUs.form.emailAddress'
        );
        this.message = this.translation.translate(
          'contactUsPage.messageUs.form.message'
        );
        this.submit = this.translation.translate(
          'contactUsPage.messageUs.form.submit'
        );
        this.errorFullName = this.translation.translate(
          'contactUsPage.messageUs.formErrors.fullName'
        );
        this.errorEmailAddress = this.translation.translate(
          'contactUsPage.messageUs.formErrors.emailAddress'
        );
        this.errorMessage = this.translation.translate(
          'contactUsPage.messageUs.formErrors.message'
        );
        this.phFullName = this.translation.translate(
          'contactUsPage.messageUs.placeholders.fullName'
        );
        this.phEmailAddress = this.translation.translate(
          'contactUsPage.messageUs.placeholders.emailAddress'
        );
        this.phMessage = this.translation.translate(
          'contactUsPage.messageUs.placeholders.message'
        );
      },
    });
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }
}
