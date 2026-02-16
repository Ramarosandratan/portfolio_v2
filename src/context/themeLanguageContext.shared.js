import { createContext } from 'react';
import frTranslations from '../locales/fr.json';
import enTranslations from '../locales/en.json';

export const ThemeLanguageContext = createContext();

export const translations = {
  fr: frTranslations,
  en: enTranslations,
};

export const isBrowser =
  typeof window !== 'undefined' && typeof document !== 'undefined';
