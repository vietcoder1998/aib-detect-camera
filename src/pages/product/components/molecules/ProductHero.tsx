import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Button } from '@atoms';
import { TechBadge } from '../atoms/TechBadge';
import { Cpu } from 'lucide-react';

export const ProductHero: React.FC = () => {
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
          <Button variant="primary" size="lg" className="mb-12">
            {t('productPage.hero.exploreButton')}
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Text variant="h2" className="text-gray-900 mb-4">
                {t('productPage.hero.aboutTitle')}
              </Text>
              <Text variant="body" className="text-gray-600 mb-6">
                {t('productPage.hero.aboutDescription1')}
              </Text>
              <Text variant="body" className="text-gray-600 mb-6">
                {t('productPage.hero.aboutDescription2')}
              </Text>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('productPage.hero.model')}</span>
                  <span className="font-semibold text-gray-900">AIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('productPage.hero.company')}</span>
                  <span className="font-semibold text-gray-900">AMBILI TECH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('productPage.hero.origin')}</span>
                  <span className="font-semibold text-gray-900">Indonesia</span>
                </div>
                <Button variant="primary" className="w-full mt-4">
                  {t('productPage.hero.requestDemo')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};