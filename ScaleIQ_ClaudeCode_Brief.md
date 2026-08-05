# ScaleIQ Website — Build Brief for Claude Code

## What this document is
This is the build-specific companion to `ScaleIQ_Project_Master_Brief.md` (read that one first for full business/content/positioning context — this document focuses on technical/build rules only). The user has explicitly said: **they are not confident about UI/layout decisions themselves, and want Claude (you) to make those calls.** Use your own design judgment freely wherever this document doesn't give a hard rule.

Read this fully before writing any code.

## Source of truth for design
The file `ScaleIQ_Minimal_Demo.html` (attached alongside this brief) is not an example or a mood board — it is the literal design system. Extract your colors, fonts, spacing, and component patterns (buttons, cards, nav, the Ask box) directly from that file's CSS. Do not reinterpret the brand from scratch, and do not invent new colors, fonts, or button styles outside what's already established there.

## Hard rules — do not break these
These were arrived at through many rounds of iteration and rejection. Do not silently drift from them.

1. **No solid black background as a full section.** Black appears only as a small, contained accent — a card frame, an image placeholder block. Never a full-width/full-section black fill.
2. **Gold is an accent color only.** Logo, buttons, small tags, thin border lines, italic emphasis words, section-label ticks. Never a full-section background fill.
3. **Header is hamburger + logo only.** No visible nav links in the header itself. The hamburger opens a left-sliding panel styled like the reference file's menu (grouped plain-text links under small-caps labels, no boxes/icons).
4. **Never label a menu group "ScaleIQ Capital" or "ScaleIQ Operations."** Use "Portfolio" and "Our Work" — these are now final, confirmed names (not placeholders). The underlying structure can be described in body copy naturally, but never announced as a menu heading. This is a deliberate positioning choice — do not "fix" it back to the explicit names.
5. **Only one real portfolio company exists: Oges.** Never add placeholder/"coming soon" portfolio cards. Show Oges properly (full showcase treatment), not squeezed into a 3-card grid with empty slots.
6. **Fonts:** PT Serif (bold for straight headline text, bold italic in gold for emphasis words) + DM Sans (body) + Orbitron (logo wordmark only, all caps, gold).
7. **Homepage gets a custom layout. Interior pages share simpler templates** (see below) — this was a deliberate scope decision, not a shortcut.

## Where you have full design authority
Anything not covered by a hard rule above is yours to decide. Specifically:

- **Page templates for interior pages.** Define roughly 3 reusable templates rather than one-off layouts per page:
  - A **content template** (About sub-pages, Founder's Note, Our Culture, Leadership)
  - A **listing template** (Portfolio detail, Case Studies, Blog index)
  - A **form/contact template** (Contact Us, For Investors, For Partners, For Portfolio Companies)
  
  Build these three first, then populate every interior page into one of them. Don't design each page individually from zero.
- **Component details not shown in the demo** (e.g., a blog article layout, a case study detail page) — extend the existing visual language with your own judgment. Match the restraint and typography-led hierarchy already established rather than introducing new patterns.
- **Responsive/mobile behavior** — use your judgment; the demo file includes some mobile handling as a starting point.
- **Micro-interactions and polish** (hover states, transitions, spacing refinement) — improve freely as long as you stay inside the color/font system above.

## The "Ask ScaleIQ" box
This is a functional component, not decoration — keyword-matched routing with a simulated navigation transition. It's implemented in the demo file's `<script>` block. Wire it to real routes when real pages exist. Expand the keyword-matching routes table to cover every page in the site, not just the ~12 currently listed — the current list is a first-cut demo set, not final. Keep future query examples weighted roughly 70% portfolio-company-related, 30% everything else (energy clients, founder, investment questions) — that ratio reflects the site's actual business priority, so don't let it drift toward even coverage of every topic.

## Content
Use the attached content Word doc for page copy. Where the doc and the demo file's inline copy conflict (they will, in a few small places), the demo file's wording wins for anything already on the homepage; use the doc for everything else.

## Known gaps — do not invent data to fill these
The following are real, unresolved gaps. Leave them clearly marked (e.g., a visible `[NEEDS INPUT]` comment or placeholder) rather than inventing plausible-sounding numbers or facts:

- Homepage/metrics-band statistics (no real figures yet)
- A founder testimonial/quote for the Portfolio/Impact page
- The founder's actual name (currently referred to generically)
- Our Culture and Join Us page content (first drafts exist but are unconfirmed)
- Blog posts #2 and #3 (titles only, no body copy yet)
- Product photography for Oges (currently a labeled black placeholder block)

## Suggested build order
1. Set up the design tokens (colors/fonts/spacing) as shared variables/theme, sourced from the demo file.
2. Build the homepage first, matching the demo file as closely as possible.
3. Build the three interior page templates.
4. Populate all interior pages using the content doc.
5. Wire the Ask box routing to real pages.
6. Flag every item from "Known gaps" above in a final punch-list for the user.
