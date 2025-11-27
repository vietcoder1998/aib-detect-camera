import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '@atoms';
import { Logo, NavMenu, LanguageSwitcher } from '@molecules';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavMenu isScrolled={isScrolled} />
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button - Visible on mobile only */}
        <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Visible when open */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 mt-4">
            <div className="flex flex-col gap-4">
              <NavMenu isScrolled={isScrolled} />
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
