# Perlara 3.0 — brand guidelines

A "warm scientific" system. Carries the warmth of Perlara 2.0 forward
but feels more confident, more pharma-credible, and unmistakably
patient-first. Use these tokens as the source of truth in Webflow's
Style Guide / Variables.

---

## 1. Color tokens

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Background | `--brand-bg` | `#FBF8F2` | Page background |
| Surface | `--brand-surface` | `#FFFFFF` | Cards, panels, table rows |
| Ink (primary text) | `--brand-ink` | `#1A1614` | Body & headlines |
| Ink soft | `--brand-ink-soft` | `#4A4641` | Secondary body |
| Muted | `--brand-muted` | `#8A857C` | Captions, metadata |
| Rule | `--brand-rule` | `#E5E0D5` | Hairlines, borders |
| **Accent — primary (teal)** | `--brand-accent` | `#0B6B5C` | Links, primary buttons, header highlights |
| Accent soft | `--brand-accent-soft` | `#E6F1ED` | Callouts, pill backgrounds |
| Accent deep | `--brand-accent-deep` | `#06453B` | Hover, dark headers |
| **Accent — warm (coral)** | `--brand-warm` | `#D9603F` | CTAs, "new" / "recent" tags, hero highlights |
| Warm soft | `--brand-warm-soft` | `#FBE6DD` | Warm callouts |
| Caution | `--brand-warn` | `#A4731A` | Wireframe notes, advisory text |

**Rule of three.** Teal carries 80%+ of accent moments. Coral is
reserved for CTAs and one moment of brightness per page. Black-on-cream
is the default; white-on-teal is the only inversion.

---

## 2. Typography

| Role | Family | Weight | Notes |
| --- | --- | --- | --- |
| Display / headlines | **Fraunces** | 500 / 600 | Open-source variable serif. Use 500 for h2/h3, 600 for h1. Slight optical-size at large sizes. |
| Body & UI | **Inter** | 400 / 500 | System-grade humanist sans. 400 body, 500 emphasis. |
| Mono / metadata | **IBM Plex Mono** | 400 | For batch IDs, SMILES placeholders, code-style metadata. |

Fallback stacks (used in the reference site CSS):

```css
--font-display: "Fraunces", "Iowan Old Style", Georgia, serif;
--font-body:    "Inter", -apple-system, "Segoe UI", Roboto, sans-serif;
--font-mono:    "IBM Plex Mono", ui-monospace, Menlo, monospace;
```

In Webflow: load all three via Google Fonts in **Project Settings →
Fonts**. Map "Fraunces" to Heading defaults and "Inter" to All
Paragraphs.

### Type scale (1.25 ratio)

| Step | rem | px (16-base) | Use |
| --- | --- | --- | --- |
| `t-xs` | 0.78 | 12.5 | Eyebrows, pills |
| `t-sm` | 0.875 | 14 | Captions, footer |
| `t-base` | 1.00 | 16 | Body |
| `t-md` | 1.125 | 18 | Lede paragraphs |
| `t-lg` | 1.5 | 24 | h3 |
| `t-xl` | 2.0 | 32 | h2 |
| `t-2xl` | 2.75 | 44 | h1 |
| `t-hero` | 3.5 | 56 | Home hero only |

Line height: 1.55 for body, 1.15 for headlines.
Letter spacing: -0.01em on display sizes; +0.08em uppercase eyebrows.

---

## 3. Spacing scale

Single 4 px base, doubled at each step.

```
--s-1: 4   --s-2: 8    --s-3: 12   --s-4: 16
--s-5: 24  --s-6: 32   --s-7: 48   --s-8: 64   --s-9: 96
```

Section vertical padding: `--s-7` mobile, `--s-9` desktop.
Card padding: `--s-5`.
Body container max-width: 1080 px.

---

## 4. Components

### 4.1 Cards
Cream surface with 1 px rule. Optional left border in `--brand-accent`
for the "feature" treatment. 4 px radius. No shadow on first hover;
2 px lift on hover.

### 4.2 Buttons
- **Primary**: solid `--brand-ink` background, cream text. Use for the
  most important action on a page.
- **Warm**: solid `--brand-warm` background, cream text. Use exactly
  once per page if at all (the "Get in touch" hero CTA, the
  "Subscribe" CTA on Cure Odysseys).
- **Secondary**: cream background, ink border, ink text.

### 4.3 Pills
Small label. Soft accent fill, deep teal text. Use for stage tags
(`02 Screen`, `03 Validate`, etc.) and topic tags.

### 4.4 Timeline (about page)
Two-column grid: 120 px year column + content. Coral for the year
itself, teal subtitle (`Perlara 1.0` etc.). 1 px rule between rows.

### 4.5 Stats row
Four cells, equal width. Display-serif numerals at `--t-xl`, muted
caption underneath at `--t-sm`. Lives inside a single bordered surface.

### 4.6 Iframe host
1 px ruled card around any embedded iframe (dashboard, archive). Top
toolbar shows the URL of the embed and a "Open in new tab" link.
Iframe height: 1100 px desktop, 780 px mobile.

---

## 5. Imagery direction

The Perlara 3.0 illustration set is built in SVG and ships in
`imagery/`. Eight pieces, all in the same restrained palette:
cream / ink / teal / coral.

| File | What it is | Where to use |
| --- | --- | --- |
| `logo-lockup.svg` | Full mark + wordmark | Nav (light bg), footer (light bg) |
| `logo-mark.svg` | Mark only (the "yeast budding" P) | Favicon source, social avatars |
| `favicon.svg` | Simplified mark | `<link rel="icon">` |
| `hero-yeast-to-human.svg` | Yeast cell → arrow → human cell with pathway light-up | Home hero, About hero |
| `mitochondrion.svg` | Cross-section with ETC complexes I–V labeled | Pipeline page (mito section) |
| `glycan-tree.svg` | Branched N-glycan with PMM2/ALG/PIG branches highlighted | Pipeline page (CDG section) |
| `remit-engine.svg` | 4-stage process diagram (Model → Screen → Validate → Translate) | Home & Pipeline |
| `three-eras-timeline.svg` | Horizontal 1.0 / 2.0 / 3.0 timeline | About page |

### Photography direction (commissioned later)

Cool, naturally-lit family / clinic photography. No stock-photo
biotech glassware. Patient-and-parent moments are the most important
imagery the design team should commission for launch.

---

## 6. Voice & tone

- Plainspoken and technically specific. The Cure Odysseys Substack is
  the canonical voice.
- Patient-first, never patient-pity. Families are the platform.
- Avoid biotech-marketing generalities: "leveraging," "next-generation,"
  "cutting-edge."
- Specific numbers always: "37 yeast models," "8,384 compounds," "Z ≥
  2.5," "$1.7M Direct-to-Phase-II SBIR."

---

## 7. Accessibility floor

- Body text contrast ≥ 7:1 against background (`#1A1614` on `#FBF8F2`
  passes WCAG AAA at all sizes).
- Teal accent on cream passes AA at 18 px+; do not use teal for body
  text smaller than 18 px.
- Focus states: 2 px coral outline, 2 px offset.
- All illustrations include `aria-label` or are marked
  `aria-hidden="true"` if decorative.
