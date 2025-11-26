import React from 'react';

interface SpecItemProps {
  label: string;
  value: string;
  className?: string;
}

export const SpecItem: React.FC<SpecItemProps> = ({ label, value, className = '' }) => {
  return (
    <div className={`text-sm ${className}`}>
      <span className="font-semibold text-gray-700">{label}:</span>{' '}
      <span className="text-gray-600">{value}</span>
    </div>
  );
};
