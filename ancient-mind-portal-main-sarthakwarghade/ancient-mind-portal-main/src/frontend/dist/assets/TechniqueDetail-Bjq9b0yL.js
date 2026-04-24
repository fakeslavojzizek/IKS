import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, L as Link } from "./index-N514KH_G.js";
import { S as Skeleton } from "./skeleton-CJyYMMke.js";
import { C as CategoryBadge, F as Flame, a as Clock, T as TechniqueCard } from "./TechniqueCard-CDE9hbyn.js";
import { Q as QuoteBlock } from "./QuoteBlock-B2WVPz7W.js";
import { a as useTechniqueById, u as useAllTechniques } from "./useBackend-ChFQuJa1.js";
import { B as BookOpen } from "./book-open-kaFHpFGa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
];
const FlaskConical = createLucideIcon("flask-conical", __iconNode$1);
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
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const doshaColors = {
  Vata: "bg-accent/10 text-accent border-accent/20",
  Pitta: "bg-primary/10 text-primary border-primary/20",
  Kapha: "bg-secondary/10 text-secondary-foreground border-secondary/20"
};
function TechniqueDetailPage() {
  const { id } = useParams({ from: "/techniques/$id" });
  const { data: technique, isLoading } = useTechniqueById(id);
  const { data: allTechniques } = useAllTechniques();
  const related = (technique == null ? void 0 : technique.relatedTechniqueIds.map((rid) => allTechniques == null ? void 0 : allTechniques.find((t) => t.id === rid)).filter(Boolean)) ?? [];
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          className: "h-8 w-48 mb-6",
          "data-ocid": "technique_detail.loading_state"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-14 w-full mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full" })
    ] });
  }
  if (!technique) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",
        "data-ocid": "technique_detail.error_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-muted-foreground mb-3", children: "🪷" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-3", children: "Technique not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground mb-6", children: "The technique you are looking for could not be located." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/techniques",
              "data-ocid": "technique_detail.back_to_techniques_button",
              className: "inline-flex items-center gap-2 font-body text-sm text-primary border border-primary/30 rounded-lg px-5 py-2.5 hover:bg-primary/5 transition-smooth",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 14 }),
                " Back to Techniques"
              ]
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/techniques",
        "data-ocid": "technique_detail.back_link",
        className: "inline-flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-primary transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 14 }),
          " All Techniques"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: technique.category, size: "md" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 13, className: "text-primary/60" }),
            " ",
            technique.difficulty
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13, className: "text-primary/60" }),
            " ",
            technique.duration
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-primary/60 text-sm italic mb-2", children: technique.sanskritName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl text-foreground leading-tight mb-4", children: technique.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-lg leading-relaxed mb-6", children: technique.shortDescription }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: "Doshas affected:" }),
          technique.doshasAffected.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `text-sm font-body font-medium border rounded-full px-3 py-0.5 ${doshaColors[d] ?? "bg-muted text-muted-foreground border-border"}`,
              children: d
            },
            d
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border mb-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "mb-10",
          "data-ocid": "technique_detail.description_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "About This Technique" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground leading-relaxed whitespace-pre-line", children: technique.longDescription })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuoteBlock,
        {
          verse: technique.origin.verse,
          translation: technique.origin.translation,
          source: technique.origin.textName,
          chapter: technique.origin.chapter
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10 bg-muted/30 rounded-xl p-6 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, className: "text-primary" }),
          " Historical Context"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: technique.historicalContext })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "mb-10",
          "data-ocid": "technique_detail.benefits_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-5", children: "Benefits" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: technique.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleCheckBig,
                {
                  size: 16,
                  className: "text-accent mt-0.5 shrink-0"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: b })
            ] }, b.slice(0, 40))) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", "data-ocid": "technique_detail.steps_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-5", children: "Step-by-Step Practice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-4", children: technique.steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display text-sm text-primary", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed pt-1", children: step })
        ] }, step.slice(0, 30))) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10 bg-card border border-border rounded-xl p-6 shadow-warm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { size: 18, className: "text-primary" }),
          " Scientific Backing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed", children: technique.scientificBacking })
      ] }),
      technique.contraindications.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-12 bg-destructive/5 border border-destructive/20 rounded-xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 18, className: "text-destructive" }),
          " ",
          "Contraindications"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: technique.contraindications.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "font-body text-sm text-muted-foreground flex items-start gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive mt-0.5", children: "•" }),
              " ",
              c
            ]
          },
          c.slice(0, 40)
        )) })
      ] }),
      related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "technique_detail.related_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-6", children: "Related Techniques" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: related.map(
          (t, i) => t ? /* @__PURE__ */ jsxRuntimeExports.jsx(TechniqueCard, { technique: t, index: i }, t.id) : null
        ) })
      ] })
    ] })
  ] });
}
export {
  TechniqueDetailPage as default
};
