# Rituals — Brand & Design System Context
> **Purpose:** This document is the single source of truth for all design, brand, and UX decisions in the Rituals app. Provide this file to your IDE or AI coding assistant to ensure all future development maintains visual and functional consistency.

---

## 1. Brand Identity

### Name & Tagline
- **App name:** `rituals` (always lowercase in UI)
- **Primary tagline:** *"Borrow beauty from the world."*
- **Sub-taglines** are practice-specific (see Practice Data Model)

### Brand Voice
- Editorial, warm, and unhurried — never clinical or productivity-focused
- Sentences are short. Declarative. Sometimes fragment-style for impact.
- Body copy uses em-dashes (—) liberally, not hyphens
- Cultural names are always rendered in their native script where possible (e.g., 森の守護者)
- Avoids words like: "wellness," "optimize," "track," "goals," "boost"
- Prefers words like: "practice," "experience," "notice," "gather," "linger"

### Brand Concept
The app is positioned as a **cultural passport for daily life** — not a productivity tool, not a meditation app. The aesthetic should feel like a beautiful travel magazine crossed with a personal journal. Every screen should feel like it could be a photograph worth keeping.

---

## 2. Color System

### Global Base Palette (Dark Theme)
The app is **dark-first**. All screens use a near-black base with warm undertones.

| Token | Hex | Usage |
|---|---|---|
| `--bg-primary` | `#0f0f0f` | Main app background (home screen) |
| `--bg-secondary` | `#0a0a0a` | Practice screen background, content areas |
| `--bg-card` | `rgba(255,255,255,0.03)` | Card and panel surfaces |
| `--border-subtle` | `rgba(255,255,255,0.07)` | Default card/panel borders |
| `--border-medium` | `rgba(255,255,255,0.12)` | Interactive element borders |
| `--border-strong` | `rgba(255,255,255,0.20)` | Emphasized borders (e.g., back button) |
| `--text-primary` | `#f5f0e8` | Primary headings (warm white, not pure white) |
| `--text-secondary` | `#e0d8c8` | Secondary text, names |
| `--text-muted` | `#9a9080` | Tertiary text, community quotes |
| `--text-faint` | `#888` | Labels, metadata |
| `--text-dim` | `#666` | Timestamps, sub-labels |
| `--text-ghost` | `#555` | Placeholder and disabled text |
| `--text-deep` | `#444` | Very low-priority text |

> **Important:** Never use pure `#ffffff` or `#000000`. The warmth in `#f5f0e8` (text) and `#0f0f0f` (background) is intentional and central to the "aged, editorial" feel.

### Per-Practice Accent System
Each cultural practice has its own two-token accent palette. These colors bleed into the UI on the practice screen — tinting overlays, borders, badges, and interactive elements.

| Practice | `accentColor` (primary) | `accentLight` (highlight/text on dark) |
|---|---|---|
| Shinrin-yoku (Japan) | `#4a7c59` | `#a8c5a0` |
| Fika (Sweden) | `#c17f3e` | `#e8c99a` |
| Hygge (Denmark) | `#7a5c3e` | `#c9a87c` |
| Passeggiata (Italy) | `#b5451b` | `#e8a87c` |
| Niksen (Netherlands) | `#3a5a7c` | `#8ab0d0` |
| Sobremesa (Spain) | `#8b2635` | `#d4909a` |
| Manaakitanga (NZ/Māori) | `#2d6a4f` | `#74c69d` |

**Accent usage rules:**
- `accentColor` is used for: color washes, icon backgrounds, active tab indicator, badge backgrounds, SVG map pins, left-border on quote callouts
- `accentLight` is used for: section labels, stat values, badge text, chip text, active tab text
- Opacity variants are constructed inline: `${accentColor}20` = 12% opacity tint, `${accentColor}40` = 25%, `${accentColor}50` = 31%, `${accentColor}60` = 38%, `${accentColor}80` = 50%
- The hero color wash overlay uses: `linear-gradient(135deg, ${accentColor}50, transparent)`
- Badge backgrounds use: `radial-gradient(circle, ${accentColor}, #1a1a1a)`

