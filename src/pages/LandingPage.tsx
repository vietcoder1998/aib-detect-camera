import React from 'react';
import { MainLayout } from '@templates';
import { WelcomeSection, ProductsSection } from '@organisms';

export const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <WelcomeSection />
      <ProductsSection />
    </MainLayout>
  );
};
