# Webflow upload guide — Perlara 3.0 launch bundle

This guide takes the deliverables in this folder and walks the Webflow team through getting perlara.com 3.0 staged for internal review by Friday's launch. Estimated build time from a clean Webflow project: **3–4 hours** of focused work.

> **Single source of truth:** `BRAND_GUIDELINES.md`, the SVGs in `imagery/`, the Markdown in `copy/`, and the CMS CSVs in `cms/`. The `reference-site/` folder is a clickable spec for design QA — do not host it as the live site.

---

## 0 · What's in the bundle

```
perlara-3-handoff/
├── BRAND_GUIDELINES.md         # Color, type, spacing tokens — paste into Webflow Style Manager
├── README.md                   # One-page orientation
├── WEBFLOW_UPLOAD_GUIDE.md     # This file
├── copy/                       # Page copy
│   ├── 01-home.md … 07-archive-2.0.md
│   └── docx/                   # Word versions for non-Markdown editors
├── cms/                        # Webflow CMS Collection imports
│   ├── pipeline-programs.csv
│   ├── cure-odysseys-posts.csv
│   └── company-eras.csv
├── imagery/                    # 8 SVG illustrations + favicon
├── embeds/                     # Iframe snippets for Webflow Embed elements
│   ├── dashboard-iframe-embed.html
│   └── archive-2.0-iframe-embed.html
└── reference-site/             # Clickable HTML wireframe (design QA only)
    ├── index.html, about.html, pipeline.html, data-portal.html,
    │   cure-odysseys.html, contact.html, archive-2.0.html
    ├── assets/styles.css       # Reference CSS (port these tokens to Webflow)
    └── 2.0-archive/index.html  # 2.0 site snapshot to host at /2-0-archive/
```

---

## 1 · Style Manager — set up brand tokens

Open **Project Settings → Variables / Style Manager** and create the following variables. Hex values are in `BRAND_GUIDELINES.md`.

**Color variables** (12)

| Name | Hex |
|---|---|
| `brand/bg` | `#FBF8F2` |
| `brand/surface` | `#FFFFFF` |
| `brand/ink` | `#1A1614` |
| `brand/ink-soft` | `#4A4641` |
| `brand/muted` | `#8A857C` |
| `brand/rule` | `#E5E0D5` |
| `brand/accent` | `#0B6B5C` (teal) |
| `brand/accent-soft` | `#E6F1ED` |
| `brand/accent-deep` | `#06453B` |
| `brand/warm` | `#D9603F` (coral) |
| `brand/warm-soft` | `#FBE6DD` |
| `brand/warn` | `#A4731A` |

**Spacing variables** (`s-1` through `s-9`): 4, 8, 12, 16, 24, 32, 48, 64, 96 px.

**Typography:** in **Project Settings → Fonts**, add Google Fonts:
- **Fraunces** — weights 500, 600 (variable opsz 9–144)
- **Inter** — weights 400, 500, 600
- **IBM Plex Mono** — weight 400

Then in Style Manager set:
- All headings → font: Fraunces, weight 500 (h1 = 600).
- Body / All Paragraphs → font: Inter, weight 400.
- Code / Mono → font: IBM Plex Mono, weight 400.

Type scale (set as Webflow text styles): `t-xs` 12.5 / `t-sm` 14 / `t-base` 16 / `t-md` 18 / `t-lg` 24 / `t-xl` 32 / `t-2xl` 44 / `t-hero` 56.

Body line-height 1.55, headline line-height 1.15.

---

## 2 · Asset Manager — upload SVGs

Drag every file in `imagery/` into Webflow Asset Manager:

| File | Use |
|---|---|
| `logo-lockup.svg` | Nav + footer (32 px height) |
| `logo-mark.svg` | Social avatar |
| `favicon.svg` | **Project Settings → General → Favicon** |
| `hero-yeast-to-human.svg` | Home hero (right column of hero grid) |
| `remit-engine.svg` | Home + Pipeline (REMIT section) |
| `mitochondrion.svg` | Pipeline (mitochondrial focus section) |
| `glycan-tree.svg` | Pipeline (CDG focus section) |
| `three-eras-timeline.svg` | About (timeline section) |

All SVGs use `currentColor` where appropriate; tint via parent text color if you need to recolor.

---

## 3 · CMS Collections — import CSVs

Create three Collections, then use Webflow's CMS Import tool with the matching CSV.

### 3a · `Pipeline programs` (file: `cms/pipeline-programs.csv`)

Fields:
- `Name` (Plain text, required)
- `Slug` (Auto)
- `Gene Mechanism` (Plain text)
- `Stage` (Option: 01 Model · 02 Screen · 03 Validate · 04 Translate)
- `Stage Number` (Number, used for sorting)
- `Stage Detail` (Plain text)
- `Partner` (Plain text)
- `Disease Family` (Option: CDG · Mitochondrial · GPI-anchor · tRNA synthetase · Neurodevelopmental · Purine · Valine catabolism)
- `Featured` (Switch)
- `Order` (Number, sort key)

Bind to the Pipeline page table (sort: `Order` ascending).

### 3b · `Cure Odysseys posts` (file: `cms/cure-odysseys-posts.csv`)

