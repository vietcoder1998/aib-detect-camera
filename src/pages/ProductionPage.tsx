import React from 'react';
import { MainLayout } from '@templates';
import { ProductsSection } from '@organisms';

export const ProductionPage: React.FC = () => {
  return (
    <MainLayout>
      <ProductsSection />
    </MainLayout>
  );
};
