import React, { useState, useEffect } from 'react';
import { Container } from '@atoms';
import { Logo, NavMenu, LanguageSwitcher } from '@molecules';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <Container>
        <div className={`transition-all duration-300 ${isScrolled ? 'flex items-center justify-between' : 'space-y-4'}`}>
          {/* First Row - Logo */}
          <div className="flex items-center">
            <Logo 
              isScrolled={isScrolled} 
              onClick={(e) => handleScrollToSection(e, '/')} 
            />
          </div>

          {/* Second Row - Navigation & Language Switcher */}
          <nav className="flex items-center justify-between">
            <NavMenu onNavigate={handleScrollToSection} />
            
            <div className="flex items-center ml-8">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};
