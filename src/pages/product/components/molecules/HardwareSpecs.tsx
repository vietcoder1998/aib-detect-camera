import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Text, Card } from '@atoms';
import { SpecCard } from '../atoms/SpecCard';
import { Server, Cpu, HardDrive, Zap, Monitor, Network } from 'lucide-react';

export const HardwareSpecs: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            {t('productPage.hardwareSpecs.title')}
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            {t('productPage.hardwareSpecs.subtitle')}
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            {t('productPage.hardwareSpecs.description')}
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Processing Server */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-red-600" />
              <div>
                <Text variant="h3" className="text-gray-900">{t('productPage.hardwareSpecs.aiServer.title')}</Text>
                <Text variant="small" className="text-gray-600">{t('productPage.hardwareSpecs.aiServer.model')}</Text>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpecCard title={t('productPage.hardwareSpecs.aiServer.specs.cpu.title')} value={t('productPage.hardwareSpecs.aiServer.specs.cpu.value')} icon={<Cpu className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.aiServer.specs.ram.title')} value={t('productPage.hardwareSpecs.aiServer.specs.ram.value')} icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.aiServer.specs.storage.title')} value={t('productPage.hardwareSpecs.aiServer.specs.storage.value')} icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.aiServer.specs.gpu.title')} value={t('productPage.hardwareSpecs.aiServer.specs.gpu.value')} icon={<Monitor className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.aiServer.specs.power.title')} value={t('productPage.hardwareSpecs.aiServer.specs.power.value')} icon={<Zap className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.aiServer.specs.warranty.title')} value={t('productPage.hardwareSpecs.aiServer.specs.warranty.value')} icon={<Server className="w-5 h-5" />} />
            </div>
          </Card>

          {/* VMS Server */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-blue-600" />
              <div>
                <Text variant="h3" className="text-gray-900">{t('productPage.hardwareSpecs.vmsServer.title')}</Text>
                <Text variant="small" className="text-gray-600">{t('productPage.hardwareSpecs.vmsServer.model')}</Text>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpecCard title={t('productPage.hardwareSpecs.vmsServer.specs.cpu.title')} value={t('productPage.hardwareSpecs.vmsServer.specs.cpu.value')} icon={<Cpu className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.vmsServer.specs.ram.title')} value={t('productPage.hardwareSpecs.vmsServer.specs.ram.value')} icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.vmsServer.specs.storage.title')} value={t('productPage.hardwareSpecs.vmsServer.specs.storage.value')} icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.vmsServer.specs.power.title')} value={t('productPage.hardwareSpecs.vmsServer.specs.power.value')} icon={<Zap className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.vmsServer.specs.network.title')} value={t('productPage.hardwareSpecs.vmsServer.specs.network.value')} icon={<Network className="w-5 h-5" />} />
              <SpecCard title={t('productPage.hardwareSpecs.vmsServer.specs.warranty.title')} value={t('productPage.hardwareSpecs.vmsServer.specs.warranty.value')} icon={<Server className="w-5 h-5" />} />
            </div>
          </Card>

          {/* Control Workstation */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-8 h-8 text-green-600" />
              <div>
                <Text variant="h3" className="text-gray-900">Control Workstation</Text>
                <Text variant="small" className="text-gray-600">HISOKAI HS26-S95</Text>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpecCard title="CPU" value="Intel Core i5 11th" icon={<Cpu className="w-5 h-5" />} />
              <SpecCard title="RAM" value="16GB" icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title="Storage" value="512GB NVMe SSD" icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title="Display" value="24&quot; FHD IPS" icon={<Monitor className="w-5 h-5" />} />
              <SpecCard title="Audio" value="Alert Speaker" icon={<Monitor className="w-5 h-5" />} />
              <SpecCard title="Warranty" value="3 Years" icon={<Server className="w-5 h-5" />} />
            </div>
          </Card>

          {/* Network & Rack */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Network className="w-8 h-8 text-purple-600" />
              <div>
                <Text variant="h3" className="text-gray-900">Network & Rack</Text>
                <Text variant="small" className="text-gray-600">TP-Link TL-SG3424 + 20U Rack</Text>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpecCard title="Switch" value="12x Gigabit Ports" icon={<Network className="w-5 h-5" />} />
              <SpecCard title="Rack Model" value="ECP-20U800" icon={<Server className="w-5 h-5" />} />
              <SpecCard title="Rack Size" value="972x600x800mm" icon={<Monitor className="w-5 h-5" />} />
              <SpecCard title="Security" value="Kaspersky Licensed" icon={<Server className="w-5 h-5" />} />
              <SpecCard title="Standard" value="19-inch Rack" icon={<Server className="w-5 h-5" />} />
              <SpecCard title="Warranty" value="3 Years" icon={<Server className="w-5 h-5" />} />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};