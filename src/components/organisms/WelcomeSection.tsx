import React from 'react';
import { Container } from '@atoms';
import { WelcomeHero, MonitoringInfoCard, FeatureHighlights } from '@molecules';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <WelcomeHero />

          {/* Right Column - Visual/Info Card */}
          <div className="space-y-6">
            <MonitoringInfoCard />
            <FeatureHighlights />
          </div>
        </div>
      </Container>
    </section>
  );
};
