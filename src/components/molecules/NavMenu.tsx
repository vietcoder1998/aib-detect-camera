import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface NavMenuProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  isScrolled: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onNavigate, isScrolled }) => {
  const { t } = useTranslation();
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);

  const solutions = [
    { id: 'prison', name: t('solutions.prison.title') },
    { id: 'hospital', name: t('solutions.hospital.title') },
    { id: 'factory', name: t('solutions.factory.title') },
    { id: 'office', name: t('solutions.office.title') },
    { id: 'school', name: t('solutions.school.title') },
    { id: 'public', name: t('solutions.public.title') },
  ];

  const handleSolutionClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setShowSolutionsDropdown(false);
    onNavigate(e, '#solutions');
  };

  return (
    <div className={`flex items-center ${isScrolled ? 'gap-6' : 'gap-8'}`}>
      <Link 
        to="/"
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.home')}
      </Link>
      
      {/* Solutions Dropdown */}
      <div 
        className="relative"
        onMouseEnter={() => setShowSolutionsDropdown(true)}
        onMouseLeave={() => setShowSolutionsDropdown(false)}
      >
        <a 
          href="#solutions" 
          onClick={handleSolutionClick}
          className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase flex items-center gap-1 ${isScrolled ? 'text-xs' : 'text-sm'}`}
        >
          {t('nav.solutions')}
          <svg className={`${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        
        {showSolutionsDropdown && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {solutions.map((solution) => (
              <a
                key={solution.id}
                href="#solutions"
                onClick={handleSolutionClick}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                {solution.name}
              </a>
            ))}
          </div>
        )}
      </div>

      <Link 
        to="/products"
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.products')}
      </Link>

      <Link 
        to="/#contact"
        className={`text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase ${isScrolled ? 'text-xs' : 'text-sm'}`}
      >
        {t('nav.contact')}
      </Link>
    </div>
  );
};
