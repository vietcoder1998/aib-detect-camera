import React from 'react';
import { useTranslation } from 'react-i18next';

interface NavMenuProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-8">
      <a 
        href="/" 
        onClick={(e) => onNavigate(e, '/')}
        className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-sm"
      >
        {t('nav.home')}
      </a>
      <a 
        href="#solutions" 
        onClick={(e) => onNavigate(e, '#solutions')}
        className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-sm"
      >
        {t('nav.solutions')}
      </a>
      <a 
        href="#contact" 
        onClick={(e) => onNavigate(e, '#contact')}
        className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-sm"
      >
        {t('nav.contact')}
      </a>
    </div>
  );
};
