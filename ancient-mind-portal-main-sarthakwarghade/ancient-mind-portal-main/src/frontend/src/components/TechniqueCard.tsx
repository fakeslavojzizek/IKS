import { Link } from "@tanstack/react-router";
import { BookOpen, Clock, Flame } from "lucide-react";
import type { Technique } from "../types";
import { CategoryBadge } from "./CategoryBadge";

interface TechniqueCardProps {
  technique: Technique;
  index?: number;
}

const difficultyColors: Record<string, string> = {
  Beginner: "text-accent",
  Intermediate: "text-primary",
  Advanced: "text-destructive",
};

export function TechniqueCard({ technique, index = 0 }: TechniqueCardProps) {
  return (
    <Link
      to="/techniques/$id"
      params={{ id: technique.id }}
      data-ocid={`technique.item.${index + 1}`}
      className="group block"
    >
      <article className="h-full bg-card border border-border rounded-xl overflow-hidden shadow-warm hover:shadow-mandala transition-smooth hover:-translate-y-1">
        {/* Decorative header strip */}
        <div className="h-2 bg-gradient-to-r from-primary/70 via-primary to-accent/70" />

        <div className="p-6">
          {/* Category + difficulty row */}
          <div className="flex items-center justify-between mb-4">
            <CategoryBadge category={technique.category} />
            <span
              className={`text-xs font-body font-medium flex items-center gap-1 ${
                difficultyColors[technique.difficulty] ??
                "text-muted-foreground"
              }`}
            >
              <Flame size={12} />
              {technique.difficulty}
            </span>
          </div>

          {/* Sanskrit name */}
          <p className="font-display text-primary/60 text-xs italic mb-1 truncate">
            {technique.sanskritName}
          </p>

          {/* Name */}
          <h3 className="font-display text-xl text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
            {technique.name}
          </h3>

          {/* Short description */}
          <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
            {technique.shortDescription}
          </p>

          {/* Meta row */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {technique.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={11} />
              {technique.origin.textName}
            </span>
          </div>

          {/* Doshas */}
          {technique.doshasAffected.length > 0 && (
            <div className="flex items-center gap-1.5 mt-3 flex-wrap">
              {technique.doshasAffected.map((d) => (
                <span
                  key={d}
                  className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5 border border-border"
                >
                  {d}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
