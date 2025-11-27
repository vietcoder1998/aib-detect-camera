import { DetectionFeatures, MainProductInfo, ModuleSpecifications } from '@/components/molecules';
import {
  AboutSection,
  BehaviorsSection,
  BenefitsSection,
  ContactSection,
  NewsSection,
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
      <AboutSection />
      <NewsSection />
      <ContactSection />
    </MainLayout>
  );
};
