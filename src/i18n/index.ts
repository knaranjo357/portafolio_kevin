import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translations from './translation.json';
import projectsData from './projects.json';

// Combine translations with projects data
const combinedTranslations = {
  ...translations,
  projectsData
};

// Function to transform key-centric structure to language-centric structure
const transformTranslations = (obj: any) => {
  const result: any = { en: {}, es: {} };

  const recurse = (current: any, path: string[] = []) => {
    if (typeof current !== 'object' || current === null) {
      // Literal value, copy to all languages
      ['en', 'es'].forEach(lang => {
        let target = result[lang];
        for (let i = 0; i < path.length - 1; i++) {
          if (!target[path[i]]) target[path[i]] = Array.isArray(current) ? [] : {};
          target = target[path[i]];
        }
        target[path[path.length - 1]] = current;
      });
      return;
    }

    // Check if it's a language leaf (object with en/es keys)
    if (current.en !== undefined && current.es !== undefined && Object.keys(current).length <= 5) {
      Object.keys(current).forEach(lang => {
        if (!result[lang]) result[lang] = {};
        
        let target = result[lang];
        for (let i = 0; i < path.length - 1; i++) {
          if (!target[path[i]]) target[path[i]] = {};
          target = target[path[i]];
        }
        target[path[path.length - 1]] = current[lang];
      });
      return;
    }

    // If it's an array and not a language leaf, we need to preserve it as an array
    if (Array.isArray(current)) {
      // If it's an array of literals (like technologies), copy it to all languages
      if (current.every(item => typeof item !== 'object' || item === null)) {
        ['en', 'es'].forEach(lang => {
          let target = result[lang];
          for (let i = 0; i < path.length - 1; i++) {
            if (!target[path[i]]) target[path[i]] = {};
            target = target[path[i]];
          }
          target[path[path.length - 1]] = current;
        });
        return;
      }
      
      // If it's an array of objects (like projectsData), we must ensure target is an array
      ['en', 'es'].forEach(lang => {
        let target = result[lang];
        for (let i = 0; i < path.length - 1; i++) {
          if (!target[path[i]]) target[path[i]] = {};
          target = target[path[i]];
        }
        if (!target[path[path.length - 1]]) target[path[path.length - 1]] = [];
      });

      current.forEach((item, index) => {
        recurse(item, [...path, index.toString()]);
      });
      return;
    }

    // Otherwise, recurse into children
    Object.keys(current).forEach(key => {
      recurse(current[key], [...path, key]);
    });
  };

  recurse(obj);
  return result;
};

const transformed = transformTranslations(combinedTranslations);

const resources = {
  en: {
    translation: transformed.en
  },
  es: {
    translation: transformed.es
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    load: 'languageOnly',
    debug: false,
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'preferredLanguage',
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
