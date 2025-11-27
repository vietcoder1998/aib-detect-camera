import React, { useState, useEffect } from 'react';
import { Container } from '@atoms';
import { Logo, NavMenu, LanguageSwitcher } from '@molecules';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Use hysteresis to prevent flickering: different thresholds for scrolling down vs up
      setIsScrolled((prev) => {
        if (prev) {
          // When already scrolled, only switch back to unscrolled below 80px
          return scrollY > 80;
        } else {
          // When unscrolled, only switch to scrolled above 120px
          return scrollY > 120;
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <Container>
        <div className={`transition-all duration-300 ${isScrolled ? 'flex items-center justify-between' : 'space-y-4'}`}>
          {/* First Row - Logo */}
          <div className="flex items-center">
            <Logo 
              isScrolled={isScrolled}
            />
          </div>

          {/* Second Row - Navigation & Language Switcher */}
          <nav className="flex items-center justify-between">
            <NavMenu isScrolled={isScrolled} />
            
            <div className="flex items-center ml-8">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};
