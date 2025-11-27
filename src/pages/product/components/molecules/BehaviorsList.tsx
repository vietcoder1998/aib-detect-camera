import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Card } from '@atoms';
import { ShieldAlert, Mountain, Swords, Skull, Cigarette, UserX, User, Hammer, Shield } from 'lucide-react';

export const BehaviorsList: React.FC = () => {
  const { t } = useTranslation();
  
  const behaviors = [
    { icon: ShieldAlert, label: t('productPage.behaviorsList.behaviors.zoneIntrusion'), color: 'text-red-600' },
    { icon: Mountain, label: t('productPage.behaviorsList.behaviors.climbingJumping'), color: 'text-orange-600' },
    { icon: Swords, label: t('productPage.behaviorsList.behaviors.fightingRiot'), color: 'text-yellow-600' },
    { icon: Skull, label: t('productPage.behaviorsList.behaviors.selfHarm'), color: 'text-purple-600' },
    { icon: Shield, label: t('productPage.behaviorsList.behaviors.weaponCarrying'), color: 'text-pink-600' },
    { icon: Hammer, label: t('productPage.behaviorsList.behaviors.barCutting'), color: 'text-indigo-600' },
    { icon: UserX, label: t('productPage.behaviorsList.behaviors.windowLoitering'), color: 'text-teal-600' },
    { icon: Hammer, label: t('productPage.behaviorsList.behaviors.wallDrilling'), color: 'text-green-600' },
    { icon: Cigarette, label: t('productPage.behaviorsList.behaviors.smokingViolation'), color: 'text-blue-600' },
    { icon: Shield, label: t('productPage.behaviorsList.behaviors.gamblingViolation'), color: 'text-red-500' },
    { icon: UserX, label: t('productPage.behaviorsList.behaviors.fallDetection'), color: 'text-orange-500' },
    { icon: User, label: t('productPage.behaviorsList.behaviors.objectIdentification'), color: 'text-purple-500' },
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <Container>
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('productPage.behaviorsList.title')}
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            {t('productPage.behaviorsList.subtitle')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('productPage.behaviorsList.description')}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {behaviors.map((behavior, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <behavior.icon className={`w-8 h-8 ${behavior.color} mx-auto mb-4`} />
              <Text variant="small" className="text-gray-900 font-semibold">
                {behavior.label}
              </Text>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};