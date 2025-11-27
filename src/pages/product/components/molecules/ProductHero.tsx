import React from 'react';
import { Container, Text, Button } from '@atoms';
import { TechBadge } from '../atoms/TechBadge';
import { Cpu } from 'lucide-react';

export const ProductHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <Container>
        <div className="text-center mb-12">
          <TechBadge>
            <Cpu className="w-4 h-4" />
            AI Intelligent Behavior
          </TechBadge>
          <Text variant="h1" className="text-gray-900 mt-6 mb-6">
            AI Intelligent Behavior
          </Text>
          <Text variant="body" className="text-gray-600 max-w-4xl mx-auto mb-8">
            Comprehensive AI-powered surveillance solution for detecting and alerting abnormal behaviors in real-time, enhancing security for enterprises worldwide.
          </Text>
          <Button variant="primary" size="lg" className="mb-12">
            Explore Features
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Text variant="h2" className="text-gray-900 mb-4">
                About AIB
              </Text>
              <Text variant="body" className="text-gray-600 mb-6">
                AIB (Artificial Intelligence Behavior) is intelligent behavior analysis software that applies artificial intelligence to identify abnormal behaviors on camera images. The system uses Deep Learning models (DNN/CNN) to analyze movements and behaviors in real-time, enabling early detection of dangerous situations or violations.
              </Text>
              <Text variant="body" className="text-gray-600 mb-6">
                The system allows users to set up monitoring zones, configure security scenarios, and manage parameters for each camera. The interface supports intuitive monitoring, suitable for various surveillance needs.
              </Text>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Model:</span>
                  <span className="font-semibold text-gray-900">AIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-semibold text-gray-900">AMBILI TECH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Origin:</span>
                  <span className="font-semibold text-gray-900">Indonesia</span>
                </div>
                <Button variant="primary" className="w-full mt-4">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};