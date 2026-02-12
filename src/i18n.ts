import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import commonEn from './locales/en/common.json';
import contactEn from './locales/en/contact.json';
import homeEn from './locales/en/home.json';
import meetTheTeamEn from './locales/en/meetTheTeam.json';
import solutionsEn from './locales/en/solutions.json';

import commonAr from './locales/ar/common.json';
import contactAr from './locales/ar/contact.json';
import homeAr from './locales/ar/home.json';
import meetTheTeamAr from './locales/ar/meetTheTeam.json';
import solutionsAr from './locales/ar/solutions.json';

const resources = {
  en: {
    common: commonEn,
    contact: contactEn,
    home: homeEn,
    meetTheTeam: meetTheTeamEn,
    solutions: solutionsEn,
  },
  ar: {
    common: commonAr,
    contact: contactAr,
    home: homeAr,
    meetTheTeam: meetTheTeamAr,
    solutions: solutionsAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    ns: ['common', 'contact', 'home', 'meetTheTeam', 'solutions'],
    defaultNS: 'common',
    react: {
      useSuspense: false,
    },
  });

export default i18n;
