import { useState } from 'react';
import { Settings, Sun, Moon } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, language, changeLanguage, t } = useThemeLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 min-w-48 border border-gray-200 dark:border-gray-700 animate-fade-in transition-all duration-200">
          {/* Titre */}
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            {t('settings.title')}
          </h3>

          {/* Section Thème */}
          <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
              {t('settings.theme')}
            </p>
            <button
              onClick={handleThemeToggle}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <span className="text-sm text-gray-900 dark:text-white">
                {theme === 'light' ? t('settings.light') : t('settings.dark')}
              </span>
              {theme === 'light' ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-blue-400" />
              )}
            </button>
          </div>

          {/* Section Langue */}
          <div>
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
              {t('settings.language')}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleLanguageChange('fr')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'fr'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={toggleMenu}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label="Open settings"
      >
        <Settings size={24} />
      </button>
    </div>
  );
}
