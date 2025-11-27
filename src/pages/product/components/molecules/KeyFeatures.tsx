import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Card } from '@atoms';
import { TechBadge } from '../atoms/TechBadge';
import { Brain, Bell, MapPin, Shield, Activity, FileText } from 'lucide-react';

export const KeyFeatures: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Brain,
      title: t('productPage.keyFeatures.behaviorRecognition.title'),
      description: t('productPage.keyFeatures.behaviorRecognition.description'),
      color: 'text-red-600'
    },
    {
      icon: Bell,
      title: t('productPage.keyFeatures.realtimeAlerts.title'), 
      description: t('productPage.keyFeatures.realtimeAlerts.description'),
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: t('productPage.keyFeatures.zoneConfiguration.title'),
      description: t('productPage.keyFeatures.zoneConfiguration.description'),
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: t('productPage.keyFeatures.weaponDetection.title'),
      description: t('productPage.keyFeatures.weaponDetection.description'),
      color: 'text-purple-600'
    },
    {
      icon: Activity,
      title: t('productPage.keyFeatures.actionRecognition.title'),
      description: t('productPage.keyFeatures.actionRecognition.description'),
      color: 'text-orange-600'
    },
    {
      icon: FileText,
      title: t('productPage.keyFeatures.smartReporting.title'),
      description: t('productPage.keyFeatures.smartReporting.description'),
      color: 'text-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <TechBadge>
            <Brain className="w-4 h-4" />
            {t('productPage.keyFeatures.badge')}
          </TechBadge>
          <Text variant="h2" className="text-gray-900 mt-6 mb-4">
            {t('productPage.keyFeatures.title')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('productPage.keyFeatures.description')}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-red-600">
              <div className={`w-12 h-12 rounded-lg bg-gray-50 mb-6 flex items-center justify-center`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <Text variant="h4" className="text-gray-900 mb-4">
                {feature.title}
              </Text>
              <Text variant="body" className="text-gray-600">
                {feature.description}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};