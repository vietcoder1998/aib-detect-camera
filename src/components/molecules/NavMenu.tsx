import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { SolutionsDropdown } from './SolutionsDropdown';

interface NavMenuProps {
  isScrolled: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({ isScrolled }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className={`flex lg:flex-row flex-col lg:items-center ${isScrolled ? 'gap-6' : 'gap-8'}`}>
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

      <button 
        onClick={() => scrollToSection('about')}
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-left ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.aboutUs')}
      </button>

      <button 
        onClick={() => scrollToSection('news')}
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-left ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.news')}
      </button>

      <button 
        onClick={() => scrollToSection('contact')}
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-left ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.contact')}
      </button>
    </div>
  );
};
