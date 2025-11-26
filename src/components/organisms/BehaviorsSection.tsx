import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Card } from '@atoms';
import { ShieldAlert, Mountain, Swords, Skull, Hammer, Cigarette, UserX, User, type LucideIcon } from 'lucide-react';

interface BehaviorCardProps {
  name: string;
  description: string;
  color: string;
  icon: LucideIcon;
}

const BehaviorCard: React.FC<BehaviorCardProps> = ({ name, description, color, icon: Icon }) => {
  const colorClasses = {
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    teal: 'bg-teal-500',
  };

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-red-600">
      <div className={`w-12 h-12 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg mb-4 flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>
      <Text variant="h4" className="text-gray-900 mb-2">
        {name}
      </Text>
      <Text variant="small" className="text-gray-600">
        {description}
      </Text>
    </Card>
  );
};

export const BehaviorsSection: React.FC = () => {
  const { t } = useTranslation();

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const behaviors = [
    {
      name: t('behaviors.categories.intrusion.name'),
      description: t('behaviors.categories.intrusion.description'),
      color: 'red',
      icon: ShieldAlert,
    },
    {
      name: t('behaviors.categories.climbing.name'),
      description: t('behaviors.categories.climbing.description'),
      color: 'orange',
      icon: Mountain,
    },
    {
      name: t('behaviors.categories.violence.name'),
      description: t('behaviors.categories.violence.description'),
      color: 'yellow',
      icon: Swords,
    },
    {
      name: t('behaviors.categories.weapons.name'),
      description: t('behaviors.categories.weapons.description'),
      color: 'purple',
      icon: Swords,
    },
    {
      name: t('behaviors.categories.suicide.name'),
      description: t('behaviors.categories.suicide.description'),
      color: 'pink',
      icon: Skull,
    },
    {
      name: t('behaviors.categories.vandalism.name'),
      description: t('behaviors.categories.vandalism.description'),
      color: 'indigo',
      icon: Hammer,
    },
    {
      name: t('behaviors.categories.smoking.name'),
      description: t('behaviors.categories.smoking.description'),
      color: 'teal',
      icon: Cigarette,
    },
    {
      name: t('behaviors.categories.fall.name'),
      description: t('behaviors.categories.fall.description'),
      color: 'green',
      icon: UserX,
    },
    {
      name: t('behaviors.categories.face.name'),
      description: t('behaviors.categories.face.description'),
      color: 'blue',
      icon: User,
    },
  ];

  return (
    <section id="behaviors" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            AI-Powered Detection
          </div>
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('behaviors.title')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('behaviors.subtitle')}
          </Text>
        </div>

        {/* Behaviors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {behaviors.map((behavior, idx) => (
            <BehaviorCard
              key={idx}
              name={behavior.name}
              description={behavior.description}
              color={behavior.color}
              icon={behavior.icon}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => handleScrollToSection('#products')}
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl"
          >
            {t('behaviors.viewAll')}
          </button>
        </div>
      </Container>
    </section>
  );
};
