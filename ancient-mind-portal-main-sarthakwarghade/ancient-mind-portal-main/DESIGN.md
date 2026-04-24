# Design Brief

## Direction
Ayurveda Wisdom Portal — educational showcase celebrating ancient Indian mind control techniques for stress and anger management, with warm, contemplative visual language.

## Tone
Warm, refined, and scholarly — a museum-quality presentation of timeless wisdom that feels both sophisticated and inviting.

## Differentiation
Organic warmth through saffron/earth palette and mandala-inspired pattern details create an unforgettable heritage aesthetic distinct from sterile wellness apps.

## Color Palette

| Token            | OKLCH         | Role                          |
|------------------|---------------|-------------------------------|
| background       | 0.98 0.01 60  | Off-white cream base          |
| foreground       | 0.18 0.02 25  | Deep warm brown text          |
| primary          | 0.62 0.22 45  | Saffron golden-orange accent  |
| accent           | 0.64 0.15 165 | Sage green secondary          |
| secondary        | 0.75 0.08 165 | Muted sage for UI elements    |
| card             | 1.0 0.005 55  | Pure white with warm tint     |
| muted            | 0.92 0.04 58  | Light warm neutral            |
| border           | 0.88 0.03 60  | Subtle warm grey              |
| destructive      | 0.55 0.22 25  | Warm red for alerts           |

## Typography
- Display: Fraunces — serif elegance for headings, Sanskrit-inspired ornamental presence
- Body: Lora — refined serif for long-form content, excellent readability
- Mono: Geist Mono — technical elements and code snippets
- Scale: hero `text-6xl md:text-7xl font-bold`, h2 `text-4xl font-bold`, labels `text-sm uppercase tracking-widest`, body `text-lg leading-relaxed`

## Elevation & Depth
Layered card-based surfaces with warm, subtle shadows (`shadow-warm`, `shadow-mandala`) creating visual hierarchy without harsh contrast. Deep backgrounds reveal lighter cards through proximity and gentle elevation.

## Structural Zones

| Zone     | Background        | Border           | Notes                            |
|----------|-------------------|------------------|----------------------------------|
| Header   | cream card        | warm border      | Logo + nav, subtle grain overlay |
| Hero     | gradient + image  | none             | Hero image with warm gradient    |
| Content  | cream/white cards | subtle border    | Alternating card backgrounds     |
| Sections | warm muted /30    | warm border      | Technique cards with patterns    |
| Footer   | warm brown bg     | none             | Contact + social, cream text     |

## Spacing & Rhythm
Spacious breathing room (1.5-2rem gaps) between sections, 1rem card padding, generous line-height on body text (1.8). Asymmetric layouts create editorial flow without rigid grids.

## Component Patterns
- Buttons: saffron primary with sage hover state, rounded-lg, `shadow-warm` on hover
- Cards: `rounded-lg`, white/cream background, subtle `shadow-mandala`, thin `border-border`
- Badges: saffron or sage, `rounded-full`, uppercase labels
- Images: rounded-lg with warm gradient overlay on hero; subtle mandala corner accents on technique cards

## Motion
- Entrance: fade-in `0.4s ease-out` staggered on page load
- Hover: gentle `float 3s ease-in-out infinite` on accent elements, button transitions via `transition-smooth`
- Decorative: none — motion serves contemplative pacing, not distraction

## Constraints
- Never use harsh shadows or bright pure colors
- Typography hierarchy drives visual density, not color alone
- Pattern overlays remain subtle (opacity < 0.1) to avoid visual noise
- All interactive elements use warm tones, no cool blues

## Signature Detail
Subtle mandala dot patterns and corner accents on technique cards reinforce Indian heritage; warm gradient text on key practice names creates memorable visual anchors tied to the Ayurveda aesthetic.
