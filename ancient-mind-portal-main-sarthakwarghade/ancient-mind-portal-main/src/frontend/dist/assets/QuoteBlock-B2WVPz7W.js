import { j as jsxRuntimeExports } from "./index-N514KH_G.js";
function QuoteBlock({
  verse,
  translation,
  source,
  chapter
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "relative border-l-4 border-primary/60 pl-6 py-4 my-6 bg-primary/5 rounded-r-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-2 top-4 w-4 h-4 rounded-full bg-primary/40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-primary text-lg italic leading-relaxed mb-2", children: verse }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-muted-foreground text-sm leading-relaxed mb-3", children: [
      "“",
      translation,
      "”"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "font-body text-xs text-primary/70 font-medium uppercase tracking-wide", children: [
      "— ",
      source,
      chapter && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground normal-case tracking-normal font-normal", children: [
        ", ",
        chapter
      ] })
    ] })
  ] });
}
export {
  QuoteBlock as Q
};
