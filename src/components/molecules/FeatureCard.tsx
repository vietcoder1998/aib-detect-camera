import React from 'react';
import { Text, Card } from '@atoms';
import { getIcon } from '../../utils/iconMap';

interface FeatureCardProps {
  iconName: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ iconName, title, description }) => {
  const Icon = getIcon(iconName);
  
  return (
    <Card className="p-4 bg-white/60 backdrop-blur hover:bg-white/80 transition-colors">
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" strokeWidth={2} />
        <div>
          <Text variant="h4" className="text-gray-900 mb-1">
            {title}
          </Text>
          <Text variant="small" className="text-gray-600">
            {description}
          </Text>
        </div>
      </div>
    </Card>
  );
};
