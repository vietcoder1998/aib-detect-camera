import React from 'react';
import { Link } from 'react-router-dom';
import favicon from '@/assets/favicon-32x32.png';

interface LogoProps {
  isScrolled: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  return (
    <Link 
      to="/"
      className="flex items-center gap-3 cursor-pointer group"
    >
      <img 
        src={favicon} 
        alt="AIB Logo" 
        className={`object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'}`}
      />
      <span className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
        AIB
      </span>
    </Link>
  );
};
