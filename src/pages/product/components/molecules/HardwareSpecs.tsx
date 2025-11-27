import React from 'react';
import { Container, Text, Card } from '@atoms';
import { SpecCard } from '../atoms/SpecCard';
import { Server, Cpu, HardDrive, Zap, Monitor, Network } from 'lucide-react';

export const HardwareSpecs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Text variant="h2" className="text-gray-900 mb-4">
            Hardware
          </Text>
          <Text variant="h3" className="text-red-600 mb-6">
            Included Equipment
          </Text>
          <Text variant="body" className="text-gray-600 max-w-3xl mx-auto">
            High-performance hardware system ensuring stable 24/7 AI processing
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Processing Server */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-red-600" />
              <div>
                <Text variant="h3" className="text-gray-900">AI Processing Server</Text>
                <Text variant="small" className="text-gray-600">HISOKAI HS25-G4P5000</Text>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpecCard title="CPU" value="Intel Xeon Gen5 x2" icon={<Cpu className="w-5 h-5" />} />
              <SpecCard title="RAM" value="128GB" icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title="Storage" value="1.92TB SSD x2" icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title="GPU" value="48GB VRAM x4" icon={<Monitor className="w-5 h-5" />} />
              <SpecCard title="Power" value="2600W x2" icon={<Zap className="w-5 h-5" />} />
              <SpecCard title="Warranty" value="3 Years" icon={<Server className="w-5 h-5" />} />
            </div>
          </Card>

          {/* VMS Server */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-blue-600" />
              <div>
                <Text variant="h3" className="text-gray-900">VMS Server</Text>
                <Text variant="small" className="text-gray-600">HISOKAI HS25-C5420</Text>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SpecCard title="CPU" value="Intel Xeon Gen4 x2" icon={<Cpu className="w-5 h-5" />} />
              <SpecCard title="RAM" value="256GB" icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title="Storage" value="1TB SSD" icon={<HardDrive className="w-5 h-5" />} />
              <SpecCard title="Power" value="500W x2" icon={<Zap className="w-5 h-5" />} />
              <SpecCard title="Network" value="10Gb RJ45 x2" icon={<Network className="w-5 h-5" />} />
              <SpecCard title="Warranty" value="3 Years" icon={<Server className="w-5 h-5" />} />
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