# Cure Odysseys — Working notebook digest

> **Webflow page:** `/cure-odysseys`
> **Body class / data-page:** `cure-odysseys`
> **CMS Collection:** `Cure Odysseys posts` (see `cms/cure-odysseys-posts.csv`)
> **Optional integration:** wire to Substack RSS feed `https://perlara.substack.com/feed`

---

## Hero

**Eyebrow:** Cure Odysseys · working notebook
**Headline (H1):** A public notebook, one disease at a time.
**Lede:** [Cure Odysseys](https://www.cureodysseys.com) is the Substack where Ethan Perlstein writes the inside view of each Perlara program: the family, the yeast model, the hit list, the N-of-1 protocol, and what fails. It doubles as our real-time lab notebook — not a marketing channel.

**Primary CTA (warm):** Subscribe on Substack → `https://www.cureodysseys.com`

---

## Recurring themes (4-card grid · accent style)

**Kicker:** Recurring themes
**Headline (H2):** What you'll find in the archive.

**Card 1 · Theme — Community medicine & 1-to-N medicine.**
Treating an N-of-1 protocol as a prototype, then scaling to every child carrying the same variant.

**Card 2 · Theme — Yeast avatars.**
Recurring deep-dives on humanized yeast strains for specific variants: FOXG1, SURF1, ECHS1, DHDDS, NARS1, PIGW, PIGN, ADSL, ALG11, PMM2, GNAO1, PGAP3.

**Card 3 · Theme — Two wrongs make a right.**
Posts on paradoxical repurposing — inhibiting the compensating enzyme (GMPPB in GMPPA-CDG), restoring aldose reductase balance (PMM2-CDG).

**Card 4 · Theme — The Anti-Portfolio of Pharma.**
The running argument: big pharma systematically declines IMDs, and the systematic decline is itself the opportunity.

---

## Post digest (CMS-driven list)

**Kicker:** Post digest
**Headline (H2):** Selected Cure Odysseys posts.
**Section lede:** A curated index of foundational, recent, and high-signal posts. Titles link out to the Substack. Short summaries are editorial. In Webflow, this section should be wired to the Substack RSS feed (`https://perlara.substack.com/feed`).

> **Webflow note:** Build as Collection List with these fields (matches `cms/cure-odysseys-posts.csv`): `title`, `summary`, `category` (Foundational / Platform / PMM2-CDG / CDG / Leigh Syndrome / FOXG1 / GNAO1 / tRNA / DHDDS / GPI / Strategy / etc.), `tags` (multi-ref), `substack_url`, `published_date`, `is_featured`. For launch, use the curated entries below; post-launch swap to RSS-fed CMS items.

### Foundational

- **The Anti-Portfolio of Pharma** — The thesis post: why the diseases big pharma rejects are the exact programs a yeast-first, patient-partnered company should run. *Tags: Thesis, Strategy.*
- **Patients are the platform** — How Maggie's Pearl moved epalrestat from an N-of-1 to a 40-patient Phase III at Mayo Clinic in three years for under $5M. *Tags: PMM2-CDG, Trial design.*
- **Community medicine · 1-to-N medicine** — Two companion posts on treating each N-of-1 as a prototype — and scaling it to every subsequent patient carrying the same variant. *Tags: Methods, Policy.*

### Platform

- **Decentralized yeast lab for drug repurposing** — How the Perlara wet lab runs as a distributed facility: instrument, assay, and QC standards that let a 3-person team profile thousands of compounds a month. *Tags: Operations.*
- **Yeast avatars for drug repurposing** — The canonical explainer on humanized yeast models — what they are, what they can and can't do, where *Y. lipolytica* beats *S. cerevisiae*. *Tags: Methods.*

### PMM2-CDG

- **Pharma Chameleon — epalrestat for PMM2-CDG** — A Japanese diabetic-neuropathy drug, repurposed. The mechanistic story of why aldose reductase inhibition restores glycosylation in PMM2-deficient cells. *Tags: PMM2-CDG, Repurposing.*
- **Landry's PMM2-CDG yeast avatar** — The variant-specific avatar built for a single patient: screen, hit list, compassionate-use path. *Tags: PMM2-CDG, N-of-1.*

### CDG

- **Restoring balance to the flux** — GMPPA-CDG: loss of GMPPA causes runaway GMPPB and hypermannosylation. "Two wrongs make a right" — inhibiting GMPPB normalizes flux. *Tags: GMPPA-CDG, Mechanism.*
- **ALG11-CDG Cure Odyssey** — Building and screening the ALG11 yeast avatar. The N-glycosylation branch of the CDG family. *Tags: ALG11-CDG.*

### Leigh Syndrome

- **Yeast-powered drug repurposing screens for SURF1 Leigh Syndrome are done** — The headline result from the first SURF1 campaign: a ranked hit list of rescuers of SURF1-deficient yeast respiration. *Tags: SURF1, Complex IV.*
- **SURF1 yeast hits validated in patient fibroblasts** — Six of the top twelve SURF1 yeast rescuers reproduced in patient fibroblasts — the strongest yeast-to-human translation signal we've measured. *Tags: SURF1, Validation.*
- **Leigh Syndrome drug repurposing updates** — Rolling update across ETC programs: status of SURF1, Complex I, and upcoming *Y. lipolytica* assays. *Tags: Leigh.*

### FOXG1 / GNAO1

- **FOXG1 Cure Odyssey** — The first CRDF-funded Cure Odyssey: FOXG1 syndrome yeast models and early hits. *Tags: FOXG1.*
- **GNAO1 yeast avatars for drug multipurposing** — Variant-specific avatars for the A221D allele, built in collaboration with the Undiagnosed Diseases Network. *Tags: GNAO1, UDN.*

### tRNA synthetases / DHDDS

- **NARS1 Cure Odyssey** — The asparaginyl-tRNA synthetase program — one of a growing family of tRNA-synthetase-linked IMDs in the REMIT pipeline. *Tags: NARS1.*
- **DHDDS Cure Odyssey** — Dolichol biosynthesis defects and the first hits from the DHDDS yeast avatar. *Tags: DHDDS.*

### GPI-anchor

- **Yeast-powered drug repurposing screen → parent-driven N-of-1 (PIGW)** — How a PIGW family took the top-ranked rescuer straight into a parent-driven N-of-1 protocol. *Tags: PIGW, N-of-1.*
- **PIGN Cure Collective** — Formation of a multi-family Cure Collective for PIGN GPI-anchor deficiency, with a shared yeast avatar and screen. *Tags: PIGN.*
- **PGAP3 drug repurposing screens are done** — Completion of the PGAP3 primary screen and first-pass hit triage. *Tags: PGAP3.*

### Purine / valine

- **ADSL Cure Odyssey · ECHS1 Cure Odyssey** — Two paired posts on purine-biosynthesis (ADSL) and valine-catabolism (ECHS1) avatars and their early compound fingerprints. *Tags: ADSL, ECHS1.*

### Strategy

- **Fuel It Still** — A working note on maintaining patient-first momentum through the awkward middle of the drug-development timeline. *Tags: Culture.*

**Bottom link:** Read everything on cureodysseys.com → `https://www.cureodysseys.com`
