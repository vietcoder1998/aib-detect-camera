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
            <a 
              href="/" 
              onClick={(e) => handleScrollToSection(e, '/')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <h1 className="text-xl md:text-2xl font-bold text-red-600 group-hover:text-red-700 transition-colors">
                AIB
              </h1>
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="/" 
              onClick={(e) => handleScrollToSection(e, '/')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#solutions" 
              onClick={(e) => handleScrollToSection(e, '#solutions')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase"
            >
              {t('nav.solutions')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase"
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
