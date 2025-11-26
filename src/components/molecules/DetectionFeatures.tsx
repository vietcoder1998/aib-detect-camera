import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Card } from '@atoms';

interface FeatureCategoryProps {
  icon: string;
  title: string;
  items: string[];
  color?: string;
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({ icon, title, items, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    red: 'bg-red-50 border-red-200 text-red-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    pink: 'bg-pink-50 border-pink-200 text-pink-700',
    teal: 'bg-teal-50 border-teal-200 text-teal-700',
  };

  return (
    <Card className={`p-6 border-l-4 ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <Text variant="h4" className="text-gray-900">{title}</Text>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-gray-700 text-sm">
            <span className="text-green-600 mr-2 mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export const DetectionFeatures: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    {
      icon: '🚫',
      title: t('products.module1.behaviors.comprehensive.intrusion.title'),
      color: 'red',
      items: [
        t('products.module1.behaviors.comprehensive.intrusion.item1'),
        t('products.module1.behaviors.comprehensive.intrusion.item2'),
        t('products.module1.behaviors.comprehensive.intrusion.item3'),
        t('products.module1.behaviors.comprehensive.intrusion.item4'),
      ]
    },
    {
      icon: '🧗',
      title: t('products.module1.behaviors.comprehensive.climbing.title'),
      color: 'orange',
      items: [
        t('products.module1.behaviors.comprehensive.climbing.item1'),
        t('products.module1.behaviors.comprehensive.climbing.item2'),
        t('products.module1.behaviors.comprehensive.climbing.item3'),
      ]
    },
    {
      icon: '🔨',
      title: t('products.module1.behaviors.comprehensive.vandalism.title'),
      color: 'yellow',
      items: [
        t('products.module1.behaviors.comprehensive.vandalism.item1'),
        t('products.module1.behaviors.comprehensive.vandalism.item2'),
        t('products.module1.behaviors.comprehensive.vandalism.item3'),
        t('products.module1.behaviors.comprehensive.vandalism.item4'),
      ]
    },
    {
      icon: '⚠️',
      title: t('products.module1.behaviors.comprehensive.lifeThreat.title'),
      color: 'red',
      items: [
        `${t('products.module1.behaviors.comprehensive.lifeThreat.suicide.title')}: ${t('products.module1.behaviors.comprehensive.lifeThreat.suicide.item1')}, ${t('products.module1.behaviors.comprehensive.lifeThreat.suicide.item2')}`,
        `${t('products.module1.behaviors.comprehensive.lifeThreat.fall.title')}: ${t('products.module1.behaviors.comprehensive.lifeThreat.fall.item1')}, ${t('products.module1.behaviors.comprehensive.lifeThreat.fall.item2')}`,
        t('products.module1.behaviors.comprehensive.lifeThreat.fall.item3'),
        `${t('products.module1.behaviors.comprehensive.lifeThreat.fighting.title')}: ${t('products.module1.behaviors.comprehensive.lifeThreat.fighting.item1')}, ${t('products.module1.behaviors.comprehensive.lifeThreat.fighting.item2')}`,
      ]
    },
    {
      icon: '🔪',
      title: t('products.module1.behaviors.comprehensive.weapons.title'),
      color: 'purple',
      items: [
        t('products.module1.behaviors.comprehensive.weapons.item1'),
        t('products.module1.behaviors.comprehensive.weapons.item2'),
        t('products.module1.behaviors.comprehensive.weapons.item3'),
        t('products.module1.behaviors.comprehensive.weapons.item4'),
        t('products.module1.behaviors.comprehensive.weapons.item5'),
        t('products.module1.behaviors.comprehensive.weapons.item6'),
      ]
    },
    {
      icon: '🚭',
      title: t('products.module1.behaviors.comprehensive.violations.title'),
      color: 'indigo',
      items: [
        t('products.module1.behaviors.comprehensive.violations.item1'),
        t('products.module1.behaviors.comprehensive.violations.item2'),
        t('products.module1.behaviors.comprehensive.violations.item3'),
        t('products.module1.behaviors.comprehensive.violations.item4'),
      ]
    },
    {
      icon: '👤',
      title: t('products.module1.behaviors.comprehensive.faceRecognition.title'),
      color: 'blue',
      items: [
        t('products.module1.behaviors.comprehensive.faceRecognition.item1'),
        t('products.module1.behaviors.comprehensive.faceRecognition.item2'),
        t('products.module1.behaviors.comprehensive.faceRecognition.item3'),
        t('products.module1.behaviors.comprehensive.faceRecognition.item4'),
      ]
    },
    {
      icon: '🧠',
      title: t('products.module1.behaviors.comprehensive.advanced.title'),
      color: 'teal',
      items: [
        t('products.module1.behaviors.comprehensive.advanced.item1'),
        t('products.module1.behaviors.comprehensive.advanced.item2'),
        t('products.module1.behaviors.comprehensive.advanced.item3'),
        t('products.module1.behaviors.comprehensive.advanced.item4'),
        t('products.module1.behaviors.comprehensive.advanced.item5'),
        t('products.module1.behaviors.comprehensive.advanced.item6'),
        t('products.module1.behaviors.comprehensive.advanced.item7'),
      ]
    },
    {
      icon: '🚨',
      title: t('products.module1.behaviors.comprehensive.emergency.title'),
      color: 'pink',
      items: [
        t('products.module1.behaviors.comprehensive.emergency.item1'),
        t('products.module1.behaviors.comprehensive.emergency.item2'),
        t('products.module1.behaviors.comprehensive.emergency.item3'),
        t('products.module1.behaviors.comprehensive.emergency.item4'),
      ]
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <Text variant="h2" className="text-gray-900 mb-3">
          {t('products.module1.behaviors.comprehensive.title')}
        </Text>
        <Text variant="body" className="text-gray-600">
          {t('products.module1.behaviors.comprehensive.subtitle')}
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <FeatureCategory
            key={idx}
            icon={category.icon}
            title={category.title}
            items={category.items}
            color={category.color}
          />
        ))}
      </div>
    </div>
  );
};
