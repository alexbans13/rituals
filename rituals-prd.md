# Product Requirements Document
# Rituals — *Borrow beauty from the world.*

---

| Field | Value |
|---|---|
| **Document Status** | Draft v1.0 |
| **Product Name** | Rituals |
| **Platform** | iOS (primary), Android (secondary) |
| **Document Owner** | Product |
| **Last Updated** | March 2026 |
| **Target Launch** | Q4 2026 (MVP) |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Vision & Strategy](#3-vision--strategy)
4. [Target Users & Personas](#4-target-users--personas)
5. [Market Analysis](#5-market-analysis)
6. [Goals & Success Metrics](#6-goals--success-metrics)
7. [Assumptions & Constraints](#7-assumptions--constraints)
8. [User Journeys](#8-user-journeys)
9. [Feature Requirements — MVP](#9-feature-requirements--mvp)
10. [Feature Requirements — Post-MVP](#10-feature-requirements--post-mvp)
11. [Content Requirements](#11-content-requirements)
12. [Design & UX Requirements](#12-design--ux-requirements)
13. [Technical Requirements](#13-technical-requirements)
14. [Third-Party Integrations](#14-third-party-integrations)
15. [Monetization](#15-monetization)
16. [Notifications Strategy](#16-notifications-strategy)
17. [Accessibility Requirements](#17-accessibility-requirements)
18. [Localization & Internationalization](#18-localization--internationalization)
19. [Privacy & Data](#19-privacy--data)
20. [Risk Register](#20-risk-register)
21. [Launch Strategy](#21-launch-strategy)
22. [Open Questions](#22-open-questions)
23. [Appendix](#23-appendix)

---

## 1. Executive Summary

**Rituals** is a mobile application that introduces people to meaningful cultural practices from around the world and guides them through experiencing those practices in their own daily lives. The app launches with a curated collection of 10 cultural rituals — including Shinrin-yoku (Japanese forest bathing), Fika (Swedish coffee culture), Hygge (Danish coziness), and others — and grows into a living library of human tradition.

Each practice is presented as a full-sensory, editorially rich experience: a looping immersive video, a deep explanation of the cultural philosophy, a practical beginner's guide, nearby location discovery, and a community of fellow practitioners. Users can track their practice history, earn culturally authentic badges, maintain streaks, and share reflections.

Rituals is positioned at the intersection of **cultural education**, **wellness**, and **lived experience** — a category with no direct incumbent. It is not a meditation app. It is not a travel app. It is not a social network. It is a passport to the world's most beautiful ways of being human.

The app targets a premium segment of curious, internationally-minded adults aged 25–45 who are seeking more intentional ways of living but are skeptical of the clinical aesthetic and gamified anxiety of mainstream wellness apps. Rituals monetizes through a freemium subscription model at $5.99/month or $49.99/year, with a gifting feature as a secondary revenue stream.

The MVP launches with 10 practices, iOS only, targeting 50,000 downloads and 8,000 active subscribers within 6 months of launch.

---

## 2. Problem Statement

### 2.1 The Core Problem

Modern life is dominated by productivity culture, digital distraction, and a flattening of daily experience. People increasingly feel that their days are indistinguishable from one another — optimized for output but impoverished in meaning. The wellness industry has responded with apps that quantify sleep, count meditation minutes, and gamify hydration. These tools treat human flourishing as a performance metric.

At the same time, there is genuine, widespread hunger for slower, richer, more intentional ways of living. Millions of people have discovered the concept of hygge, read about forest bathing, or encountered the Japanese practice of wabi-sabi — but most never take the next step. The gap between cultural curiosity and lived experience is wide, and no product currently bridges it well.

### 2.2 Specific Pain Points

**For the curious but unguided:** People encounter beautiful cultural practices through travel, social media, or books but have no structured, trustworthy guide to actually incorporating them into daily life. "I read about forest bathing and thought it sounded wonderful, but I didn't know where to start or whether I was doing it right" is a representative sentiment.

**For the wellness-fatigued:** A growing cohort of users has churned from meditation apps, fitness trackers, and self-improvement platforms due to their clinical, performance-oriented aesthetic and the anxiety of streaks and metrics. These users want richness and permission, not optimization.

**For the culturally interested:** People who love to travel, learn languages, or engage with global culture have no way to bring that curiosity into their everyday domestic life. Cultural exploration is currently binary — you either go somewhere or you don't.

**For the disconnected:** Many of the world's most powerful cultural practices are fundamentally social — fika, sobremesa, passeggiata — but people have no way to discover or be inspired to pursue these shared experiences. Loneliness is a documented epidemic; these practices are ancient remedies.

### 2.3 What Currently Exists (and Falls Short)

| Existing Solution | Why It Falls Short |
|---|---|
| Headspace / Calm | Meditation-only, clinical aesthetic, no cultural context, performance-anxious |
| Pinterest / Instagram | Passive inspiration without actionable guidance or community |
| Travel blogs / YouTube | Fragmented, non-curated, no structured path to practice |
| Google/Wikipedia | Informational only, no practice guidance, no community, no experience layer |
| Culture Trips / Atlas Obscura | Content-focused, no practice guidance, no personal tracking |
| Duolingo | Language only; gamification is anxiety-inducing for this audience |

---

## 3. Vision & Strategy

### 3.1 Vision Statement

**Rituals** becomes the world's most trusted guide to living beautifully across cultures — a daily companion that makes the richness of human tradition accessible, experiential, and personal.

In five years, Rituals is the app that people describe not as a tool they use, but as a practice they keep — a trusted companion that has meaningfully changed how they move through the world, spend time with others, and notice their surroundings.

### 3.2 Strategic Positioning

Rituals operates in the intersection of three established markets without being owned by any of them:

```
         CULTURAL EDUCATION
                 ▲
                 │
                 │
    ─────────────●─────────────
                 │
    WELLNESS ────┼──── LIVED EXPERIENCE
                 │
```

This positioning is intentional and defensible. It allows Rituals to draw users from each adjacent category while being beholden to none of their conventions.

### 3.3 Strategic Pillars

**1. Curatorial Excellence**
Rituals will never compete on volume. Every practice in the library is selected for its depth, accessibility, and beauty. The bar for inclusion is high. The editorial voice is consistent, warm, and authoritative. Quality over quantity is a permanent strategic commitment.

**2. Sensory Immersion**
The in-app experience for each practice must feel as close to being there as a screen can allow. This means professional video, thoughtful photography, and writing that evokes atmosphere, not just information.

**3. Real-World Action**
Rituals is not a content consumption app. Every feature is designed to move users off the screen and into the world. The measure of success is not sessions or screen time — it is practices completed and real-world experiences had.

**4. Cultural Integrity**
Every practice is presented with depth, nuance, and respect for its origin culture. We do not flatten or appropriate. We celebrate complexity and context. We work with cultural advisors and community members to ensure authenticity.

**5. Community Without Noise**
The community layer is curated, reflective, and photo-forward. It is not a social feed optimized for engagement. It is a quiet record of beautiful moments that invites participation without demanding it.

### 3.4 Product Phases

| Phase | Timeline | Scope |
|---|---|---|
| **Phase 1: Foundation** | MVP — Q4 2026 | 10 practices, iOS, core discovery/experience/tracking loop |
| **Phase 2: Growth** | Q1–Q2 2027 | Android, 25 practices, social sharing, gifting, map integration |
| **Phase 3: Community** | Q3 2027 | User-generated reflections, collections, collaborative features |
| **Phase 4: Platform** | Q4 2027+ | API for travel/hospitality partners, seasonal content, global expansion |

---

## 4. Target Users & Personas

### 4.1 Primary Target Audience

**Age:** 25–45
**Markets:** United States, United Kingdom, Germany, Australia, Canada (English-first)
**Income:** Middle to upper-middle class (can afford discretionary subscription)
**Psychographic profile:**
- Curious and internationally minded; likely has traveled or aspires to
- Values depth over breadth in experiences
- Has some relationship with wellness but is skeptical of optimization culture
- Reads books; listens to podcasts with substance
- Prioritizes quality in daily life (good coffee, thoughtful spaces)
- Feels that modern life is too fast and too shallow

### 4.2 User Personas

---

#### Persona 1: "The Reflective Professional"
**Name:** Maya, 34
**Location:** London, UK
**Occupation:** Senior UX Designer at a tech company
**Income:** £75,000/year

**Context:** Maya works hard and loves her career but feels the pace of her days is relentless. She discovered hygge through a book during lockdown and started lighting candles in the evenings. She knows about forest bathing from a podcast but has never properly tried it. She follows several "slow living" accounts on Instagram but finds them either aspirational to the point of uselessness or overly commercial.

**Goals:**
- Bring more intention and beauty into ordinary days
- Find ways to genuinely disconnect from work without feeling guilty
- Discover new cultural ideas that enrich her worldview

**Frustrations:**
- Wellness apps feel like more things to optimize and track
- Most cultural content is informational, not practical
- She wants permission and guidance, not another streak to maintain

**How she uses Rituals:**
- Discovers Niksen during a Sunday browse; reads the Heart section over coffee
- Tries it that afternoon; writes a short reflection
- Comes back weekly; works through 3–4 practices over 2 months
- Gifts the annual subscription to her sister at Christmas

**Willingness to pay:** High — will pay for quality and beauty

---

#### Persona 2: "The Curious Parent"
**Name:** James, 41
**Location:** Portland, Oregon, USA
**Occupation:** High school history teacher
**Income:** $68,000/year

**Context:** James is deeply interested in world cultures — it's why he became a history teacher. He and his 9-year-old daughter do "culture nights" where they cook food from different countries. He has tried Headspace and Calm but found them too generic. He wants something that connects him to the world's diversity in a way he can actually experience, not just read about.

**Goals:**
- Experience cultural richness without traveling every year
- Find activities he can do with his daughter
- Build intentional habits that aren't about productivity

**Frustrations:**
- Most apps are designed for individuals, not pairs or small groups
- Wellness content feels disconnected from culture and history
- He knows a lot intellectually but wants to *do* things

**How he uses Rituals:**
- Discovers through a podcast recommendation
- Immediately drawn to the Heart tab — the depth of writing resonates
- Does Shinrin-yoku with his daughter on a Saturday
- Starts building toward the "Passport" badge collection

**Willingness to pay:** Medium — budget-conscious but values quality

---

#### Persona 3: "The Recovering Optimizer"
**Name:** Priya, 29
**Location:** Sydney, Australia
**Occupation:** Product Manager at a startup
**Income:** AUD $120,000/year

**Context:** Priya has every wellness app. She tracked her sleep, her steps, her meditation minutes. Then she burned out. She deleted everything and swore off quantified self-improvement. Six months later, she's looking for a way back to intentional living that isn't about numbers. She discovered Rituals through a design blog that featured its visual aesthetic.

**Goals:**
- Rebuild a relationship with intentional living without the anxiety of metrics
- Discover new ways of experiencing her own city
- Feel connected to something larger than her work

**Frustrations:**
- Streak mechanics in other apps create anxiety when broken
- Gamification feels manipulative rather than rewarding
- She wants beauty and meaning, not points

**How she uses Rituals:**
- Downloads based on aesthetic appeal alone
- Appreciates that Rituals doesn't push streaks aggressively
- Does the Passeggiata in her neighborhood three Sundays in a row
- Becomes an active community contributor — her photos are some of the best

**Willingness to pay:** High — will pay immediately if the product is premium

---

#### Persona 4: "The Gift Recipient"
**Name:** Tom, 52
**Location:** Edinburgh, Scotland
**Occupation:** Architect
**Income:** £90,000/year

**Context:** Tom received Rituals as a birthday gift from his daughter after she mentioned his love of Japanese design. He isn't an early adopter and wouldn't have downloaded it himself. But he's deeply interested in the philosophical and aesthetic dimensions of different cultures and finds the app's depth genuinely surprising.

**Goals:**
- Deepen his understanding of cultural philosophies he admires professionally
- Find structured ways to experience things he's read about
- Slow down in retirement — still 10 years away but thinking about it

**Frustrations:**
- Technology usually feels shallow to him
- Wellness apps feel targeted at people half his age
- He wants substance, not self-help

**How he uses Rituals:**
- Starts with Shinrin-yoku (forest walks already part of his life)
- Spends significant time reading the Heart sections
- Becomes a loyal, long-term subscriber after the gift period
- Introduces his wife; she starts her own account

**Willingness to pay:** High once converted via gift

---

### 4.3 Anti-Personas (Who Rituals is NOT for)

- **The Fitness Tracker:** Wants quantified health metrics, step counts, calorie tracking
- **The Content Consumer:** Wants to watch/read about culture but has no interest in doing it
- **The Social Networker:** Wants an audience for their content; wants followers and likes
- **The Hardcore Gamifier:** Wants points, leaderboards, competitive challenges
- **The Quick-Fix Seeker:** Wants rapid, measurable stress relief in under 5 minutes

---

## 5. Market Analysis

### 5.1 Market Size

**Total Addressable Market (TAM):** Global wellness app market — estimated at $6.4 billion in 2025, projected to reach $12.8 billion by 2030 (CAGR ~15%).

**Serviceable Addressable Market (SAM):** Mindfulness, cultural enrichment, and "slow living" subsegment — estimated 15–20% of wellness app market, approximately $960M–$1.28B in English-speaking markets.

**Serviceable Obtainable Market (SOM):** Given Rituals' premium positioning and niche, Year 1 realistic target is 0.05–0.1% of SAM = **$480K–$1.28M ARR** by end of Year 1.

### 5.2 Competitive Landscape

**Direct competitors:** None identified with this specific positioning. This is a genuine whitespace.

**Adjacent competitors:**

| App | Category | Monthly Users | Revenue Model | Key Weakness |
|---|---|---|---|---|
| Calm | Meditation/Sleep | 100M+ downloads | $14.99/mo | Clinical, no cultural dimension |
| Headspace | Meditation | 70M+ downloads | $12.99/mo | Productivity-adjacent |
| Insight Timer | Meditation | 25M users | Freemium | Poor UX, overwhelming content |
| Duolingo | Language/Culture | 500M+ downloads | Freemium | Language only, gamification anxiety |
| Atlas Obscura | Culture Discovery | — | Content/Travel | Passive, no practice layer |
| Clue / Daylio | Habit Tracking | 10M+ | Freemium | No cultural content |

### 5.3 Competitive Advantage

Rituals' sustainable competitive advantages are:

1. **Editorial moat:** The quality of writing, curation, and cultural content cannot be quickly replicated by a large platform
2. **Brand aesthetic:** The visual and tonal identity is distinctive and will become recognizable
3. **Cultural depth:** Partnering with cultural advisors and communities creates authenticity that commoditized apps cannot fake
4. **Community character:** A curated, reflective community has network effects that compound over time
5. **Category creation:** Being first in a category confers lasting brand association

### 5.4 Market Trends Supporting Rituals

- **Anti-hustle movement:** Growing cultural backlash against productivity optimization; "slow living" searches up 250% since 2020
- **Cultural curiosity post-pandemic:** International travel appetite surged; people want cultural richness even when not traveling
- **Wellness app fatigue:** Churn rates in meditation apps are high; users are seeking alternatives
- **Premium content willingness:** Consumers increasingly willing to pay for quality over free-but-shallow
- **Loneliness epidemic:** WHO declared loneliness a global health threat; apps that facilitate real-world social connection have tailwinds

---

## 6. Goals & Success Metrics

### 6.1 Business Goals (Year 1)

| Goal | Metric | Target |
|---|---|---|
| Establish user base | Total downloads | 50,000 |
| Prove willingness to pay | Paid subscribers | 8,000 |
| Validate retention | Monthly Active Users | 60% of total downloads |
| Revenue | ARR | $500,000 |
| App store presence | Average rating | ≥ 4.7 stars |

### 6.2 Product Goals (MVP)

| Goal | Metric | Target |
|---|---|---|
| Core loop completion | % users who complete ≥1 practice in first 7 days | ≥ 40% |
| Content engagement | Avg time on Heart tab per session | ≥ 90 seconds |
| Activation | % users who open ≥3 practices in first week | ≥ 30% |
| Conversion | Free → paid conversion rate | ≥ 18% |
| Retention D7 | Day 7 retention | ≥ 45% |
| Retention D30 | Day 30 retention | ≥ 28% |
| Retention M3 | 3-month subscriber retention | ≥ 70% |

### 6.3 User Outcome Goals

These are the metrics that indicate Rituals is actually achieving its mission:

| Outcome | Measurement Method |
|---|---|
| Users complete real-world practices | Practice completion logging |
| Users report feeling more intentional | In-app quarterly survey (NPS + open text) |
| Users introduce others to cultural practices | Referral tracking, gifting data |
| Users share experiences (photos/reflections) | Community tab contribution rate |
| Users build regular practice habits | Streak data, weekly return rate |

### 6.4 North Star Metric

**Practices Completed Per Active User Per Month (PCPAUM)**

This is the single metric that best captures whether Rituals is achieving its mission. A user who has completed 3 practices this month has left the screen, engaged with the world, and returned. This is the behavior we are optimizing for. Target: **≥ 2.5 PCPAUM** by Month 6.

### 6.5 Anti-Metrics (What We Will Not Optimize For)

Rituals will explicitly not optimize for:
- **Daily Active Users / DAU** — We do not want daily engagement at the expense of quality engagement
- **Session length** — Longer sessions mean more screen time; we want users in the world, not the app
- **Push notification open rates** — We will not sacrifice relationship quality for open rates
- **Streak anxiety** — We will not design mechanics that make users feel bad for missing a day

---

## 7. Assumptions & Constraints

### 7.1 Key Assumptions

| # | Assumption | Risk if Wrong | Validation Method |
|---|---|---|---|
| A1 | Users will complete real-world practices (not just consume content) | Low real-world action = low differentiation from content apps | Beta user interviews + D7 practice completion data |
| A2 | Users will pay $5.99/month for premium cultural content | Insufficient revenue to sustain | Pricing A/B test pre-launch |
| A3 | The "no aggressive gamification" positioning resonates | Users still want streaks/pressure | User research + churn reason surveys |
| A4 | Video heroes significantly improve practice page engagement | High video production costs are justified | A/B test video vs. static photo on practice pages |
| A5 | Gifting is a meaningful acquisition channel | CAC via gifting is unacceptable | Track gifted → retained conversion |
| A6 | 10 practices is sufficient for MVP; users won't feel limited | Users churn for lack of content | Monitor content library complaints in reviews |

### 7.2 Constraints

**Technical constraints:**
- Video content must be < 30MB per video for acceptable load times on mobile networks
- App must function with core features available offline (after initial content download)
- Location features require user permission and must gracefully degrade without it

**Content constraints:**
- Each new practice requires minimum 6–8 weeks of production (research, writing, video, QA)
- Cultural advisory review is required before publication of any new practice
- Community photos require moderation before public display

**Business constraints:**
- MVP team is small; no dedicated community management resource at launch
- iOS-first; Android launch delayed to Phase 2
- Marketing budget is limited; organic and PR-driven growth is the primary acquisition strategy for launch

**Legal constraints:**
- All video assets must be licensed for in-app commercial use
- Community-generated content requires clear terms of service and moderation policy
- Location data handling must comply with GDPR, CCPA, and App Store privacy requirements

---

## 8. User Journeys

### 8.1 First-Time User Journey (Onboarding → First Practice)

```
DISCOVERY
User sees Rituals in App Store or hears about it
        │
        ▼
DOWNLOAD & OPEN
App opens to a brief, beautiful onboarding:
  - 3 screens maximum
  - Each shows a practice + one-line description
  - Final screen: "What draws you right now?" (Restore / Connect)
        │
        ▼
HOME SCREEN (PERSONALIZED)
Feed opens, showing practices filtered to chosen mood
        │
        ▼
BROWSE
User scrolls cards, taps one (e.g., Shinrin-yoku)
        │
        ▼
PRACTICE SCREEN — HEART TAB
Lands on full-screen video hero
Reads philosophy text
Sees badge preview
        │
        ▼
TABS EXPLORATION
Navigates to Experience tab
Reads the 5 steps
Possibly checks Nearby tab
        │
        ▼
REAL-WORLD ACTION
Closes app. Goes to do the practice.
        │
        ▼
RETURN & COMPLETE
Returns to app. Taps "Begin [Practice Name]"
CTA transforms: badge earned confirmation
Prompted to write reflection + add photo
        │
        ▼
COMMUNITY CONTRIBUTION (optional)
Photo + reflection saved to personal journal
Option to share to community feed
        │
        ▼
HOME SCREEN RETURN
Card now shows ✓ completion indicator
Streak counter incremented
Prompted to explore next practice
```

### 8.2 Subscription Conversion Journey

```
FREE USER (3 practices unlocked)
User completes 2 free practices
Taps a locked practice (e.g., Sobremesa)
        │
        ▼
PAYWALL (gentle, beautiful)
"Unlock the full library"
Shows what they'll get: X practices, journal, map, community
Price clearly displayed
14-day free trial offered
        │
        ▼
TRIAL START
All features unlocked
No payment taken for 14 days
Reminder at Day 12: "Your trial ends in 2 days"
        │
        ▼
CONVERSION
User subscribes
Confirmation: "Your passport is now complete."
        │
        ▼
GIFTING PROMPT (at 30 days)
"Know someone who'd love this?"
Gift card purchase flow
```

### 8.3 Returning User Journey (Established Habit)

```
MONDAY MORNING
Push notification: "The Danes say Tuesday deserves candles too."
        │
        ▼
OPEN APP
Home screen shows practice suggestions based on:
  - Day of week
  - Time of day
  - Recent practice history
  - Season
        │
        ▼
QUICK RESUME
User returns to an in-progress practice
Or selects a new one from curated "For You" section
        │
        ▼
COMPLETE & REFLECT
Logs the practice
Adds a quick photo
        │
        ▼
CHECK COMMUNITY
Browses new community photos
Leaves a reaction on someone else's forest photo
        │
        ▼
EXITS
Total in-app time: 5–7 minutes
Real-world practice time: 30 minutes – 3 hours
```

---

## 9. Feature Requirements — MVP

### 9.1 Feature Priority Framework

All MVP features are classified as:
- **P0 — Must Have:** Launch is not possible without this
- **P1 — Should Have:** Significant user value; include if time permits
- **P2 — Nice to Have:** Backlog for Phase 2

---

### 9.2 Onboarding

**Priority: P0**

**Description:** A brief, high-quality first-run experience that introduces the app's concept, establishes tone, and personalizes the initial content feed.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| OB-01 | Maximum 3 onboarding screens before reaching home | P0 |
| OB-02 | Each screen features full-bleed photography of a practice | P0 |
| OB-03 | Final screen presents mood selector: "Restore" or "Connect" | P0 |
| OB-04 | Mood selection personalizes initial home screen filter | P0 |
| OB-05 | No account creation required to reach home screen | P0 |
| OB-06 | Account creation (email or Apple/Google Sign-In) offered but skippable | P1 |
| OB-07 | Skip option available on all onboarding screens | P0 |
| OB-08 | Onboarding does not replay after first completion | P0 |
| OB-09 | Optional: brief push notification permission request after onboarding | P1 |

**Acceptance Criteria:**
- New user can reach Home screen in ≤ 4 taps from app open
- 80% of users in beta reach the Home screen without abandoning onboarding
- Mood selection is reflected in initial Home screen filter state

---

### 9.3 Home Screen — Discovery Feed

**Priority: P0**

**Description:** The primary navigation surface. A scrollable feed of cultural practice cards with filtering capability.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| HM-01 | Display all available practices as vertically scrollable cards | P0 |
| HM-02 | Each card shows: practice name, translation, country + flag, tagline, mood tag, duration, completion count, completion status | P0 |
| HM-03 | Each card features a full-bleed background image | P0 |
| HM-04 | Filter chips at top allow filtering by mood category (All / Restore / Connect) | P0 |
| HM-05 | Completed practices show a visual completion indicator on their card | P0 |
| HM-06 | App name displayed in header with current streak count | P0 |
| HM-07 | Cards animate in with staggered fade-up on page load | P1 |
| HM-08 | Tapping any card navigates to that Practice Screen | P0 |
| HM-09 | Filter state persists within session | P1 |
| HM-10 | Locked practices (free tier) show a lock indicator on their card | P0 |
| HM-11 | Pull-to-refresh supported (for future content updates) | P1 |

**Acceptance Criteria:**
- All practices rendered and scrollable without performance issues on iPhone 12 or newer
- Filter transitions are smooth (< 200ms)
- Locked state is visually distinguishable but not punitive in feel

---

### 9.4 Practice Screen — Video Hero

**Priority: P0**

**Description:** The full-screen immersive experience that opens each practice. A looping video (or image fallback) with overlaid identity and navigation elements.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| VS-01 | Video plays automatically on practice screen open, looping | P0 |
| VS-02 | Video is muted by default | P0 |
| VS-03 | Video plays inline (no fullscreen on iOS) | P0 |
| VS-04 | Poster/thumbnail image displays immediately while video loads | P0 |
| VS-05 | Video fades in over poster on load completion | P0 |
| VS-06 | If video fails to load, poster image displays permanently with no error state shown | P0 |
| VS-07 | Hero section occupies 72% of screen height | P0 |
| VS-08 | Practice name, translation, and tagline overlaid on video | P0 |
| VS-09 | Country chip (flag + name) displayed in top-right | P0 |
| VS-10 | Back button in top-left returns to Home screen | P0 |
| VS-11 | Share button in top-right (sheet opens with share options) | P1 |
| VS-12 | Stats row at bottom of hero: completion count, difficulty, mood | P0 |
| VS-13 | "LIVE" indicator badge displayed when video is playing | P1 |
| VS-14 | Videos are downloaded/cached on WiFi for offline use | P1 |
| VS-15 | Video file size must not exceed 30MB; target < 20MB | P0 |
| VS-16 | Video resolution: minimum 1080p | P0 |
| VS-17 | Videos loop seamlessly (no visible cut on loop) | P0 |

**Acceptance Criteria:**
- Video begins playing within 2 seconds on LTE connection
- Poster image is visible within 500ms of screen open on any connection
- Zero instances of a blank/black screen visible to user
- Smooth loop with no perceptible stutter on iPhone 12 or newer

---

### 9.5 Practice Screen — Heart Tab

**Priority: P0**

**Description:** The first and default tab on a practice screen. Contains the cultural philosophy, badge preview, and origin callout.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| HT-01 | Section overline: "The Heart of [Practice Name]" in Cormorant SC | P0 |
| HT-02 | Philosophy text: 150–250 words, Cormorant Garamond, warm white on dark | P0 |
| HT-03 | Badge preview card showing: badge icon, native-language badge name, English translation, earn prompt | P0 |
| HT-04 | Cultural origin callout: left-bordered block with country + flag | P0 |
| HT-05 | Tab animates in with fadeUp on selection | P1 |
| HT-06 | Text is selectable (for copying/sharing quotes) | P1 |

**Acceptance Criteria:**
- Philosophy text is fully readable without scrolling on iPhone 14 Pro screen size
- Badge name renders correctly in non-Latin scripts (Japanese, Māori, etc.)

---

### 9.6 Practice Screen — Experience Tab

**Priority: P0**

**Description:** The practical guide to beginning a practice. Contains 5 steps and a post-practice journal prompt.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| EX-01 | Section overline: "Your Starting Guide" in Cormorant SC | P0 |
| EX-02 | Exactly 5 steps displayed as cards | P0 |
| EX-03 | Each step card contains: emoji icon, step title, step description, step number | P0 |
| EX-04 | Step cards animate in with staggered delay | P1 |
| EX-05 | Journal prompt block below steps with reflective question | P0 |
| EX-06 | Journal prompt contains tappable "Write a reflection + add photo" area | P0 |
| EX-07 | Tapping journal prompt opens the Reflection flow (see 9.9) | P0 |

**Acceptance Criteria:**
- All 5 steps visible in a single scroll on standard screen sizes
- Journal prompt is always visible below steps without being cut off

---

### 9.7 Practice Screen — Nearby Tab

**Priority: P1**

**Description:** Location-aware discovery of places relevant to the selected practice. Powered by Google Maps / Places API.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| NB-01 | Section overline: practice-specific label (e.g., "Find forests near you") | P0 |
| NB-02 | Map view showing nearby relevant locations as pins | P0 |
| NB-03 | Pin color uses practice's accentColor | P1 |
| NB-04 | List of 3 nearby locations below map: name, type, rating, distance/time | P0 |
| NB-05 | Tapping a location opens Google Maps (or Apple Maps) with directions | P0 |
| NB-06 | "Open in Maps" button on map view | P0 |
| NB-07 | Location permission requested on first Nearby tab view | P0 |
| NB-08 | If permission denied, show city-level results with prompt to enable location | P0 |
| NB-09 | Location type is practice-specific (see mapping table in Appendix A) | P0 |
| NB-10 | Results sorted by distance ascending | P0 |
| NB-11 | Show "X min walk / drive / bike" based on distance and practice type | P1 |

**Acceptance Criteria:**
- Map loads within 3 seconds on LTE
- At least 1 result returned for any urban area worldwide
- Graceful empty state if no results found: "No nearby [location type] found — try expanding your search"

---

### 9.8 Practice Screen — Community Tab

**Priority: P1**

**Description:** A curated feed of photos and reflections from other users who have completed this practice.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| CM-01 | Header showing total completion count for this practice | P0 |
| CM-02 | Display at least 3 community posts per practice at launch | P0 |
| CM-03 | Each post contains: photo, username (first name + last initial), location, timestamp, reflection text, badge earned | P0 |
| CM-04 | Reflection text displayed in italic Cormorant Garamond | P0 |
| CM-05 | "Share your [Practice Name] experience" CTA at bottom | P0 |
| CM-06 | Tapping CTA opens the Reflection flow (see 9.9) | P0 |
| CM-07 | Community posts are moderated before display (see 9.10) | P0 |
| CM-08 | Posts sorted by recency (newest first) | P0 |
| CM-09 | Tapping a post opens full-screen photo view | P1 |
| CM-10 | Reaction system: single emoji reaction to a post (not likes/counts) | P2 |

**Acceptance Criteria:**
- At minimum, curated/seeded posts are available for all 10 launch practices
- All user-submitted posts pass moderation before appearing
- Photos render within 1 second on LTE (lazy loading implemented)

---

### 9.9 Reflection Flow (Practice Completion)

**Priority: P0**

**Description:** The post-practice logging experience. Triggered by the primary CTA button or the journal prompt. Records completion, captures a reflection, and optionally photos.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| RF-01 | Triggered by tapping "Begin [Practice Name]" CTA | P0 |
| RF-02 | First screen: badge reveal animation with badge name + translation | P0 |
| RF-03 | Second screen: reflective prompt question (practice-specific, rotated) | P0 |
| RF-04 | Text input field for written reflection (max 500 characters) | P0 |
| RF-05 | Photo attachment: tap to open camera or photo library | P0 |
| RF-06 | Both reflection and photo are optional — user can skip | P0 |
| RF-07 | Completion is recorded to user's practice history regardless of reflection | P0 |
| RF-08 | Option to share reflection to community feed (opt-in, default off) | P0 |
| RF-09 | Confirmation screen: "Practice logged. You're building something beautiful." | P0 |
| RF-10 | Return to Practice screen (CTA now shows completed state) | P0 |
| RF-11 | Streak counter incremented on home screen | P0 |

**Acceptance Criteria:**
- Entire reflection flow completable in < 60 seconds
- Photo attachment uses native camera/library pickers
- Skip flow works at every step

---

### 9.10 Content Moderation

**Priority: P0**

**Description:** All user-generated content (reflections, photos) must be reviewed before appearing in the community feed.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| MOD-01 | All user-submitted photos undergo automated NSFW screening before reaching human review | P0 |
| MOD-02 | Approved content appears in community feed within 24 hours (manual review for MVP) | P0 |
| MOD-03 | Users can report community posts (flag button on each post) | P0 |
| MOD-04 | Reported content is hidden pending review within 1 hour of report | P0 |
| MOD-05 | Moderation dashboard accessible by admin team | P0 |
| MOD-06 | Users notified if their submission is rejected (generic reason, no details) | P1 |

---

### 9.11 User Profile & Practice History

**Priority: P0**

**Description:** A personal record of all practices completed, badges earned, and reflections written.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| PR-01 | Profile screen shows: display name, avatar, join date, practice count | P0 |
| PR-02 | Practice history: chronological list of all completions | P0 |
| PR-03 | Each history item shows: practice name, date, reflection snippet, photo thumbnail | P0 |
| PR-04 | Badges section: grid of all earned badges | P0 |
| PR-05 | Locked (unearned) badges shown greyed out | P1 |
| PR-06 | Tapping a history item opens full reflection | P1 |
| PR-07 | Streak count displayed prominently | P0 |
| PR-08 | Total practices completed displayed | P0 |
| PR-09 | Practices grouped by culture (Passport view) | P1 |

---

### 9.12 Subscription & Paywall

**Priority: P0**

**Description:** The freemium access model and subscription management.

**Requirements:**

| ID | Requirement | Priority |
|---|---|---|
| PAY-01 | Free tier: 3 practices unlocked, no community, no map, no reflections | P0 |
| PAY-02 | Paid tier: full library, all features | P0 |
| PAY-03 | 14-day free trial offered at paywall | P0 |
| PAY-04 | Monthly plan: $5.99/month | P0 |
| PAY-05 | Annual plan: $49.99/year (displayed as savings vs monthly) | P0 |
| PAY-06 | Paywall triggered on: tapping locked practice, tapping locked feature | P0 |
| PAY-07 | Paywall design matches app aesthetic — not a jarring modal | P0 |
| PAY-08 | Apple In-App Purchase (IAP) integration for iOS | P0 |
| PAY-09 | Subscription managed via native iOS subscription settings | P0 |
| PAY-10 | Trial reminder notification at Day 12 of trial | P0 |
| PAY-11 | Gift subscription purchase flow | P1 |
| PAY-12 | Gifting: purchaser sends gift code via iMessage/email; recipient redeems | P1 |

---

## 10. Feature Requirements — Post-MVP

### 10.1 Android App
**Target:** Phase 2 (Q1 2027)
Full feature parity with iOS MVP. React Native codebase enables faster Android deployment.

### 10.2 Expanded Practice Library
**Target:** Phase 2 — 25 practices total
- 15 new practices added in the 6 months post-launch
- Geographic diversity requirement: at least one practice per continent by 25-practice milestone
- New category added: "Wonder" (solitary, awe-oriented practices)

### 10.3 Seasonal & Time-Limited Practices
**Target:** Phase 2
- Practices that unlock at specific times of year (e.g., Hanami — Japanese cherry blossom viewing — available April only)
- Creates urgency and reason to return; editorial programming opportunity
- "Coming Soon" teasers for seasonal practices

### 10.4 Collections / Curated Bundles
**Target:** Phase 2
- Editorially curated multi-practice bundles (e.g., "A Week of Nordic Calm," "Japanese Aesthetics")
- Each collection has its own cover image, intro text, and progression
- Completing a full collection earns a special Collection Badge

### 10.5 Social Sharing (External)
**Target:** Phase 2
- Share practice completion cards to Instagram, WhatsApp, iMessage
- Branded card template per practice with badge, reflection snippet, and app branding
- Deep link back to app for recipient

### 10.6 Apple Watch Companion App
**Target:** Phase 2
- Minimal companion for: starting a practice (tap to begin timer), quick reflection post-practice, streak check
- Haptic prompts during timed practices (e.g., Niksen — gentle haptic at 10-minute mark)

### 10.7 Collaboration / Partner Practices
**Target:** Phase 3
- Partnership with cultural organizations, embassies, and tourism boards to co-create practices
- "Official" practices endorsed by cultural institutions (e.g., Japan National Tourism Organization for Shinrin-yoku)
- B2B licensing: sell Rituals content bundles to hotels, airlines, and wellness resorts

### 10.8 User-Generated Practice Submissions
**Target:** Phase 3
- Community members can submit cultural practices from their own heritage
- Editorial team reviews and publishes approved submissions
- Submitter credited on the practice page

### 10.9 Ritual Planner
**Target:** Phase 2
- Weekly "ritual intention" setting: user selects which practice(s) they intend to complete this week
- Gentle check-in notification mid-week
- Sunday summary: "You completed 2 of 3 practices this week"

### 10.10 Offline Mode
**Target:** Phase 2 (P1 for MVP)
- Download practices for offline use
- Video cached on WiFi
- All text content available offline by default
- Completions and reflections queued for sync when connection restored

---

## 11. Content Requirements

### 11.1 Launch Content: 10 Practices

The following 10 practices constitute the MVP content library:

| # | Practice | Culture | Mood | Status |
|---|---|---|---|---|
| 1 | Shinrin-yoku (Forest Bathing) | Japan | Restore | Designed |
| 2 | Fika | Sweden | Connect | Designed |
| 3 | Hygge | Denmark | Restore | Designed |
| 4 | Passeggiata | Italy | Connect | Designed |
| 5 | Niksen | Netherlands | Restore | Designed |
| 6 | Sobremesa | Spain / Latin America | Connect | Designed |
| 7 | Manaakitanga | Māori / New Zealand | Connect | Designed |
| 8 | Wabi-Sabi (TBD) | Japan | Restore | In research |
| 9 | Lagom (TBD) | Sweden | Restore | In research |
| 10 | Ubuntu (TBD) | Southern Africa | Connect | In research |

### 11.2 Content Specifications Per Practice

Each practice requires the following content assets:

| Asset | Specification | Owner |
|---|---|---|
| Practice name (native) | Accurate native-language name | Cultural advisor |
| Translation | English short phrase | Editorial |
| Tagline | < 10 words, poetic | Editorial |
| Heart text | 150–250 words, philosophy | Editorial + Cultural advisor |
| 5 Steps | Short imperative title + 1–2 sentence description each | Editorial |
| Badge name | Native language, culturally authentic | Cultural advisor |
| Badge translation | English meaning | Editorial |
| Reflective question | 1 practice-specific post-experience prompt (minimum 3 per practice, rotated) | Editorial |
| Video | 15–60 second seamless loop, 1080p minimum, ≤ 30MB | Video production |
| Video poster | 1920×1080 JPEG/WebP, ≤ 200KB | Video production |
| Community seed photos | 3 photos per practice, authentic, licensed | Photo research |
| Nearby location type | Location category for Google Places query | Product |

### 11.3 Content Quality Standards

- All Heart text must be reviewed by a cultural advisor from the practice's origin culture
- No stereotyping, exoticization, or surface-level treatment of any cultural practice
- Each practice acknowledges the cultural context and living relevance of the tradition
- Photography must be authentic documentary style — no stock imagery
- Video must not feature recognizable faces without model releases
- All copy reviewed by a copyeditor for tone consistency before publication

### 11.4 Content Governance

- **Content Lead:** Responsible for editorial calendar, quality standards, cultural advisor relationships
- **Cultural Advisory Network:** One advisor per culture represented; paid per-practice review fee
- **Review cycle:** All new practices require: Research → Draft → Cultural review → Editorial polish → Legal → QA → Publish
- **Content update cadence:** Heart text and steps may be updated based on community feedback; major updates require re-review

---

## 12. Design & UX Requirements

### 12.1 Design Principles

1. **Unhurried.** Every interaction should feel spacious. No rushed transitions, no cramped layouts, no aggressive CTAs.
2. **Earned beauty.** The design earns its elegance through restraint and precision, not decoration.
3. **World-informed.** Visual and typographic choices evoke a global, editorial sensibility.
4. **Permission-giving.** The app should make users feel that taking time for beauty is not just acceptable but important.
5. **Real-world oriented.** The best experience in the app is the one that sends the user into the world.

### 12.2 Visual Design Requirements

All design decisions are documented in the companion **Rituals Design System Context** document. Key requirements:

- **Dark-first:** All screens use near-black base (`#0f0f0f`, `#0a0a0a`)
- **Typography:** Three-font system — Cormorant Garamond (display), Cormorant SC (labels), DM Sans (UI)
- **Warm whites:** Primary text is `#f5f0e8`, not pure white
- **Accent theming:** Each practice has a unique two-token color accent that permeates its screen
- **No gradients on white:** All gradients are dark-to-transparent or color-to-transparent

### 12.3 UX Requirements

| ID | Requirement |
|---|---|
| UX-01 | No aggressive pop-ups, interstitials, or modal interruptions after onboarding |
| UX-02 | All primary actions reachable within 3 taps from Home |
| UX-03 | Back navigation always available and consistent |
| UX-04 | No bottom tab bar — navigation is contextual and minimal |
| UX-05 | Paywall presentation is non-jarring: same visual language as rest of app |
| UX-06 | Empty states are visually considered, not default OS patterns |
| UX-07 | Loading states use skeleton screens or immediate poster display, not spinners |
| UX-08 | Error states are friendly, clear, and provide a recovery action |
| UX-09 | All destructive actions (delete reflection, etc.) require confirmation |
| UX-10 | Haptic feedback on: practice completion, badge earn, CTA press |

### 12.4 Motion Design Requirements

- Page transitions: `slide-in-right` (300–400ms, ease)
- Content reveals: `fadeUp` with staggered delays (80–100ms per item)
- Tab switches: `fadeUp` on content (400ms)
- Video crossfade: 800ms opacity transition over poster
- Badge reveal: custom animation (to be designed — expansive, celebratory, not frenetic)
- All animations respect iOS "Reduce Motion" accessibility setting

---

## 13. Technical Requirements

### 13.1 Platform & Framework

| Requirement | Specification |
|---|---|
| Primary platform | iOS 16+ |
| Secondary platform | Android 12+ (Phase 2) |
| Framework | React Native (enables code reuse for Android) |
| State management | Redux Toolkit or Zustand |
| Navigation | React Navigation v6+ |
| Video playback | `react-native-video` |
| Animations | React Native Reanimated 3 |

### 13.2 Performance Requirements

| Metric | Target |
|---|---|
| App cold start time | < 2 seconds to interactive |
| Home screen render | < 1 second |
| Practice screen open | < 500ms (to poster image) |
| Video playback start | < 2 seconds on LTE |
| Tab switch | < 200ms |
| API response time (p95) | < 500ms |
| Crash-free sessions | > 99.5% |

### 13.3 Backend Requirements

| Component | Specification |
|---|---|
| API | REST or GraphQL; versioned (`/v1/`) |
| Authentication | Sign in with Apple, Google OAuth, email/password |
| Database | PostgreSQL (relational for user data, practices, completions) |
| Media storage | AWS S3 or Cloudflare R2 for video/image assets |
| CDN | Cloudflare or AWS CloudFront for media delivery |
| Video delivery | Adaptive bitrate streaming (HLS) preferred for large files |
| Push notifications | APNs (iOS), Firebase Cloud Messaging (Android Phase 2) |
| Analytics | Mixpanel or Amplitude for product analytics |
| Crash reporting | Sentry |
| App Store | Apple App Store Connect; RevenueCat for IAP management |

### 13.4 Data Model (High Level)

```
User
  ├── id, email, display_name, avatar_url
  ├── subscription_status, subscription_tier
  ├── created_at, streak_count
  └── mood_preference

Practice
  ├── id, name, translation, country, flag, tagline
  ├── mood, duration, difficulty
  ├── accent_color, accent_light
  ├── video_url, poster_url
  ├── heart_text
  ├── badge_name, badge_translation
  ├── completion_count
  └── is_premium (bool)

Step (belongs to Practice)
  ├── id, practice_id, order
  ├── icon, title, description

Completion (belongs to User + Practice)
  ├── id, user_id, practice_id
  ├── completed_at
  ├── reflection_text (nullable)
  └── photo_url (nullable)

CommunityPost (derived from approved Completions)
  ├── id, completion_id
  ├── is_approved, approved_at
  └── is_reported

Badge (belongs to Practice)
  ├── id, practice_id
  ├── name (native), translation
  └── icon_url

NearbyLocation (for Nearby tab, cached per practice per geohash)
  ├── id, practice_id, geohash
  ├── name, address, lat, lng
  ├── rating, place_type
  └── cached_at
```

### 13.5 Security Requirements

- All API endpoints require authentication (except public practice list)
- HTTPS enforced everywhere; no HTTP fallback
- User passwords hashed with bcrypt (min 12 rounds) or delegated to OAuth provider
- Personally identifiable information (PII) minimized: no location stored, no browsing tracked without consent
- Community photos scanned with AWS Rekognition or similar before storage
- Rate limiting on all write endpoints

### 13.6 Offline Capability

- Practice Heart text, steps, and step photos cached on first view
- Video cached on WiFi only (user-controllable in settings)
- Completions and reflections queued locally when offline, synced on reconnect
- Offline state communicated clearly; no silent failures

---

## 14. Third-Party Integrations

### 14.1 Google Maps / Places API

**Purpose:** Powering the Nearby tab with real location data

**Implementation:**
- Query type determined by practice (see Appendix A)
- Results cached per practice per geohash (6 characters ≈ 1.2km precision) for 7 days
- Fallback: show static "search manually" prompt if API unavailable

**Cost considerations:** Google Places API charges per request; caching aggressively reduces cost. Estimate: < $200/month at 10,000 MAU.

### 14.2 Apple Sign-In

**Purpose:** Frictionless account creation; required by App Store guidelines when social login is offered

**Implementation:** Sign in with Apple, returning user identifier, email (optional), display name

### 14.3 RevenueCat

**Purpose:** In-app subscription management, receipt validation, and entitlement management

**Implementation:** Manages both monthly and annual plans; gift subscription codes; webhook for subscription events

### 14.4 APNs (Apple Push Notification Service)

**Purpose:** Delivering push notifications for reminders, practice suggestions, trial expiry

**Implementation:** Via Firebase Cloud Messaging (cross-platform) or direct APNs integration

### 14.5 AWS Rekognition (or equivalent)

**Purpose:** Automated NSFW screening of community-submitted photos before human review

### 14.6 Analytics Platform (Mixpanel / Amplitude)

**Purpose:** Product analytics for funnel tracking, feature adoption, retention cohorts

**Events to track:**
- `app_open`, `onboarding_completed`, `mood_selected`
- `practice_opened`, `practice_tab_viewed` (with tab name), `practice_completed`
- `reflection_started`, `reflection_submitted`, `photo_added`
- `paywall_shown`, `trial_started`, `subscription_purchased`
- `community_post_viewed`, `community_post_submitted`
- `nearby_tab_opened`, `location_tapped`

---

## 15. Monetization

### 15.1 Pricing Strategy

Rituals uses a **freemium model with a hard content gate** rather than a feature gate. Free users can fully experience 3 practices (complete them, log reflections, see community). This gives genuine value and trust before asking for payment.

| Tier | Price | Access |
|---|---|---|
| Free | $0 | 3 practices (fixed); no community; no nearby; no journal |
| Rituals+ Monthly | $5.99/month | Full library, all features |
| Rituals+ Annual | $49.99/year ($4.17/mo) | Full library, all features; 30% saving |
| Gift (1 year) | $49.99 one-time | Full Rituals+ annual access for a recipient |

**Pricing rationale:**
- $5.99/month is positioned below Calm ($14.99) and Headspace ($12.99), accessible to a wider audience
- Annual plan creates LTV certainty and reduces churn
- Gifting is priced at annual to maximize per-transaction revenue and LTV of gift recipients

### 15.2 Free Tier Design

The 3 free practices are selected to represent the breadth and quality of the library:
- 1 "Restore" practice (e.g., Shinrin-yoku)
- 1 "Connect" practice (e.g., Fika)
- 1 wildcard (e.g., Niksen)

Free users see all practices on the Home screen with a visible lock on premium ones. The lock should feel like an invitation, not a wall.

### 15.3 Paywall Presentation

The paywall is triggered when a free user:
- Taps a locked practice card
- Taps the Community or Nearby tab (if locked)
- Attempts to write a reflection (if locked)

**Paywall design principles:**
- Uses the same visual language as the rest of the app (dark, beautiful, unhurried)
- Leads with value ("Unlock 10 practices from 7 cultures") not fear
- Displays 14-day free trial prominently
- Does not use urgency mechanics (no countdown timers, no "limited offer")
- Annual plan displayed as default selection (with monthly as secondary)

### 15.4 Gifting Flow

1. User taps "Gift Rituals" (accessible from Profile screen and share sheet)
2. Selects delivery method: iMessage, email, or copy code
3. Optionally writes a personal message
4. Purchases via Apple IAP
5. Recipient receives message with redeem link
6. Redeem link deep-links to app (or App Store if not installed)
7. 1 year of Rituals+ activated on account creation or existing account

**Gifting is a strategic growth driver:** The app's aesthetic and concept make it ideal as a gift. Gifting acquisition has significantly lower CAC than paid advertising and higher conversion to long-term subscriber.

### 15.5 Future Revenue Streams (Post-MVP)

- **B2B Licensing:** Hotel in-room wellness programs, airline entertainment, spa experiences
- **Sponsored Practices:** Tourism boards co-funding practices about their culture (clearly labeled)
- **Physical Goods:** Curated starter kits (e.g., a Fika kit with coffee and a kanelbullar recipe card) sold at low margin for brand extension
- **Enterprise/Workplace Wellness:** Team subscriptions sold to progressive companies

---

## 16. Notifications Strategy

### 16.1 Philosophy

Rituals notifications should feel like a thoughtful friend nudging you toward something beautiful — not a system demanding your engagement. We will err heavily on the side of fewer, more meaningful notifications.

**Principles:**
- Never more than 1 notification per day
- Notifications are opt-in after onboarding (not pre-checked)
- All notification copy uses the brand voice: evocative, not imperative
- Users can configure frequency and type in Settings
- No "You haven't opened the app in X days" shame notifications

### 16.2 Notification Types

| Type | Trigger | Timing | Example Copy |
|---|---|---|---|
| Practice suggestion | Weekly (user-configured) | User-set time | "The forest is quieter on weekday mornings. Today might be the day." |
| Seasonal practice | Seasonal unlock | Morning of availability | "Cherry blossom season has begun. Hanami is now available." |
| Trial ending | 2 days before trial expires | 10am local | "Your Rituals trial ends in 2 days. Continue the practice." |
| Streak milestone | On completing a milestone (5, 10, 25…) | Immediate post-completion | "Five practices completed. You're becoming someone who does this." |
| Community activity | Someone reacts to your post | Batched daily (not immediate) | "Someone in Oslo connected with your forest photo." |
| Re-engagement | 14 days of inactivity | 10am local | "The Dutch say doing nothing is productive. You haven't tried Niksen yet." |

### 16.3 Notification Copy Standards

All notification copy must:
- Reference the specific practice, culture, or user action where possible
- Never use urgency language ("Act now," "Don't miss out")
- Be writeable in < 140 characters including title
- Feel like it could have been written by a thoughtful human, not an algorithm

---

## 17. Accessibility Requirements

### 17.1 Standards Compliance

Rituals targets **WCAG 2.1 Level AA** compliance on launch.

### 17.2 Specific Requirements

| ID | Requirement |
|---|---|
| ACC-01 | All text meets minimum 4.5:1 contrast ratio against backgrounds |
| ACC-02 | All interactive elements have minimum 44×44pt tap target |
| ACC-03 | VoiceOver support: all images have descriptive alt text |
| ACC-04 | VoiceOver support: all interactive elements have accessible labels |
| ACC-05 | Dynamic Type supported: all text scales with iOS system font size settings |
| ACC-06 | Reduce Motion: all non-essential animations disabled when Reduce Motion is on |
| ACC-07 | Videos are muted by default; audio description track available for Phase 2 |
| ACC-08 | No information conveyed by color alone |
| ACC-09 | Focus management: keyboard/VoiceOver navigation follows logical visual order |
| ACC-10 | Community photos have automatic alt-text generation (AI-assisted for Phase 2) |

---

## 18. Localization & Internationalization

### 18.1 MVP Language Support

**Launch language:** English (US and UK variants for copy)

**Phase 2 languages (priority order):**
1. German (large wellness-oriented market; Munich location context)
2. French
3. Spanish
4. Japanese (culturally significant given Shinrin-yoku and Wabi-Sabi content)

### 18.2 Localization Architecture

- All user-facing strings externalized to locale files from day one (no hard-coded English strings)
- Date/time formatting: use device locale
- Currency: display in user's local currency via App Store pricing tiers
- Measurements: distance shown in km or miles based on device locale

### 18.3 Cultural Sensitivity in Localization

- Practice names remain in their original language in all locales (e.g., "Shinrin-yoku" is never translated)
- Translations are cultural adaptations, not word-for-word — each locale reviewed by a native speaker
- Badge names in native scripts are preserved across all locales

---

## 19. Privacy & Data

### 19.1 Data Collection Principles

Rituals collects the minimum data necessary to provide the service. We do not sell user data. We do not target ads. We do not build behavioral profiles for third-party use.

### 19.2 Data Collected

| Data Type | Purpose | Storage | Retention |
|---|---|---|---|
| Email address | Account authentication | Encrypted at rest | Until account deletion |
| Display name | Profile display | Encrypted at rest | Until account deletion |
| Practice completions | History, streak, analytics | Pseudonymized | Until account deletion |
| Reflection text | Personal journal | Encrypted at rest | Until user deletes or account deleted |
| Community photos | Community feed | CDN storage | Until user deletes or account deleted |
| Subscription status | Feature access | Via RevenueCat | Until subscription ends + 30 days |
| Approximate location | Nearby tab results | Never stored; used in real-time only | Not retained |
| Device analytics | Crash reporting, performance | Sentry (anonymized) | 90 days |
| Usage analytics | Product improvement | Mixpanel (pseudonymized) | 12 months |

### 19.3 Compliance Requirements

- **GDPR:** Full compliance required at launch (EU users in scope). Includes: privacy policy, right to access, right to deletion, data processing agreements with all third parties.
- **CCPA:** Required for California users. Includes: do not sell/share opt-out mechanism.
- **App Store Privacy Nutrition Label:** Accurate and up-to-date.
- **Children's Privacy:** App is rated 12+. No intentional data collection from users under 13. COPPA compliance required.

### 19.4 Data Deletion

- Users can request account deletion from Profile > Settings
- All PII deleted within 30 days of request
- Anonymized aggregate data (completion counts, etc.) may be retained
- Community posts deleted immediately on account deletion request

---

## 20. Risk Register

| ID | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R1 | **Cultural misrepresentation** — a practice is presented in a way that offends the origin community | Medium | High | Cultural advisory review for every practice; clear process for community-reported concerns |
| R2 | **Content production bottleneck** — video/editorial production can't keep up with content roadmap | High | Medium | Build production pipeline early; pre-produce 3 practices before launch; establish relationships with video production partners |
| R3 | **Low real-world action rate** — users consume content but don't complete practices | Medium | High | A/B test design variations that reduce friction to action; revise onboarding to set action expectation |
| R4 | **Paywall conversion too low** — free tier is too generous; users don't convert | Medium | High | A/B test free practice count (3 vs. 2); review paywall copy and design; add trial conversion email sequence |
| R5 | **Video load time issues** — poor mobile performance damages first experience | Low | High | Compress aggressively; use adaptive streaming; comprehensive performance testing on various network conditions |
| R6 | **Community content quality** — early community feed has insufficient quality/volume | High | Medium | Seed with high-quality curated content; invite beta users to contribute before launch |
| R7 | **Competitor launches similar product** — large wellness platform replicates concept | Low | Medium | Accelerate content library growth; deepen cultural authenticity; build community moat |
| R8 | **App Store rejection** — video content or cultural content flagged by review | Low | High | Review App Store guidelines thoroughly; test build submission with placeholder content |
| R9 | **Location permission refusal** — users don't grant location; Nearby tab useless | Medium | Low | Graceful city-level fallback; Nearby tab is P1, not P0; minimal impact on core loop |
| R10 | **Subscription pricing resistance** — $5.99/month is perceived as too high for content | Low | High | 14-day trial is critical; ensure free tier delivers genuine value before paywall |

---

## 21. Launch Strategy

### 21.1 Pre-Launch (T-90 to T-0)

| Timeline | Activity |
|---|---|
| T-90 | Beta recruitment: 200 users via waitlist (design/culture/slow-living communities) |
| T-75 | Closed beta launch; feedback collection on core loop |
| T-60 | Community seeding: curate first 30 community posts across all 10 practices |
| T-45 | App Store assets finalized: screenshots, preview video, description |
| T-30 | Press outreach: design/culture/lifestyle media; podcast appearances |
| T-14 | App Store submission |
| T-7 | App Store approval expected; prepare launch communications |
| T-0 | Launch day |

### 21.2 Launch Day Activities

- Press release distributed to design, culture, and wellness media
- Launch email to waitlist
- Social media (Instagram + Twitter/X) — visual-first content
- Product Hunt launch (day 1 only; drive votes)
- Founder-written essay: "Why the world's most beautiful habits are disappearing" (Medium / Substack)

### 21.3 Growth Strategy (Month 1–6)

**Organic channels (primary):**
- Word of mouth: product quality drives organic sharing
- Gifting: each gift is a new user acquisition
- Press and podcast: cultural/design media has high overlap with target user
- App Store optimization (ASO): rank for "cultural wellness," "slow living," "mindfulness"

**Paid channels (limited, selective):**
- No performance marketing in Month 1 (protect brand perception)
- Test Instagram and Pinterest starting Month 2 with visual creative
- Maximum CAC target: $8 (vs. expected LTV of $60+ for annual subscribers)

### 21.4 Success Milestones

| Milestone | Target Date |
|---|---|
| 1,000 downloads | Launch week |
| 10,000 downloads | Month 1 |
| 1,000 paid subscribers | Month 2 |
| 4.7+ App Store rating | Month 2 |
| 50,000 downloads | Month 6 |
| 8,000 paid subscribers | Month 6 |
| Android launch | Month 7 |

---

## 22. Open Questions

The following questions require resolution before or during development:

| # | Question | Owner | Priority | Target Resolution |
|---|---|---|---|---|
| OQ-01 | Should the free tier be gated by practice count (3) or by time (7-day trial)? | Product | High | Pre-launch A/B test |
| OQ-02 | Should streaks be tracked by day (calendar) or by week? Weekly streaks are lower-anxiety but less engaging. | Product | Medium | User research |
| OQ-03 | What is the right level of community moderation — manual review vs. automated with post-hoc moderation? | Product + Engineering | High | Before community launch |
| OQ-04 | Should the app have a bottom navigation bar in future versions, or maintain the current contextual navigation model? | Design | Medium | Phase 2 design exploration |
| OQ-05 | How do we handle practices that are only possible in certain geographies (e.g., a practice requiring a specific landscape)? | Content + Product | Medium | Phase 2 |
| OQ-06 | Should the community feed be practice-specific only, or should there be a global "all practices" feed? | Product | Medium | Phase 2 decision |
| OQ-07 | What is the right video length for the hero — 15s, 30s, or 60s? Longer is more immersive but heavier. | Design + Engineering | High | Beta testing |
| OQ-08 | Should badge names always be in the native language, or should non-Latin scripts be romanized for accessibility? | Content + Accessibility | Medium | Cultural advisor input |
| OQ-09 | Can we secure a formal partnership with a cultural institution (e.g., Japan National Tourism Organization) before launch? | Business Development | Low | Aspirational pre-launch |
| OQ-10 | Should Rituals have a web version (Progressive Web App) for Android and desktop users before native Android launches? | Engineering | Medium | Phase 2 planning |

---

## 23. Appendix

### Appendix A: Practice → Location Type Mapping (Nearby Tab)

| Practice | Google Places Type(s) | Search Query |
|---|---|---|
| Shinrin-yoku | `park`, `natural_feature` | forests, nature reserves, woodland parks |
| Fika | `cafe` | independent coffee shops, cafés |
| Hygge | `home_goods_store`, `cafe` | cozy home stores, candle shops, tea rooms |
| Passeggiata | `route` | walkable streets, pedestrian zones, promenades |
| Niksen | `park`, `point_of_interest` | quiet parks, benches, reading gardens |
| Sobremesa | `restaurant` | restaurants with outdoor seating, tavernas |
| Manaakitanga | `community_center`, `cultural_center` | community centers, cultural venues |
| Wabi-Sabi (future) | `museum`, `garden` | Japanese gardens, ceramics studios |
| Lagom (future) | `park`, `gym` | parks, community sports facilities |
| Ubuntu (future) | `community_center` | community centers, markets |

### Appendix B: Reflective Question Bank (Sample)

Each practice has a rotating bank of post-completion reflective questions. Sample questions:

**Shinrin-yoku:**
- "What did you notice that you usually walk past?"
- "Where in your body did you feel the most change?"
- "What sound surprised you?"

**Fika:**
- "What did you learn about your companion that you didn't know before?"
- "At what point did you forget about time?"
- "What would you have missed if you'd stayed at your desk?"

**Niksen:**
- "Where did your mind go when you stopped directing it?"
- "What felt uncomfortable about doing nothing? What did that tell you?"
- "What did you notice in the room/window that you'd never seen before?"

### Appendix C: Cultural Advisory Framework

Each cultural practice requires review by a cultural advisor meeting the following criteria:
- Born or raised in the culture of origin, OR academic/professional expertise in the culture
- Native speaker of the primary language of origin
- Paid per-practice fee (suggested: $500–$1,000 per practice review)
- Credited in-app as "Cultural Advisor" (optional — advisor's choice)
- Available for revision rounds within 5 business days

**Review checklist:**
- [ ] Accuracy of cultural context and historical claims
- [ ] Appropriateness of tone (respectful, not exoticizing)
- [ ] Authenticity of badge name and translation
- [ ] Step accuracy (does this reflect how the practice is actually done?)
- [ ] No cultural stereotyping or reduction
- [ ] Video and photography feel authentic (not touristy)

### Appendix D: Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| v0.1 | Feb 2026 | Product | Initial draft |
| v1.0 | Mar 2026 | Product | Full PRD with all 23 sections; MVP feature set locked |

---

*This document is a living product specification. It should be reviewed and updated at the start of each development sprint. Major changes require sign-off from Product, Engineering, and Design leads.*

*For questions, contact the Product team.*
