import { Button, Container, Text } from '@atoms';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutImage from '../../../../assets/AboutImage.png';

export const ProductAboutCard: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-5 bg-gradient-to-br from-gray-50 to-red-50">
      <Container>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-8xl mx-auto">
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
              
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-left">
                      <span className="text-gray-600 block">{t('productPage.hero.model')}</span>
                      <span className="font-semibold text-gray-900">{t('productPage.hero.modelValue')}</span>
                    </div>
                    <div className="text-left">
                      <span className="text-gray-600 block">{t('productPage.hero.company')}</span>
                      <span className="font-semibold text-gray-900">{t('productPage.hero.companyValue')}</span>
                    </div>
                    <div className="text-left">
                      <span className="text-gray-600 block">{t('productPage.hero.origin')}</span>
                      <span className="font-semibold text-gray-900">{t('productPage.hero.originValue')}</span>
                    </div>
                  </div>
                  <Button variant="primary" className="mt-3 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-sm py-2">
                    {t('productPage.hero.requestDemo')}
                  </Button>
                </div>
            </div>
            
            <div className="flex justify-center items-stretch h-full">
              <img 
                src={AboutImage} 
                alt="AIB Surveillance System"
                className="w-auto h-full max-h-96 rounded-xl shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};