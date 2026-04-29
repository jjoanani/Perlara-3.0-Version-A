# Perlara 3.0 — Webflow handoff bundle

Everything the Webflow team needs to stand up perlara.com 3.0 for internal review and Friday public launch.

> **Project framing.** Perlara has evolved through three eras: 1.0 biotech (2014–2019, archived at `archive.perlara.com`), 2.0 patient-services (2019–2025, archived in this bundle), and **3.0 full-stack drug development** (Nov 2025 → present, anchored by the $1.7M NCATS Direct-to-Phase-II SBIR). This bundle ships a rebrand that reflects 3.0's focus on **CDGs and mitochondrial disorders** while preserving the throughlines: yeast as the workhorse, PBC structure, patients as the platform, and open notebooks.

---

## Where to start

1. Read **`WEBFLOW_UPLOAD_GUIDE.md`** — top-to-bottom, end-to-end build instructions (3–4 hours).
2. Skim **`BRAND_GUIDELINES.md`** — color, type, spacing tokens for the Style Manager.
3. Open **`reference-site/index.html`** in a browser — that's the clickable spec for design QA.

---

## Bundle map

```
perlara-3-handoff/
├── README.md                    ← you are here
├── WEBFLOW_UPLOAD_GUIDE.md      ← step-by-step Webflow build
├── BRAND_GUIDELINES.md          ← brand tokens (color, type, spacing, components)
│
├── copy/                        ← page copy (one .md per page)
│   ├── 01-home.md
│   ├── 02-about.md
│   ├── 03-pipeline.md
│   ├── 04-data-portal.md
│   ├── 05-cure-odysseys.md
│   ├── 06-contact.md
│   ├── 07-archive-2.0.md
│   └── docx/                    ← Word versions of the same content
│
├── cms/                         ← Webflow CMS Collection imports
│   ├── pipeline-programs.csv    (11 rows — pipeline table)
│   ├── cure-odysseys-posts.csv  (21 rows — Substack digest)
│   └── company-eras.csv         (5 rows — About timeline)
│
├── imagery/                     ← 8 SVG illustrations
│   ├── logo-mark.svg, logo-lockup.svg, favicon.svg
│   ├── hero-yeast-to-human.svg
│   ├── remit-engine.svg
│   ├── mitochondrion.svg
│   ├── glycan-tree.svg
│   └── three-eras-timeline.svg
│
├── embeds/                      ← Iframe snippets for Webflow Embed elements
│   ├── dashboard-iframe-embed.html   (public dashboard)
│   └── archive-2.0-iframe-embed.html (2.0 snapshot host)
│
└── reference-site/              ← Clickable HTML wireframe (design QA only)
    ├── index.html, about.html, pipeline.html,
    │   data-portal.html, cure-odysseys.html,
    │   contact.html, archive-2.0.html
    ├── assets/styles.css, assets/site.js
    ├── imagery/                 (mirrored SVGs)
    └── 2.0-archive/index.html   (Perlara 2.0 site snapshot)
```

---

## Information architecture

Six top-nav pages plus the 2.0 archive:

| URL | Purpose |
|---|---|
| `/` | Home — IMD positioning, stats, REMIT, Maggie's Pearl, Cure Odysseys preview |
| `/pipeline` | Platform & Pipeline — REMIT four stages, mito + CDG focus, full pipeline table, funding |
| `/data-portal` | Public dashboard embed — 37 models × 8,384 compounds, de-identified |
| `/cure-odysseys` | Substack digest — themes + 21 curated posts |
| `/about` | Three-eras arc 2014 → 2019 → 2025 → 2026, throughlines, founder |
| `/contact` | Partnerships form (families, academic, pharma, press) |
| `/archive-2-0` | Perlara 2.0 era summary + iframe snapshot |

Footer links to: Pipeline · Data portal · Cure Odysseys · About // 1.0 archive (external) · 2.0 archive · Cure Odysseys Substack // Contact · `hello@perlara.com`.

---

## Friday launch deadline — what blocks vs. doesn't

**Blocking (must ship this Friday):**
- All 7 Webflow pages live with copy + nav + footer
- 3 CMS Collections imported and bound
- 8 SVGs uploaded, favicon set
- Public dashboard iframe loads
- 2.0 snapshot iframe loads
- Contact form submits to `hello@perlara.com`

**Not blocking (post-launch wishlist):**
- Substack RSS auto-feed for Cure Odysseys list (curated CSV is shipped)
- Family/clinic photography (the SVG illustration set covers visual needs)
- Animated REMIT engine

The QA checklist in `WEBFLOW_UPLOAD_GUIDE.md §8` is the launch gate.

---

## Open questions for Ethan

These were flagged in the reference-site `wf-note` blocks:

1. **Founder section** — do you want to include LinkedIn link, board / advisory members, headshot? About page has a placeholder block.
2. **Email aliases** — should `partners@perlara.com` and `press@perlara.com` route to your inbox or to specific team members?
3. **2.0 archive host path** — confirm the canonical URL for the 2.0 snapshot (current placeholder: `https://perlara.com/2-0-archive/`).
4. **Direct-to-Phase-II language** — verify exact award title and date for the November 2025 SBIR (currently: "$1.7M Direct-to-Phase-II SBIR · NIH NCATS · ETC Complexes I–V").

---

## Contact during build

For questions about any deliverable in this bundle, leave a comment in the corresponding file or ping Ethan directly.

