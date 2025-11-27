import React from 'react';
import { useNavigate } from 'react-router-dom';
import favicon from '@/assets/favicon-32x32.png';

interface LogoProps {
  isScrolled: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({ isScrolled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <button 
      onClick={handleClick}
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
    </button>
  );
};
