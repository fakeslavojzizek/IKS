import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, ChevronDown, ChevronUp, Layers } from "lucide-react";
import { useState } from "react";
import { QuoteBlock } from "../components/QuoteBlock";
import { SectionHeading } from "../components/SectionHeading";
import { useAncientTexts, useDoshaDetails } from "../hooks/useBackend";

function DoshaCard({
  dosha,
}: {
  dosha: {
    name: string;
    description: string;
    qualities: string[];
    imbalanceSymptoms: string[];
  };
}) {
  const [open, setOpen] = useState(false);
  const doshaColors: Record<string, string> = {
    Vata: "border-accent/30 bg-accent/5",
    Pitta: "border-primary/30 bg-primary/5",
    Kapha: "border-secondary/30 bg-secondary/5",
  };
  const accentColors: Record<string, string> = {
    Vata: "text-accent",
    Pitta: "text-primary",
    Kapha: "text-secondary-foreground",
  };
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-smooth ${doshaColors[dosha.name] ?? "border-border bg-card"}`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        data-ocid={`knowledge.dosha.${dosha.name.toLowerCase()}_toggle`}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div>
          <h3
            className={`font-display text-2xl ${accentColors[dosha.name] ?? "text-foreground"}`}
          >
            {dosha.name}
          </h3>
          <p className="font-body text-muted-foreground text-sm mt-1 line-clamp-2">
            {dosha.description.split(".")[0]}.
          </p>
        </div>
        {open ? (
          <ChevronUp size={18} className="text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-border/40">
          <p className="font-body text-muted-foreground text-sm leading-relaxed mt-4 mb-4">
            {dosha.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-display text-sm text-foreground mb-2">
                Qualities
              </h4>
              <ul className="space-y-1">
                {dosha.qualities.map((q) => (
                  <li
                    key={q.slice(0, 30)}
                    className="font-body text-xs text-muted-foreground flex items-start gap-1.5"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm text-foreground mb-2">
                Imbalance Symptoms
              </h4>
              <ul className="space-y-1">
                {dosha.imbalanceSymptoms.map((s) => (
                  <li
                    key={s.slice(0, 30)}
                    className="font-body text-xs text-muted-foreground flex items-start gap-1.5"
                  >
                    <span className="text-destructive mt-0.5">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TextCard({
  text,
  index,
}: {
  text: {
    id: string;
    name: string;
    sanskritName: string;
    year: string;
    description: string;
    authors: string[];
    relevance: string;
    teachings: string[];
  };
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-card border border-border rounded-xl overflow-hidden shadow-warm"
      data-ocid={`knowledge.text.item.${index + 1}`}
    >
      <div className="h-1.5 bg-gradient-to-r from-primary/60 to-accent/60" />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="font-display text-primary/60 text-xs italic mb-1">
              {text.sanskritName}
            </p>
            <h3 className="font-display text-xl text-foreground">
              {text.name}
            </h3>
          </div>
          <span className="font-body text-xs text-muted-foreground border border-border rounded-full px-3 py-1 shrink-0">
            {text.year}
          </span>
        </div>
        <p className="font-body text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3">
          {text.description}
        </p>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          data-ocid={`knowledge.text.${text.id}_toggle`}
          className="font-body text-xs text-primary flex items-center gap-1 hover:underline"
        >
          {open ? "Show less" : "Read more"}{" "}
          {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>

        {open && (
          <div className="mt-4 border-t border-border pt-4 space-y-4">
            <div>
              <h4 className="font-display text-sm text-foreground mb-2">
                Authors / Attribution
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                {text.authors.join(", ")}
              </p>
            </div>
            <div>
              <h4 className="font-display text-sm text-foreground mb-2">
                Relevance to Mind Control
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                {text.relevance}
              </p>
            </div>
            <div>
              <h4 className="font-display text-sm text-foreground mb-2">
                Key Teachings
              </h4>
              <ul className="space-y-1.5">
                {text.teachings.map((t) => (
                  <li
                    key={t.slice(0, 40)}
                    className="font-body text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-accent mt-0.5 shrink-0">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function KnowledgePage() {
  const { data: texts, isLoading: textsLoading } = useAncientTexts();
  const { data: doshas, isLoading: doshasLoading } = useDoshaDetails();

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-14 pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            sanskrit="ज्ञान मण्डप"
            title="Knowledge Hub"
            subtitle="The philosophical and medical framework behind ancient Indian mind control — Tridosha theory, Ayurvedic psychology, and the canonical texts."
          />
        </div>
      </div>

      {/* Intro quote */}
      <div className="bg-muted/30 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteBlock
            verse="Hita ahitam sukham dukham ayus tasya hitahitam, manam ca tac ca yatroktam ayurveda sa ucyate"
            translation="Ayurveda is that science which treats of beneficial and harmful, happy and unhappy life, the wholesome and unwholesome, and what is or isn't conducive to life."
            source="Charaka Samhita"
            chapter="Sutra Sthana 1:41"
          />
        </div>
      </div>

      {/* Tridosha */}
      <section className="py-20" data-ocid="knowledge.dosha_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            sanskrit="त्रिदोष सिद्धान्त"
            title="The Tridosha System"
            subtitle="Ayurveda's foundational theory of three biological forces — and their relationship to anger, stress, and mental imbalance."
          />

          <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-warm">
            <div className="flex items-start gap-3">
              <Layers size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-display text-lg text-foreground mb-2">
                  Understanding Prakriti (Constitution)
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Every individual is born with a unique ratio of the three
                  Doshas (Vata, Pitta, Kapha) called Prakriti — their
                  fundamental constitutional type. Disease arises when the
                  Doshas deviate from this baseline, creating Vikriti (current
                  imbalanced state). Ayurvedic mind control techniques are
                  selected based on which Dosha is aggravated. Pitta imbalance
                  causes anger (Krodha); Vata imbalance causes anxiety and fear
                  (Bhaya); Kapha imbalance causes depression and grief (Shoka).
                </p>
              </div>
            </div>
          </div>

          {doshasLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Skeleton
                  key={i}
                  className="h-20 w-full rounded-xl"
                  data-ocid="knowledge.dosha_loading_state"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {(doshas ?? []).map((d) => (
                <DoshaCard key={d.name} dosha={d} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Key concepts */}
      <section
        className="bg-muted/30 py-20"
        data-ocid="knowledge.concepts_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            sanskrit="मूल तत्त्व"
            title="Key Concepts"
            subtitle="Essential Vedic and Ayurvedic concepts for understanding mind control practice."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                term: "Prana",
                sanskrit: "प्राण",
                definition:
                  "The vital life force that animates all living beings. In the mind, Prana manifests as the Prana Vayu (upward-moving breath) governing enthusiasm and inspiration, and the Vyana Vayu governing nervous system distribution. Disrupted Prana is the primary cause of mental disorders in Ayurvedic diagnostics.",
              },
              {
                term: "Krodha",
                sanskrit: "क्रोध",
                definition:
                  "Anger. Classified in Ayurveda as a Manasika Vikara (mental disturbance) arising primarily from Pitta aggravation and secondarily from frustrated desire (Raga). The Charaka Samhita identifies it as one of the 'negative passions' that derange Prana and contribute to disease.",
              },
              {
                term: "Chitta",
                sanskrit: "चित्त",
                definition:
                  "The 'mind-stuff' — the total repository of impressions (samskaras), memories, and subconscious patterns. Patanjali's Yoga Sutras define Yoga as Chitta Vritti Nirodha: the cessation of Chitta's fluctuations. The Chitta is the primary target of all mind control techniques.",
              },
              {
                term: "Three Gunas",
                sanskrit: "त्रिगुण",
                definition:
                  "The three fundamental qualities of all matter and mind: Sattva (clarity, luminosity), Rajas (activity, passion), and Tamas (inertia, dullness). Mental health in Ayurveda is a preponderance of Sattva. Anger is primarily Rajasic; depression is Tamasic. All mind control techniques aim to increase Sattva.",
              },
              {
                term: "Prajna-aparadha",
                sanskrit: "प्रज्ञापराध",
                definition:
                  "Literally 'mistake of the intellect' — the Charaka Samhita's identification of the root cause of all disease. It occurs when the intellect (Prajna) fails to distinguish between what is beneficial and harmful, leading to actions that violate the laws of nature and the individual's own constitution.",
              },
              {
                term: "Ojas",
                sanskrit: "ओजस्",
                definition:
                  "The finest essence of all bodily tissues — the physiological substrate of immunity, vitality, and mental strength. Chronic stress depletes Ojas, creating vulnerability to disease. Rasayana (rejuvenative) herbs like Ashwagandha and Amalaki are classified by their power to rebuild Ojas.",
              },
            ].map((c, i) => (
              <div
                key={c.term}
                className="bg-card border border-border rounded-xl p-6 shadow-warm"
                data-ocid={`knowledge.concept.item.${i + 1}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <p className="font-display text-primary/50 text-sm italic">
                    {c.sanskrit}
                  </p>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {c.term}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {c.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ancient Texts */}
      <section
        className="bg-background py-20"
        data-ocid="knowledge.texts_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            sanskrit="प्राचीन ग्रन्थाः"
            title="Ancient Texts & Sources"
            subtitle="The primary Sanskrit sources from which these techniques are drawn — with historical dating, authorship, and key teachings."
          />

          {textsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton
                  key={i}
                  className="h-48 rounded-xl"
                  data-ocid="knowledge.texts_loading_state"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(texts ?? []).map((text, i) => (
                <TextCard key={text.id} text={text} index={i} />
              ))}
            </div>
          )}

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="font-display text-2xl text-foreground mb-8 flex items-center gap-2">
              <BookOpen size={20} className="text-primary" /> Timeline of
              Ancient Indian Wisdom
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              {[
                {
                  year: "c. 1500 BCE",
                  event:
                    "Rigveda composed — earliest references to Prana and healing mantras",
                },
                {
                  year: "c. 1200 BCE",
                  event:
                    "Atharva Veda — detailed herbal medicine and healing incantations",
                },
                {
                  year: "c. 800 BCE",
                  event:
                    "Principal Upanishads composed — philosophy of consciousness and meditation",
                },
                {
                  year: "c. 400 BCE",
                  event:
                    "Charaka Samhita compiled — Ayurvedic medical canon including Sattvavajaya",
                },
                {
                  year: "c. 300 BCE",
                  event:
                    "Sushruta Samhita — surgical techniques and Panchakarma therapy",
                },
                {
                  year: "c. 200 BCE",
                  event:
                    "Bhagavad Gita — practical yoga and psychology in narrative form",
                },
                {
                  year: "c. 400 CE",
                  event:
                    "Yoga Sutras of Patanjali — systematic 8-limbed yoga psychology",
                },
                {
                  year: "c. 15th century CE",
                  event:
                    "Hatha Yoga Pradipika — comprehensive manual of Hatha Yoga practices",
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-6 mb-6 ml-4">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-primary border-2 border-background mt-1 -ml-1.5" />
                  </div>
                  <div className="pb-2">
                    <span className="font-body text-xs text-primary font-medium">
                      {item.year}
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
