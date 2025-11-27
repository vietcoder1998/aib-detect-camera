import {
  Building2,
  Hospital,
  Factory,
  Building,
  GraduationCap,
  Landmark,
  Zap,
  AlertTriangle,
  Target,
  Video,
  DollarSign,
  BarChart3,
  Plug,
  LifeBuoy,
  Brain,
  ShieldAlert,
  Mountain,
  Hammer,
  Swords,
  Cigarette,
  User,
  Siren,
  Check,
  LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  // Solutions icons
  prison: Building2,
  hospital: Hospital,
  factory: Factory,
  office: Building,
  school: GraduationCap,
  public: Landmark,

  // Benefits icons
  efficiency: Zap,
  response: AlertTriangle,
  accuracy: Target,
  coverage: Video,
  cost: DollarSign,
  compliance: BarChart3,
  integration: Plug,
  support: LifeBuoy,

  // Feature highlights icons
  behaviors: Target,
  alerts: Zap,
  categories: BarChart3,
  aiAccuracy: Brain,

  // Detection features icons
  intrusion: ShieldAlert,
  climbing: Mountain,
  vandalism: Hammer,
  lifeThreat: AlertTriangle,
  weapons: Swords,
  violations: Cigarette,
  faceRecognition: User,
  advanced: Brain,
  emergency: Siren,
  checkmark: Check,
};

export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Building2; // Default fallback icon
};