### Mood Category Colors
Mood filter chips and tags map to these accent associations:
- `Restore` → greens and earth tones (Shinrin-yoku, Hygge, Niksen)
- `Connect` → warm reds, oranges, terracottas (Fika, Passeggiata, Sobremesa, Manaakitanga)

### Special-Use Colors
| Token | Hex | Usage |
|---|---|---|
| Streak gold (bg) | `linear-gradient(135deg, #3a2a14, #6b4c1e)` | Streak badge background |
| Streak gold (border) | `#8b6d3a` | Streak badge border |
| Streak number | `#e8c97a` | Streak count text |
| Streak label | `#b89a5a` | Streak sublabel |
| Live dot | `#ff5555` | Pulsing red dot on video indicator |

---

## 3. Typography

### Font Stack
Three typefaces are loaded from Google Fonts. They must all be imported together:

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cormorant+SC:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');
```

| Font | Weights Loaded | Role |
|---|---|---|
| **Cormorant Garamond** | 300, 400, 500, 600; italic 300, 400 | Display, editorial headings, body philosophy text |
| **Cormorant SC** (Small Caps) | 300, 400, 500 | Section labels, overlines, category titles |
| **DM Sans** | 300, 400, 500 | UI labels, metadata, stats, navigation, buttons |

### Typography Scale

#### Cormorant Garamond — Display & Editorial
| Role | Size | Weight | Style | Letter Spacing | Line Height |
|---|---|---|---|---|---|
| App name / hero heading | `52px` | 300 | normal | `-0.02em` | `0.95` |
| Home screen title | `38px` | 300 | normal | `-0.01em` | `1.1` |
| Practice card name | `30px` | 400 | normal | `-0.01em` | `1.1` |
| Philosophy body text | `20px` | 300 | normal | `0.01em` | `1.75` |
| Taglines | `18–19px` | 300 | italic | — | `1.4–1.5` |
| Community quotes | `17px` | 400 | italic | — | `1.5` |
| Badge name | `22px` | 400 | normal | — | — |
| Cultural callout quote | `18px` | 400 | italic | — | `1.5` |

#### Cormorant SC — Labels & Overlines
| Role | Size | Weight | Letter Spacing | Transform |
|---|---|---|---|---|
| Section overline labels | `10–11px` | 300–400 | `0.25em` | uppercase |
| (e.g., "The Heart of…", "Your Starting Guide") | | | | |

#### DM Sans — UI & Functional Text
| Role | Size | Weight | Letter Spacing | Transform |
|---|---|---|---|---|
| Tab navigation | `13px` | 400 | `0.08em` | uppercase |
| Filter chips | `12px` | 500 | `0.06em` | uppercase |
| Country/flag label | `11–12px` | 400–500 | `0.06em` | uppercase |
| Stat values | `16px` | 500 | — | — |
| Stat labels | `10px` | 400 | `0.06em` | uppercase |
| Practice duration/difficulty | `11px` | 400 | — | — |
| Step card title | `14px` | 500 | — | — |
| Step card description | `13px` | 300 | — | `1.5` line height |
| Location list name | `14px` | 500 | — | — |
| Community username | `13px` | 500 | — | — |
| Metadata / timestamps | `11–12px` | 400 | — | — |
| Body/support copy | `12–13px` | 300–400 | — | — |
| CTA button | `15px` | 500 | `0.04em` | — |
| "LIVE" badge | `10px` | 400 | `0.08em` | uppercase |

### Typography Rules
- Headings never use bold weight — 300 or 400 only for all Cormorant display usage
- Italic is used liberally for taglines, quotes, and philosophy text — it is a core aesthetic feature, not an exception
- All section overline labels use Cormorant SC at 10px with 0.25em letter spacing — this is a signature repeated pattern
- Never use system fonts or Inter/Roboto/Arial in any part of the UI

---

## 4. Layout & Spacing

### App Container
- **Width:** `min(430px, 100vw)` — mobile-first, constrained to phone width
- **Background:** `#0d0d0d` (outer wrapper, slightly lighter than inner)
- **Box shadow:** `0 0 80px rgba(0,0,0,0.8)` — creates depth around phone frame
- Centered horizontally with `display: flex; justify-content: center`
- No horizontal scrollbar: `::-webkit-scrollbar { width: 0px }`

