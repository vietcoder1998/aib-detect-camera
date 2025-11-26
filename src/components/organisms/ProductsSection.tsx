import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text } from '@atoms';
import { MainProductInfo, ModuleSpecifications, EquipmentGrid } from '@molecules';

export const ProductsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('products.title')}
          </Text>
          <Text variant="body" className="text-gray-600">
            {t('products.subtitle')}
          </Text>
        </div>

        {/* Main Product Info */}
        <MainProductInfo />

        {/* Module 1: ABM System */}
        <ModuleSpecifications />

        {/* Equipment Section */}
        <EquipmentGrid />
      </Container>
    </section>
  );
};

