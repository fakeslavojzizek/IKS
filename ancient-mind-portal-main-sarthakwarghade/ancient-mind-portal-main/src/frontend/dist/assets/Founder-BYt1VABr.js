import { c as createLucideIcon, j as jsxRuntimeExports } from "./index-N514KH_G.js";
import { S as Skeleton } from "./skeleton-CJyYMMke.js";
import { Q as QuoteBlock } from "./QuoteBlock-B2WVPz7W.js";
import { S as SectionHeading } from "./SectionHeading-DUtTVwxW.js";
import { f as useFounderInfo } from "./useBackend-ChFQuJa1.js";
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
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$1);
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
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
function FounderPage() {
  const { data: founder, isLoading } = useFounderInfo();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          className: "h-14 w-80 mb-6",
          "data-ocid": "founder.loading_state"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-3/4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 w-full" })
        ] })
      ] })
    ] });
  }
  if (!founder) return null;
  const bioParagraphs = founder.bio.split("\n\n").filter(Boolean);
  const missionParagraphs = founder.mission.split("\n\n").filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-14 pattern-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        sanskrit: "आचार्य परिचय",
        title: "The Founder",
        subtitle: "The lineage, scholarship, and mission behind this portal."
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/generated/founder-portrait.dim_600x700.jpg",
              alt: `${founder.name} — ${founder.title}`,
              className: "w-full object-cover",
              "data-ocid": "founder.portrait"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-warm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-sm text-foreground flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 16, className: "text-primary" }),
              " Credentials"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: founder.credentials.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "font-body text-xs text-muted-foreground flex items-start gap-2",
                "data-ocid": `founder.credential.item.${founder.credentials.indexOf(c) + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent mt-0.5 shrink-0", children: "•" }),
                  c
                ]
              },
              c.slice(0, 40)
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", "data-ocid": "founder.bio_section", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-primary/60 text-xs italic mb-1 tracking-widest uppercase", children: "आचार्य" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl text-foreground mb-1", children: founder.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm mb-6", children: founder.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: bioParagraphs.map((para) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-muted-foreground leading-relaxed text-sm sm:text-base",
              children: para
            },
            para.slice(0, 40)
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          className: "bg-muted/30 rounded-2xl p-8 border border-border",
          "data-ocid": "founder.mission_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { size: 24, className: "text-primary shrink-0 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground", children: "Mission Statement" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: missionParagraphs.map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `font-body leading-relaxed ${i === 0 ? "text-foreground text-base sm:text-lg" : "text-muted-foreground text-sm sm:text-base"}`,
                children: para
              },
              para.slice(0, 40)
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        QuoteBlock,
        {
          verse: "Sarve bhavantu sukhinaḥ, sarve santu nirāmayāḥ",
          translation: "May all beings be happy; may all beings be free from disease.",
          source: "Bṛhadāraṇyaka Upaniṣad",
          chapter: "6:3:6"
        }
      ) })
    ] })
  ] });
}
export {
  FounderPage as default
};
