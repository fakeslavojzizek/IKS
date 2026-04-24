import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Leaf, Users } from "lucide-react";
import { QuoteBlock } from "../components/QuoteBlock";
import { SectionHeading } from "../components/SectionHeading";
import { TechniqueCard } from "../components/TechniqueCard";
import { useAllTechniques } from "../hooks/useBackend";
import { TechniqueCategory } from "../types";

const features = [
  {
    icon: BookOpen,
    title: "Sourced from Primary Texts",
    description:
      "Every technique is cited from original Sanskrit sources — Yoga Sutras, Charaka Samhita, Vedas, and Upanishads — with translations and chapter references.",
  },
  {
    icon: Leaf,
    title: "Tridosha Framework",
    description:
      "Each technique is mapped to its Doshic action (Vata, Pitta, Kapha) so you can select the most appropriate practice for your unique constitution.",
  },
  {
    icon: Users,
    title: "Step-by-Step Practice",
    description:
      "Dense, practitioner-level instruction — not surface summaries. Each technique includes contraindications, scientific backing, and historical context.",
  },
];

const categories = [
  {
    category: TechniqueCategory.Pranayama,
    label: "Pranayama",
    desc: "Breath regulation",
  },
  { category: TechniqueCategory.Dhyana, label: "Dhyana", desc: "Meditation" },
  { category: TechniqueCategory.Mudra, label: "Mudra", desc: "Gesture seals" },
  {
    category: TechniqueCategory.MantraChanting,
    label: "Mantra",
    desc: "Sacred sound",
  },
  {
    category: TechniqueCategory.HerbalRemedies,
    label: "Herbs",
    desc: "Ayurvedic plants",
  },
  {
    category: TechniqueCategory.Sattvavajaya,
    label: "Sattvavajaya",
    desc: "Cognitive therapy",
  },
];

export default function HomePage() {
  const { data: techniques } = useAllTechniques();
  const featuredTechniques = techniques?.slice(0, 3) ?? [];

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-ayurveda.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
        data-ocid="home.hero_section"
      >
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background/90" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-overlay opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <p className="font-display text-primary text-base italic tracking-widest mb-4 animate-fade-in">
            ॐ — Ancient Wisdom for the Modern Mind
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-card leading-tight mb-6 animate-fade-in">
            Mind Control Techniques
            <span className="block text-gradient-warm text-4xl sm:text-5xl md:text-6xl mt-2">
              in Ancient India
            </span>
          </h1>
          <p className="font-body text-card/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Authentic, historically-sourced practices for conquering anger
            (Krodha) and stress — drawn from the Yoga Sutras, Charaka Samhita,
            Vedas, and Upanishads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/techniques"
              data-ocid="home.explore_techniques_button"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-7 py-3.5 rounded-lg hover:bg-primary/90 transition-smooth shadow-warm"
            >
              Explore Techniques
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/knowledge"
              data-ocid="home.knowledge_hub_button"
              className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-card/40 text-card font-body font-medium px-7 py-3.5 rounded-lg hover:bg-card/30 transition-smooth"
            >
              Knowledge Hub
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-5 h-8 rounded-full border-2 border-card/50 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-card/70" />
          </div>
        </div>
      </section>

      {/* Opening quote */}
      <section className="bg-muted/40 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteBlock
            verse="Yogaś citta-vṛtti-nirodhaḥ"
            translation="Yoga is the cessation of the fluctuations of the mind."
            source="Yoga Sutras of Patanjali"
            chapter="Pada 1, Sutra 2"
          />
        </div>
      </section>

      {/* Why this portal */}
      <section
        className="bg-background py-20"
        data-ocid="home.features_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            sanskrit="प्रयोजन"
            title="Why Ancient Indian Psychology?"
            subtitle="The Rishis of ancient India were not philosophers alone — they were empirical scientists of consciousness. Their systems predate modern psychiatry by 3,000 years."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card border border-border rounded-xl p-7 shadow-warm hover:shadow-mandala transition-smooth"
                data-ocid={`home.feature.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        className="bg-muted/30 py-20"
        data-ocid="home.categories_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            sanskrit="षट् विद्याः"
            title="Six Streams of Practice"
            subtitle="From breath-work to herbal therapy — six distinct Vedic pathways to mental clarity and emotional mastery."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={cat.category}
                to="/techniques"
                data-ocid={`home.category.item.${i + 1}`}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/40 hover:shadow-warm transition-smooth group"
              >
                <p className="font-display text-base text-foreground group-hover:text-primary transition-colors">
                  {cat.label}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {cat.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured techniques */}
      <section
        className="bg-background py-20"
        data-ocid="home.techniques_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading
              sanskrit="मुख्य विधयः"
              title="Featured Techniques"
              subtitle="Begin your practice with these foundational methods."
            />
            <Link
              to="/techniques"
              data-ocid="home.view_all_techniques_link"
              className="hidden sm:flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTechniques.map((t, i) => (
              <TechniqueCard key={t.id} technique={t} index={i} />
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link
              to="/techniques"
              data-ocid="home.view_all_mobile_button"
              className="inline-flex items-center gap-2 font-body text-sm text-primary border border-primary/30 rounded-lg px-5 py-2.5 hover:bg-primary/5 transition-smooth"
            >
              View all techniques <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder teaser */}
      <section
        className="bg-muted/40 py-20"
        data-ocid="home.founder_teaser_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading sanskrit="आचार्य परिचय" title="From the Founder" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Dr. Vasudeva Krishnamurti was initiated into Sanskrit and Vedic
                recitation at age seven by his grandfather — an Ayurvedic Vaidya
                who treated patients using only classical texts and medicinal
                plants. After three decades of practice spanning BAMS studies,
                residency at Kaivalyadhama, and clinical work with
                stress-related disorders, he distilled the most effective
                ancient protocols into this portal.
              </p>
              <QuoteBlock
                verse="Prajna-aparadha eva sarva roga mula karanam"
                translation="The mistake of the intellect is the root cause of all disease."
                source="Charaka Samhita"
                chapter="Sutra Sthana"
              />
              <Link
                to="/founder"
                data-ocid="home.read_founder_story_button"
                className="inline-flex items-center gap-2 mt-6 font-body text-sm text-primary border border-primary/30 rounded-lg px-5 py-2.5 hover:bg-primary/5 transition-smooth"
              >
                Read the full story <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated border border-border">
                <img
                  src="/assets/generated/founder-portrait.dim_600x700.jpg"
                  alt="Dr. Vasudeva Krishnamurti — Ayurvedic Physician and Yoga Acharya"
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-warm max-w-[200px]">
                <p className="font-display text-xs text-primary">
                  Dr. Vasudeva Krishnamurti
                </p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">
                  Yoga Acharya & Vaidya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
