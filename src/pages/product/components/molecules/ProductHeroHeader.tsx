import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Button } from '@atoms';
import { TechBadge } from '../atoms/TechBadge';
import { Cpu } from 'lucide-react';

export const ProductHeroHeader: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <Container>
        <div className="text-center mb-12">
          <TechBadge>
            <Cpu className="w-4 h-4" />
            {t('productPage.hero.badge')}
          </TechBadge>
          <Text variant="h1" className="text-gray-900 mt-6 mb-6">
            {t('productPage.hero.title')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-4xl mx-auto mb-8">
            {t('productPage.hero.subtitle')}
          </Text>
          <Button variant="primary" size="lg" className="mb-12 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700">
            {t('productPage.hero.exploreButton')}
          </Button>
        </div>
      </Container>
    </section>
  );
};