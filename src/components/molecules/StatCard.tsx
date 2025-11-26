import React from 'react';
import { Text } from '@atoms';

interface StatCardProps {
  value: string;
  label: string;
  color: 'blue' | 'indigo' | 'purple';
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className={`p-4 ${colorClasses[color].split(' ')[0]} rounded-lg`}>
      <Text variant="h3" className={`${colorClasses[color].split(' ')[1]} mb-1`}>
        {value}
      </Text>
      <Text variant="small" className="text-gray-600">
        {label}
      </Text>
    </div>
  );
};
