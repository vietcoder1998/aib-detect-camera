import React from 'react';
import { MainLayout } from '@templates';
import { ProductPageLayout } from './components/organisms/ProductPageLayout';

export const ProductionPage: React.FC = () => {
  return (
    <MainLayout>
      <ProductPageLayout />
    </MainLayout>
  );
};
