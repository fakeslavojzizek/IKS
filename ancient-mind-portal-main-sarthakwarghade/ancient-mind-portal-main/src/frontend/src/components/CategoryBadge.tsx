import { categoryColors, categoryLabels } from "../data/techniques";
import type { TechniqueCategory } from "../types";

interface CategoryBadgeProps {
  category: TechniqueCategory;
  size?: "sm" | "md";
}

export function CategoryBadge({ category, size = "sm" }: CategoryBadgeProps) {
  const colorClass = categoryColors[category];
  const label = categoryLabels[category];

  return (
    <span
      className={`inline-flex items-center border rounded-full font-body font-medium ${colorClass} ${
        size === "sm" ? "text-xs px-2.5 py-0.5" : "text-sm px-3 py-1"
      }`}
    >
      {label}
    </span>
  );
}
