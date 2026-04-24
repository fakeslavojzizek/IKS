export interface Instrument {
  id: string;
  name: string;
  sanskritName: string;
  category: string;
  description: string;
  purpose: string;
  material: string;
  dimensions: string;
  imageUrl: string;
}

export interface Procedure {
  id: string;
  name: string;
  sanskritName: string;
  description: string;
  technique: string;
  instruments: string[];
  significance: string;
}

export interface TimelineEvent {
  period: string;
  title: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
