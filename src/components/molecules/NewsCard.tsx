import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight } from 'lucide-react';
import { Text, Card } from '@atoms';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  image, 
  category 
}) => {
  const { t } = useTranslation();
  
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
      {/* Image */}
      <div className="aspect-video overflow-hidden relative">
        <div 
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>

        {/* Title */}
        <Text variant="h4" className="text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
          {title}
        </Text>

        {/* Excerpt */}
        <Text variant="body" className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </Text>

        {/* Read More */}
        <div className="flex items-center gap-2 text-red-600 font-medium group-hover:gap-4 transition-all">
          <span>{t('news.readMore')}</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Card>
  );
};
