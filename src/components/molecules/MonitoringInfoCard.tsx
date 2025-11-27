import CameraImage from '@/assets/CameraImage.png';
import { Card } from '@atoms';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatCard } from './StatCard';

export const MonitoringInfoCard: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="p-8 bg-white/80 backdrop-blur shadow-none">
      <div className="aspect-video bg-gradient-to-br from-red-600 to-red-700 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url('${CameraImage}')` }}
        />
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
