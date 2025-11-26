import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@atoms';

export const MainProductInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <Text variant="h3" className="text-gray-900 mb-6">
        {t('products.mainProduct.name')}
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <div>
          <span className="font-semibold text-gray-700">Model:</span>
          <p className="text-gray-600">{t('products.mainProduct.model')}</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Manufacturer:</span>
          <p className="text-gray-600">{t('products.mainProduct.manufacturer')}</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Origin:</span>
          <p className="text-gray-600">{t('products.mainProduct.origin')}</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Quantity:</span>
          <p className="text-gray-600">{t('products.mainProduct.quantity')}</p>
        </div>
      </div>
    </div>
  );
};
