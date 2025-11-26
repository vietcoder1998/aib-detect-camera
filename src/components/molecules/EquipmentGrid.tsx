import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle, Grid } from '@atoms';
import { EquipmentCard } from '../atoms/EquipmentCard';

export const EquipmentGrid: React.FC = () => {
  const { t } = useTranslation();

  // Equipment images
  const images = {
    server1: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    server2: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    workstation: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&q=80',
    switch: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=800&q=80',
    rack: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  };

  const server1Specs = {
    'Model': t('products.equipment.server1.model'),
    'CPU': t('products.equipment.server1.cpu'),
    'RAM': t('products.equipment.server1.ram'),
    'Storage': t('products.equipment.server1.storage'),
    'GPU': t('products.equipment.server1.gpu'),
    'Power': t('products.equipment.server1.power'),
    'Management Port': t('products.equipment.server1.managementPort'),
    'USB Port': t('products.equipment.server1.usbPort'),
    'SATA3 Port': t('products.equipment.server1.sata3Port'),
    'Network': t('products.equipment.server1.networkPort'),
    'SFP+': t('products.equipment.server1.sfpPort'),
    'Antivirus': t('products.equipment.server1.antivirus'),
    'Warranty': t('products.equipment.server1.warranty'),
  };

  const server2Specs = {
    'Model': t('products.equipment.server2.model'),
    'CPU': t('products.equipment.server2.cpu'),
    'RAM': t('products.equipment.server2.ram'),
    'Storage': t('products.equipment.server2.storage'),
    'Power': t('products.equipment.server2.power'),
    'Management Port': t('products.equipment.server2.managementPort'),
    'USB Port': t('products.equipment.server2.usbPort'),
    'SATA3 Port': t('products.equipment.server2.sata3Port'),
    'Network': t('products.equipment.server2.networkPort'),
    'SFP+': t('products.equipment.server2.sfpPort'),
    'Antivirus': t('products.equipment.server2.antivirus'),
    'Warranty': t('products.equipment.server2.warranty'),
  };

  const workstationSpecs = {
    'Model': t('products.equipment.workstation.model'),
    'CPU': t('products.equipment.workstation.cpu'),
    'RAM': t('products.equipment.workstation.ram'),
    'Storage': t('products.equipment.workstation.storage'),
    'Monitor': t('products.equipment.workstation.monitor'),
    'Speaker': t('products.equipment.workstation.speaker'),
    'Antivirus': t('products.equipment.workstation.antivirus'),
    'Warranty': t('products.equipment.workstation.warranty'),
  };

  const switchSpecs = {
    'Model': t('products.equipment.switch.model'),
    'Ports': t('products.equipment.switch.ports'),
    'Warranty': t('products.equipment.switch.warranty'),
  };

  const rackSpecs = {
    'Model': t('products.equipment.rack.model'),
    'Dimensions': t('products.equipment.rack.dimensions'),
    'Quantity': t('products.equipment.rack.quantity'),
  };

  return (
    <div className="mb-12">
      <SectionTitle>
        {t('products.equipment.title')}
      </SectionTitle>

      <Grid cols={2} gap={8} className="mb-8">
        <EquipmentCard
          title={t('products.equipment.server1.name')}
          specs={server1Specs}
          imageUrl={images.server1}
        />
        <EquipmentCard
          title={t('products.equipment.server2.name')}
          specs={server2Specs}
          imageUrl={images.server2}
        />
        <EquipmentCard
          title={t('products.equipment.workstation.name')}
          specs={workstationSpecs}
          imageUrl={images.workstation}
        />
        <EquipmentCard
          title={t('products.equipment.switch.name')}
          specs={switchSpecs}
          imageUrl={images.switch}
        />
      </Grid>

      <EquipmentCard
        title={t('products.equipment.rack.name')}
        specs={rackSpecs}
        imageUrl={images.rack}
      />
    </div>
  );
};
