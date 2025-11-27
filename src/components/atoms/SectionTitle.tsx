import React from 'react';
import { Text } from './Text';

interface SectionTitleProps {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  centered = true,
  className = '',
}) => {
  const centerClass = centered ? 'text-center' : '';

  return (
    <Text
      variant="h3"
      className={`text-gray-900 mb-8 ${centerClass} ${className}`}
    >
      {children}
    </Text>
  );
};
