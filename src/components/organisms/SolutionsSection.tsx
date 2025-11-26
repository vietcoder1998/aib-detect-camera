import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Card } from '@atoms';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, features }) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="text-5xl mb-4">{icon}</div>
      <Text variant="h4" className="text-gray-900 mb-3">
        {title}
      </Text>
      <Text variant="body" className="text-gray-600 mb-4">
        {description}
      </Text>
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center text-sm text-gray-700">
            <span className="text-green-600 mr-2">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export const SolutionsSection: React.FC = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: t('solutions.prison.icon'),
      title: t('solutions.prison.title'),
      description: t('solutions.prison.description'),
      features: t('solutions.prison.features', { returnObjects: true }) as string[],
    },
    {
      icon: t('solutions.hospital.icon'),
      title: t('solutions.hospital.title'),
      description: t('solutions.hospital.description'),
      features: t('solutions.hospital.features', { returnObjects: true }) as string[],
    },
    {
      icon: t('solutions.factory.icon'),
      title: t('solutions.factory.title'),
      description: t('solutions.factory.description'),
      features: t('solutions.factory.features', { returnObjects: true }) as string[],
    },
    {
      icon: t('solutions.office.icon'),
      title: t('solutions.office.title'),
      description: t('solutions.office.description'),
      features: t('solutions.office.features', { returnObjects: true }) as string[],
    },
    {
      icon: t('solutions.school.icon'),
      title: t('solutions.school.title'),
      description: t('solutions.school.description'),
      features: t('solutions.school.features', { returnObjects: true }) as string[],
    },
    {
      icon: t('solutions.public.icon'),
      title: t('solutions.public.title'),
      description: t('solutions.public.description'),
      features: t('solutions.public.features', { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('solutions.title')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </Text>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <SolutionCard
              key={idx}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
