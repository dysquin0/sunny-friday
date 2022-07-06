import { L10nConfig } from 'angular-l10n';
import { i18nAsset } from './i18n';

export const l10nConfig: L10nConfig = {
  format: 'language-region',
  providers: [{ name: 'app', asset: i18nAsset }],
  fallback: false,
  cache: true,
  keySeparator: '.',
  defaultLocale: {
    language: 'en-US',
    currency: 'USD',
    timeZone: 'America/Los_Angeles',
  },
  schema: [
    {
      locale: {
        language: 'en-US',
        currency: 'USD',
        timeZone: 'America/Los_Angeles',
        units: { length: 'mile' },
      },
      dir: 'ltr',
      text: '../../../assets/svg/united-states.svg',
    },
    {
      locale: {
        language: 'nb-NO',
        currency: 'NOK',
        timeZone: 'Europe/Norway',
        units: { length: 'kilometer' },
      },
      dir: 'ltr',
      text: '../../../assets/svg/norway.svg',
    },
  ],
};
