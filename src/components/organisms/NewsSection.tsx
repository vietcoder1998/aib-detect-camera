import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text } from '@atoms';
import { NewsCard } from '@molecules';

export const NewsSection: React.FC = () => {
  const { t } = useTranslation();

  const newsItems = [
    {
      id: 1,
      title: t('news.items.item1.title'),
      excerpt: t('news.items.item1.excerpt'),
      date: t('news.items.item1.date'),
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      category: t('news.items.item1.category'),
    },
    {
      id: 2,
      title: t('news.items.item2.title'),
      excerpt: t('news.items.item2.excerpt'),
      date: t('news.items.item2.date'),
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
      category: t('news.items.item2.category'),
    },
    {
      id: 3,
      title: t('news.items.item3.title'),
      excerpt: t('news.items.item3.excerpt'),
      date: t('news.items.item3.date'),
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop',
      category: t('news.items.item3.category'),
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('news.title')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(item => (
            <NewsCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
