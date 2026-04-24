import { c as createLucideIcon, j as jsxRuntimeExports, L as Link } from "./index-N514KH_G.js";
import { c as categoryLabels, b as categoryColors } from "./useBackend-ChFQuJa1.js";
import { B as BookOpen } from "./book-open-kaFHpFGa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
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
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
const Flame = createLucideIcon("flame", __iconNode);
function CategoryBadge({ category, size = "sm" }) {
  const colorClass = categoryColors[category];
  const label = categoryLabels[category];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center border rounded-full font-body font-medium ${colorClass} ${size === "sm" ? "text-xs px-2.5 py-0.5" : "text-sm px-3 py-1"}`,
      children: label
    }
  );
}
const difficultyColors = {
  Beginner: "text-accent",
  Intermediate: "text-primary",
  Advanced: "text-destructive"
};
function TechniqueCard({ technique, index = 0 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/techniques/$id",
      params: { id: technique.id },
      "data-ocid": `technique.item.${index + 1}`,
      className: "group block",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "h-full bg-card border border-border rounded-xl overflow-hidden shadow-warm hover:shadow-mandala transition-smooth hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-gradient-to-r from-primary/70 via-primary to-accent/70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: technique.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: `text-xs font-body font-medium flex items-center gap-1 ${difficultyColors[technique.difficulty] ?? "text-muted-foreground"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 12 }),
                  technique.difficulty
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-primary/60 text-xs italic mb-1 truncate", children: technique.sanskritName }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground leading-snug mb-3 group-hover:text-primary transition-colors", children: technique.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4", children: technique.shortDescription }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4 mt-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
              technique.duration
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 11 }),
              technique.origin.textName
            ] })
          ] }),
          technique.doshasAffected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-3 flex-wrap", children: technique.doshasAffected.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5 border border-border",
              children: d
            },
            d
          )) })
        ] })
      ] })
    }
  );
}
export {
  CategoryBadge as C,
  Flame as F,
  TechniqueCard as T,
  Clock as a
};
