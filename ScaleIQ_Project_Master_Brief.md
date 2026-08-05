# ScaleIQ Website — Master Project Brief

This document exists so a brand-new chat (or Claude Code, or a human designer/developer) can pick up this project with zero prior context and not miss a decision that took real effort to reach. If anything here conflicts with an older assumption, this document wins — it reflects the final, current state.

---

## 1. What ScaleIQ is

ScaleIQ is a platform for energy technology, built around two things that work together:

- **Investing** in and growing small/mid-sized energy-technology companies (currently one: **Oges**, oil & gas software, active since 2015, deployed at ONGC, Cairn, and OIL India, products: OgesOne, WIPA, HVMS, Udbhav).
- **Building** — client project delivery for the energy industry (oil & gas companies, GCCs, energy majors, renewables & utilities, energy ISVs, oil service companies). IMPORTANT CORRECTION (this was previously mis-stated as an "in-house digital engineering practice" — that was wrong and should not reappear): ScaleIQ does not employ a separate, independent engineering staff for client delivery. When a client engages ScaleIQ directly, the actual delivery work is done by the relevant ScaleIQ portfolio company (currently Oges), under the ScaleIQ relationship. The client experiences this as working with ScaleIQ end-to-end; the internal routing to a portfolio company is not something the site should expose or explain mechanically — it should read the way Halma's site does when a query gets matched to one of its group companies: smooth, confident, "you're in the right place," never "we're forwarding you."

**Important positioning rule, decided after several rounds:** the site must **never explicitly frame this as "two arms"** (ScaleIQ Capital vs. ScaleIQ Operations) presented as co-equal parallel structure. That framing was tried early and rejected as too obvious/mechanical. The current approach, modeled deliberately on **Halma plc's** website:

- Lead with mission and proof (the portfolio company, Oges), not with corporate structure.
- Mention the investing/building mechanism briefly, once, near the bottom of the homepage ("How We Grow" band) — not as a headline organizing idea.
- In the navigation menu, the two functions are **never labeled "ScaleIQ Capital" / "ScaleIQ Operations."** Use neutral names instead: **"Portfolio"** and **"Our Work."** (Body copy can still refer to "ScaleIQ Capital" / "ScaleIQ Operations" naturally in a sentence — that's fine. It's the menu heading specifically that must stay subtle.)
- Target weighting for how much of the site's attention goes where: **roughly 70% portfolio-company-led, 30% client/operations-led** — inspired directly by how Halma's homepage is structured (mission → companies/proof → brief "built for growth" band, in that proportion).

## 2. Why ScaleIQ exists (founder context — do not lose this)

The founder is a 30+ year veteran of SLB (formerly Schlumberger), including global leadership roles. He is financially secure and not doing this for money or as a retirement project. His observed problem: energy companies, especially small/mid-sized ones, are trying to modernize digitally with far fewer resources than other industries take for granted — working in silos, re-solving the same digital problems independently. At the same time, AI and digital technology are transforming every industry, and energy cannot be the exception. He also believes strong engineering talent isn't concentrated where people expect — part of ScaleIQ's mission is giving that talent (implicitly, though not stated outright on the site) a global stage. **Do not state the India angle explicitly anywhere on the site** — it should be implied through "global reach," never named as a country-specific claim.

A drafted **"A Note From Our Founder"** piece exists (see Section 7). Open items: the founder's actual name still needs to be inserted, and a decision made on whether this becomes a written page, a video (like Halma's "Why Founders Sell to Halma" piece), or both.

## 3. Site architecture (menu structure — current, final)

Header is **hamburger + logo only** — no visible nav links. Tapping the hamburger opens a **left-sliding panel** (not right-sliding — this was corrected), styled with grouped plain-text links under small-caps gold labels, no boxes/icons, closely modeled on a clean AI-product sidebar aesthetic (see Section 5).

Menu groups, final:

