export interface BridgeType {
  id: string;
  name: string;
  subtitle: string;
  era: string;
  region: string;
  description: string;
  material: string[];
  structuralFeature: string;
}

export interface HistoricalEvent {
  id: string;
  year: string;
  era: string;
  title: string;
  source: string;
  description: string;
  significance: string;
  color: "primary" | "secondary" | "accent" | "ring";
}

export interface BridgePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface NotableBridge {
  id: string;
  name: string;
  location: string;
  period: string;
  type: string;
  description: string;
  significance: string;
  photo?: BridgePhoto;
}

export interface Material {
  id: string;
  name: string;
  category: string;
  uses: string;
  description: string;
}

export interface StructuralComponent {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;
}

export interface NavLink {
  label: string;
  href: string;
}
