import React from 'react';
import { MainLayout } from '@templates';
import { 
  WelcomeSection, 
  SolutionsSection, 
  BehaviorsSection, 
  BenefitsSection, 
  ProductsSection 
} from '@organisms';

export const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <WelcomeSection />
      <SolutionsSection />
      <BehaviorsSection />
      <BenefitsSection />
      <ProductsSection />
    </MainLayout>
  );
};
