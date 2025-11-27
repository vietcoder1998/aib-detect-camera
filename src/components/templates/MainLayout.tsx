import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '@organisms';
import { InformationContact } from '@organisms';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <InformationContact />
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
};
