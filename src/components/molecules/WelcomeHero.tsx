import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Button } from '@atoms';

export const WelcomeHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      {/* Decorative Security Icons */}
      <div className="absolute -left-4 top-0 opacity-10">
        <div className="w-20 h-20 rounded-full border-4 border-red-600 flex items-center justify-center">
          <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute -right-4 bottom-0 opacity-10">
        <div className="w-16 h-16 rounded-full border-4 border-red-600 flex items-center justify-center">
          <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        {/* Security Badge */}
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <Text variant="small" className="text-red-700 font-semibold">
            AI-Powered Security System
          </Text>
        </div>

        <Text variant="h1" className="text-gray-900 mb-6">
          {t('welcome.title')}
        </Text>
        
        <Text variant="h3" className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500 mb-8">
          {t('welcome.subtitle')}
        </Text>
        
        <Text variant="body" className="text-gray-700 mb-10 leading-relaxed">
          {t('welcome.description')}
        </Text>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
            {t('welcome.cta')}
          </Button>
          <button className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:border-red-600 hover:text-red-600 transition-colors">
            Watch Demo
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
