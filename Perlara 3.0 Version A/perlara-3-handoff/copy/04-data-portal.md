# Data Portal — Public preview

> **Webflow page:** `/data-portal`
> **Body class / data-page:** `data-portal`
> **Embed:** `https://www.perlara.com/perlara-public-dashboard` (use Webflow Embed element + iframe-resizer; lock height 1100 px desktop / 780 px mobile, or paste `embeds/dashboard-iframe-embed.html`)

---

## Hero

**Eyebrow:** Data portal · public preview
**Headline (H1):** Every model, every compound, every Z-score.
**Lede:** Explore the full de-identified screening results across 37 IMD yeast models and 8,384 TargetMol compounds. Compound identities are anonymized (`CPD_xxxxx` IDs) until IP is filed; all effect sizes, pathway annotations, and dual-condition co-rescue signals are public.

**Primary CTA (warm):** Open dashboard in new tab → `https://www.perlara.com/perlara-public-dashboard`
**Secondary CTA:** Scroll to embed → `#portal`

---

## What you'll find (5-card grid)

**Kicker:** What you'll find
**Headline (H2):** Five views over one dataset.

**Card 1 · Tab 01 — Gene / disease overview.**
Rescuer and sensitizer counts for all 37 models, dynamic-range scatter, and pathway hit-rate.

**Card 2 · Tab 02 — Compound × gene heatmap.**
Top 300 compounds by dynamic range. Filter by profile class and minimum |Z|.

**Card 3 · Tab 03 — Compound explorer.**
Searchable, sortable table over all 8,384 compounds. Compound identities are redacted.

**Card 4 · Tab 04 — Dual-condition pairs.**
Gene × gene heatmap of shared rescuers and sensitizers — empirical evidence for "platforms-in-a-pill".

**Card 5 · Tab 05 — Per-compound fingerprint.**
37-gene Z-score fingerprint for any compound, plus the Cure Odysseys posts keyed to its top-hit gene.

### Callout (warm) — Public-preview mode

This dashboard is running in public mode: all compound names, SMILES strings, and target annotations are redacted. Every row is keyed by an opaque `CPD_xxxxx` identifier. Perlara team members access the full-fidelity internal version behind SSO.

---

## Live embed

**Kicker:** Live embed
**Headline (H2):** Interactive dashboard.
**Section lede:** Served from `perlara.com/perlara-public-dashboard`. If the embed fails to load (e.g. cookie / X-Frame restriction), open it directly in a new tab.

> **Webflow note:** paste the snippet from `embeds/dashboard-iframe-embed.html` into a Webflow Embed element. Lock the height to 1100 px desktop / 780 px mobile, or use iframe-resizer.

---

## How the data was produced

**Kicker:** How the data was produced
**Headline (H2):** From wet lab to JSON bundle.

The dataset behind this portal is batch `TM_03162026`: 37 humanized yeast models × 8,384 TargetMol compounds, processed through Perlara's standardized growth-rescue assay. Rescuers are scored at Z ≥ 2.5 and sensitizers at Z ≤ −2.5 relative to DMSO control. Each row in the heatmap is one compound; each column is one disease model.

The portal is rebuilt automatically after every screening batch. Compound-level de-identification is applied at preprocessing — names, SMILES, and explicit targets never reach the public bundle.

### Dataset at a glance

| Field | Value |
|---|---|
| Batch | `TM_03162026` |
| Models | 37 humanized yeast strains |
| Compounds | 8,384 (TargetMol standardized library) |
| Rescuer threshold | Z ≥ 2.5 |
| Sensitizer threshold | Z ≤ −2.5 |
| Release mode | Public preview (compound-level redaction) |
