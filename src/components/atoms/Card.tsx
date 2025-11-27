import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
}) => {
  const hoverClass = hoverable
    ? 'hover:shadow-xl transition-shadow duration-300'
    : '';

  return (
    <div className={`bg-white rounded-lg shadow-lg ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
