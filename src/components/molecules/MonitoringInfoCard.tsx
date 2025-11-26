import React from 'react';
import { Text, Card } from '@atoms';
import { StatCard } from './StatCard';

export const MonitoringInfoCard: React.FC = () => {
  return (
    <Card className="p-8 bg-white/80 backdrop-blur">
      <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <Text variant="h4" className="text-white mb-2">AI-Powered Monitoring</Text>
          <Text variant="small" className="text-blue-100">Real-time Behavior Detection</Text>
        </div>
      </div>
      
      {/* Key Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <StatCard value="30-35" label="Cameras/Server" color="blue" />
        <StatCard value="70-80%" label="Accuracy" color="indigo" />
        <StatCard value="5-15s" label="Detection Time" color="purple" />
      </div>
    </Card>
  );
};
