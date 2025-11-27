import React from 'react';
import { Container, Text, Card } from '@atoms';
import { ShieldAlert, Mountain, Swords, Skull, Cigarette, UserX, User, Hammer, Shield } from 'lucide-react';

const behaviors = [
  { icon: ShieldAlert, label: 'Zone Intrusion', color: 'text-red-600' },
  { icon: Mountain, label: 'Climbing & Fence Jumping', color: 'text-orange-600' },
  { icon: Swords, label: 'Fighting & Riot', color: 'text-yellow-600' },
  { icon: Skull, label: 'Self-harm / Suicide Signs', color: 'text-purple-600' },
  { icon: Shield, label: 'Weapon Carrying', color: 'text-pink-600' },
  { icon: Hammer, label: 'Bar / Window Cutting', color: 'text-indigo-600' },
  { icon: UserX, label: 'Window Area Loitering', color: 'text-teal-600' },
  { icon: Hammer, label: 'Wall Drilling / Digging', color: 'text-green-600' },
  { icon: Cigarette, label: 'Smoking Violation', color: 'text-blue-600' },
  { icon: Shield, label: 'Gambling Violation', color: 'text-red-500' },
  { icon: UserX, label: 'Fall Detection', color: 'text-orange-500' },
  { icon: User, label: 'Object Identification', color: 'text-purple-500' },
];

export const BehaviorsList: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <Container>
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            Behavior Detection
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            Detected Behaviors
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            The system can recognize and alert 12 types of violation behaviors with 70-85% accuracy
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