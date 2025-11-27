import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

interface SolutionsDropdownProps {
  isScrolled: boolean;
}

export const SolutionsDropdown: React.FC<SolutionsDropdownProps> = ({ isScrolled }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSolutionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Navigate to home page first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSolutions();
      }, 100);
    } else {
      scrollToSolutions();
    }
  };

  const scrollToSolutions = () => {
    const element = document.querySelector('#solutions');
    if (element) {
      const headerOffset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      className="relative"
    >
      <Link 
        to="/#solutions"
        onClick={handleSolutionClick}
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase flex items-center gap-1 ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.solutions')}
      </Link>
    </div>
  );
};
