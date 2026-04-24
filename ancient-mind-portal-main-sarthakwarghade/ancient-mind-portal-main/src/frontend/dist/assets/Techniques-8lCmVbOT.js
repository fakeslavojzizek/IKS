import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports } from "./index-N514KH_G.js";
import { S as Skeleton } from "./skeleton-CJyYMMke.js";
import { C as CategoryBadge, T as TechniqueCard } from "./TechniqueCard-CDE9hbyn.js";
import { S as SectionHeading } from "./SectionHeading-DUtTVwxW.js";
import { u as useAllTechniques, T as TechniqueCategory, c as categoryLabels } from "./useBackend-ChFQuJa1.js";
import "./book-open-kaFHpFGa.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const ALL = "all";
function TechniquesPage() {
  const { data: techniques, isLoading } = useAllTechniques();
  const [activeCategory, setActiveCategory] = reactExports.useState(ALL);
  const [search, setSearch] = reactExports.useState("");
  const filtered = (techniques ?? []).filter((t) => {
    const matchesCategory = activeCategory === ALL || t.category === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch = !q || t.name.toLowerCase().includes(q) || t.sanskritName.toLowerCase().includes(q) || t.shortDescription.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });
  const allCategories = [ALL, ...Object.values(TechniqueCategory)];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border py-14 pattern-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        sanskrit: "षट् विद्याः",
        title: "Mind Control Techniques",
        subtitle: "A comprehensive library of 7+ authentic methods drawn from the Vedas, Yoga Sutras, Charaka Samhita, and Upanishads."
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Search,
            {
              size: 15,
              className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search techniques...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              "data-ocid": "techniques.search_input",
              className: "w-full pl-9 pr-4 py-2.5 bg-card border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: allCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat),
              "data-ocid": `techniques.filter.${cat.toLowerCase()}`,
              className: `font-body text-sm px-3.5 py-2 rounded-lg border transition-smooth ${isActive ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
              children: cat === ALL ? "All" : categoryLabels[cat]
            },
            cat
          );
        }) })
      ] }),
      !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-sm text-muted-foreground mb-6", children: [
        "Showing",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: filtered.length }),
        " ",
        "technique",
        filtered.length !== 1 ? "s" : "",
        activeCategory !== ALL && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          " ",
          "in",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: activeCategory })
        ] })
      ] }),
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Skeleton,
        {
          className: "h-72 rounded-xl",
          "data-ocid": "techniques.loading_state"
        },
        k
      )) }),
      !isLoading && filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(TechniqueCard, { technique: t, index: i }, t.id)) }),
      !isLoading && filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "text-center py-20 bg-card border border-border rounded-xl",
          "data-ocid": "techniques.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-muted-foreground mb-3", children: "🪷" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground mb-2", children: "No techniques found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-sm mb-4", children: "Try a different search term or category." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  setSearch("");
                  setActiveCategory(ALL);
                },
                "data-ocid": "techniques.clear_filters_button",
                className: "font-body text-sm text-primary border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary/5 transition-smooth",
                children: "Clear filters"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  TechniquesPage as default
};