- **About** — Who We Are / What We Do / How We Grow / A Note From Our Founder
- **People & Culture** — Leadership / Our Culture / Join Us
- **Portfolio** — Our Companies / Impact & Growth
- **Our Work** — Whom We Serve / Our Services
- **Resources** — Case Studies / Blogs
- **Contact** — Contact Us / For Investors / For Partners / For Portfolio Companies

## 4. Homepage structure (final order, matches the demo file exactly)

1. **Hero** — mission-led headline, no mention of "arms" or structure. CTA: "See our portfolio" (never name a specific portfolio company as the primary hero CTA — that was corrected once already).
2. **Ask ScaleIQ** — an interactive AI-style prompt box (see Section 6).
3. **Portfolio (Oges showcase)** — one full, proper showcase of Oges. **No placeholder/"coming soon" cards** — with only one real portfolio company, showing empty slots looks incomplete, not aspirational. Add more real companies here only when they exist.
4. **"What it means to be a ScaleIQ company"** — a numbered 4-item list (Retain your identity / Gain shared infrastructure / Access group-wide BD / Grow with investment backing) — sourced from the sr's original reference file, kept because it earns its place directly after the Oges proof point.
5. **Impact** — three short proof points tied to Oges's real capabilities (fewer manual workflows, knowledge that stays, real-time visibility).
6. **How We Grow** — the one place the investing + building mechanism is explained, briefly, in a single paragraph (not two cards). Includes a stats row — currently placeholder em-dashes, **real figures needed from the user** (see Section 8).
7. **Closing CTA** — "Building an energy-technology company?" + button. **Light background** (off-white), not black — this was tried as a black bookend section and explicitly reversed after user feedback; do not reintroduce a dark background here.
8. **Footer** — light background, simple single-row layout (logo, links, copyright). Note: this is simpler than the very first locked footer spec (a 5-column footer with a centered gold wordmark) from the original project brief. **This conflict is not yet resolved — flag it, don't silently pick one** (see Section 8).

## 5. Design system

**The literal source of truth is the file `ScaleIQ_Minimal_Demo.html`.** Do not re-derive the design from written descriptions — extract tokens directly from that file's CSS. Summary for quick reference:

**Colors** — white/off-white dominant (`#FFFFFF` / `#F7F5F1`). Gold (`#BD8737`) is an **accent only** — logo, buttons, small tags, thin border/underline accents, italic emphasis words, menu section labels. **Never a full-section background fill.** Black (`#1A1815`, not pure `#000`) is used **sparingly and only as small contained accents** — currently just the frame around the Oges card and its image placeholder. No section of the page should have a solid black background (this was tried multiple times — hero, CTA band, footer — and reversed every time after feedback).

**Fonts** — this went through many rounds (Roboto Slab → DM Serif Display → Fraunces → Playfair Display → **PT Serif**, final). Final pairing:
- **PT Serif**, bold weight, for all headlines; **bold italic in gold** for emphasis words within headlines (not regular-weight italic — bold was specifically requested).
- **DM Sans** for all body text.
- **Orbitron**, all caps, gold, for the logo wordmark only — never for any other text.

**Navigation/menu** — hamburger + logo, top-left (not top-right — corrected). Panel slides in from the **left**. Menu group labels (About, People & Culture, Portfolio, Our Work, Resources, Contact) are **gold**, not grey.

