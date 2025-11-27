import React from 'react';
import { Container, Text, Card } from '@atoms';
import { Camera, Network, Server, Monitor } from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  const layers = [
    {
      icon: Camera,
      title: 'Surveillance Camera Layer',
      description: 'Multiple cameras at different locations for comprehensive monitoring. Each camera transmits images directly via LAN to POE Switch.',
      color: 'text-red-600 bg-red-50 border-red-200'
    },
    {
      icon: Network,
      title: 'Network Connection Layer', 
      description: 'POE Switch receives all image streams from cameras, provides power and transmits data to server system.',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: Server,
      title: 'Processing Server Layer',
      description: 'VMS Server manages video streams. AI Server performs real-time behavior analysis. Storage Server records 24/7.',
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      icon: Monitor,
      title: 'Operations Layer',
      description: 'Live camera monitoring, abnormal behavior alerts, camera configuration management, video playback and report export.',
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <Container>
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            System Architecture
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            Connection Model Overview
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            Multi-layer architecture ensuring highest performance and security
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {layers.map((layer, index) => (
            <Card key={index} className={`p-8 border-l-4 ${layer.color}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${layer.color.split(' ')[1]} ${layer.color.split(' ')[2]}`}>
                  <layer.icon className={`w-6 h-6 ${layer.color.split(' ')[0]}`} />
                </div>
                <div className="flex-1">
                  <Text variant="h4" className="text-gray-900 mb-3">
                    {layer.title}
                  </Text>
                  <Text variant="body" className="text-gray-600">
                    {layer.description}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};