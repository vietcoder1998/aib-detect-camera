import { Container, Text } from '@atoms';
import { Building2, Mail, Phone } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const InformationContact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-red-50 py-16">
      <Container>
        {/* Information Card */}
        <div className="">
          <div className="flex flex-col gap-6 text-left">
            {/* Company Name & Address */}
            <div className="flex items-start gap-1">
              <div>
                <Text variant="h4" className="text-gray-900 mb-1 flex gap-3">
                    <Building2 className="w-6 h-6 text-red-600 mt-0.5" strokeWidth={2} />
                  {t('information.company.name')}
                </Text>
                <div className="flex items-start gap-2">
                  <Text variant="body" className="text-gray-900 text-sm flex">
                    {t('information.company.address')}
                  </Text>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-red-600" strokeWidth={2} />
              <a 
                href={`tel:${t('information.company.phone')}`}
                className="text-gray-900 hover:text-red-600 transition-colors font-medium"
              >
                {t('information.company.phone')}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-red-600" strokeWidth={2} />
              <a 
                href={`mailto:${t('information.company.email')}`}
                className="text-gray-900 hover:text-red-600 transition-colors font-medium"
              >
                {t('information.company.email')}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
