import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Card } from '@atoms';
import { getIcon } from '../../utils/iconMap';

interface BenefitCardProps {
  iconName: string;
  title: string;
  description: string;
  stats: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  iconName,
  title,
  description,
  stats,
}) => {
  const Icon = getIcon(iconName);

  return (
    <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-center mb-4">
        <Icon className="w-12 h-12 text-red-600" strokeWidth={1.5} />
      </div>
      <Text variant="h4" className="text-gray-900 mb-3">
        {title}
      </Text>
      <Text variant="body" className="text-gray-600 mb-4">
        {description}
      </Text>
      <div className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold">
        {stats}
      </div>
    </Card>
  );
};

export const BenefitsSection: React.FC = () => {
  const { t } = useTranslation();

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const benefits = [
    {
      icon: t('benefits.efficiency.icon'),
      title: t('benefits.efficiency.title'),
      description: t('benefits.efficiency.description'),
      stats: t('benefits.efficiency.stats'),
    },
    {
      icon: t('benefits.response.icon'),
      title: t('benefits.response.title'),
      description: t('benefits.response.description'),
      stats: t('benefits.response.stats'),
    },
    {
      icon: t('benefits.accuracy.icon'),
      title: t('benefits.accuracy.title'),
      description: t('benefits.accuracy.description'),
      stats: t('benefits.accuracy.stats'),
    },
    {
      icon: t('benefits.coverage.icon'),
      title: t('benefits.coverage.title'),
      description: t('benefits.coverage.description'),
      stats: t('benefits.coverage.stats'),
    },
    {
      icon: t('benefits.cost.icon'),
      title: t('benefits.cost.title'),
      description: t('benefits.cost.description'),
      stats: t('benefits.cost.stats'),
    },
    {
      icon: t('benefits.compliance.icon'),
      title: t('benefits.compliance.title'),
      description: t('benefits.compliance.description'),
      stats: t('benefits.compliance.stats'),
    },
    {
      icon: t('benefits.integration.icon'),
      title: t('benefits.integration.title'),
      description: t('benefits.integration.description'),
      stats: t('benefits.integration.stats'),
    },
    {
      icon: t('benefits.support.icon'),
      title: t('benefits.support.title'),
      description: t('benefits.support.description'),
      stats: t('benefits.support.stats'),
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('benefits.title')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </Text>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <BenefitCard
              key={idx}
              iconName={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              stats={benefit.stats}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white">
          <Text variant="h3" className="text-white mb-4">
            Ready to Transform Your Security?
          </Text>
          <Text variant="body" className="text-red-100 mb-6 max-w-2xl mx-auto">
            Join leading organizations worldwide using AIB for intelligent
            behavior detection and automated security monitoring
          </Text>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleScrollToSection('#contact')}
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Demo
            </button>
            <button
              onClick={() => handleScrollToSection('#contact')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
