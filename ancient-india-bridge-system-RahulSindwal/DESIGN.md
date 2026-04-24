# Design Brief

## Aesthetic Direction
Premium heritage educational showcase. Maximalist information-dense layout with deep cultural resonance. Ancient Indian bridge engineering as visual language. Tonal, textured, hierarchical.

## Color Palette

| Role | OKLCH | Usage |
|------|-------|-------|
| Primary (Terracotta) | `0.51 0.12 30` | Buttons, accents, section headers |
| Secondary (Saffron) | `0.68 0.22 65` | Highlights, interactive states, badges |
| Accent (Deep Red) | `0.32 0.16 20` | Callouts, emphasis, destructive actions |
| Highlight (Gold) | `0.72 0.12 75` | Borders, premium details, focus states |
| Background (Ivory) | `0.98 0.02 55` | Primary surface, cards, content areas |
| Muted (Stone Grey) | `0.88 0.05 55` | Secondary surfaces, disabled states |
| Foreground (Dark Brown) | `0.2 0.02 30` | Body text, primary UI elements |

## Typography
- **Display**: Fraunces (serif, classical editorial weight)
- **Body**: GeneralSans (geometric sans-serif, readable, modern)
- **Mono**: GeistMono (technical annotations, code references)
- **Scale**: 14px base, 16px body-lg, 24px subheading, 36px–64px headline

## Structural Zones

| Zone | Background | Border | Shadow | Purpose |
|------|-----------|--------|--------|---------|
| Header | `oklch(0.51 0.12 30)` | Subtle gold border-b | `shadow-elevated` | Navigation, site identity |
| Hero | `oklch(0.98 0.02 55)` w/ gradient overlay | None | `shadow-deep-terracotta` | Grand introduction, visual anchor |
| Content sections | Alternating `bg-background` + `bg-muted/20` | `border-border` | `shadow-subtle` | Educational cards, bridge types |
| Cards | `bg-card` + `border-gold-accent` | `oklch(0.72 0.12 75) 2px` | `shadow-elevated` | Bridge details, timeline entries |
| Footer | `oklch(0.16 0.01 30)` (dark) | `border-t` subtle | None | Site footer, links |

## Component Patterns
- **Section headings**: Fraunces, 2.5rem, text-primary, gradient underline accent
- **Bridge cards**: Ivory bg, gold border, SVG illustration, 2-line description, learn link
- **Timeline entries**: Vertical line connector, alternating left/right layout, dates in saffron
- **Callouts**: Stone-textured background, accent border-l, small serif title, body text
- **CTA buttons**: Primary terracotta w/ gold focus ring, rounded 8px, text-secondary-foreground

## Motion & Animation
- **Scroll fade-in**: `fade-in-up 0.6s ease-out` triggered on viewport entry
- **SVG stroke draw**: `draw-stroke 2s ease-in-out` for animated bridge diagrams
- **Parallax**: Hero section text slow-scroll offset
- **Hover transitions**: `transition-smooth` (0.3s cubic-bezier) on all interactive elements
- **Entrance**: Staggered fade-in for card grids (100ms delay between items)

## Spacing & Rhythm
- **Base unit**: 8px / 4px quarter-steps for consistent density
- **Section gap**: 4rem (64px) between major sections
- **Card gap**: 2rem (32px) in grids
- **Internal padding**: 1.5rem for cards, 2rem for section containers
- **Typography spacing**: 0.5em line-height buffer above headlines

## Signature Detail
**Stone texture overlay**: Subtle diagonal hash pattern (30% opacity, 50px repeat) on alternating section backgrounds to evoke ancient masonry. Animated SVG bridge diagrams with labeled callout annotations that draw/fade on scroll.

## Constraints
- No flat design; depth via shadows, layering, and texture
- No bright/neon saturation; earthy chromas only (0.12–0.22 max)
- Information density prioritized over white space
- All animations smooth, 0.3–2s duration range
- Dark mode inverts background/foreground but preserves warm accent hues
