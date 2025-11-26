import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@atoms';

export const ModuleSpecifications: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <Text variant="h3" className="text-gray-900 mb-6">
        {t('products.module1.title')}
      </Text>
      
      {/* Performance Specs */}
      <div className="mb-8">
        <Text variant="h4" className="text-gray-800 mb-4">
          {t('products.module1.performance.title')}
        </Text>
        <ul className="space-y-2 text-gray-700">
          <li>• {t('products.module1.performance.detectionTime')}</li>
          <li>• {t('products.module1.performance.accuracy')}</li>
          <li>• {t('products.module1.performance.cameraCapacity')}</li>
        </ul>
      </div>

      {/* Features */}
      <div className="mb-8">
        <Text variant="h4" className="text-gray-800 mb-4">
          {t('products.module1.features.title')}
        </Text>
        <ul className="space-y-2 text-gray-700">
          <li>• {t('products.module1.features.detection')}</li>
          <li>• {t('products.module1.features.zoneCreation')}</li>
          <li>• {t('products.module1.features.configuration')}</li>
          <li>• {t('products.module1.features.alerting')}</li>
        </ul>
      </div>

      {/* Monitored Behaviors */}
      <div className="mb-6">
        <Text variant="h4" className="text-gray-800 mb-4">
          {t('products.module1.behaviors.title')}
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>{t(`products.module1.behaviors.item${i + 1}`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Alerts */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6">
        <p className="text-red-700 font-semibold">⚠️ {t('products.module1.alerts')}</p>
      </div>
    </div>
  );
};
