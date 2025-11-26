import React from 'react';

interface LogoProps {
  isScrolled: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({ isScrolled, onClick }) => {
  return (
    <a 
      href="/" 
      onClick={onClick}
      className="flex items-center gap-3 cursor-pointer group text-2xl"
    >
      {/* <img 
        src="https://www.hisokai.com/wp-content/uploads/2023/09/hisokai-logo-1.png" 
        alt="HISOKAI Logo" 
        className={`object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'}`}
      /> */}
      AIB
    </a>
  );
};
