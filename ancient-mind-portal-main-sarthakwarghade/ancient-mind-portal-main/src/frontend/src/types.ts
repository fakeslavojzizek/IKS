export interface TextCitation {
  verse: string;
  textName: string;
  translation: string;
  chapter: string;
}

export enum Dosha {
  Vata = "Vata",
  Pitta = "Pitta",
  Kapha = "Kapha",
}

export enum TechniqueCategory {
  Sattvavajaya = "Sattvavajaya",
  Pranayama = "Pranayama",
  Dhyana = "Dhyana",
  HerbalRemedies = "HerbalRemedies",
  MantraChanting = "MantraChanting",
  Mudra = "Mudra",
}

export interface Technique {
  id: string;
  duration: string;
  doshasAffected: Dosha[];
  sanskritName: string;
  difficulty: string;
  name: string;
  origin: TextCitation;
  scientificBacking: string;
  contraindications: string[];
  steps: string[];
  shortDescription: string;
  category: TechniqueCategory;
  imageKeyword: string;
  relatedTechniqueIds: string[];
  benefits: string[];
  historicalContext: string;
  longDescription: string;
}

export interface FounderInfo {
  bio: string;
  title: string;
  mission: string;
  name: string;
  credentials: string[];
  imageKeyword: string;
}

export interface DoshaDetail {
  imbalanceSymptoms: string[];
  name: string;
  description: string;
  qualities: string[];
}

export interface AncientText {
  id: string;
  sanskritName: string;
  name: string;
  year: string;
  description: string;
  authors: string[];
  relevance: string;
  teachings: string[];
}