### Home Screen Layout
- Top padding: `56px` (accounts for status bar)
- Horizontal padding: `28px` (header area), `20px` (cards area)
- Header block: flex row, space-between, streak badge on right
- App name + tagline block stacked vertically
- Filter chips: horizontal scroll row, `gap: 8px`, `padding-bottom: 4px`
- Cards list: `flex-direction: column`, `gap: 16px`
- Bottom attribution: centered, `margin-top: 40px`

### Practice Card Layout
- **Height:** `220px` fixed
- **Border radius:** `20px`
- Internal padding: `18px 20px`
- Content: flex column, `justify-content: space-between`
- Top row: flag chip + mood chip + completion checkmark
- Bottom row: translation label → practice name → tagline → stats row
- Stats row: `gap: 14px`, `margin-top: 10px`

### Practice Screen — Hero Section
- **Height:** `72vh`
- Video/image fills 100% of this area, `object-fit: cover`
- Back button + country chip + share button in top row at `padding-top: 52px`
- Hero text pinned to bottom: `padding: 0 24px 24px`
- Stats row at bottom: 3 stats separated by `1px` vertical dividers

### Practice Screen — Content Area
- Overlaps hero by `margin-top: -24px` with `border-radius: 24px 24px 0 0`
- `z-index: 2` to sit above video
- Tab nav: `padding: 0 24px`, `gap: 28px`, `border-bottom: 1px solid rgba(255,255,255,0.07)`
- Tab content: `padding: 28px 24px 120px` (extra bottom padding for sticky CTA)

### Sticky CTA Bar
- Fixed to bottom of screen
- Width matches phone container: `min(430px, 100vw)`
- Padding: `16px 24px 32px` (extra bottom for home indicator)
- Background: `linear-gradient(to top, #0a0a0a 70%, transparent 100%)` — fades out content below
- `z-index: 100`

---

## 5. Component Library

### Practice Card
A full-bleed image card with layered overlays.

**Structure:**
1. Background image (`object-fit: cover`, `brightness(0.55)`)
2. Diagonal color wash: `linear-gradient(135deg, ${accentColor}80, rgba(0,0,0,0.1))`
3. Bottom gradient: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 60%)`
4. Country chip (top-left): glass pill with flag emoji + country name
5. Mood chip (top-right): glass pill with mood label
6. Completion badge (top-right, conditional): filled circle with ✓ in `accentColor`
7. Translation label: `accentLight` colored, uppercase, small caps style
8. Practice name: large Cormorant Garamond
9. Tagline: italic Cormorant Garamond
10. Stats row: duration + completions count
11. Play indicator: glass circle with ▶, bottom-right

**Glass pill style (reusable pattern):**
```css
background: rgba(0,0,0,0.35);
backdrop-filter: blur(8px);
border: 1px solid rgba(255,255,255,0.15);
border-radius: 100px;
padding: 5px 12px;
```

### Filter Chip
Rounded pill toggle for mood filtering.
- **Active:** `background: #f5f0e8`, `color: #0f0f0f`, `border: 1px solid #f5f0e8`
- **Inactive:** `background: transparent`, `color: #aaa`, `border: 1px solid rgba(255,255,255,0.12)`
- Typography: DM Sans, 12px, 500 weight, 0.06em spacing, uppercase
- Padding: `7px 18px`, `border-radius: 100px`

