import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Card } from '@atoms';
import { StatCard } from './StatCard';
import CameraImage from '@/assets/CameraImage.png';

export const MonitoringInfoCard: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="p-8 bg-white/80 backdrop-blur shadow-none">
      <div className="aspect-video bg-gradient-to-br from-red-600 to-red-700 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden group">
        {/* Background Image with Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundImage: `url('${CameraImage}')` }}
        />
        
        {/* Content */}
        <div className="text-center text-white p-8 relative z-10 group-hover:opacity-0 transition-opacity duration-500">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <Text variant="h4" className="text-white mb-2">{t('welcome.monitoringCard.title')}</Text>
          <Text variant="small" className="text-red-100">{t('welcome.monitoringCard.subtitle')}</Text>
        </div>
      </div>
      
      {/* Key Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <StatCard value="35-40" label={t('welcome.monitoringCard.stats.cameras')} color="red" />
        <StatCard value="80-90%" label={t('welcome.monitoringCard.stats.accuracy')} color="orange" />
        <StatCard value="5-10s" label={t('welcome.monitoringCard.stats.detection')} color="purple" />
      </div>
    </Card>
  );
};
