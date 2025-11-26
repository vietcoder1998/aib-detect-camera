import React from 'react';
import { Grid } from '@atoms';
import { FeatureCard } from './FeatureCard';

export const FeatureHighlights: React.FC = () => {
  return (
    <Grid cols={2} gap={4}>
      <FeatureCard 
        icon="🎯"
        title="12+ Behaviors"
        description="Monitored in real-time"
      />
      <FeatureCard 
        icon="⚡"
        title="Instant Alerts"
        description="Automatic emergency response"
      />
    </Grid>
  );
};
