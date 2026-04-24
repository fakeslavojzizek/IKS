import { c as createLucideIcon, j as jsxRuntimeExports, r as reactExports } from "./index-N514KH_G.js";
import { S as Skeleton } from "./skeleton-CJyYMMke.js";
import { Q as QuoteBlock } from "./QuoteBlock-B2WVPz7W.js";
import { S as SectionHeading } from "./SectionHeading-DUtTVwxW.js";
import { d as useAncientTexts, e as useDoshaDetails } from "./useBackend-ChFQuJa1.js";
import { B as BookOpen } from "./book-open-kaFHpFGa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode);
function DoshaCard({
  dosha
}) {
  const [open, setOpen] = reactExports.useState(false);
  const doshaColors = {
    Vata: "border-accent/30 bg-accent/5",
    Pitta: "border-primary/30 bg-primary/5",
    Kapha: "border-secondary/30 bg-secondary/5"
  };
  const accentColors = {
    Vata: "text-accent",
    Pitta: "text-primary",
    Kapha: "text-secondary-foreground"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `border rounded-xl overflow-hidden transition-smooth ${doshaColors[dosha.name] ?? "border-border bg-card"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen(!open),
            "data-ocid": `knowledge.dosha.${dosha.name.toLowerCase()}_toggle`,
            className: "w-full flex items-center justify-between p-6 text-left",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: `font-display text-2xl ${accentColors[dosha.name] ?? "text-foreground"}`,
                    children: dosha.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground text-sm mt-1 line-clamp-2", children: [
                  dosha.description.split(".")[0],
                  "."
                ] })
              ] }),
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 18, className: "text-muted-foreground shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 18, className: "text-muted-foreground shrink-0" })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pb-6 border-t border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed mt-4 mb-4", children: dosha.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm text-foreground mb-2", children: "Qualities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: dosha.qualities.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "font-body text-xs text-muted-foreground flex items-start gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mt-0.5", children: "•" }),
                    q
                  ]
                },
                q.slice(0, 30)
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm text-foreground mb-2", children: "Imbalance Symptoms" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: dosha.imbalanceSymptoms.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "font-body text-xs text-muted-foreground flex items-start gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive mt-0.5", children: "•" }),
                    s
                  ]
                },
                s.slice(0, 30)
              )) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function TextCard({
  text,
  index
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card border border-border rounded-xl overflow-hidden shadow-warm",
      "data-ocid": `knowledge.text.item.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-gradient-to-r from-primary/60 to-accent/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-primary/60 text-xs italic mb-1", children: text.sanskritName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground", children: text.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground border border-border rounded-full px-3 py-1 shrink-0", children: text.year })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-3", children: text.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setOpen(!open),
              "data-ocid": `knowledge.text.${text.id}_toggle`,
              className: "font-body text-xs text-primary flex items-center gap-1 hover:underline",
              children: [
                open ? "Show less" : "Read more",
                " ",
                open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 12 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 12 })
              ]
            }
          ),
          open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border-t border-border pt-4 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm text-foreground mb-2", children: "Authors / Attribution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: text.authors.join(", ") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm text-foreground mb-2", children: "Relevance to Mind Control" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground", children: text.relevance })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm text-foreground mb-2", children: "Key Teachings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: text.teachings.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "font-body text-xs text-muted-foreground flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent mt-0.5 shrink-0", children: "•" }),
                    t
                  ]
                },
                t.slice(0, 40)
              )) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function KnowledgePage() {
  const { data: texts, isLoading: textsLoading } = useAncientTexts();
  const { data: doshas, isLoading: doshasLoading } = useDoshaDetails();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-14 pattern-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        sanskrit: "ज्ञान मण्डप",
        title: "Knowledge Hub",
        subtitle: "The philosophical and medical framework behind ancient Indian mind control — Tridosha theory, Ayurvedic psychology, and the canonical texts."
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuoteBlock,
      {
        verse: "Hita ahitam sukham dukham ayus tasya hitahitam, manam ca tac ca yatroktam ayurveda sa ucyate",
        translation: "Ayurveda is that science which treats of beneficial and harmful, happy and unhappy life, the wholesome and unwholesome, and what is or isn't conducive to life.",
        source: "Charaka Samhita",
        chapter: "Sutra Sthana 1:41"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", "data-ocid": "knowledge.dosha_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          sanskrit: "त्रिदोष सिद्धान्त",
          title: "The Tridosha System",
          subtitle: "Ayurveda's foundational theory of three biological forces — and their relationship to anger, stress, and mental imbalance."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl p-6 mb-8 shadow-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 20, className: "text-primary mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-foreground mb-2", children: "Understanding Prakriti (Constitution)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: "Every individual is born with a unique ratio of the three Doshas (Vata, Pitta, Kapha) called Prakriti — their fundamental constitutional type. Disease arises when the Doshas deviate from this baseline, creating Vikriti (current imbalanced state). Ayurvedic mind control techniques are selected based on which Dosha is aggravated. Pitta imbalance causes anger (Krodha); Vata imbalance causes anxiety and fear (Bhaya); Kapha imbalance causes depression and grief (Shoka)." })
        ] })
      ] }) }),
      doshasLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          className: "h-20 w-full rounded-xl",
          "data-ocid": "knowledge.dosha_loading_state"
        },
        i
      )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: (doshas ?? []).map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(DoshaCard, { dosha: d }, d.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/30 py-20",
        "data-ocid": "knowledge.concepts_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              sanskrit: "मूल तत्त्व",
              title: "Key Concepts",
              subtitle: "Essential Vedic and Ayurvedic concepts for understanding mind control practice."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            {
              term: "Prana",
              sanskrit: "प्राण",
              definition: "The vital life force that animates all living beings. In the mind, Prana manifests as the Prana Vayu (upward-moving breath) governing enthusiasm and inspiration, and the Vyana Vayu governing nervous system distribution. Disrupted Prana is the primary cause of mental disorders in Ayurvedic diagnostics."
            },
            {
              term: "Krodha",
              sanskrit: "क्रोध",
              definition: "Anger. Classified in Ayurveda as a Manasika Vikara (mental disturbance) arising primarily from Pitta aggravation and secondarily from frustrated desire (Raga). The Charaka Samhita identifies it as one of the 'negative passions' that derange Prana and contribute to disease."
            },
            {
              term: "Chitta",
              sanskrit: "चित्त",
              definition: "The 'mind-stuff' — the total repository of impressions (samskaras), memories, and subconscious patterns. Patanjali's Yoga Sutras define Yoga as Chitta Vritti Nirodha: the cessation of Chitta's fluctuations. The Chitta is the primary target of all mind control techniques."
            },
            {
              term: "Three Gunas",
              sanskrit: "त्रिगुण",
              definition: "The three fundamental qualities of all matter and mind: Sattva (clarity, luminosity), Rajas (activity, passion), and Tamas (inertia, dullness). Mental health in Ayurveda is a preponderance of Sattva. Anger is primarily Rajasic; depression is Tamasic. All mind control techniques aim to increase Sattva."
            },
            {
              term: "Prajna-aparadha",
              sanskrit: "प्रज्ञापराध",
              definition: "Literally 'mistake of the intellect' — the Charaka Samhita's identification of the root cause of all disease. It occurs when the intellect (Prajna) fails to distinguish between what is beneficial and harmful, leading to actions that violate the laws of nature and the individual's own constitution."
            },
            {
              term: "Ojas",
              sanskrit: "ओजस्",
              definition: "The finest essence of all bodily tissues — the physiological substrate of immunity, vitality, and mental strength. Chronic stress depletes Ojas, creating vulnerability to disease. Rasayana (rejuvenative) herbs like Ashwagandha and Amalaki are classified by their power to rebuild Ojas."
            }
          ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-xl p-6 shadow-warm",
              "data-ocid": `knowledge.concept.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-3 mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-primary/50 text-sm italic", children: c.sanskrit }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: c.term }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: c.definition })
              ]
            },
            c.term
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-20",
        "data-ocid": "knowledge.texts_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeading,
            {
              sanskrit: "प्राचीन ग्रन्थाः",
              title: "Ancient Texts & Sources",
              subtitle: "The primary Sanskrit sources from which these techniques are drawn — with historical dating, authorship, and key teachings."
            }
          ),
          textsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Skeleton,
            {
              className: "h-48 rounded-xl",
              "data-ocid": "knowledge.texts_loading_state"
            },
            i
          )) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: (texts ?? []).map((text, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TextCard, { text, index: i }, text.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl text-foreground mb-8 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 20, className: "text-primary" }),
              " Timeline of Ancient Indian Wisdom"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-border" }),
              [
                {
                  year: "c. 1500 BCE",
                  event: "Rigveda composed — earliest references to Prana and healing mantras"
                },
                {
                  year: "c. 1200 BCE",
                  event: "Atharva Veda — detailed herbal medicine and healing incantations"
                },
                {
                  year: "c. 800 BCE",
                  event: "Principal Upanishads composed — philosophy of consciousness and meditation"
                },
                {
                  year: "c. 400 BCE",
                  event: "Charaka Samhita compiled — Ayurvedic medical canon including Sattvavajaya"
                },
                {
                  year: "c. 300 BCE",
                  event: "Sushruta Samhita — surgical techniques and Panchakarma therapy"
                },
                {
                  year: "c. 200 BCE",
                  event: "Bhagavad Gita — practical yoga and psychology in narrative form"
                },
                {
                  year: "c. 400 CE",
                  event: "Yoga Sutras of Patanjali — systematic 8-limbed yoga psychology"
                },
                {
                  year: "c. 15th century CE",
                  event: "Hatha Yoga Pradipika — comprehensive manual of Hatha Yoga practices"
                }
              ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 mb-6 ml-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-primary border-2 border-background mt-1 -ml-1.5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-primary font-medium", children: item.year }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground mt-0.5", children: item.event })
                ] })
              ] }, item.year))
            ] })
          ] })
        ] })
      }
    )
  ] });
}
export {
  KnowledgePage as default
};
