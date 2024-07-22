// Types
import { LANGUAGE } from '../types/enums';

// Others
import english from './en.json';
import italian from './it.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  [LANGUAGE.EN]: english,
  [LANGUAGE.IT]: italian,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: LANGUAGE.EN,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export const isLanguageAvailable = (languageString: string) =>
  Object.values(LANGUAGE).includes(languageString as LANGUAGE);

export default i18n;
