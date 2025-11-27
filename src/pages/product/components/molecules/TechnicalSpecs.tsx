import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text } from '@atoms';
import { MetricCard } from '../atoms/MetricCard';
import { TechBadge } from '../atoms/TechBadge';
import { Brain } from 'lucide-react';

export const TechnicalSpecs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <TechBadge>
            <Brain className="w-4 h-4" />
            {t('productPage.technicalSpecs.badge')}
          </TechBadge>
          <Text variant="h2" className="text-gray-900 mt-6 mb-4">
            {t('productPage.technicalSpecs.title')}
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            {t('productPage.technicalSpecs.subtitle')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('productPage.technicalSpecs.description')}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard
            value={t('productPage.technicalSpecs.responseTime.value')}
            label={t('productPage.technicalSpecs.responseTime.label')}
            description={t(
              'productPage.technicalSpecs.responseTime.description'
            )}
            color="red"
          />
          <MetricCard
            value={t('productPage.technicalSpecs.accuracyRate.value')}
            label={t('productPage.technicalSpecs.accuracyRate.label')}
            description={t(
              'productPage.technicalSpecs.accuracyRate.description'
            )}
            color="blue"
          />
          <MetricCard
            value={t('productPage.technicalSpecs.cameraSupport.value')}
            label={t('productPage.technicalSpecs.cameraSupport.label')}
            description={t(
              'productPage.technicalSpecs.cameraSupport.description'
            )}
            color="green"
          />
        </div>
      </Container>
    </section>
  );
};
