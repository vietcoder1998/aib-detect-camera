import React from 'react';

interface SpecListProps {
  children: React.ReactNode;
  className?: string;
}

export const SpecList: React.FC<SpecListProps> = ({ children, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
};