### Streak Badge
A compact gamification widget in the home screen header.
- Background: `linear-gradient(135deg, #3a2a14, #6b4c1e)`
- Border: `1px solid #8b6d3a`
- Border radius: `16px`, padding: `10px 16px`
- Contains: fire emoji, large gold number, small "practiced" label

### Tab Navigation
Horizontal tab row with indicator.
- Tabs: DM Sans, 13px, 400 weight, uppercase, 0.08em spacing
- Active state: `color: accentLight`, `border-bottom: 2px solid accentColor`
- Inactive state: `color: #555`, `border-bottom: 2px solid transparent`
- Transition: `all 0.2s ease`

### Step Card (Experience Tab)
An icon + title + description row card.
- Background: `rgba(255,255,255,0.03)`
- Border: `1px solid rgba(255,255,255,0.07)`
- Border radius: `16px`, padding: `16px 18px`
- Icon container: `42×42px`, `border-radius: 12px`, `background: ${accentColor}25`, `border: 1px solid ${accentColor}40`
- Step number: Cormorant Garamond 22px in `accentColor`, right-aligned

### Badge Preview Card (Heart Tab)
- Background: `rgba(255,255,255,0.03)`
- Border: `1px solid ${accentColor}40`
- Border radius: `16px`, padding: `20px`
- Badge circle: `56×56px`, `border-radius: 50%`, radial gradient, border in `accentColor`
- Contains: badge name in Cormorant, translation in DM Sans, earn prompt

### Cultural Callout (Heart Tab)
Left-bordered quote block.
- `border-left: 3px solid ${accentColor}`
- `background: ${accentColor}10`
- `border-radius: 0 12px 12px 0`
- Contains: "Origin" overline + flag + country text

### Journal Prompt Card (Experience Tab)
- Background: `linear-gradient(135deg, ${accentColor}18, transparent)`
- Border: `1px solid ${accentColor}30`
- Border radius: `16px`, padding: `20px`
- Contains: overline label, italic question in Cormorant, dashed action area

### Location Row Card (Nearby Tab)
- Background: `rgba(255,255,255,0.03)`
- Border: `1px solid rgba(255,255,255,0.07)`
- Border radius: `14px`, padding: `14px 16px`
- Icon area: `44×44px`, `border-radius: 12px`, `accentColor`-tinted bg
- Right column: star rating in `accentLight`, distance in muted gray

### Map Placeholder (Nearby Tab)
- Background: `linear-gradient(135deg, #1a2a1a, #0d1a0d)`
- Height: `180px`, border radius: `16px`
- SVG grid lines at 15% opacity in `accentColor`
- Glowing pin dots: `12px` circles, `background: accentColor`, `box-shadow: 0 0 12px accentColor`, white border

### Community Post Card (Community Tab)
- Border radius: `16px`, `overflow: hidden`
- Full-width image at top: `160px` height, `object-fit: cover`
- Content below: `padding: 14px`
- Reflection text: Cormorant Garamond 17px italic in `#9a9080`
- Earned badge pill: inline-flex, `accentColor` tint bg and border, 100px border-radius

### "Share Your Experience" CTA (Community Tab)
- Border: `1px dashed ${accentColor}40`
- Border radius: `16px`, padding: `18px`
- Centered: camera emoji + DM Sans prompt text

### Primary CTA Button
Full-width rounded button pinned to bottom of practice screen.
- **Default:** `background: linear-gradient(135deg, accentColor, ${accentLight}40)`, white text, `box-shadow: 0 8px 32px ${accentColor}60`
- **Completed state:** `background: transparent`, `color: accentLight`, `border: 1px solid accentColor`
- Border radius: `100px`, padding: `16px 32px`
- Typography: DM Sans 15px, weight 500, 0.04em spacing
- Hover: `transform: translateY(-2px)`

