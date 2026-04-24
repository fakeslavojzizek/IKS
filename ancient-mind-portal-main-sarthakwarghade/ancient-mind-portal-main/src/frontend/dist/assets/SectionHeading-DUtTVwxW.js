import { j as jsxRuntimeExports } from "./index-N514KH_G.js";
function SectionHeading({
  sanskrit,
  title,
  subtitle,
  centered = false,
  decorative = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mb-10 ${centered ? "text-center" : ""}`, children: [
    sanskrit && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-primary/60 text-sm tracking-widest uppercase mb-2 italic", children: sanskrit }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-foreground leading-tight mb-3", children: title }),
    decorative && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-primary/40" })
        ]
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground text-lg leading-relaxed max-w-2xl", children: subtitle })
  ] });
}
export {
  SectionHeading as S
};
