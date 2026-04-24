import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AncientText {
    id: string;
    sanskritName: string;
    name: string;
    year: string;
    description: string;
    authors: Array<string>;
    relevance: string;
    teachings: Array<string>;
}
export interface TextCitation {
    verse: string;
    textName: string;
    translation: string;
    chapter: string;
}
export interface Technique {
    id: string;
    duration: string;
    doshasAffected: Array<Dosha>;
    sanskritName: string;
    difficulty: string;
    name: string;
    origin: TextCitation;
    scientificBacking: string;
    contraindications: Array<string>;
    steps: Array<string>;
    shortDescription: string;
    category: TechniqueCategory;
    imageKeyword: string;
    relatedTechniqueIds: Array<string>;
    benefits: Array<string>;
    historicalContext: string;
    longDescription: string;
}
export interface FounderInfo {
    bio: string;
    title: string;
    mission: string;
    name: string;
    credentials: Array<string>;
    imageKeyword: string;
}
export interface DoshaDetail {
    imbalanceSymptoms: Array<string>;
    name: string;
    description: string;
    qualities: Array<string>;
}
export enum Dosha {
    Vata = "Vata",
    Pitta = "Pitta",
    Kapha = "Kapha"
}
export enum TechniqueCategory {
    Sattvavajaya = "Sattvavajaya",
    Pranayama = "Pranayama",
    Dhyana = "Dhyana",
    HerbalRemedies = "HerbalRemedies",
    MantraChanting = "MantraChanting",
    Mudra = "Mudra"
}
export interface backendInterface {
    getAllTechniques(): Promise<Array<Technique>>;
    getAncientTexts(): Promise<Array<AncientText>>;
    getDoshaDetails(): Promise<Array<DoshaDetail>>;
    getFounderInfo(): Promise<FounderInfo>;
    getTechniqueById(id: string): Promise<Technique | null>;
    getTechniquesByCategory(category: TechniqueCategory): Promise<Array<Technique>>;
}
