# ScaleIQ Website — Daily Progress Log

Running log of work on this project, most recent session first. Maintained automatically at the end of each working session.

---

## 2026-08-05

**Infra audit (start of session)**
- Confirmed `src/App.jsx` imported `Nav`, `Footer`, and 7 pages that didn't exist anywhere in the repo — the app could not build.
- Confirmed `theme.config.js` still had `Roboto Slab` as the heading font (should be PT Serif) and a color palette that had drifted from `ScaleIQ_Minimal_Demo.html`'s `:root` — fixed both, and renamed the CSS custom properties in `main.jsx` to match the demo file's variable names 1:1.
- Confirmed `/capital` and `/operations` route names existed in the old `App.jsx` — a hard-rule violation (menu-facing structure must never say "Capital"/"Operations"). Not carried forward; routes rebuilt as `/portfolio/*` and `/our-work/*`.
- Found `GrainOverlay.jsx` and `ParticleField.jsx` were leftovers from the pre-pivot dark/textured design direction — neither effect appears anywhere in the locked demo file. Deleted both.
- Found a stray `ScaleIQ_Demo_v2_Animated.html` in the folder (not referenced by either brief). User confirmed: delete — done.
- Initialized git (`git init`) and connected the remote: `https://github.com/Aastha-Jain46/scaleiq-website-claude.git`. No push yet this session (see below).

**Full site build**
- Ported the locked demo file's full CSS system into `src/index.css`, keyed to the theme tokens.
- Rebuilt `Nav.jsx` (hamburger + left-sliding panel, full Section 3 menu) and `Footer.jsx` (simple single-row — see open item below).
- Rebuilt `AskScaleIQ.jsx` with real `react-router` navigation (no more simulated page view) — expanded keyword-routing table to cover every real page, kept the ~70/30 portfolio-vs-everything-else query weighting.
- Rebuilt `Home.jsx` to match the demo file's 7 sections exactly.
- Built 3 interior templates (`ContentTemplate`, `ListingTemplate`, `FormTemplate`) and scaffolded all ~19 interior pages (About ×4, People & Culture ×3, Portfolio ×2, Our Work ×2, Resources ×2 + 1 blog detail, Contact ×4, Legal ×2) into `src/App.jsx`.
- Verified the full build in-browser: no console/server errors, nav panel, routing, and the Ask box all confirmed working.

