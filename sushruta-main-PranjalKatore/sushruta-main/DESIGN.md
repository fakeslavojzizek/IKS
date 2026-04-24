# Design Brief

## Purpose
Educational showcase of Sushruta, ancient Indian physician and father of surgery, with immersive historical aesthetic and maximum scholarly content density.

## Visual Direction
Ancient Indian manuscript aesthetic with museum-quality presentation. Parchment-textured backgrounds (warm cream), serif typography, bronze/terracotta accents. Reverent, authoritative tone. No modern gradients—historical restraint.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| Background (Light) | 0.94 0.04 70 | Warm parchment off-white |
| Foreground (Ink) | 0.12 0.02 0 | Deep charcoal for text |
| Primary (Bronze) | 0.50 0.12 70 | Interactive elements, accents |
| Secondary (Terracotta) | 0.55 0.15 30 | Card borders, decorative bands |
| Accent (Ochre/Gold) | 0.68 0.18 60 | Highlights, scholarly emphasis |
| Muted (Aged Paper) | 0.80 0.06 70 | Disabled states, subtle backgrounds |
| Border | 0.75 0.08 30 | Terracotta-tinted borders |

## Typography
- **Display**: Instrument Serif (italic accent for titles)
- **Body**: Lora (high readability, historical character)
- **Mono**: Geist Mono (technical content, data)
- **Scale**: 12px (caption) → 16px (body) → 24px (heading) → 40px (display)

## Structural Zones
- **Header**: Gold underline accent on serif title, parchment background
- **Content Cards**: Terracotta borders (2px), parchment-textured edges, scholarly shadow depth
- **Galleries**: Grid layout with card-based presentation, minimal radius (2px)
- **Footer**: Deep bronze background with team credits in small serif font
- **Accent Usage**: Sparingly on interactive states, focused highlights, borders

## Shape Language
Minimal radius (2px maximum). Straight edges with subtle shadows for elevation. No rounded aesthetics—archaeological precision.

## Signature Detail
Parchment inset shadow on content cards creating layered depth effect. Gold/ochre underlines on headers and interactive highlights. Serif-first typography for scholarly gravitas.

## Motion
Fade-in on load (0.4s ease-out), slide-up for content reveals (0.5s ease-out). Smooth transitions (0.3s cubic-bezier) on interactive states. No bouncy or playful animations—scholarly restraint.

## Responsive Approach
Mobile-first. Stacked cards on small screens, grid layout from `md:` breakpoint. Typography scales with viewport. Dark mode supported with adjusted earth-tone palette.

## Constraints
- Only serif fonts (Lora, Instrument Serif)
- Max 3–4 core colors visible per section
- Shadows for elevation, never color gradients
- No modern design clichés (glass morphism, neon, bright primaries)
- Team credits footer mandatory, small serif font
