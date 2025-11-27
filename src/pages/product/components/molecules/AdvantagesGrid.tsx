import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Card } from '@atoms';
import { Users, Clock, Shield, Zap } from 'lucide-react';

export const AdvantagesGrid: React.FC = () => {
  const { t } = useTranslation();
  
  const advantages = [
    {
      icon: Users,
      title: t('productPage.advantagesGrid.advantages.reducedManpower.title'),
      description: t('productPage.advantagesGrid.advantages.reducedManpower.description'),
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: t('productPage.advantagesGrid.advantages.earlyDetection.title'),
      description: t('productPage.advantagesGrid.advantages.earlyDetection.description'),
      color: 'text-blue-600'
    },
    {
      icon: Shield,
      title: t('productPage.advantagesGrid.advantages.reducedFalseAlerts.title'),
      description: t('productPage.advantagesGrid.advantages.reducedFalseAlerts.description'),
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: t('productPage.advantagesGrid.advantages.enhancedProactivity.title'),
      description: t('productPage.advantagesGrid.advantages.enhancedProactivity.description'),
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('productPage.advantagesGrid.title')}
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            {t('productPage.advantagesGrid.subtitle')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('productPage.advantagesGrid.description')}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gray-50`}>
                  <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                </div>
                <div className="flex-1">
                  <Text variant="h4" className="text-gray-900 mb-3">
                    {advantage.title}
                  </Text>
                  <Text variant="body" className="text-gray-600">
                    {advantage.description}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};