Fields:
- `Title` (Plain text), `Slug` (Auto), `Summary` (Plain text)
- `Category` (Option: Foundational · Platform · PMM2-CDG · CDG · Leigh Syndrome · FOXG1 · GNAO1 · tRNA synthetases · DHDDS · GPI · Purine / valine · Strategy)
- `Tags` (Multi-text — comma-split on import)
- `Substack URL` (Link)
- `Is Featured` (Switch), `Order` (Number)

Bind to the Cure Odysseys digest list (sort: `Order` ascending). Optional: also wire a Webflow RSS integration to `https://perlara.substack.com/feed` for ongoing post freshness.

### 3c · `Company eras` (file: `cms/company-eras.csv`)

Fields: `Era`, `Slug`, `Years`, `Tagline`, `Model`, `Anchor Program`, `Where to Find It` (Link), `Order`.

Bind to the About page timeline (sort: `Order` ascending).

---

## 4 · Pages — paste copy from `copy/`

Build these pages in Webflow with the layouts shown in the matching `reference-site/*.html` files. Each Markdown file in `copy/` is one page, top-to-bottom in the order the section appears on screen.

| Webflow page | Markdown source | Reference HTML | Body class / data-page |
|---|---|---|---|
| `/` (Home) | `01-home.md` | `index.html` | `home` |
| `/about` | `02-about.md` | `about.html` | `about` |
| `/pipeline` | `03-pipeline.md` | `pipeline.html` | `pipeline` |
| `/data-portal` | `04-data-portal.md` | `data-portal.html` | `data-portal` |
| `/cure-odysseys` | `05-cure-odysseys.md` | `cure-odysseys.html` | `cure-odysseys` |
| `/contact` | `06-contact.md` | `contact.html` | `contact` |
| `/archive-2-0` | `07-archive-2.0.md` | `archive-2.0.html` | `archive` |

The **shared nav** (6 links) and **shared footer** (4-column grid: Brand · Explore · Archives · Contact) appear on every page. Build them as Webflow Symbols.

For team members on Word: identical content lives in `copy/docx/`.

---

## 5 · Embeds — public dashboard + 2.0 archive iframe

### 5a · Public dashboard (`/data-portal`)

Place a **Webflow Embed** element in the "Live embed" section. Paste the contents of `embeds/dashboard-iframe-embed.html`. The iframe targets the existing dashboard at `https://www.perlara.com/perlara-public-dashboard`.

Heights are pre-set: 1100 px desktop / 780 px mobile. If you want auto-resize, uncomment the iframe-resizer lines at the bottom of the embed.

### 5b · 2.0 archive snapshot (`/archive-2-0`)

1. Upload the contents of `reference-site/2.0-archive/` to a sub-path on the same Webflow site (or as a side-host) — recommended URL: `https://perlara.com/2-0-archive/index.html`.
2. Place a **Webflow Embed** element in the "Snapshot" section of `/archive-2-0`. Paste `embeds/archive-2.0-iframe-embed.html`.
3. Update the iframe `src` to the final hosted URL of the snapshot.

---

## 6 · Forms — contact form

The contact form on `/contact` should be a **Webflow Form** element with these fields (matching `copy/06-contact.md`):

- `name` (text, required)
- `email` (email, required)
- `role` (select, required) — options listed in the Markdown
- `disease` (text, optional)
- `message` (textarea, required)

Configure form notifications to send to `hello@perlara.com`. Optional: add the form-submission to a Webflow CMS Collection (`Contact submissions`) for tracking.

---

## 7 · Archives — outbound links

Make sure all four "Archives" footer links work:

| Link | Target |
|---|---|
| Perlara 1.0 | `https://archive.perlara.com` (external, `target="_blank"`) |
| Perlara 2.0 | `/archive-2-0` (internal page) |
| Cure Odysseys | `https://www.cureodysseys.com` (external, `target="_blank"`) |
| 2.0 snapshot | `https://perlara.com/2-0-archive/` (the iframe target) |

---

## 8 · QA checklist before Friday launch

- [ ] All 7 pages render with shared nav + footer
- [ ] Hero typography matches Fraunces + Inter spec (display weights, line-height 1.15)
- [ ] Coral CTA appears at most once per page
- [ ] Pipeline table populated from `Pipeline programs` CMS, sorted by `Order`
- [ ] Cure Odysseys list populated from `Cure Odysseys posts` CMS
- [ ] Public dashboard iframe loads at `/data-portal`
- [ ] 2.0 snapshot iframe loads at `/archive-2-0`
- [ ] `archive.perlara.com` link opens externally
- [ ] Contact form submits a test entry to `hello@perlara.com`
- [ ] Favicon is `favicon.svg`
- [ ] Mobile breakpoints (≤ 720 px): hero stacks, stats grid wraps to 2×2, table is horizontally scrollable
- [ ] All SVG illustrations have `alt` text per the reference site
- [ ] Body contrast ≥ 7:1 (ink on cream — already passes WCAG AAA)

---

## 9 · Post-launch wishlist (not blocking Friday)

- Wire the Cure Odysseys Collection to the Substack RSS feed for auto-updates
- Replace the contact form's static role list with a CMS-backed routing table
- Commission the family/clinic photography described in §5 of `BRAND_GUIDELINES.md`
- Add an animated REMIT engine illustration (the static SVG is ready to drop in)
