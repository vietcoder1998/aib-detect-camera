import { DetectionFeatures, MainProductInfo, ModuleSpecifications } from '@/components/molecules';
import {
  BehaviorsSection,
  BenefitsSection,
  ContactSection,
  SolutionsSection,
  WelcomeSection
} from '@organisms';
import { MainLayout } from '@templates';
import React from 'react';

export const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <WelcomeSection />
      <SolutionsSection />
      <BehaviorsSection />
      <BenefitsSection />
      <MainProductInfo />
      <ModuleSpecifications />
      <DetectionFeatures />
      <ContactSection />
    </MainLayout>
  );
};
