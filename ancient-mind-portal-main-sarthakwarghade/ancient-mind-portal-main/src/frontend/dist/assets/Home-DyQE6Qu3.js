import { c as createLucideIcon, j as jsxRuntimeExports, L as Link, a as Leaf } from "./index-N514KH_G.js";
import { Q as QuoteBlock } from "./QuoteBlock-B2WVPz7W.js";
import { S as SectionHeading } from "./SectionHeading-DUtTVwxW.js";
import { T as TechniqueCard } from "./TechniqueCard-CDE9hbyn.js";
import { u as useAllTechniques, T as TechniqueCategory } from "./useBackend-ChFQuJa1.js";
import { B as BookOpen } from "./book-open-kaFHpFGa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const features = [
  {
    icon: BookOpen,
    title: "Sourced from Primary Texts",
    description: "Every technique is cited from original Sanskrit sources — Yoga Sutras, Charaka Samhita, Vedas, and Upanishads — with translations and chapter references."
  },
  {
    icon: Leaf,
    title: "Tridosha Framework",
    description: "Each technique is mapped to its Doshic action (Vata, Pitta, Kapha) so you can select the most appropriate practice for your unique constitution."
  },
  {
    icon: Users,
    title: "Step-by-Step Practice",
    description: "Dense, practitioner-level instruction — not surface summaries. Each technique includes contraindications, scientific backing, and historical context."
  }
];
const categories = [
  {
    category: TechniqueCategory.Pranayama,
    label: "Pranayama",
    desc: "Breath regulation"
  },
  { category: TechniqueCategory.Dhyana, label: "Dhyana", desc: "Meditation" },
  { category: TechniqueCategory.Mudra, label: "Mudra", desc: "Gesture seals" },
  {
    category: TechniqueCategory.MantraChanting,
    label: "Mantra",
    desc: "Sacred sound"
  },
  {
    category: TechniqueCategory.HerbalRemedies,
    label: "Herbs",
    desc: "Ayurvedic plants"
  },
  {
    category: TechniqueCategory.Sattvavajaya,
    label: "Sattvavajaya",
    desc: "Cognitive therapy"
  }
];
function HomePage() {
  const { data: techniques } = useAllTechniques();
  const featuredTechniques = (techniques == null ? void 0 : techniques.slice(0, 3)) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
        style: {
          backgroundImage: "url('/assets/generated/hero-ayurveda.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        },
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background/90" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pattern-overlay opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-primary text-base italic tracking-widest mb-4 animate-fade-in", children: "ॐ — Ancient Wisdom for the Modern Mind" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl md:text-7xl text-card leading-tight mb-6 animate-fade-in", children: [
              "Mind Control Techniques",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient-warm text-4xl sm:text-5xl md:text-6xl mt-2", children: "in Ancient India" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-card/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10", children: "Authentic, historically-sourced practices for conquering anger (Krodha) and stress — drawn from the Yoga Sutras, Charaka Samhita, Vedas, and Upanishads." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/techniques",
                  "data-ocid": "home.explore_techniques_button",
                  className: "inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-7 py-3.5 rounded-lg hover:bg-primary/90 transition-smooth shadow-warm",
                  children: [
                    "Explore Techniques",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/knowledge",
                  "data-ocid": "home.knowledge_hub_button",
                  className: "inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-card/40 text-card font-body font-medium px-7 py-3.5 rounded-lg hover:bg-card/30 transition-smooth",
                  children: "Knowledge Hub"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-8 rounded-full border-2 border-card/50 flex items-start justify-center pt-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-2 rounded-full bg-card/70" }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuoteBlock,
      {
        verse: "Yogaś citta-vṛtti-nirodhaḥ",
        translation: "Yoga is the cessation of the fluctuations of the mind.",
        source: "Yoga Sutras of Patanjali",
        chapter: "Pada 1, Sutra 2"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20",
        "data-ocid": "home.features_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              sanskrit: "प्रयोजन",
              title: "Why Ancient Indian Psychology?",
              subtitle: "The Rishis of ancient India were not philosophers alone — they were empirical scientists of consciousness. Their systems predate modern psychiatry by 3,000 years.",
              centered: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-7 shadow-warm hover:shadow-mandala transition-smooth",
              "data-ocid": `home.feature.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { size: 20, className: "text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: f.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: f.description })
              ]
            },
            f.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-20",
        "data-ocid": "home.categories_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              sanskrit: "षट् विद्याः",
              title: "Six Streams of Practice",
              subtitle: "From breath-work to herbal therapy — six distinct Vedic pathways to mental clarity and emotional mastery."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4", children: categories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/techniques",
              "data-ocid": `home.category.item.${i + 1}`,
              className: "bg-card border border-border rounded-xl p-5 text-center hover:border-primary/40 hover:shadow-warm transition-smooth group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base text-foreground group-hover:text-primary transition-colors", children: cat.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-1", children: cat.desc })
              ]
            },
            cat.category
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20",
        "data-ocid": "home.techniques_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SectionHeading,
              {
                sanskrit: "मुख्य विधयः",
                title: "Featured Techniques",
                subtitle: "Begin your practice with these foundational methods."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/techniques",
                "data-ocid": "home.view_all_techniques_link",
                className: "hidden sm:flex items-center gap-1.5 font-body text-sm text-primary hover:underline",
                children: [
                  "View all ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredTechniques.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TechniqueCard, { technique: t, index: i }, t.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10 sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/techniques",
              "data-ocid": "home.view_all_mobile_button",
              className: "inline-flex items-center gap-2 font-body text-sm text-primary border border-primary/30 rounded-lg px-5 py-2.5 hover:bg-primary/5 transition-smooth",
              children: [
                "View all techniques ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 py-20",
        "data-ocid": "home.founder_teaser_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { sanskrit: "आचार्य परिचय", title: "From the Founder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed mb-6", children: "Dr. Vasudeva Krishnamurti was initiated into Sanskrit and Vedic recitation at age seven by his grandfather — an Ayurvedic Vaidya who treated patients using only classical texts and medicinal plants. After three decades of practice spanning BAMS studies, residency at Kaivalyadhama, and clinical work with stress-related disorders, he distilled the most effective ancient protocols into this portal." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              QuoteBlock,
              {
                verse: "Prajna-aparadha eva sarva roga mula karanam",
                translation: "The mistake of the intellect is the root cause of all disease.",
                source: "Charaka Samhita",
                chapter: "Sutra Sthana"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/founder",
                "data-ocid": "home.read_founder_story_button",
                className: "inline-flex items-center gap-2 mt-6 font-body text-sm text-primary border border-primary/30 rounded-lg px-5 py-2.5 hover:bg-primary/5 transition-smooth",
                children: [
                  "Read the full story ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-elevated border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/generated/founder-portrait.dim_600x700.jpg",
                alt: "Dr. Vasudeva Krishnamurti — Ayurvedic Physician and Yoga Acharya",
                className: "w-full object-cover aspect-[4/5]"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-warm max-w-[200px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs text-primary", children: "Dr. Vasudeva Krishnamurti" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground mt-0.5", children: "Yoga Acharya & Vaidya" })
            ] })
          ] })
        ] }) })
      }
    )
  ] });
}
export {
  HomePage as default
};
