# 📘 Trafenix Technologies — End-to-End Design System & UI Documentation

> **Official Design & Technical Specification for Trafenix Technologies Website**  
> **Live Site:** [https://trafenix.com](https://trafenix.com)  
> **Repository:** [trafenix/trafenix-website](https://github.com/trafenix/trafenix-website)  
> **Hosting & CI/CD:** Netlify Edge Runtime (Next.js 16)

---

## 1. 🏢 Brand Identity & Design Principles

* **Brand Name:** Trafenix Technologies Pvt Ltd
* **Tagline:** *Your Footage. Our Analysis. Actionable Insights.*
* **Core Philosophy:** Precision traffic video intelligence using AI-assisted detection combined with rigorous human analyst quality assurance.
* **Aesthetic Theme:** High-tech, clean, dark-mode biased with luminous electric cyan/blue accents and crisp slate readability.

---

## 2. 🎨 Complete Color System & Design Tokens

Defined centrally in [`app/globals.css`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/app/globals.css):

```css
:root {
  --dark:   #06131f; /* Deep Obsidian (Header, extreme dark) */
  --navy:   #081b2a; /* Midnight Navy (Hero, dark cards, footer) */
  --blue:   #1677ff; /* Electric Blue (Primary actions, brand logo) */
  --cyan:   #00c2d7; /* Cyber Cyan (Nodes, bullets, accents, glow) */
  --green:  #22c55e; /* Emerald Green (Success checkmarks, QA verified) */
  --slate:  #64748b; /* Slate Gray (Body text, secondary metadata) */
  --bg:     #f8fafc; /* Crisp Off-White (Card surfaces, form bg) */
  --border: #dfe7ef; /* Structural Dividers & card outlines */
  --white:  #ffffff; /* Contrast text & clean white cards */
}
```

### Color Usage Matrix

| Token | Hex | Role & Functional Usage |
|---|---|---|
| `--dark` | `#06131f` | Sticky top navigation header, dark card backgrounds |
| `--navy` | `#081b2a` | Hero section background, banner background, footer |
| `--blue` | `#1677ff` | Primary CTA buttons, link hovers, main logo body |
| `--cyan` | `#00c2d7` | Flow arrows, sensor node circle, list bullets, badges |
| `--green` | `#22c55e` | Success states, checkmark icons, verified badges |
| `--slate` | `#64748b` | Paragraph descriptions, form labels, muted notes |
| `--bg` | `#f8fafc` | Alternate soft sections, form inputs container |
| `--border` | `#dfe7ef` | 1px clean separation lines across cards and grids |
| `--white` | `#ffffff` | Pure white text on dark cards, primary card surfaces |

### Shadows & Lighting Effects
* **Card Elevation Shadow:** `box-shadow: 0 18px 50px rgba(8, 27, 42, 0.10);`
* **Button Glow Shadow:** `box-shadow: 0 8px 24px rgba(22, 119, 255, 0.22);`
* **Featured Card Glow:** `box-shadow: 0 16px 45px rgba(22, 119, 255, 0.12);`

---

## 3. 🔤 Typography & Font Hierarchy

### Font Families
1. **Primary Display & Headings:** `Manrope, sans-serif` (Weights: `600`, `700`, `800`, `900`)
2. **Body & System UI:** `Inter, -apple-system, sans-serif` (Weights: `400`, `500`, `600`)
3. **Telemetry & Code:** `JetBrains Mono, monospace` (For technical badges and stats)

### Type Scale & Hierarchy

| Hierarchy | CSS Size | Weight | Line Height | Letter Spacing | Context / Usage |
|---|---|---|---|---|---|
| **Hero H1** | `clamp(40px, 5.2vw, 68px)` | `800` | `1.08` | `-0.02em` | Main hero headline |
| **Section H2** | `clamp(34px, 4vw, 56px)` | `800` | `1.15` | `-0.015em` | Major section titles |
| **Card H3** | `22px – 24px` | `750` | `1.22` | `0` | Service cards, value cards |
| **Eyebrow** | `11px – 13px` | `800` | `1.0` | `+0.08em` | Uppercase category pills & section tags |
| **Body Large** | `17px – 18px` | `400` / `500` | `1.5` | `0` | Hero descriptions |
| **Body Standard**| `14px – 15px` | `400` | `1.5` | `0` | Standard copy, card summaries |
| **Small / Meta** | `12px – 13px` | `700` | `1.3` | `+0.02em` | Form labels, bullet list items |

---

## 4. 📐 Layout & Responsive Grid System

### Container Architecture
* **Class `.shell`:** Centered content container with `max-width: 1240px; margin: 0 auto;`.
* **Side Padding:**
  - Mobile (`< 768px`): `20px`
  - Tablet (`768px – 1024px`): `32px`
  - Desktop (`> 1024px`): `48px`
* **Section Padding:** `padding: 100px 0;`

### Grid Configurations
* **Service Grid (`.service-grid`):** `grid-template-columns: repeat(3, 1fr); gap: 18px;` (collapses to 1 column on mobile).
* **Pricing Grid (`.pricing-grid`):** `grid-template-columns: repeat(4, 1fr); gap: 16px;` (collapses to 1 or 2 columns).
* **Contact Grid (`.contact-grid`):** `grid-template-columns: 0.82fr 1.18fr; gap: 55px;` (sidebar + interactive form).

---

## 5. 🧩 UI Components Catalog

### 1. Header (`components/site-header.tsx`)
* **Features:** Sticky blur glassmorphism navigation.
* **Height:** `76px`.
* **Elements:** Vector brand logo, nav links (`Services`, `Process`, `Packages`, `About`), and primary CTA button (`Get a quote`).

### 2. Brand Logo (`components/logo.tsx`)
* **Vector Geometry:** Custom geometric road intersection mark:
  - Base body: `#1677ff` T-junction
  - Lane lines: `#00c2d7` dashed lines (`stroke-dasharray="5 4"`)
  - Sensor node: `#00c2d7` filled center circle
  - Flow vectors: `#00c2d7` directional intersection arrows
* **Wordmark:** Bold uppercase `TRAFENIX` with `800` weight and `letter-spacing: 0.03em`.

### 3. Service Cards (`components/service-card.tsx`)
* **Structure:**
  - **Top Row:** Two-digit index (`01`–`12`) in `#9aaabb` + soft blue icon container (`#eef6ff`).
  - **Category Pill:** Uppercase colored badge (`#e8fbfd` background, `#087d8a` text).
  - **Title (H3):** 23px high-contrast heading.
  - **Summary:** Slate description paragraph.
  - **Deliverables List:** Custom cyan bullet points (`::before` dot).
  - **Footer Link:** Arrow-up-right interactive text link.
* **Hover Interaction:** Smooth 5px upward translation with soft blue border glow.

### 4. Interactive Contact Form (`components/contact-form.tsx`)
* **Features:**
  - Responsive 2-column input grid.
  - Fields: Name, Work Email, Company, Project Location, Service Selection dropdown, Project Details textarea.
  - Honeypot bot protection field (`botcheck`).
  - Web3Forms direct inbox forwarding to `info@trafenix.com`.
  - Clean animated checkmark success view with 24-hour response confirmation.

### 5. Process Stage & Live HUD Graphic (`app/page.tsx`)
* **7-Stage Workflow:** `Video` ➔ `Detection` ➔ `Classification` ➔ `Tracking` ➔ `Measurement` ➔ `Analytics` ➔ `Report`.
* **Live Analysis Stage:** Visual intersection simulation with animated vehicle tracks, bounding HUD boxes, and real-time volume counters.

### 6. Global Footer (`components/site-footer.tsx`)
* **4-Column Layout:**
  1. Brand logo + Tagline + AI & human verification statement.
  2. Explore links (`Services`, `Process`, `Packages`, `About`).
  3. Contact details (`info@trafenix.com`, phone, IST operating hours).
  4. Bottom bar: Legal copyright © 2026 + registered office location (`Pulikari, Dharmapuri, Tamil Nadu 636808, India`).

---

## 6. 📊 Services & Packages Catalog Data

Defined in [`lib/services.ts`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/lib/services.ts):

### The 12 Specialized Services
1. **01 · Traffic Turning Movement Counts (TMC)** (Intersection)
2. **02 · Vehicle Classification Surveys** (Traffic)
3. **03 · Mid-Block Traffic Surveys** (Road)
4. **04 · Traffic Volume & Peak-Hour Analysis** (Traffic)
5. **05 · Traffic Queue Length Analysis** (Intersection)
6. **06 · Pedestrian & Cyclist / NMU Counts** (Non-Motorized)
7. **07 · Origin-Destination (OD) Analysis** (Journey)
8. **08 · Parking Surveys** (Parking)
9. **09 · Traffic Conflict Analysis** (Safety)
10. **10 · Illegal Traffic Movement Analysis** (Safety)
11. **11 · Red-Light Violation Analysis** (Safety)
12. **12 · Saturation Flow & Degree of Saturation (SAT/DOS)** (Intersection)

### The 4 Packages
1. **Essential Count** (Foundation) — Volume counts, classification, summary workbook.
2. **Intersection Performance** (Most popular) — Classified TMC, approach summaries, queues.
3. **Safety Review** (Specialist) — Structured near-miss events, conflict registers.
4. **Complete Project** (Bespoke) — Any of 12 services, multi-site analysis, dark card theme.

---

## 7. 🖼️ Brand Assets & Export Inventory

| Asset Name | Resolution | Format | Purpose | File Location |
|---|---|---|---|---|
| **Website Header Logo** | 900 × 300 | PNG | Official website logo on dark bg | [`trafenix-website-logo.png`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/trafenix-website-logo.png) |
| **Website Logo Transparent** | 900 × 300 | PNG | Official logo on transparent bg | [`trafenix-website-logo-transparent.png`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/trafenix-website-logo-transparent.png) |
| **Square Avatar Icon** | 512 × 512 | PNG | Profile picture, app icon | [`trafenix-website-icon-512.png`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/trafenix-website-icon-512.png) |
| **LinkedIn Cover Banner** | 1584 × 396 | PNG | High-res LinkedIn company cover | [`trafenix-linkedin-banner.png`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/trafenix-linkedin-banner.png) |
| **LinkedIn Banner (Standard)** | 1128 × 191 | PNG | Standard 5.9:1 LinkedIn cover | [`public/brand/trafenix-linkedin-banner-1128x191.png`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/public/brand/trafenix-linkedin-banner-1128x191.png) |
| **Browser Favicon** | Scalable | SVG | Browser tab icon | [`public/favicon.svg`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/public/favicon.svg) |

---

## 8. 🚀 Deployment & CI/CD Pipeline

* **Hosting Provider:** Netlify Edge Network
* **DNS Records (Hostinger):**
  - `A` Record (`@`): Points to Netlify IP (`75.2.60.5`)
  - `CNAME` (`www`): Points to `monumental-gecko-f5bfc0.netlify.app`
* **Build Configuration ([`netlify.toml`](file:///c:/Users/vishn/Downloads/Vishnu%20Aug/Data_entry/Trafenix_Website_Source/netlify.toml)):**
  ```toml
  [build]
    command = "npm run build"
    publish = ".next"

  [build.environment]
    NODE_VERSION = "22"

  [[plugins]]
    package = "@netlify/plugin-nextjs"
  ```
* **Routine Deployment:** Any git commit pushed to `main` on GitHub triggers an instant automatic build and zero-downtime deployment.