**Real content pulled in** (from the docx, `ScaleIQ_Website_Copy_Full_v3.docx`, and — per the user's go-ahead mid-session — the current live site, via `scaleiq_global_build.zip` the user dropped in the folder):
- Full About Us, Portfolio, Impact & Growth, Contact page copy from the docx.
- **Founder's name resolved**: Rajeev Sonthalia, Founder & CEO — found on the live site's Leadership page, no longer a placeholder in `FoundersNote.jsx`.
- Full Leadership page populated: 4 leadership names + roles (from docx) plus the 6-person core team (from the live site — Satya Prakash Gupta, Sanskar Jain, Amit Bansal, Anjani Kumar, Bhaswati Deka, Aastha Jain).
- All 17 real case studies pulled from the live site and categorized into the 6 confirmed categories — `Case Studies` page now has real, filterable content instead of a placeholder.
- Real intro copy for all 6 "Whom We Serve" segments and all 6 "Our Services" entries, pulled from the live site.
- Homepage "How We Grow" stats now show the figures currently live on scaleiqglobal.com (715+ global energy experts, 250+ years cumulative experience, 378+ projects delivered, 171+ customers) — flagged inline as needing a quick currency check, not silently treated as final.
- A real client testimonial (GCC staff-augmentation context) surfaced and placed on the Whom We Serve page.
- Confirmed via the live site that Oges is still the only real portfolio company (no silent scope change to check for).

**Still open** — see punch list below.

**Git**: first commit made and pushed this session, once the homepage update pass below was verified.

---

### Homepage content + animation pass (same day, follow-up)

- User pointed out real gaps in the first pass: no animation (site felt static), all interior pages using one flat layout when 2-3 richer layouts were wanted, and specifically that the current live site's blogs weren't found. Investigated further and found the blogs (7 real posts, at `/blogs/:slug`, not surfaced under the Resources/Blogs tab or `/insights` I'd checked before) plus richer case study data (category, sub-category, technologies used, real ROI figures) in the live site's JS bundle — corrected the record with the user rather than silently fixing.
- User then supplied `ScaleIQ_Final_Website_Content.md` — new master content + animation spec for the homepage specifically, superseding the docx for this page. Rebuilt `Home.jsx` to match: new hero copy, section order changed (What it means → Impact → Our Companies now precedes How We Grow), two new sections ("Latest from ScaleIQ", "Driven by people who've lived inside this industry"), and the full animation spec — staggered hero load-in, scroll-reveal at 15% threshold (`useReveal.js` updated), staggered list reveals, contained parallax on the hero glow and Oges visual (`useParallax.js`, new), count-up stat animation (`CountUpStat.jsx`, now wired in and updated), custom hover states, and `prefers-reduced-motion` support throughout (`usePrefersReducedMotion.js`, new).
- Expanded `AskScaleIQ.jsx`'s routing table to the new doc's exhaustive one-route-per-page table (21 entries).
- Verified in-browser: content and section order confirmed correct via DOM/text extraction, no console/build errors, Ask box routing tested end-to-end. Note: full animation *playback* couldn't be visually confirmed in this session's automated browser pane (it wasn't actively compositing frames, a tool/environment limitation, not a code issue) — worth a manual look in a real browser tab.
- Noted and acknowledged, not yet acted on: the docx's "in-house engineering practice" framing is confirmed wrong sitewide and will need correcting on every interior page still sourced from the docx, when we get to them.

---

## Punch list — open items (as of 2026-08-05)

Marked `[NEEDS INPUT]` inline on the actual pages, listed here for a single source of truth:

1. **Oges product photography** — homepage and Portfolio page both show a labeled black placeholder block.
2. **Oges leadership testimonial** — still the single highest-value missing proof point on the Portfolio/Impact page. (Note: a *different*, real testimonial from a GCC staffing client was found and used on the Whom We Serve page — that one's real and live, but it isn't the Oges-specific one this item is asking for.)
3. **Founder's Note format decision** — text-only (as built), a video piece, or both.
4. **Our Culture / Join Us page copy** — currently first drafts (inference-based), flagged inline, need a real read/edit pass. Join Us also needs actual open roles or a standing "always hiring for X" line + application link.
5. **Blog #2 and #3** — no titles or content found anywhere, including the live site. Need source notes/transcript.
6. **Blog #1 full body text** — confirmed the docx only has the title ("Why Digital Transformation Fails to Deliver Expected Outcomes in Complex Operations," Rajeev Sonthalia) and that it's "complete and stays as is" — but the actual article text wasn't in the docx, and it isn't published on the live site's Blogs tab either (that tab currently shows no entries). The full text is needed from somewhere else.
7. **Footer layout** — not resolved, per the Master Brief's explicit instruction not to silently pick one. Currently built with the simple single-row footer (matches the locked demo file). The alternate 5-column gold/black footer exists as a reference image in the docx but is from the pre-pivot design and contradicts the current "no black background" rule — recommend formally retiring that version rather than treating it as still undecided, but flagging rather than deciding unilaterally.
8. **Homepage/"How We Grow" stats** — now filled with the figures currently live on scaleiqglobal.com (715+/250+/378+/171+) rather than left as em-dashes, but flagged inline for a quick confirm-it's-current check since this wasn't explicitly re-confirmed by the user this session.
9. **Legal pages** (Terms of Use, Privacy Statement) — not in the Master Brief's known-gaps list but genuinely have no copy anywhere provided; stubbed with a flag rather than left silently blank.

Not gaps, but worth noting: the current live site (scaleiqglobal.com) has much deeper per-segment/per-service content than what's been ported in (each "Whom We Serve" segment and "Our Services" entry has additional sub-tabs — e.g., Upstream/Midstream/Downstream/Distribution & Retail under Oil & Gas Companies — that go well beyond the intro paragraph used here). This was a deliberate scope choice to match the brief's "simpler templates for interior pages" decision, not an oversight — flagging in case the user wants that depth ported over later.
