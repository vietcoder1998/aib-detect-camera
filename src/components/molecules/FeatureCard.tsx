import React from 'react';
import { Text, Card } from '@atoms';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="p-4 bg-white/60 backdrop-blur hover:bg-white/80 transition-colors">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
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
