import React from 'react';
import { Container, Text, Card } from '@atoms';
import { TechBadge } from '../atoms/TechBadge';
import { Brain, Bell, MapPin, Shield, Activity, FileText } from 'lucide-react';

export const KeyFeatures: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Behavior Recognition',
      description: 'Detect and classify over 12 different violation behaviors using Deep Neural Networks with contextual analysis.',
      color: 'text-red-600'
    },
    {
      icon: Bell,
      title: 'Real-time Alerts', 
      description: 'Automatically send alerts to monitoring screens and mobile devices within 5 seconds upon detecting anomalies.',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Zone Configuration',
      description: 'Set up restricted and prohibited zones flexibly for each camera with polygon, rectangle, and boundary line options.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Weapon Detection',
      description: 'Identify objects carrying dangerous items like knives, scissors, sticks, and metal objects in the frame.',
      color: 'text-purple-600'
    },
    {
      icon: Activity,
      title: 'Action Recognition',
      description: 'Track posture, movement direction, and person-object-environment interactions to detect abnormal behaviors.',
      color: 'text-orange-600'
    },
    {
      icon: FileText,
      title: 'Smart Reporting',
      description: 'Export detailed reports on events with images, timestamps, locations, and violation trend analytics.',
      color: 'text-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <TechBadge>
            <Brain className="w-4 h-4" />
            Advanced Deep Learning Technology
          </TechBadge>
          <Text variant="h2" className="text-gray-900 mt-6 mb-4">
            Key Features
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            Powerful AI integration for real-time abnormal behavior detection
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-red-600">
              <div className={`w-12 h-12 rounded-lg bg-gray-50 mb-6 flex items-center justify-center`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <Text variant="h4" className="text-gray-900 mb-4">
                {feature.title}
              </Text>
              <Text variant="body" className="text-gray-600">
                {feature.description}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};