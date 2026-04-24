import { Skeleton } from "@/components/ui/skeleton";
import { GraduationCap, Quote } from "lucide-react";
import { QuoteBlock } from "../components/QuoteBlock";
import { SectionHeading } from "../components/SectionHeading";
import { useFounderInfo } from "../hooks/useBackend";

export default function FounderPage() {
  const { data: founder, isLoading } = useFounderInfo();

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Skeleton
          className="h-14 w-80 mb-6"
          data-ocid="founder.loading_state"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Skeleton className="h-96 rounded-xl" />
          <div className="lg:col-span-2 space-y-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!founder) return null;

  const bioParagraphs = founder.bio.split("\n\n").filter(Boolean);
  const missionParagraphs = founder.mission.split("\n\n").filter(Boolean);

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-14 pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            sanskrit="आचार्य परिचय"
            title="The Founder"
            subtitle="The lineage, scholarship, and mission behind this portal."
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Portrait + credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden border border-border shadow-elevated">
              <img
                src="/assets/generated/founder-portrait.dim_600x700.jpg"
                alt={`${founder.name} — ${founder.title}`}
                className="w-full object-cover"
                data-ocid="founder.portrait"
              />
            </div>

            {/* Credentials */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-warm">
              <h3 className="font-display text-sm text-foreground flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-primary" /> Credentials
              </h3>
              <ul className="space-y-2">
                {founder.credentials.map((c) => (
                  <li
                    key={c.slice(0, 40)}
                    className="font-body text-xs text-muted-foreground flex items-start gap-2"
                    data-ocid={`founder.credential.item.${founder.credentials.indexOf(c) + 1}`}
                  >
                    <span className="text-accent mt-0.5 shrink-0">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Biography */}
          <div className="lg:col-span-2" data-ocid="founder.bio_section">
            <p className="font-display text-primary/60 text-xs italic mb-1 tracking-widest uppercase">
              आचार्य
            </p>
            <h1 className="font-display text-4xl text-foreground mb-1">
              {founder.name}
            </h1>
            <p className="font-body text-muted-foreground text-sm mb-6">
              {founder.title}
            </p>

            <div className="space-y-4">
              {bioParagraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Mission */}
        <section
          className="bg-muted/30 rounded-2xl p-8 border border-border"
          data-ocid="founder.mission_section"
        >
          <div className="flex items-start gap-3 mb-6">
            <Quote size={24} className="text-primary shrink-0 mt-1" />
            <h2 className="font-display text-2xl text-foreground">
              Mission Statement
            </h2>
          </div>
          <div className="space-y-5">
            {missionParagraphs.map((para, i) => (
              <p
                key={para.slice(0, 40)}
                className={`font-body leading-relaxed ${
                  i === 0
                    ? "text-foreground text-base sm:text-lg"
                    : "text-muted-foreground text-sm sm:text-base"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Closing quote */}
        <div className="mt-14">
          <QuoteBlock
            verse="Sarve bhavantu sukhinaḥ, sarve santu nirāmayāḥ"
            translation="May all beings be happy; may all beings be free from disease."
            source="Bṛhadāraṇyaka Upaniṣad"
            chapter="6:3:6"
          />
        </div>
      </div>
    </div>
  );
}
