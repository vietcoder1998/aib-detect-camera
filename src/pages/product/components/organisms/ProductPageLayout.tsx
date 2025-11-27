import React from 'react';
import { ProductHero } from '../molecules/ProductHero';
import { TechnicalSpecs } from '../molecules/TechnicalSpecs';
import { KeyFeatures } from '../molecules/KeyFeatures';
import { BehaviorsList } from '../molecules/BehaviorsList';
import { HardwareSpecs } from '../molecules/HardwareSpecs';
import { SystemArchitecture } from '../molecules/SystemArchitecture';
import { AdvantagesGrid } from '../molecules/AdvantagesGrid';

export const ProductPageLayout: React.FC = () => {
  return (
    <div>
      <ProductHero />
      <TechnicalSpecs />
      <KeyFeatures />
      <BehaviorsList />
      <HardwareSpecs />
      <SystemArchitecture />
      <AdvantagesGrid />
    </div>
  );
};
