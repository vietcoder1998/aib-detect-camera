import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text } from '@atoms';
import { Award, Users, HeadphonesIcon, Briefcase } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Award,
      value: '10+',
      label: t('about.stats.experience'),
    },
    {
      icon: Briefcase,
      value: '100+',
      label: t('about.stats.projects'),
    },
    {
      icon: Users,
      value: '50+',
      label: t('about.stats.partners'),
    },
    {
      icon: HeadphonesIcon,
      value: '24/7',
      label: t('about.stats.support'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('about.title')}
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            {t('about.company')}
          </Text>
          <div className="space-y-4 text-left">
            <Text variant="body" className="text-gray-700 text-lg">
              {t('about.description1')}
            </Text>
            <Text variant="body" className="text-gray-700 text-lg">
              {t('about.description2')}
            </Text>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                <Text variant="h2" className="text-gray-900 mb-2">
                  {stat.value}
                </Text>
                <Text variant="body" className="text-gray-600">
                  {stat.label}
                </Text>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
