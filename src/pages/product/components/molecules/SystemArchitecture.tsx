import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Card } from '@atoms';
import { Camera, Network, Server, Monitor } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  const { t } = useTranslation();
  
  const layers = [
    {
      icon: Camera,
      title: t('productPage.systemArchitecture.layers.cameraLayer.title'),
      description: t('productPage.systemArchitecture.layers.cameraLayer.description'),
      color: 'text-red-600 bg-red-50 border-red-200'
    },
    {
      icon: Network,
      title: t('productPage.systemArchitecture.layers.networkLayer.title'), 
      description: t('productPage.systemArchitecture.layers.networkLayer.description'),
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: Server,
      title: t('productPage.systemArchitecture.layers.serverLayer.title'),
      description: t('productPage.systemArchitecture.layers.serverLayer.description'),
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      icon: Monitor,
      title: t('productPage.systemArchitecture.layers.operationsLayer.title'),
      description: t('productPage.systemArchitecture.layers.operationsLayer.description'),
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <Container>
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('productPage.systemArchitecture.title')}
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            {t('productPage.systemArchitecture.subtitle')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('productPage.systemArchitecture.description')}
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {layers.map((layer, index) => (
            <Card key={index} className={`p-8 border-l-4 ${layer.color}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${layer.color.split(' ')[1]} ${layer.color.split(' ')[2]}`}>
                  <layer.icon className={`w-6 h-6 ${layer.color.split(' ')[0]}`} />
                </div>
                <div className="flex-1">
                  <Text variant="h4" className="text-gray-900 mb-3">
                    {layer.title}
                  </Text>
                  <Text variant="body" className="text-gray-600">
                    {layer.description}
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