// Utils
import { appLog } from '../utils/logger';

// Types
import { LANGUAGE } from '../types/enums';

// Others
import english from './en.json';
import italian from './it.json';
import i18n, { type CustomTypeOptions, type ParseKeys } from 'i18next';
import { getLocales } from 'expo-localization';
import { initReactI18next } from 'react-i18next';

const resources = {
  [LANGUAGE.EN]: english,
  [LANGUAGE.IT]: italian,
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources,
  lng: LANGUAGE.EN,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

const isLanguageAvailable = (languageString: string) =>
  Object.values(LANGUAGE).includes(languageString as LANGUAGE);

const locale = getLocales()[0];
const languageCode = locale.languageCode ?? locale.languageTag.split('-')[0];

if (isLanguageAvailable(languageCode) && languageCode !== i18n.language) {
  appLog.debug(`Updated language from ${i18n.language} to ${languageCode}`);
  i18n.changeLanguage(languageCode);
}

declare module 'i18next' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface CustomTypeOptions {
    resources: typeof resources;
    keySeparator: ':';
  }
}

export type Dictionary = ParseKeys<keyof CustomTypeOptions['resources']> | TemplateStringsArray;

export default i18n;
