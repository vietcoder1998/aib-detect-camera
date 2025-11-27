import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SolutionsDropdown } from './SolutionsDropdown';

interface NavMenuProps {
  isScrolled: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({ isScrolled }) => {
  const { t } = useTranslation();

  return (
    <div className={`flex items-center ${isScrolled ? 'gap-6' : 'gap-8'}`}>
      <Link 
        to="/"
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.home')}
      </Link>
      
      <SolutionsDropdown isScrolled={isScrolled} />

      <Link 
        to="/products"
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.products')}
      </Link>

      <Link 
        to="/#about"
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.aboutUs')}
      </Link>

      <Link 
        to="/#news"
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.news')}
      </Link>

      <Link 
        to="/#contact"
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.contact')}
      </Link>
    </div>
  );
};
