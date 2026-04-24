# Design System: High-End Editorial Wellness

## 1. Overview & Creative North Star: "The Digital Sanctuary"
This design system moves away from the "fitness app" aesthetic and toward a "Digital Sanctuary"—a premium, editorial experience that feels as much like a high-end wellness coffee table book as it does a functional tool. 

The **Creative North Star** is **Tactile Vitality**. We achieve this by balancing the high-energy "Poppy" tones of Sunset Orange and Deep Teal with a sophisticated, layered layout. By rejecting rigid grids and traditional borders, we create a sense of "Prana" (flow). We utilize intentional asymmetry, overlapping typography, and tonal depth to guide the user through complex topics like Mudras and Panchakarma with grace and authority.

---

## 2. Colors & Surface Architecture
Our palette transitions from the heat of practice (`primary`) to the cool of meditation (`secondary`), anchored by grounded neutrals.

### The Palette
*   **Primary (`#a43d04` / `#ef743c`):** Sunset Orange. Use for high-energy CTAs and vital brand moments.
*   **Secondary (`#006875` / `#2cb3c6`):** Deep Teal. Use for calming transitions, Sound Healing sections, and wisdom-based content.
*   **Surface System:** A range of whites and soft greys (`#ffffff` to `#d9dadf`) used to create architectural depth.

### The "No-Line" Rule
**Strict Prohibition:** Designers are forbidden from using 1px solid borders to define sections or cards. 
Structure must be achieved through:
*   **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
*   **Negative Space:** Using generous padding to allow content to breathe.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
*   **Level 0 (Base):** `surface` (#f9f9fe)
*   **Level 1 (Sections):** `surface-container-low` (#f3f3f8)
*   **Level 2 (Cards):** `surface-container-lowest` (#ffffff) for a "lifted" feel.

### The "Glass & Gradient" Rule
To add "soul," use subtle linear gradients (e.g., `primary` to `primary_container`) on large hero buttons. For floating navigation or overlays, apply **Glassmorphism**: use a semi-transparent `surface` color with a `20px` backdrop blur to maintain a sense of environmental continuity.

---

## 3. Typography: The Editorial Voice
We use a high-contrast typographic pairing to signal both modern accessibility and ancient wisdom.

*   **The Authority (Noto Serif):** Used for `Display` and `Headline` levels. This serif font brings elegance and a "premium publication" feel to topics like Chakras and Mudras.
*   **The Utility (Plus Jakarta Sans):** Used for `Title`, `Body`, and `Label`. A modern, clean sans-serif that ensures high readability during practice or study.

**Design Intent:** Don't be afraid of scale. A `display-lg` headline should feel cinematic, often overlapping a `surface-container` boundary to break the "boxed-in" feel.

---

## 4. Elevation & Depth
Depth in this system is organic, not artificial. We use **Tonal Layering** to convey importance.

*   **The Layering Principle:** To make a card pop, place a `surface-container-lowest` (#ffffff) element onto a `surface-container` (#ededf3) background. The subtle shift in hex value creates a soft, natural lift.
*   **Ambient Shadows:** If a shadow is required for a floating Action Button, use the `on-surface` color at 6% opacity with a `32px` blur and `8px` Y-offset. It should feel like a soft glow, not a drop shadow.
*   **The "Ghost Border":** If a boundary is required for accessibility in forms, use `outline-variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** `primary` fill with `on-primary` text. Use a subtle gradient and `xl` (1.5rem) roundedness.
*   **Secondary:** `secondary_container` fill. High-energy but secondary in hierarchy.
*   **Tertiary:** No fill, no border. Use `primary` text weight for emphasis.

### Cards & Content Blocks
*   **Forbid Dividers:** Never use a horizontal rule `<hr>`. Separate list items using `surface-container-low` backgrounds or increased vertical spacing (min 24px).
*   **Asymmetric Cards:** Experiment with varying corner radii (e.g., top-left `xl`, bottom-right `md`) to mimic the organic nature of wellness.

### Inputs & Fields
*   **Floating Labels:** Use `plusJakartaSans` at `label-md`. 
*   **State:** Use `primary` for active focus rings, but keep the ring at a soft 2px width with a 20% opacity "aura."

### Specialty Components (Wellness Context)
*   **Progress Rings (Chakra Focus):** Use `secondary` with a soft glow effect to track meditation duration.
*   **Immersive Hero:** A full-bleed image container using a `surface` gradient overlay at the bottom to transition into editorial text.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Generous White Space:** If you think there is enough padding, add 16px more.
*   **Mix Type Scales:** Place a small `label-md` in all-caps above a large `display-sm` headline.
*   **Use Tonal Transitions:** Define sections by shifting the background color slightly rather than adding a line.

### Don’t:
*   **Don't use Pure Black:** Use `on-surface` (#1a1c1f) for text to keep the vibe grounded and soft.
*   **Don't use Default Shadows:** Avoid the "dirty" look of high-opacity grey shadows.
*   **Don't Grid-Lock:** Allow images or headers to "break" the container edges to create a bespoke, high-end editorial feel.