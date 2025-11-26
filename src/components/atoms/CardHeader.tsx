import React from 'react';
import { Text } from './Text';

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = '',
  bordered = true 
}) => {
  const borderClass = bordered ? 'border-b pb-3' : '';
  
  return (
    <Text variant="h4" className={`mb-4 text-gray-900 ${borderClass} ${className}`}>
      {children}
    </Text>
  );
};
