import { createContext, useContext, useState, useEffect } from 'react';
import frTranslations from '../locales/fr.json';
import enTranslations from '../locales/en.json';

const ThemeLanguageContext = createContext();

const translations = {
  fr: frTranslations,
  en: enTranslations,
};

export const ThemeLanguageProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('fr');
  const [isLoaded, setIsLoaded] = useState(false);

  // Charger les préférences depuis localStorage au montage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLanguage = localStorage.getItem('language') || 'fr';

    setTheme(savedTheme);
    setLanguage(savedLanguage);

    // Appliquer la classe dark si nécessaire
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setIsLoaded(true);
  }, []);

  // Changer le thème
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      // Appliquer ou retirer la classe dark sur <html>
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      return newTheme;
    });
  };

  // Changer la langue
  const changeLanguage = (newLanguage) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    }
  };

  // Obtenir les traductions pour la langue actuelle
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <ThemeLanguageContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        changeLanguage,
        t,
        isLoaded,
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error(
      'useThemeLanguage must be used within ThemeLanguageProvider'
    );
  }
  return context;
};

