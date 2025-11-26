import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '@atoms';
import { NavLink, LanguageSwitcher } from '@molecules';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-600">
              ABM
            </h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">{t('nav.home')}</NavLink>
            <NavLink to="/about">{t('nav.about')}</NavLink>
            <NavLink to="/products">{t('nav.products')}</NavLink>
            <NavLink to="/contact">{t('nav.contact')}</NavLink>
          </div>

          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </nav>
      </Container>
    </header>
  );
};
