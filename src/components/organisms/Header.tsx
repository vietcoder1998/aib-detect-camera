import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@atoms';
import { LanguageSwitcher } from '@molecules';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (sectionId === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-red-600">
              AIB
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              onClick={(e) => handleScrollToSection(e, '/')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#solutions" 
              onClick={(e) => handleScrollToSection(e, '#solutions')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer"
            >
              {t('nav.solutions')}
            </a>
            <a 
              href="#behaviors" 
              onClick={(e) => handleScrollToSection(e, '#behaviors')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer"
            >
              {t('nav.behaviors')}
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => handleScrollToSection(e, '#benefits')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer"
            >
              {t('nav.benefits')}
            </a>
            <a 
              href="#products" 
              onClick={(e) => handleScrollToSection(e, '#products')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer"
            >
              {t('nav.products')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer"
            >
              {t('nav.contact')}
            </a>
          </div>

          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </nav>
      </Container>
    </header>
  );
};
