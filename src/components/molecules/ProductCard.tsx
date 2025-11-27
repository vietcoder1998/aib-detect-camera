import React from 'react';
import { Text } from '@atoms';

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image = 'https://via.placeholder.com/400x300',
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video w-full bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <Text variant="h4" className="mb-3 text-gray-900">
          {title}
        </Text>
        <Text variant="body" className="text-gray-600">
          {description}
        </Text>
      </div>
    </div>
  );
};
