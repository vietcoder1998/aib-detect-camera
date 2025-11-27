import React from 'react';
import { Card } from '@atoms';

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  color?: 'red' | 'blue' | 'green' | 'purple';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  description,
  color = 'red',
}) => {
  const colorClasses = {
    red: 'text-red-600 border-red-200 bg-red-50',
    blue: 'text-blue-600 border-blue-200 bg-blue-50',
    green: 'text-green-600 border-green-200 bg-green-50',
    purple: 'text-purple-600 border-purple-200 bg-purple-50',
  };

  return (
    <Card className={`p-6 ${colorClasses[color]} border-l-4`}>
      <div
        className={`text-3xl font-bold ${color === 'red' ? 'text-red-600' : color === 'blue' ? 'text-blue-600' : color === 'green' ? 'text-green-600' : 'text-purple-600'} mb-2`}
      >
        {value}
      </div>
      <div className="text-gray-900 font-semibold text-lg mb-1">{label}</div>
      <div className="text-gray-600 text-sm">{description}</div>
    </Card>
  );
};