**Alignment rule to remember always** (the user's own words): any new header/nav element must use the exact same shared layout container/class as the page content below it, not a separately hand-typed padding value, even if the values are "supposed" to match. A past bug came from exactly this — two independently-typed padding values that looked identical on paper but drifted. Structural sharing (same CSS class), not matching numbers by hand.

## 6. The "Ask ScaleIQ" component

A functional prompt box (not decorative) sitting in its own band right under the hero. Behavior:

- An idle-state placeholder cycles through example queries with a typewriter effect (types and deletes on a loop).
- If the user clicks/focuses the input while a query is mid-type, it **freezes as complete, static text** in the input — ready to submit, not still animating.
- Submitting (Enter key or the arrow button) does **real keyword-matched routing** — no visible example chips below the box (removed — was cluttering the design). A match triggers a simulated page-navigation transition (the homepage content fades out, a destination "page" fades in with a title, short blurb, and a back link). No match falls through to a contact-capture card (email/phone field).
- Query rotation should be **weighted ~70% portfolio-company questions, ~30% everything else** (energy-client questions, founder questions, investment questions) — mirroring the site's overall positioning ratio from Section 1. The current query list and routing table are a **first-cut demo set** — expand them to cover every real page before this goes live, and keep that same ratio when you do.

## 7. Founder's Note (current draft — needs founder's real name inserted)

> **A Note From Our Founder**
>
> Three decades inside the energy industry teaches you where the real gaps are. Much of that time was spent in global technology leadership at SLB, working closely with operators of every size, from the largest majors to companies running on a fraction of their resources.
>
> The pattern was consistent everywhere: energy companies, especially the smaller and mid-sized ones, are working hard to modernize with far less support than other industries take for granted. Teams work in silos. Budgets are stretched thin. The same digital problems get solved independently, again and again, by companies who could have shared the effort.
>
> At the same time, digital technology and AI are reshaping every industry at a pace few could have predicted even five years ago. Energy cannot sit this out. Too much depends on this industry running well, efficiently, and safely, for that gap to be ignored.
>
> ScaleIQ exists to close it: real engineering resources for energy companies that have never had easy access to them, and real proof of what digital transformation returns, not just promises about what it could return.
>
> There's a second belief behind this platform. Some of the best engineering talent in the world today isn't concentrated where people expect it to be. Part of what ScaleIQ is built to do is put that talent to work on problems that matter, for energy companies anywhere in the world.
>
> This isn't a project to grow and exit. It's the work worth spending the next chapter on.
>
> *— [Founder's name], Founder & CEO*

## 8. Known gaps — real inputs still needed from the user

Do not invent plausible-sounding data for any of these. Leave them clearly flagged instead:

- **Homepage/"How We Grow" stats** — no real figures yet (currently em-dashes).
- **Founder's actual name** — needed to finalize the note above and site-wide bylines.
- **Founder's Note format decision** — text-only, or a video piece (Halma has a "Why Founders Sell to Halma" video — ScaleIQ discussed doing something similar for Oges leadership).
- **A testimonial/quote from Oges leadership** — flagged repeatedly as the single highest-value missing piece of proof on the Portfolio/Impact page.
- **Our Culture and Join Us page content** — first drafts exist (written from reasonable inference, not confirmed facts) — need real input on what ScaleIQ actually values day-to-day, and current open roles.
- **Blog #2 and #3** — titles exist, no body copy. Need source notes/transcript to draft in the same voice as Blog #1.
- **Oges product photography** — the homepage currently shows a labeled black placeholder block where a real product screenshot/photo should go.
- **Footer layout conflict** — the very first locked brief specified a 5-column footer with a centered gold wordmark; the current demo (matching the sr's reference file) uses a simple single-row footer. **Not yet resolved — pick one deliberately, don't let both exist.**
- **Content doc vs. demo file wording** — a few small differences exist between the Word content doc and the homepage copy actually in the demo HTML (e.g., Oges's capability tags are phrased slightly differently in each). Where they conflict, the demo file's homepage wording is the current final version; the doc governs everything else.

## 9. Files in this folder

| File | Purpose |
|---|---|
| `ScaleIQ_Project_Master_Brief.md` | This document — full context, no prior chat history needed |
| `ScaleIQ_ClaudeCode_Brief.md` | Build-specific rules and explicit design authority for whoever/whatever builds the site |
| `ScaleIQ_Minimal_Demo.html` | The literal design system — colors, fonts, components, the working homepage |
| `ScaleIQ_Website_Copy_Full_v3.docx` | Page-by-page content for the full site |

## 10. Explicit standing instruction

The user has stated directly: **they are not confident making UI/layout decisions themselves and want the AI to make those calls.** Do not repeatedly ask them to choose between design options for anything not covered as a hard rule above — use judgment, informed by the demo file and this document, and move forward. Surface decisions to them only when a real gap in Section 8 blocks progress, not for ordinary design choices.
