import React from 'react';
import { ProductHeroHeader } from './ProductHeroHeader';
import { ProductAboutCard } from './ProductAboutCard';

export const ProductHero: React.FC = () => {
  return (
    <>
      <ProductHeroHeader />
      <ProductAboutCard />
    </>
  );
};