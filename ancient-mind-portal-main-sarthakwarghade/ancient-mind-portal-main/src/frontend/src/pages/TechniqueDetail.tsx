import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  ChevronLeft,
  Clock,
  Flame,
  FlaskConical,
} from "lucide-react";
import { CategoryBadge } from "../components/CategoryBadge";
import { QuoteBlock } from "../components/QuoteBlock";
import { TechniqueCard } from "../components/TechniqueCard";
import { useAllTechniques, useTechniqueById } from "../hooks/useBackend";
import type { Dosha } from "../types";

const doshaColors: Record<Dosha, string> = {
  Vata: "bg-accent/10 text-accent border-accent/20",
  Pitta: "bg-primary/10 text-primary border-primary/20",
  Kapha: "bg-secondary/10 text-secondary-foreground border-secondary/20",
};

export default function TechniqueDetailPage() {
  const { id } = useParams({ from: "/techniques/$id" });
  const { data: technique, isLoading } = useTechniqueById(id);
  const { data: allTechniques } = useAllTechniques();

  const related =
    technique?.relatedTechniqueIds
      .map((rid) => allTechniques?.find((t) => t.id === rid))
      .filter(Boolean) ?? [];

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Skeleton
          className="h-8 w-48 mb-6"
          data-ocid="technique_detail.loading_state"
        />
        <Skeleton className="h-14 w-full mb-4" />
        <Skeleton className="h-40 w-full mb-6" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!technique) {
    return (
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        data-ocid="technique_detail.error_state"
      >
        <p className="font-display text-3xl text-muted-foreground mb-3">🪷</p>
        <h2 className="font-display text-2xl text-foreground mb-3">
          Technique not found
        </h2>
        <p className="font-body text-muted-foreground mb-6">
          The technique you are looking for could not be located.
        </p>
        <Link
          to="/techniques"
          data-ocid="technique_detail.back_to_techniques_button"
          className="inline-flex items-center gap-2 font-body text-sm text-primary border border-primary/30 rounded-lg px-5 py-2.5 hover:bg-primary/5 transition-smooth"
        >
          <ChevronLeft size={14} /> Back to Techniques
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Breadcrumb header */}
      <div className="bg-card border-b border-border py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/techniques"
            data-ocid="technique_detail.back_link"
            className="inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            <ChevronLeft size={14} /> All Techniques
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <CategoryBadge category={technique.category} size="md" />
            <span className="font-body text-sm text-muted-foreground flex items-center gap-1">
              <Flame size={13} className="text-primary/60" />{" "}
              {technique.difficulty}
            </span>
            <span className="font-body text-sm text-muted-foreground flex items-center gap-1">
              <Clock size={13} className="text-primary/60" />{" "}
              {technique.duration}
            </span>
          </div>

          <p className="font-display text-primary/60 text-sm italic mb-2">
            {technique.sanskritName}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-foreground leading-tight mb-4">
            {technique.name}
          </h1>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            {technique.shortDescription}
          </p>

          {/* Doshas */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-body text-xs text-muted-foreground">
              Doshas affected:
            </span>
            {technique.doshasAffected.map((d) => (
              <span
                key={d}
                className={`text-sm font-body font-medium border rounded-full px-3 py-0.5 ${
                  doshaColors[d as keyof typeof doshaColors] ??
                  "bg-muted text-muted-foreground border-border"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-border mb-10" />

        {/* Full description */}
        <section
          className="mb-10"
          data-ocid="technique_detail.description_section"
        >
          <h2 className="font-display text-2xl text-foreground mb-4">
            About This Technique
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
            {technique.longDescription}
          </p>
        </section>

        {/* Origin quote */}
        <QuoteBlock
          verse={technique.origin.verse}
          translation={technique.origin.translation}
          source={technique.origin.textName}
          chapter={technique.origin.chapter}
        />

        {/* Historical context */}
        <section className="mb-10 bg-muted/30 rounded-xl p-6 border border-border">
          <h2 className="font-display text-xl text-foreground mb-3 flex items-center gap-2">
            <BookOpen size={18} className="text-primary" /> Historical Context
          </h2>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            {technique.historicalContext}
          </p>
        </section>

        {/* Benefits */}
        <section
          className="mb-10"
          data-ocid="technique_detail.benefits_section"
        >
          <h2 className="font-display text-2xl text-foreground mb-5">
            Benefits
          </h2>
          <ul className="space-y-3">
            {technique.benefits.map((b) => (
              <li key={b.slice(0, 40)} className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="font-body text-muted-foreground text-sm leading-relaxed">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Step-by-step */}
        <section className="mb-10" data-ocid="technique_detail.steps_section">
          <h2 className="font-display text-2xl text-foreground mb-5">
            Step-by-Step Practice
          </h2>
          <ol className="space-y-4">
            {technique.steps.map((step, i) => (
              <li key={step.slice(0, 30)} className="flex items-start gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display text-sm text-primary">
                  {i + 1}
                </span>
                <p className="font-body text-muted-foreground text-sm leading-relaxed pt-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Scientific backing */}
        <section className="mb-10 bg-card border border-border rounded-xl p-6 shadow-warm">
          <h2 className="font-display text-xl text-foreground mb-3 flex items-center gap-2">
            <FlaskConical size={18} className="text-primary" /> Scientific
            Backing
          </h2>
          <p className="font-body text-muted-foreground text-sm leading-relaxed">
            {technique.scientificBacking}
          </p>
        </section>

        {/* Contraindications */}
        {technique.contraindications.length > 0 && (
          <section className="mb-12 bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <h2 className="font-display text-xl text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle size={18} className="text-destructive" />{" "}
              Contraindications
            </h2>
            <ul className="space-y-2">
              {technique.contraindications.map((c) => (
                <li
                  key={c.slice(0, 40)}
                  className="font-body text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-destructive mt-0.5">•</span> {c}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section data-ocid="technique_detail.related_section">
            <h2 className="font-display text-2xl text-foreground mb-6">
              Related Techniques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((t, i) =>
                t ? <TechniqueCard key={t.id} technique={t} index={i} /> : null,
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
