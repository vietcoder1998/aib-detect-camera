import React from 'react';

interface TechBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const TechBadge: React.FC<TechBadgeProps> = ({ 
  children, 
  variant = 'primary' 
}) => {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold';
  const variantClasses = {
    primary: 'bg-red-100 text-red-700',
    secondary: 'bg-gray-100 text-gray-700'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </div>
  );
};