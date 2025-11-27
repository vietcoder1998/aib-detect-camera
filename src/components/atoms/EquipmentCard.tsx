import React from 'react';
import { Card, CardHeader, SpecList, SpecItem } from '@atoms';

interface EquipmentCardProps {
  title: string;
  specs: Record<string, string>;
  imageUrl?: string;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  title,
  specs,
  imageUrl,
}) => {
  return (
    <Card className="!p-0 overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {imageUrl && (
          <div className="w-full md:w-1/3 h-48 md:h-auto md:min-h-[300px] bg-gray-100 flex-shrink-0 relative overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <CardHeader>{title}</CardHeader>
          <SpecList className="flex-1">
            {Object.entries(specs).map(([key, value]) => (
              <SpecItem key={key} label={key} value={value} />
            ))}
          </SpecList>
        </div>
      </div>
    </Card>
  );
};