### Back Button
- `42×42px` circle
- `background: rgba(255,255,255,0.12)`, `backdrop-filter: blur(12px)`
- Border: `1px solid rgba(255,255,255,0.2)`
- Hover: `background: rgba(255,255,255,0.22)`

### LIVE Indicator Badge
Floating pill shown over video hero.
- Background: `rgba(255,255,255,0.1)`, `backdrop-filter: blur(8px)`
- Border: `1px solid rgba(255,255,255,0.15)`
- Contains: `6px` pulsing red dot + "LIVE" text (DM Sans, 10px, 0.08em spacing)

---

## 6. Animation & Motion

### Keyframe Definitions
All defined in a `<style>` block injected at the component root.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes pulse-ring {
  0%   { transform: scale(0.95); opacity: 0.8; }
  70%  { transform: scale(1.1);  opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
}

@keyframes slide-in-right {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}
```

### Animation Usage Map

| Element | Animation | Duration | Delay |
|---|---|---|---|
| Home screen header block | `fadeUp` | `0.6s ease` | `0s` |
| Practice cards (staggered) | `fadeUp` | `0.5s ease` | `index × 0.08s` |
| Practice screen (page transition) | `slide-in-right` | `0.4s ease` | `0s` |
| Hero text block | `fadeUp` | `0.6s ease` | `0.1s` |
| Tab content (all tabs) | `fadeUp` | `0.4s ease` | `0s` |
| Step cards (staggered) | `fadeUp` | `0.5s ease` | `index × 0.08s` |
| Location rows (staggered) | `fadeUp` | `0.4s ease` | `index × 0.1s` |
| Community posts (staggered) | `fadeUp` | `0.4s ease` | `index × 0.1s` |
| LIVE dot | `pulse-ring` | `1.5s infinite` | — |
| Video fade-in | CSS opacity transition | `0.8s ease` | on `loadeddata` |

**Rule:** All `fadeUp` animations use `animation-fill-mode: both` so elements start hidden and stay visible after the animation completes.

### Hover & Interaction States
- **Practice cards:** `transform: translateY(-4px)`, `box-shadow: 0 20px 60px rgba(0,0,0,0.5)` — duration `0.3s ease`
- **CTA button:** `transform: translateY(-2px)` — duration `0.25s ease`
- **Back button:** Background opacity increases to `0.22`
- **Tab buttons:** Color transition `0.2s ease`
- **Filter chips:** Background/color/border transition `0.2s`
- **All interactive elements:** `cursor: pointer`

---

## 7. Video Hero System

### Behavior
Each practice screen features a fullscreen looping video hero occupying `72vh`.

**Loading sequence:**
1. Poster image displayed immediately (instant perception of content)
2. Video element loads in background with `autoPlay muted loop playsInline`
3. On `loadeddata` event: video fades in (`opacity: 1`), poster fades out (`opacity: 0`) — both with `0.8s ease` transition
4. On video error: poster image remains as permanent fallback, no visible failure state

**Video attributes required:**
```jsx
autoPlay muted loop playsInline
```
`muted` is required for autoplay to work in browsers. `playsInline` prevents fullscreen on iOS.

### Overlay Stack (bottom to top)
1. `<video>` or `<img>` poster — `position: absolute, inset: 0, object-fit: cover`
2. Poster `<img>` — same, for crossfade transition
3. Diagonal color wash — `linear-gradient(135deg, ${accentColor}50, transparent)`
4. Bottom gradient — `linear-gradient(to top, #0a0a0a 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)`
5. Top controls row — `position: absolute, top: 0`
6. LIVE indicator — `position: absolute, top: 58px, centered`
7. Hero text block — `position: absolute, bottom: 0`

### Per-Practice Video Spec
In production, each practice should have its own video URL:

| Practice | Ideal Video Content |
|---|---|
| Shinrin-yoku | Slow walk through dappled forest, person pausing to look up at canopy |
| Fika | Coffee being poured, steam rising, two people at a small table, pastry closeup |
| Hygge | Candles flickering, warm interior, hands wrapped around mug |
| Passeggiata | Golden-hour street scene, slow crowd movement, gelato, cobblestones |
| Niksen | Window with rain or movement outside, stillness inside, light changing |
| Sobremesa | Lingering at a table, hands gesturing, glasses being refilled |
| Manaakitanga | Outdoor gathering, food being shared, welcoming gestures |

Recommended video sources: Pexels (free), Artgrid, Pond5, Getty/iStock.

---

## 8. Data Model — Practice Object

Each cultural practice is defined by this schema:

```typescript
interface Practice {
  id: string;                  // kebab-case unique identifier
  name: string;                // Native/original name
  translation: string;         // English translation (short phrase)
  country: string;             // Country of origin
  flag: string;                // Emoji flag
  tagline: string;             // One-line soul description (< 10 words)
  mood: "Restore" | "Connect"; // Filter category
  duration: string;            // Human-readable time (e.g., "2–3 hours")
  difficulty: string;          // Human-readable entry level
  accentColor: string;         // Hex — primary accent
  accentLight: string;         // Hex — light/highlight accent
  textColor: string;           // Hex — text on accentColor bg (legacy, use --text-primary)
  videoUrl: string;            // URL to looping mp4
  videoPoster: string;         // URL to still image (hero fallback)
  heart: string;               // 150–250 word philosophy paragraph
  steps: Step[];               // 5 experience steps
  badge: string;               // Badge name (in native language/script where possible)
  badgeTranslation: string;    // English meaning of badge
  communityPhotos: string[];   // Array of 3 image URLs
  nearbyLabel: string;         // Map section label (e.g., "Find forests near you")
  completions: number;         // Community participation count
}

interface Step {
  icon: string;    // Single emoji
  title: string;   // Short imperative (< 6 words)
  desc: string;    // 1–2 sentence instruction
}
```

---

## 9. Screen Architecture & Navigation

### Screens
1. **Home Screen** — Discovery feed, all practices as cards
2. **Practice Screen** — Full-screen immersive detail with 4 tabs

### Navigation Model
- Simple two-state model: `screen` state is either `"home"` or `"practice"`
- No router — state-driven conditional rendering
- Page transition: `slide-in-right` animation on practice screen entry
- Back navigation: back button in practice screen hero returns to home

### Tab Structure (Practice Screen)
Four tabs in fixed order:

| Tab | Content |
|---|---|
| `Heart` | Philosophy text + badge preview + cultural callout |
| `Experience` | 5-step guide + journal prompt |
| `Nearby` | Map placeholder + 3 location suggestions |
| `Community` | 3 photo posts + share CTA |

Tab state resets to `"heart"` on every practice open.

---

## 10. Gamification System

### Completion State
- Stored as array of practice IDs: `completedIds: string[]`
- Initial state pre-populates 2 completions for demo feel: `["fika", "shinrin-yoku"]`
- Marking complete: adds practice ID to array (idempotent)
- Reflected in: card checkmark badge, CTA button text change, streak count

### Streak Counter
- Displays total number of practices completed (`completedIds.length`)
- Shown in home screen header as fire emoji + gold number
- Labeled "practiced" beneath

### Badges
- Each practice has a culturally authentic badge name (in native language where possible)
- Badge name is displayed in the language's own script (e.g., 森の守護者 for Japanese)
- Badge translation always provided in English below
- Badge is "earned" on first completion — CTA button transforms to show badge name
- Badge preview shown in Heart tab before completion

### Future Gamification Hooks (designed for, not yet built)
- Streak days (consecutive daily practice)
- Country depth badges (3 practices from same culture)
- Seasonal unlocks
- "Passport" view showing all earned stamps

---

## 11. Scrollbar & Global Resets

```css
* { box-sizing: border-box; margin: 0; padding: 0; }
::-webkit-scrollbar { width: 0px; }
```

Scrollbars are hidden globally. All overflow is still scrollable — just without a visible scrollbar, maintaining the clean aesthetic.

---

## 12. Responsive Behavior

- The app is **mobile-first and mobile-only** in this prototype
- Max rendered width: `430px` (typical phone screen)
- On desktop, the phone frame is centered on a `#0d0d0d` background with a heavy box shadow
- No breakpoints — the design is intentionally a fixed phone form factor
- All font sizes, padding, and component heights are specified in `px` (not responsive units) to maintain precise mobile proportions

---

## 13. Iconography & Imagery

### Icons
- All icons are native emoji — no icon library
- Step card icons: single emoji in a tinted square container (`border-radius: 12px`)
- Navigation/action icons: text arrows (`←`, `→`), text symbols (`▶`, `⬆`)
- Mood/status indicators: emoji (🔥 streak, ✓ completion, 🏅 badge, 📸 share, 🗺 location)

### Photography Style
All imagery (community photos, video posters) should follow these criteria:
- Natural light, outdoor or intimate interior settings
- Muted, slightly desaturated color grading — no oversaturated lifestyle photography
- Human presence optional but preferred (hands, not faces)
- No stock-photo compositions — authentic and documentary in feel
- Aspect ratios: hero poster = landscape 16:9 minimum; community photos = any, cropped to fixed heights

### Image Sourcing
- Unsplash CDN parameters used: `?w=800&q=80` (hero), `?w=400&q=80` (community thumbnails)
- Always provide `alt` text, even if decorative

---

## 14. Accessibility Notes

- Videos are `muted` by default (required for autoplay; also benefits hearing-impaired users)
- All videos have a `poster` image fallback
- Interactive elements have `cursor: pointer`
- Color contrast: primary text `#f5f0e8` on `#0f0f0f` meets WCAG AA
- Accent-colored text (e.g., `accentLight`) on dark backgrounds should be checked per-practice
- Tab order follows visual hierarchy (currently handled by DOM order)
- Emojis used as icons should have `aria-label` added in production

---

## 15. Development Guidelines

### Component Naming Convention
- Screen components: `PascalCase` + `Screen` suffix (e.g., `HomeScreen`, `PracticeScreen`)
- Tab components: `PascalCase` + `Tab` suffix (e.g., `HeartTab`, `ExperienceTab`)
- Reusable cards: `PascalCase` + `Card` suffix (e.g., `PracticeCard`)

### Style Approach
- All styles are inline React style objects (no external CSS files in prototype)
- CSS keyframe animations defined in a single injected `<style>` tag
- Per-practice theming is passed via the `practice` prop (`p`) — never hardcode accent colors in components
- Always reference `p.accentColor` and `p.accentLight` — never a fixed hex — inside practice-aware components

### State Management
- Simple `useState` — no external state library needed for this scale
- `screen`: `"home" | "practice"` — drives top-level render
- `selectedPractice`: the full practice object or null
- `activeTab`: `"heart" | "experience" | "nearby" | "community"`
- `completedIds`: `string[]` — persisted to local storage in production

### Extending with New Practices
To add a new cultural practice:
1. Add a new object to the `practices` array following the `Practice` data model above
2. Define unique `accentColor` and `accentLight` values (earthy, muted, globally themed)
3. Source a video URL and poster image
4. Write the `heart` paragraph (150–250 words, philosophy-first, no bullet points)
5. Define exactly 5 `steps` with emoji icons
6. Define a badge name in the native language of the culture
7. Add 3 `communityPhotos` URLs
8. Assign a `mood` category: `"Restore"` or `"Connect"`

---

*Document version: 1.0 — Generated from the Rituals prototype build.*
*Keep this file updated as the design system evolves.*
