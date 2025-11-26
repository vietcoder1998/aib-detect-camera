import { Container, Text } from '@atoms';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const InformationContact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-red-50 py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('information.title')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-2xl mx-auto">
            {t('information.subtitle')}
          </Text>
        </div>

        {/* Information Card */}
        <div className="">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Name & Address merged */}
              <div className="flex items-start gap-4">
                <div>
                  <Text variant="small" className="text-gray-500 mb-1">
                    {t('information.labels.companyName')}
                  </Text>
                  <Text variant="h4" className="text-gray-900 mb-1">
                    {t('information.company.name')}
                  </Text>
                  <div className="flex items-start gap-2 mt-1">
                    <Text variant="body" className="text-gray-900 text-sm">
                      {t('information.company.address')}
                    </Text>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div>
                  <Text variant="small" className="text-gray-500 mb-1">
                    {t('information.labels.phone')}
                  </Text>
                  <a 
                    href={`tel:${t('information.company.phone')}`}
                    className="text-gray-900 hover:text-red-600 transition-colors font-medium"
                  >
                    {t('information.company.phone')}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div>
                  <Text variant="small" className="text-gray-500 mb-1">
                    {t('information.labels.email')}
                  </Text>
                  <a 
                    href={`mailto:${t('information.company.email')}`}
                    className="text-gray-900 hover:text-red-600 transition-colors font-medium"
                  >
                    {t('information.company.email')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
