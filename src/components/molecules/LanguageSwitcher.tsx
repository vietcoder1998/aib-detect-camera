import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-red-600 text-red-600 hover:bg-red-50 transition-colors duration-200"
    >
      <span className="font-medium">
        {i18n.language === 'en' ? '🇬🇧 EN' : '🇻🇳 VI'}
      </span>
    </button>
  );
};
