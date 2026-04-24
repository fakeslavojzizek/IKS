import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";
import { founderData } from "../data/founder";
import { ancientTextsData, doshaData } from "../data/knowledge";
import { techniquesData } from "../data/techniques";
import type { TechniqueCategory } from "../types";
import type {
  AncientText,
  DoshaDetail,
  FounderInfo,
  Technique,
} from "../types";

function useBackendActor() {
  return useActor(createActor);
}

export function useAllTechniques() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Technique[]>({
    queryKey: ["techniques"],
    queryFn: async () => {
      if (!actor) return techniquesData;
      try {
        const result = await actor.getAllTechniques();
        return result.length > 0 ? result : techniquesData;
      } catch {
        return techniquesData;
      }
    },
    enabled: !isFetching,
    initialData: techniquesData,
  });
}

export function useTechniqueById(id: string) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Technique | null>({
    queryKey: ["technique", id],
    queryFn: async () => {
      if (!actor) return techniquesData.find((t) => t.id === id) ?? null;
      try {
        const result = await actor.getTechniqueById(id);
        return result ?? techniquesData.find((t) => t.id === id) ?? null;
      } catch {
        return techniquesData.find((t) => t.id === id) ?? null;
      }
    },
    enabled: !!id && !isFetching,
  });
}

export function useTechniquesByCategory(category: TechniqueCategory) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<Technique[]>({
    queryKey: ["techniques", "category", category],
    queryFn: async () => {
      if (!actor) return techniquesData.filter((t) => t.category === category);
      try {
        const result = await actor.getTechniquesByCategory(category);
        return result.length > 0
          ? result
          : techniquesData.filter((t) => t.category === category);
      } catch {
        return techniquesData.filter((t) => t.category === category);
      }
    },
    enabled: !isFetching,
  });
}

export function useFounderInfo() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<FounderInfo>({
    queryKey: ["founder"],
    queryFn: async () => {
      if (!actor) return founderData;
      try {
        const result = await actor.getFounderInfo();
        return result ?? founderData;
      } catch {
        return founderData;
      }
    },
    enabled: !isFetching,
    initialData: founderData,
  });
}

export function useAncientTexts() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<AncientText[]>({
    queryKey: ["ancientTexts"],
    queryFn: async () => {
      if (!actor) return ancientTextsData;
      try {
        const result = await actor.getAncientTexts();
        return result.length > 0 ? result : ancientTextsData;
      } catch {
        return ancientTextsData;
      }
    },
    enabled: !isFetching,
    initialData: ancientTextsData,
  });
}

export function useDoshaDetails() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<DoshaDetail[]>({
    queryKey: ["doshas"],
    queryFn: async () => {
      if (!actor) return doshaData;
      try {
        const result = await actor.getDoshaDetails();
        return result.length > 0 ? result : doshaData;
      } catch {
        return doshaData;
      }
    },
    enabled: !isFetching,
    initialData: doshaData,
  });
}
