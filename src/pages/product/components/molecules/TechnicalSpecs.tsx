import React from 'react';
import { Container, Text } from '@atoms';
import { MetricCard } from '../atoms/MetricCard';
import { TechBadge } from '../atoms/TechBadge';
import { Brain } from 'lucide-react';

export const TechnicalSpecs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <TechBadge>
            <Brain className="w-4 h-4" />
            AI-Powered Analysis
          </TechBadge>
          <Text variant="h2" className="text-gray-900 mt-6 mb-4">
            Technical Specifications
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            AI Module Performance
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            Optimized AI system for detecting and alerting abnormal behaviors
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard
            value="5 - 10 seconds"
            label="Response Time"
            description="Fast detection for simple behaviors. Deep analysis for complex behaviors. Real-time alerting system."
            color="red"
          />
          <MetricCard
            value="80% - 90%"
            label="Accuracy Rate"
            description="Deep Neural Network algorithms. Reduced false alerts via context. Continuous learning from data."
            color="blue"
          />
          <MetricCard
            value="35 - 40 per server"
            label="Camera Support"
            description="Multi-stream video processing. Scalable architecture. Optimized resource usage."
            color="green"
          />
        </div>
      </Container>
    </section>
  );
};