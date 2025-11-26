import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@atoms';
import { FeatureCard } from './FeatureCard';

export const FeatureHighlights: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Grid cols={2} gap={4}>
      <FeatureCard 
        icon="🎯"
        title={t('welcome.features.behaviors.title')}
        description={t('welcome.features.behaviors.description')}
      />
      <FeatureCard 
        icon="⚡"
        title={t('welcome.features.alerts.title')}
        description={t('welcome.features.alerts.description')}
      />
      <FeatureCard 
        icon="📊"
        title={t('welcome.features.categories.title')}
        description={t('welcome.features.categories.description')}
      />
      <FeatureCard 
        icon="🧠"
        title={t('welcome.features.accuracy.title')}
        description={t('welcome.features.accuracy.description')}
      />
    </Grid>
  );
};
