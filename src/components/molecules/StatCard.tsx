import React from 'react';
import { Text } from '@atoms';

interface StatCardProps {
  value: string;
  label: string;
  color: 'red' | 'orange' | 'purple';
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, color }) => {
  const colorClasses = {
    red: 'bg-red-50 text-red-600',
    orange: 'bg-orange-50 text-orange-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className={`p-4 ${colorClasses[color].split(' ')[0]} rounded-lg`}>
      <Text
        variant="h3"
        className={`${colorClasses[color].split(' ')[1]} mb-1`}
      >
        {value}
      </Text>
      <Text variant="small" className="text-gray-600">
        {label}
      </Text>
    </div>
  );
};
