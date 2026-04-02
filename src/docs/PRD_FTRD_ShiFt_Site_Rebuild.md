# ShiFt NeuralOS™ — Full Site Rebuild PRD + FTRD
**Version:** 1.0  
**Date:** 2026-04-02  
**Author:** ShiFt NeuralOS Platform Team  
**Stack:** React 18 · Vite · Tailwind CSS · TypeScript/JSX · React Router v6

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Design System & Tokens](#2-design-system--tokens)
3. [Typography](#3-typography)
4. [Layout & Navigation Architecture](#4-layout--navigation-architecture)
5. [Global Components](#5-global-components)
6. [Route Map](#6-route-map)
7. [Page-by-Page Requirements](#7-page-by-page-requirements)
8. [Shared Section Components](#8-shared-section-components)
9. [Interactive Tools & Calculators](#9-interactive-tools--calculators)
10. [Backend Functions](#10-backend-functions)
11. [SEO & Meta Requirements](#11-seo--meta-requirements)
12. [Performance Requirements](#12-performance-requirements)
13. [Accessibility Requirements](#13-accessibility-requirements)

---

## 1. PROJECT OVERVIEW

### 1.1 What Is Being Built
A multi-product SaaS marketing site for **ShiFt NeuralOS™** — an AI Revenue Operating System built exclusively for roofing contractors. The site markets two products:

| Product | Subdomain/Path | Primary Color |
|---|---|---|
| ShiFt NeuralOS (Brand) | shiftnow.io | Gold `#FFD700` |
| ShiFt Convert | shiftnow.io/Home | Coral `#F54A48` |
| ShiFt Attract | shiftnow.io/AttractHome | Orange `#FA982F` |

### 1.2 Tech Stack
```
Frontend:     React 18 + Vite
Routing:      React Router v6 (BrowserRouter)
Styling:      Tailwind CSS + CSS custom properties
Animations:   Framer Motion
Charts:       Recharts
Fonts:        Google Fonts (Montserrat Alternates, JetBrains Mono, DM Sans)
Icons:        Lucide React
```

### 1.3 File Structure
```
src/
├── pages/          # One file per route
├── components/
│   ├── landing/    # Navbar, Footer, Hero, CTA, SocialProof
│   ├── brand/      # BrandNavbar, BrandHero, ProblemSelector, TwoProducts
│   ├── attract/    # AttractNavbar, AttractHero, AttractSolution, etc.
│   ├── home/       # HeroNew, ProblemCards, Mechanism, etc.
│   ├── revenue/    # RevenueLeakCalculator
│   ├── onboarding/ # Step components
│   ├── billing/    # CustomerPortal sub-components
│   ├── leads/      # LeadManagement, RevenueReport
│   ├── shared/     # SectionWrapper, GradientButton, GlassCard
│   └── ui/         # shadcn/ui components
├── lib/            # AuthContext, utils, query-client, NavigationTracker
├── hooks/          # useRetellCall, use-mobile
├── functions/      # Deno backend functions
├── docs/           # PRD, FTRD, build docs
├── public/         # sitemap.xml, robots.txt, manifest.json
├── App.jsx         # Router + AuthProvider
├── layout.jsx      # Global layout wrapper
├── index.html      # HTML shell + schema + GA
└── index.css       # Tailwind + CSS vars
```

---

## 2. DESIGN SYSTEM & TOKENS

### 2.1 Color Palette
```css
:root {
  --shift-navy-deep:  #070820;   /* page background */
  --shift-navy-core:  #0D0F33;   /* section alternate bg */
  --shift-coral:      #F54A48;   /* Convert primary */
  --shift-orange:     #FA982F;   /* Attract primary */
  --shift-gold:       #FFD700;   /* Brand / DOMINATE tier */
  --shift-green:      #48BB78;   /* success / booked */
  --shift-blue:       #63B3ED;   /* info / integrations */
  --shift-gray:       #6B7C93;   /* muted text */
  --shift-glass:      rgba(255,255,255,0.04);
  --shift-glass-border: rgba(255,255,255,0.08);
  --shift-gradient:   linear-gradient(135deg, #F54A48, #FA982F);
}
```

### 2.2 Gradient Usage
| Use Case | Value |
|---|---|
| Primary CTA buttons | `linear-gradient(135deg, #F54A48, #FA982F)` |
| Attract CTAs | `linear-gradient(135deg, #FA982F, #F54A48)` |
| DOMINATE tier | `linear-gradient(90deg, #FA982F, #FFD700)` |
| Gradient text | Apply via `-webkit-background-clip: text` |
| Hero radial glow | `radial-gradient(ellipse at 50% 30%, rgba(245,74,72,0.12), transparent 60%)` |

### 2.3 Glass Card Style
```css
.glass-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.glass-card:hover {
  transform: translateY(-4px);
  border-color: rgba(245,74,72,0.25);
}
```

### 2.4 Body Background
All pages use `background: #070820` with alternate sections using `background: #0D0F33`.

---

## 3. TYPOGRAPHY

### 3.1 Font Import
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat+Alternates:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### 3.2 Font Roles
| Class | Font | Use |
|---|---|---|
| `.font-display` | Montserrat Alternates | Headlines, brand name, card titles |
| `.font-mono` | JetBrains Mono | Labels, badges, stats, CTAs, uppercase tags |
| `.font-body` / body default | DM Sans | Body copy, descriptions, paragraphs |

### 3.3 Type Scale (key sizes)
| Element | Size | Weight |
|---|---|---|
| Hero H1 | `clamp(2.5rem, 7vw, 4.5rem)` | 900 |
| Section H2 | `clamp(2rem, 4vw, 3.5rem)` | 800 |
| Card H3 | `1.25rem` | 700 |
| Body | `0.9375rem–1.125rem` | 400 |
| Mono label | `0.7rem–0.75rem` | 700, UPPERCASE, `letter-spacing: 0.15–0.2em` |

---

## 4. LAYOUT & NAVIGATION ARCHITECTURE

### 4.1 Layout Wrapper (`layout.jsx`)
All pages render inside a single layout wrapper that:
1. Injects `<script type="application/ld+json">` schema per page type
2. Renders the correct **Navbar** based on `currentPageName`
3. Renders `{children}`
4. Renders `<Footer>`

**Navbar selection logic:**
```js
const isBrandPage = ['BrandHome','About','Platform','Roofing','Resources','Contact','Careers'].includes(currentPageName);
const isAttractPage = ['AttractHome','AttractHowItWorks','AttractEmptyPipeline','AttractResults','AttractPricing','AttractBook'].includes(currentPageName);
// else: Convert Navbar
```

**Footer dot color:**
- Attract pages → `#FFD700`
- Brand pages → `#FFD700`
- Convert pages → `#F54A48`

### 4.2 Three Navbar Variants

#### A. Convert Navbar (`components/landing/Navbar.jsx`)
- Logo: `ShiFt.` (dot = gradient text) + badge `Convert` (coral)
- Links: How It Works · Revenue Leaks · Results · Dashboard Preview · Revenue Engine Plans
- Right: Product pills (Attract | **Convert** active) + CTA `See My ROI`
- CTA routes to `/ROICalculator`

#### B. Attract Navbar (`components/attract/AttractNavbar.jsx`)
- Logo: `ShiFt.` + badge `Attract` (orange)
- Links: How It Works · Empty Pipeline · Results · Demo · Revenue Engine Plans
- Right: Product pills (**Attract** active | Convert) + CTA `See My ROI` (orange gradient)

#### C. NeuralOS Navbar (`components/brand/BrandNavbar.jsx`)
- Logo: `ShiFt. NeuralOS™` (NeuralOS in gradient text)
- Links: Platform · Roofing · Demo · Revenue Engine Plans
- Right: Product pills (Attract | Convert) + CTA `Find Your Gap`
- CTA routes to `/Calculator`

**All Navbars share:**
- Fixed position, height 72px
- `background: rgba(7,8,32,0.92)`, `backdrop-filter: blur(20px)`
- Scrolled class adds `box-shadow: 0 4px 24px rgba(0,0,0,0.4)`
- Mobile hamburger menu with full-screen dropdown
- JS: `window.addEventListener('scroll', ...)` to toggle `.scrolled`

### 4.3 Product Pills Component
```jsx
// Two pills side-by-side in a pill container
<div className="product-pills-container">
  <a href="/AttractHome" className={`pill ${isAttract ? 'active' : ''}`}>
    <span className="dot" /> Attract
  </a>
  <a href="/Home" className={`pill ${isConvert ? 'active' : ''}`}>
    <span className="dot" /> Convert
  </a>
</div>
```
Active pill: gradient border + coral/orange dot with glow.

---

## 5. GLOBAL COMPONENTS

### 5.1 Footer (`components/landing/Footer.jsx`)
**Columns:** Brand | Product | Company | Legal

**Brand column content:**
- Logo: `ShiFt.` (dot = `dotColor` prop)
- Tagline: "The AI Revenue Operating System for roofing contractors."
- `<address>` tag with:
  - Phone: `(707) 744-3866` → `tel:+17077443866`
  - Address: 12460 Crabapple Rd, Ste. 202-522, Alpharetta, GA 30004
- Facebook icon link: `https://www.facebook.com/ShiFtAlwaysOn`

**Product links:** Features · Revenue Engine Plans · Integrations · Case Studies  
**Company links:** About · Careers · Blog · Contact  
**Legal links:** Privacy Policy · Terms of Service · Cookie Policy

**Bottom bar:** `© {year} ShiFt NeuralOS™. All rights reserved.` + `AI Revenue Operating System`

### 5.2 CTA Section (`components/landing/CTA.jsx`)
Reusable final CTA with:
- Radial gradient glow behind
- H2: "Ready to **ShiFt** Your Revenue?" (gradient on "ShiFt")
- Body copy about free revenue audit
- Two buttons: `Start Free Audit →` (primary) + `Talk to Sales` (outline → Calendly)
- Footer note: "Setup in 48 hours · No long-term contracts · Cancel anytime"

### 5.3 Social Proof (`components/landing/SocialProof.jsx`)
Three testimonial glass cards:
1. Marcus Johnson — Apex Roofing Co.
2. Sarah Chen — Summit Storm Solutions
3. David Martinez — Eagle Eye Roofing

Each card: ★★★★★ (orange) · Quote · Avatar initial circle (gradient) · Name + Company

### 5.4 SectionWrapper (`components/shared/SectionWrapper.jsx`)
```jsx
<section id={id} aria-label={ariaLabel} className={`relative w-full px-5 sm:px-6 md:px-8 py-20 md:py-28 lg:py-32 ${className}`}>
  <div className="relative max-w-[1140px] mx-auto">
    {children}
  </div>
</section>
```

### 5.5 GradientButton (`components/shared/GradientButton.jsx`)
```jsx
// Props: children, onClick, href, size (sm/default/lg), variant (primary/outline)
// Uses framer-motion whileHover/whileTap scale
// Internal links: react-router <Link>
// External links: <a>
// Button: <button>
```

### 5.6 Call Widget (`components/ui/callwidget.jsx`)
Fixed-position floating button (bottom-right). Uses `useRetellCall` hook. Shows AI voice call interface with status indicators.

---

## 6. ROUTE MAP

```jsx
// App.jsx routes
<Route path="/" element={<Navigate to="/Home" replace />} />

// Brand / NeuralOS
<Route path="/BrandHome"   element={<BrandHome />} />
<Route path="/Platform"    element={<Platform />} />
<Route path="/Roofing"     element={<Roofing />} />
<Route path="/About"       element={<About />} />
<Route path="/Careers"     element={<Careers />} />
<Route path="/Contact"     element={<Contact />} />
<Route path="/Resources"   element={<Resources />} />

// ShiFt Convert
<Route path="/Home"              element={<Home />} />
<Route path="/HowItWorks"        element={<HowItWorks />} />
<Route path="/RevenueLeaks"      element={<RevenueLeaks />} />
<Route path="/Results"           element={<Results />} />
<Route path="/RevenueEnginePlans" element={<RevenueEnginePlans />} />
<Route path="/NeuralOSDashboard" element={<NeuralOSDashboard />} />
<Route path="/Book"              element={<Book />} />

// ShiFt Attract
<Route path="/AttractHome"          element={<AttractHome />} />
<Route path="/AttractHowItWorks"    element={<AttractHowItWorks />} />
<Route path="/AttractEmptyPipeline" element={<AttractEmptyPipeline />} />
<Route path="/AttractResults"       element={<AttractResults />} />
<Route path="/AttractPricing"       element={<AttractPricing />} />
<Route path="/AttractBook"          element={<AttractBook />} />

// Tools
<Route path="/Calculator"    element={<Calculator />} />
<Route path="/ROICalculator" element={<ROICalculator />} />
<Route path="/LeakDetector"  element={<LeakDetector />} />
<Route path="/CampaignInsights" element={<CampaignInsights />} />

// Product
<Route path="/Features"     element={<Features />} />
<Route path="/Integrations" element={<Integrations />} />
<Route path="/CaseStudies"  element={<CaseStudies />} />
<Route path="/Blog"         element={<Blog />} />

// Auth / Portal
<Route path="/Onboarding"      element={<Onboarding />} />
<Route path="/CustomerPortal"  element={<CustomerPortal />} />
<Route path="/DocumentsDownload" element={<DocumentsDownload />} />

// Legal
<Route path="/PrivacyPolicy"  element={<PrivacyPolicy />} />
<Route path="/TermsOfService" element={<TermsOfService />} />
<Route path="/CookiePolicy"   element={<CookiePolicy />} />
```

All routes wrapped in `<LayoutWrapper currentPageName={...}>`.

---

## 7. PAGE-BY-PAGE REQUIREMENTS

---

### 7.1 ShiFt Convert Home (`/Home`)

**Component file:** `pages/Home.jsx`  
**Navbar:** Convert  
**Sections (in order):**

#### HeroNew
- Live badge: pulsing coral dot + "Calculating Live Revenue Leaks for 847+ Roofing Companies"
- H1: "Three Revenue Leaks Are Costing You **$35K–$100K+** Every Month"
- Subhead: explains missed calls, junk leads, invisible buyers
- Primary CTA: `Calculate My Revenue Leak →` → `https://calc.shiftnow.io`
- Footer note: "60 seconds. No credit card. Just your real number."
- Background: radial gradient glow top-right

#### ProblemCards
- Section label (mono): "The Problem"
- H2: "Every Day, Money Walks Out Your Door"
- Three cards with left border accent:
  1. 📞 **Missed Calls** — `$12K–$35K lost monthly` — border: `#F54A48`
  2. 🗑 **Junk Leads** — `$8K–$25K wasted monthly` — border: `#FA982F`
  3. 👻 **Invisible Buyers** — `$15K–$40K missed monthly` — border: `#48BB78`
- Each card: icon, stat in gradient text, body copy, italic callout

#### ComparisonTable
- Section label: "The Reality"
- H2: "Your Current Approach vs. ShiFt Convert"
- 6-row table: After-hours response · Lead qualification · Appointment booking · Follow-up consistency · Lead source tracking · Monthly revenue leaked
- "Your Setup" column: ❌ values; "ShiFt Convert" column: ✓ green values
- CTA below: `See Your Specific Numbers →`

#### Mechanism
- Section label: "The Solution"
- H2: "Three Fixes for Three Leaks"
- Three cards with stage badges (Stage 1/2/3):
  1. Stage 1 (coral) — "AI Answers in 30 Seconds" — fixes Leak #1 — stat: `30 sec`
  2. Stage 2 (orange) — "AI Separates Gold from Garbage" — fixes Leak #2 — stat: `73%`
  3. Stage 3 (green) — "AI Books the Appointment" — fixes Leak #3 — stat: `3.2x`

#### ProofSection
- Section label: "Proof"
- H2: "From Revenue Leak to Revenue Machine"
- Large glass card with blockquote from Jake Torres, Titan Roofing Services, Dallas TX
- Stats below quote: `$750K → $7M` · `34%` close rate increase · `89%` show rate
- Link: "Read Full Case Study →" → `/Results`

#### ConversionPath
- Section label: "Your Next Step"
- H2: "See Your Number in **60 Seconds**"
- Three steps: 🧮 Calculate (5 questions) → 👁 Experience (demo) → 📅 Book (reality session)
- CTA: `See My ROI →` → `/ROICalculator`

#### FAQSection
- 5 accordion FAQs:
  1. How is this different from a chatbot?
  2. Will it work for my type of roofing company?
  3. How fast can I see results?
  4. What if leads prefer to talk to a human?
  5. How much does it cost?

#### CTA (shared component)

---

### 7.2 ShiFt NeuralOS Brand Home (`/BrandHome`)

**Sections (in order):**

#### BrandHero
- Live badge: pulsing dot + "AI Revenue Operating System"
- H1: "**Revenue Leaks** Don't Fix Themselves"
- Subhead: $35K–$100K+ lost monthly, ShiFt plugs them
- CTA: `Find Your Gap →` → `/Calculator`
- Trust note: "Trusted by 847+ roofing companies across 42 states"
- Background: large radial gradient glow

#### ProblemSelector
- H2: "Where Is Revenue Leaking From **Your Business?**"
- Four clickable diagnosis cards:
  1. 📉 "Not enough leads" → `/AttractHome` — orange accent
  2. 🔄 "Leads not converting" → `/Home` — coral accent
  3. ⚡ "Losing to competitors" → `/Home` — coral accent
  4. 🔍 "Don't know what's working" → `/Platform` — green accent
- CTA below: "I Have ALL of These Problems →" → `/Platform`

#### TwoProducts
- H2: "Two Systems. **One Revenue Machine.**"
- Two large product cards side-by-side:
  - **ATTRACT** (orange border): 🧲 icon · "Fill the Pipeline" · features list · "Best for: Empty pipeline" · link
  - **CONVERT** (coral border): 🎯 icon · "Close the Deals" · features list · "Best for: Leads not converting" · link
- Tagline card below: "Attract brings them in. Convert closes them. Together, they're unstoppable."

#### SocialProof (shared component)

#### CTA (shared component)

---

### 7.3 ShiFt Attract Home (`/AttractHome`)

**Navbar:** Attract  
**Sections (in order):**

#### AttractHero
- Live badge: pulsing orange dot + "AI Lead Generation for Roofing Contractors"
- H1: "Your **Pipeline Is Empty** Because Your Marketing Isn't Working"
- Subhead: explains spending on ads/SEO without results
- CTA: `Audit My Pipeline →` → Calendly book link (orange gradient)
- Trust note: "Free pipeline audit. See exactly where leads should be coming from."

#### EmptyPipelineProblems
- H2: "Empty Pipeline = **Unpredictable Revenue**"
- Three problem cards (orange left border):
  1. 📉 Inconsistent Lead Flow — `67%` stat
  2. 🔥 Marketing That Doesn't Work — `$3,200` stat
  3. 🤝 Referral Dependency — `43%` stat

#### AttractSolution
- H2: "AI That Fills Your Pipeline **While You Work**"
- Four solution cards:
  1. 🌐 Every Channel. Every Day.
  2. 🎯 Find the Right Prospects
  3. 🔄 Campaigns That Improve Themselves
  4. ✅ Ready-to-Convert Leads

#### AttractROICalculator
- Interactive recharts component
- Inputs: Monthly revenue slider, monthly leads, avg ticket, close rate, pipeline growth %
- Two output charts: before/after bar chart + revenue projection line chart
- Key output metrics: Added Monthly Revenue · Added Annual Revenue · Monthly ROI % · Break-even Days

#### SocialProof (shared)

#### FAQ (5 questions about lead gen)

#### CTA (orange gradient variant)

---

### 7.4 Revenue Engine Plans (`/RevenueEnginePlans`)

**Self-contained page** (all CSS inline, no external component dependencies).

#### Hero
- Badge: "Revenue Infrastructure for Roofing Contractors"
- H1: "Turn Marketing **Into Revenue**"
- Stats bar: `<30s` response · `3–5×` ROI · `24/7` uptime
- Two CTAs: "Get the Revenue Engine" (scroll to packages) + "See the ROI Math" (scroll to proof)

#### Problem Section
- Three stat cards: `60%` leads lost · `74%` burned by prior tools · `$24K+` missed revenue/month

#### System Section
- Four process cards: ⚡ Instant Response → 🎯 AI Qualification → 📅 Auto Booking → 📊 Revenue Tracking

#### Proof / ROI Section
- Texas Case Study: `$72K` in 30 days, 340+ conversations, 47 appointments, 9 jobs, $8K avg ticket, **20× ROI**
- ROI Math grid: ACTIVATE (12×) · AMPLIFY (17×) · DOMINATE (9×)

#### Revenue Leak Calculator (embedded `RevenueLeakCalculator` component)

#### Three Package Cards

**ACTIVATE — $1,997/mo**
- ICP: $1M–$3M revenue
- Components: Revenue Engine Operation ($1,297) + Organic Lead Intelligence GBP & SEO ($700)
- Target: 5–10 appts/mo, 1–2 jobs/mo, $15K–$30K revenue, **3x–4x ROI**
- Exclusivity: 3 per market
- Top bar: coral `#F54A48`
- CTA: "Book a Strategy Call" (primary) + "Choose this Plan" (ghost)
- 11 feature bullets

**AMPLIFY — $3,497/mo** *(Most Popular badge)*
- ICP: $3M–$7M revenue
- Components: Revenue Engine Operation ($1,997) + LSA ($1,500)
- Add-on: Paid Social +$1,500
- Target: 10–20 appts/mo, 2–4 jobs/mo, $30K–$60K revenue, **5x–6x ROI**
- Exclusivity: 3 per market
- Top bar: gradient
- Add: weekly performance calls, storm mode, LSA management

**DOMINATE — $8,997/mo**
- ICP: $7M–$10M revenue
- Components: Revenue Engine Operation ($5,997) + Omnichannel ($3,000)
- Target: 25+ appts/mo, 5+ jobs/mo, $60K–$120K revenue, **7x–8x+ ROI**
- Exclusivity: **1 per market** (gold badge)
- Top bar: gold gradient
- Add: Google Search, Meta retargeting, email drip, SMS, outbound calling

**Disclaimer bar:** $5,000 one-time activation fee · ad spend paid directly by client

#### Feature Comparison Table
30-row table across 3 tiers covering: Core AI · Lead Intelligence · Service Level · Market Exclusivity

#### 90-Day Revenue Floor Guarantee
Three guarantee cards: 🔒 Protected (installation fee) · ⏸ Pauses (monthly billing) · ⚡ Keeps Running (AI system)

#### Final CTA
"Stop Losing Leads. Start Booking Jobs."

---

### 7.5 NeuralOS Dashboard Preview (`/NeuralOSDashboard`)

**Interactive recharts demo dashboard.**

Components:
- `useLiveCount(base, variance, interval)` — fake live counters
- Mock browser chrome with traffic light dots + URL bar showing `app.shiftnow.io/dashboard`
- Top nav strip with tab simulation (Overview/Leads/Appointments/Revenue/Settings)

KPI Cards (6): Conversations Today (live) · Appointments Booked (live) · Avg AI Response (26s) · Revenue This Month ($41.2K) · Close Rate (63%) · ROI Multiple (14×)

Charts:
- Line chart: 8-week platform-attributed revenue (`$212,900`)
- Bar chart: Leads vs Booked (last 7 days, 95 leads → 37 booked)

Lead Intelligence Table:
- 7 sample leads with: Name/Address · Source (GBP/LSA/Facebook) · AI Status (booked/qualifying/follow-up/no-answer) · Lead Score bar · Est. Value · AI Response time · Time ago
- Filter tabs: all / booked / qualifying / follow-up

AI Activity Log: 7 recent actions with timestamps, type badges, and descriptions

Trust Strip: 4 cards — Live in 7 Days · Every Lead Captured · Full Transparency · 90-Day Floor

Leak Detector CTA banner → `/LeakDetector`

---

### 7.6 How It Works (`/HowItWorks`)

Three stages with detailed cards:
1. **Capture** — AI responds to every inbound channel in <30s
2. **Qualify** — Roofing-native conversation flows, lead scoring
3. **Book** — Calendar sync, auto-booking, confirmation texts

Integration grid showing compatible platforms.

---

### 7.7 Revenue Leaks (`/RevenueLeaks`)

Three leak sections with supporting data:
1. **Missed Calls** — 42% after 5pm, voicemail doesn't close deals
2. **Junk Leads** — paying for leads that won't buy, wasted sales energy
3. **Invisible Buyers** — high-intent researching, no capture mechanism

Each section: problem → cost calculation → ShiFt solution → stat proof

---

### 7.8 Results (`/Results`)

**Titan Roofing Services case study** — Jake Torres, Dallas TX

Key stats:
- `$750K → $7M` revenue over 6 years
- `34%` close rate increase
- `89%` show rate
- Blockquote testimonial
- Timeline of implementation

Supporting testimonials from 3+ contractors.

---

### 7.9 Calculator (`/Calculator`) — SHIFT-CALC-001 v1.0

**Spec:** Interactive revenue loss calculator.

#### Inputs
- Monthly revenue slider: `$50,000 – $500,000`, step `$5,000`, default `$200,000`
- Keyboard accessible (arrow keys, shift+arrow for $50K jumps)

#### Calculation Engine
```js
// Missed Calls Loss
const estimatedMissedCalls = monthlyRevenue / 10000;
const missedCallsLoss = estimatedMissedCalls * 15000 * 0.25;

// Garbage Leads Loss
const estimatedLeads = monthlyRevenue / 4000;
const garbageLeads = estimatedLeads * 0.40;
const garbageLoss = garbageLeads * 2 * 50; // 2hrs × $50/hr

// Total
const totalLoss = missedCallsLoss + garbageLoss;
```

#### Output Cards
1. **Missed Calls Loss** — coral `#F54A48` — shows formula
2. **Garbage Leads Loss** — orange `#FA982F` — shows formula
3. **Total Documented Loss** — gold `#FFD700`

#### CTA
"You're losing **$[total]** every month."  
Button: `Book a Strategy Call →` → Calendly

#### Accessibility
- `aria-live="polite"` on output values
- `aria-valuemin/max/now` on slider

---

### 7.10 ROI Calculator (`/ROICalculator`)

Dual-output calculator combining Attract + Convert ROI:

**Inputs (7):**
- Monthly Revenue, Monthly Leads, Close Rate
- Pipeline Growth Potential %
- Missed Calls % of revenue
- Garbage Leads % of revenue
- Invisible Buyers % of revenue

**Outputs (3 result cards):**
1. Attract (Pipeline Growth) — monthly + annual
2. Convert (Revenue Leaks Plugged) — monthly + annual
3. Total Combined ROI — monthly + annual (highlighted, gradient)

---

### 7.11 Blog (`/Blog`)

- Featured large post card (top)
- Category filter pills (All · Strategy · Technology · Case Studies · Industry)
- Responsive grid of 6 article cards
- Each card: category badge, title, excerpt, read time, date, "Read More →"

---

### 7.12 Features (`/Features`)

8 feature cards in grid:
1. ⚡ AI Lead Response — `<30 second` stat
2. 🎯 Smart Qualification — `73% better` stat
3. 📅 Auto Booking — `3.2×` stat
4. 📊 Revenue Dashboard — `Real-time` stat
5. 🔔 Follow-up Automation — `100%` consistency
6. 🌐 Multi-Channel — `5 channels`
7. 🛡 90-Day Guarantee — `Zero risk`
8. 🔗 CRM Integration — `1-click`

---

### 7.13 Integrations (`/Integrations`)

Five integration categories:
1. **CRM / Sales:** HubSpot, Salesforce, GoHighLevel, JobNimbus, AccuLynx, Contractor+
2. **Scheduling:** Google Calendar, Calendly, Housecall Pro, ServiceTitan
3. **Communication:** Twilio, Vonage, Slack, Gmail
4. **Advertising:** Google Ads, Meta Ads, Google LSA, Google Business Profile
5. **Workflow:** Zapier, Make, webhooks, REST API

---

### 7.14 Case Studies (`/CaseStudies`)

- Revenue growth line chart (recharts)
- Filter: by size (All / Small / Medium / Enterprise) + growth milestone
- 3+ case study cards each with: company · location · problem · result · key stats · testimonial quote

---

### 7.15 Platform (`/Platform`)

Neural Stack architecture — 4 layers:
1. Data Layer — property + weather + CRM sync
2. AI Layer — conversation, qualification, booking
3. Operations Layer — calendar, follow-up, attribution
4. Intelligence Layer — dashboards, reports, optimization

---

### 7.16 Roofing (`/Roofing`)

Four roofing verticals:
1. Residential
2. Commercial
3. Storm Restoration
4. Multi-Location

Each with specific use cases and ROI data.

---

### 7.17 About (`/About`)

- Mission statement
- Three company pillars
- Four core values
- Team / founder section

---

### 7.18 Careers (`/Careers`)

- 4 company values
- 4 open positions with details
- Benefits section
- Application CTA

---

### 7.19 Contact (`/Contact`)

- Contact form: Name, Email, Phone, Company, Message
- Contact info: (707) 744-3866
- Address: 12460 Crabapple Rd, Ste. 202-522, Alpharetta, GA 30004
- Book a call CTA → Calendly

---

### 7.20 Onboarding (`/Onboarding`) — Authenticated

Multi-step wizard (5 steps):

| Step | Component | Fields |
|---|---|---|
| 1 | StepWelcome | Intro / instructions |
| 2 | StepCRM | CRM selection, API key, account ID |
| 3 | StepKPIs | Monthly leads, avg ticket, revenue goal, primary metric |
| 4 | StepAIParameters | Response window, AI tone, after-hours mode, channels, storm mode, qualification message |
| 5 | StepGoLive | Review + activate |

State managed in parent `Onboarding.jsx`, passed via props.

---

### 7.21 Customer Portal (`/CustomerPortal`) — Authenticated

Tabbed dashboard:
1. **Billing Overview** — subscription, MRR, next payment
2. **Invoice History** — list of past invoices with download
3. **Payment Methods** — card management via Stripe
4. **Revenue Floor Status** — 90-day guarantee tracker
5. **Lead Management** — recent leads table
6. **Revenue Report** — monthly revenue charts

---

### 7.22 Leak Detector (`/LeakDetector`)

CRM analysis dashboard with:
- Severity-filtered leak cards (Critical / High / Medium)
- Three leak types: missed follow-ups, slow responses, unclosed high-intent
- Estimated revenue value per leak
- Remediation actions (confirmation modal)
- Real-time performance indicators

---

### 7.23 Legal Pages

**Privacy Policy (`/PrivacyPolicy`):** 13 sections, effective March 15, 2026. Covers TCPA compliance, data collection, CCPA/CPRA rights.

**Terms of Service (`/TermsOfService`):** 20 sections, Cherokee County GA jurisdiction, 90-day revenue floor terms, revshare definition.

**Cookie Policy (`/CookiePolicy`):** 4 cookie categories (Essential, Analytics, Marketing, Functional), consent UI.

---

## 8. SHARED SECTION COMPONENTS

### 8.1 Revenue Leak Calculator (`components/revenue/RevenueLeakCalculator.jsx`)

Reusable embedded calculator (used on RevenueEnginePlans page).
Same logic as `/Calculator` page but without full-page wrapper.
Accepts `onScrollToPackages` callback prop.

### 8.2 FAQ Accordion

```jsx
// State: openIndex
// Toggle on click
// Chevron rotates 180° when open
// Answer animates in/out
```

### 8.3 Section Label (Mono Tag)
```jsx
<div className="section-label">
  <span className="label-bar" /> {/* 4×14px gradient bar */}
  {text}
</div>
// Font: JetBrains Mono, 11px, uppercase, 0.2em spacing, color: #FA982F or #F54A48
```

---

## 9. INTERACTIVE TOOLS & CALCULATORS

### 9.1 AttractROICalculator (`components/attract/AttractROICalculator.jsx`)

Uses **Recharts**:
- `BarChart` — Before/After lead volume comparison
- `LineChart` — Revenue projection over 12 months

Calculation:
```js
const newLeads = monthlyLeads * (pipelineGrowth / 100);
const addedRevenue = newLeads * avgTicket * (closeRate / 100);
const annualROI = addedRevenue * 12;
const monthlyROI = ((addedRevenue - planCost) / planCost) * 100;
const breakEvenDays = Math.ceil((planCost / addedRevenue) * 30);
```

### 9.2 NeuralOS Dashboard (`pages/NeuralOSDashboard.jsx`)

Uses **Recharts**:
```js
// Revenue data: 8 weeks, $14K–$41K range
// Conversion data: 7 days, leads vs booked bars
```

Live counter hook:
```js
function useLiveCount(base, variance, interval) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const t = setInterval(() => setVal(base + Math.floor(Math.random() * variance)), interval);
    return () => clearInterval(t);
  }, [base, variance, interval]);
  return val;
}
```

---

## 10. BACKEND FUNCTIONS

All functions in `functions/` directory. Deno Deploy handlers.

| Function | Purpose |
|---|---|
| `getCustomerBilling` | Fetch Stripe subscription data for portal |
| `getInvoices` | Fetch Stripe invoice history |
| `getRevenueFloorStatus` | Calculate 90-day guarantee status |
| `getRevenueReport` | Monthly revenue breakdown |
| `updateSubscription` | Handle plan changes via Stripe |
| `downloadDocument` | Serve signed URLs for PRD/FTRD PDFs |

All functions require `base44.auth.me()` authentication check. Portal functions additionally require user's company/account data lookup.

---

## 11. SEO & META REQUIREMENTS

### 11.1 `index.html` Required Elements
```html
<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://makea.shiftnow.io" />

<!-- Social association -->
<link rel="me" href="https://www.facebook.com/ShiFtAlwaysOn" />

<!-- Title & Description -->
<title>ShiFt NeuralOS™ | AI Revenue System for Roofers</title>
<meta name="description" content="ShiFt Convert stops revenue leaks from missed calls, junk leads, and invisible buyers. AI-powered lead conversion for roofing contractors — respond in 30 seconds, qualify leads instantly, and book more jobs." />

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6RZCQTL0GS"></script>
```

### 11.2 LocalBusiness Schema (in `<head>`)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ShiFt NeuralOS",
  "telephone": "+17077443866",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12460 Crabapple Road, Ste. 202-522",
    "addressLocality": "Alpharetta",
    "addressRegion": "GA",
    "postalCode": "30004",
    "addressCountry": "US"
  },
  "sameAs": ["https://www.facebook.com/ShiFtAlwaysOn"]
}
```

### 11.3 Per-Page Schema (via `layout.jsx`)
- Convert pages → `SoftwareApplication` schema
- Brand pages → `Organization` schema
- Attract pages → `SoftwareApplication` (Attract variant)

### 11.4 LLM / AI Crawler Content Block
```html
<!-- In index.html body, visually hidden, aria-hidden="true" -->
<div id="llm-static-content" style="position:absolute;width:1px;height:1px;overflow:hidden;...">
  <!-- Full text content of all key value propositions, pricing, features, contact info -->
</div>
```

### 11.5 Sitemap (`public/sitemap.xml`)
28 URLs, priorities:
- Brand Home / Convert Home / Attract Home: `1.0`
- Plans / Platform / Roofing / Blog: `0.9`
- Features / CaseStudies / Results: `0.8`
- Tools / Calculators: `0.7–0.8`
- Legal: `0.4`

### 11.6 Robots.txt (`public/robots.txt`)
```
User-agent: *
Allow: /
Disallow: /MasterExport
Disallow: /Export*
Disallow: /DocumentsDownload
Disallow: /Onboarding
Disallow: /CustomerPortal
Sitemap: https://shiftnow.io/sitemap.xml
```

---

## 12. PERFORMANCE REQUIREMENTS

### 12.1 Critical CSS (inline in `<head>`)
```css
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: #070820;
  color: #fff;
  font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
}
#root { min-height: 100vh; }
@font-face { font-family: 'DM Sans'; font-display: swap; }
@font-face { font-family: 'Montserrat Alternates'; font-display: swap; }
@font-face { font-family: 'JetBrains Mono'; font-display: swap; }
```

### 12.2 Loading Skeleton
```html
<!-- Inline in #root before React hydrates -->
<div id="page-skeleton" style="min-height:100vh;background:#070820;display:flex;align-items:center;justify-content:center;">
  <div style="text-align:center;">
    <div style="font-family:'Montserrat Alternates',system-ui;font-size:1.5rem;font-weight:800;color:#fff;margin-bottom:12px;">ShiFt<span style="color:#F54A48;">.</span></div>
    <div style="width:40px;height:3px;background:linear-gradient(90deg,#F54A48,#FA982F);border-radius:2px;margin:0 auto;animation:shift-load 1.2s ease-in-out infinite;"></div>
  </div>
</div>
<!-- JS: hide skeleton after 100ms when React mounts -->
```

### 12.3 Web Manifest (`public/manifest.json`)
PWA-ready with `name`, `short_name`, `theme_color: #070820`, `background_color: #070820`, icons.

---

## 13. ACCESSIBILITY REQUIREMENTS

- All interactive elements have `aria-label` where text is not descriptive
- `<address>` tag used for NAP (Name/Address/Phone) in footer
- FAQ items use `button` elements with proper expand/collapse semantics
- Slider inputs have `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`
- Live calculator outputs use `aria-live="polite"`
- Color contrast: all text meets WCAG AA minimums against dark backgrounds
- Mobile: min touch target 44×44px
- Images: `alt` attributes required

---

## APPENDIX A: KEY COPY & MESSAGING

### Value Proposition
> "ShiFt installs and operates AI-powered revenue engines that turn marketing into booked jobs and predictable growth for roofing contractors."

### The Three Revenue Leaks
1. **Missed Calls** — $12K–$35K/mo — "42% of calls come after 5pm. Your voicemail isn't closing deals."
2. **Junk Leads** — $8K–$25K/mo — "You're paying for leads that were never going to buy."
3. **Invisible Buyers** — $15K–$40K/mo — "High-intent buyers are researching you but you can't see them."

### The 90-Day Revenue Floor
> "If the Revenue Engine does not generate incremental revenue above your pre-ShiFt baseline within 90 days, billing pauses until it does. The system keeps running. You only pay when it produces results."

### Key Social Proof
- Texas contractor: **$72,000 in 30 days** (340 AI conversations → 47 appointments → 9 jobs @ $8K avg = 20× ROI)
- Titan Roofing: **$750K → $7M** in 6 years, 34% close rate increase, 89% show rate

### Contact
- Phone: **(707) 744-3866**
- Address: **12460 Crabapple Road, Ste. 202-522, Alpharetta, GA 30004**
- Calendly: `https://makea.shiftnow.io/widget/bookings/reality`
- Revenue calc: `https://calc.shiftnow.io`

---

## APPENDIX B: EXTERNAL SERVICES & INTEGRATIONS

| Service | Purpose | Key |
|---|---|---|
| Google Analytics | Traffic tracking | `G-6RZCQTL0GS` |
| Retell AI | Voice call widget | via `retell-client-js-sdk` |
| Calendly / makea | Booking | `https://makea.shiftnow.io/widget/bookings/reality` |
| Stripe | Billing portal | via backend functions |
| Google Fonts | Typography | DNS preconnected |

---

*End of PRD + FTRD — ShiFt NeuralOS™ Site Rebuild v1.0*