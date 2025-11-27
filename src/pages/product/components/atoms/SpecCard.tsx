import React from 'react';
import { Card } from '@atoms';

interface SpecCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

export const SpecCard: React.FC<SpecCardProps> = ({ title, value, icon }) => {
  return (
    <Card className="p-4 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="text-red-600">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div className="text-sm text-gray-600 font-medium">
            {title}
          </div>
          <div className="text-lg font-semibold text-gray-900">
            {value}
          </div>
        </div>
      </div>
    </Card>
  );
};