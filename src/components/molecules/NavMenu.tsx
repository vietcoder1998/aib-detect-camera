import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface NavMenuProps {
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onNavigate }) => {
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
    <div className="flex items-center gap-8">
      <a 
        href="/" 
        onClick={(e) => onNavigate(e, '/')}
        className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-sm"
      >
        {t('nav.home')}
      </a>
      
      {/* Solutions Dropdown */}
      <div 
        className="relative"
        onMouseEnter={() => setShowSolutionsDropdown(true)}
        onMouseLeave={() => setShowSolutionsDropdown(false)}
      >
        <a 
          href="#solutions" 
          onClick={handleSolutionClick}
          className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-sm flex items-center gap-1"
        >
          {t('nav.solutions')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <a 
        href="#contact" 
        onClick={(e) => onNavigate(e, '#contact')}
        className="text-gray-700 hover:text-red-600 transition-colors font-medium cursor-pointer uppercase text-sm"
      >
        {t('nav.contact')}
      </a>
    </div>
  );
};
