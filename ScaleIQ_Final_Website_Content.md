# ScaleIQ — Final Website Content & Build Spec

This is the running master document for finalized page content and animation direction, agreed page by page in the content-strategy chat, before being handed to Claude Code. Each page section below is marked FINALIZED once locked. Do not treat anything in `ScaleIQ_Website_Copy_Full_v3.docx` as authoritative once a page appears here — this document supersedes it for any page listed below.

**Standing content rules established during this pass (apply to every future page too):**
- Lead every benefit statement with what ScaleIQ *does* / what a partner *gains* — never lead with what ScaleIQ *doesn't* do or what's *taken off someone's plate*. Negation-framing reads as defensive, not confident.
- Never use "specialist," "generalist," or similar words that imply a partner/portfolio company was inferior before ScaleIQ. It reads as condescending to founders who are already good at what they do.
- Never frame a benefit as rescue from a struggle ("you're not alone," "problems you're facing now"). Reframe as access to a peer level instead — founders resent being told they need help, they respond to being told they're joining people who already operate at their level.
- Client-facing copy should never expose the internal delivery mechanic (that project work is routed to and delivered by a portfolio company, not an in-house ScaleIQ engineering team). The client experience should read as working with ScaleIQ end-to-end, matching how Halma's site handles routing to its group companies: smooth and confident, never "we're forwarding you."
- Domain terminology (buy-and-build, permanent capital, operating group, bolt-on acquisition, compounder) should be used deliberately where it lets a knowledgeable reader grasp the model in a few words, rather than over-explaining in plain sentences every time. Use plain language for first-read clarity (hero headline/sub), then let domain terms reinforce depth as the reader goes further into the page.
- **CRITICAL, UNRESOLVED**: `ScaleIQ_Website_Copy_Full_v3.docx` describes ScaleIQ Operations as "an in-house engineering practice" / "our own engineering practice" throughout (Who We Are, What We Do, How We Grow, Whom We Serve, Our Services, Our Culture, Join Us). This has been confirmed WRONG for the homepage content below — the real model is that client project delivery happens through ScaleIQ's portfolio companies (currently Oges), not a separate in-house team. This correction has NOT yet been applied to the interior pages still sourced from the docx (Whom We Serve, Our Services, What We Do, Our Culture, Join Us, Case Studies, etc.) — treat every one of those pages as needing the same correction pass before they're built for real.

**Known real content found and resolved during this pass:**
- Founder/CEO name: **Rajeev Sonthalia**. Other leadership: Chitwan Garg (Chief Business Officer), Amit Ranjan (Chief Solutions Architect), Rajvardhan Singh (Corporate Development), plus a core team of six others.
- Blog #1 is complete: "Why Digital Transformation Fails to Deliver Expected Outcomes in Complex Operations," by Rajeev Sonthalia. Blogs #2 and #3 are titles only — still a real gap.
- Live site (scaleiqglobal.com) has a real, detailed case study (AI-based reservoir modeling, 6 weeks → 3 days turnaround, 95% forecast accuracy) — usable for the Case Studies page once we get there. Not used on the homepage per instruction (case studies are portfolio-company-specific and belong elsewhere; homepage weighting for client-facing proof stays at ~30%).
- Homepage stat-row figures (715+ global energy experts, 250+ years cumulative experience, 378+ projects delivered, 171+ customers) were pulled from the live site by Claude Code and are flagged VERIFY — confirm these are still current before shipping.

---

## HOMEPAGE — FINALIZED

### 1. Hero
- Eyebrow: `ENERGY TECHNOLOGY · BUY-AND-BUILD`
- Headline: `Growing the digital backbone of the energy industry.`
- Subheading: `ScaleIQ backs energy-technology companies with capital and resources, and builds technology for the wider energy industry as a trusted partner.`
- CTA (primary): `See our portfolio`
- CTA (secondary): `See how it works →`

**Animation:** Content fades up on page load, staggered — eyebrow, then headline, then subheading, then CTAs, roughly 100ms apart. A small, contained radial gold glow sits near the hero (never a full background fill) and drifts slowly on scroll (parallax, translateY at ~0.15–0.2x scroll speed) — subtle, decorative only.

### 2. Ask ScaleIQ
Unchanged component — typewriter-cycling placeholder, freezes to static text on focus/click, real keyword-matched routing on submit, falls through to a contact-capture card if no match.

**Expanded routing table (every real page now covered):**

| Keywords | Destination page | Response blurb |
|---|---|---|
| how many, portfolio companies does, number of companies | Portfolio Companies | One so far — Oges, active since 2015. See the full story and what comes next. |
| how do i become, become a scaleiq, become a portfolio, join scaleiq, want to join, sell my company, acquire my company | For Portfolio Companies | Tell us about your company. Every conversation stays confidential, no obligation on a first call. |
| receive, after joining, what happens, benefit, what do i get | Impact & Growth | Capital, resources, and a network of peer companies — while you keep your name and leadership. |
| what we look for, criteria, qualify, does scaleiq acquire, what kind of companies | Portfolio Companies | Founder-led energy-technology companies with an established product and paying customers, ready to grow further. |
| majority stake, how much equity, ownership | Portfolio Companies | ScaleIQ structures each investment individually — covered case-by-case in an initial conversation. |
| how long does, how long will, process take | For Portfolio Companies | Every deal moves at its own pace — but the first conversation is always fast. |
| investment policy, how does scaleiq invest, how we grow | How We Grow | How ScaleIQ evaluates, structures, and grows energy-technology investments. |
| founder, who started, ceo | A Note From Our Founder | Thirty years in energy, and why he started ScaleIQ. |
| leadership, management team, who runs | Leadership | The team behind ScaleIQ, and the industry experience they bring. |
| build software, digital partner, engineering partner | Whom We Serve | ScaleIQ works with oil & gas companies, GCCs, energy majors, renewables & utilities, energy ISVs, and oil service companies. |
| what services, operations offer | Our Services | Application development, AI enablement, staff augmentation, product engineering, professional services, and technical consulting. |
| serve, clients, who do you work with | Whom We Serve | Oil & gas companies, GCCs, energy majors, renewables & utilities, energy ISVs, and oil service companies. |
| who is scaleiq, what is scaleiq, tell me about scaleiq | Who We Are | ScaleIQ invests in and builds energy-technology companies. Here's the full story. |
| what does scaleiq do, your business model | What We Do | Two things, working together: backing energy-technology companies, and building for the energy industry. |
| culture, work environment, what's it like to work there | Our Culture | What it's actually like inside ScaleIQ, day to day. |
| careers, jobs, hiring, open roles, join the team | Join Us | Current openings and what we look for. |
| case study, case studies, examples of your work, past projects | Case Studies | Real projects, real results — see how ScaleIQ has solved this before. |
| blog, articles, insights | Blogs | ScaleIQ's thinking on energy technology, in depth. |
| contact, get in touch, talk to someone | Contact Us | Let's start a conversation. |
| invest in scaleiq, investor, funding scaleiq | For Investors | Information for those looking to invest in ScaleIQ itself. |
| partner with scaleiq, partnership, reseller, alliance | For Partners | How partnerships with ScaleIQ work. |

Note: the 70/30 portfolio-weighting rule applies only to the rotating typewriter example queries, not to this table — this table must stay exhaustive, one route per real page.

**Animation:** No new animation beyond the existing mechanic; add a subtle gold glow / box-shadow intensification on the input when it's focused.

### 3. What it means to be a ScaleIQ company
01. **Keep building what you already built.** You keep your brand, your leadership, and the technical culture your team already built, and gain the platform to grow it further. Oges is still Oges. Future portfolio companies keep their name and their independence, backed by more than they had access to before.

02. **Open doors you couldn't reach alone.** ScaleIQ's group-wide business development works alongside your technical sales team, putting your product in front of clients and sectors that would have taken years to reach independently.

03. **Grow with permanent capital behind you.** ScaleIQ Capital gives every portfolio company permanent capital, the runway to invest in product, people, and market expansion, without the constant uncertainty of chasing the next funding round.

04. **Join a network of founders already playing at this level.** Portfolio companies get direct access to peer leadership across the ScaleIQ group, other founders and executives who've already worked through the same regulatory hurdles, enterprise sales cycles, and scaling decisions in energy technology. The kind of insight you usually only get after making the mistake yourself.

**Animation:** Section fades up on scroll into view. The four items stagger in individually (~100–150ms apart) rather than appearing all at once.

### 4. Impact
Headline: `What changes when energy companies get resources they've never had.`
- **Fewer manual workflows** — Field and back-office processes that used to run on spreadsheets and phone calls, automated end to end.
- **Knowledge that stays** — Operational knowledge captured and shared, instead of leaving the company when an engineer does.
- **Real-time visibility** — Production data operators can actually see and act on, not just report on after the fact.

**Animation:** Fades up on scroll, three items stagger in.

### 5. Our Companies
Headline: `This is already working, in one of energy's toughest environments.`
Lead: `ScaleIQ's model isn't a pitch. Oges is it, already running, already trusted by operators who can't afford software that doesn't hold up in the field.`
[Oges company card content unchanged from current build — company tag, name, description, product chips (OgesOne, WIPA, HVMS, Udbhav), photography placeholder still a known gap.]

**Animation:** Section fades up on scroll. Card lifts slightly with a soft shadow on hover. The product-visual block gets a subtle parallax shift as the user scrolls past it (small magnitude, contained to the card, never affecting layout).

### 6. How We Grow
Headline: `The engine behind every company we back.`
Lead: `ScaleIQ follows a buy-and-build model built specifically for energy technology: we back companies with strong products and give them permanent capital and the resources to grow further. Companies keep their name, their leadership, and their independence — what they gain is what they couldn't build alone.`
Stat row: unchanged, still flagged VERIFY (715+ global energy experts / 250+ years cumulative experience / 378+ projects delivered / 171+ customers).

**Animation:** Fades up on scroll. Stat numbers count up from 0 to their target value once the section enters the viewport (eased, ~1.2s, triggers once only).

### 7. Latest from ScaleIQ
Single real entry (not a padded 3-item grid): "Why Digital Transformation Fails to Deliver Expected Outcomes in Complex Operations" — Rajeev Sonthalia, CEO → links to Blogs / Resources.

**Animation:** Fades up on scroll.

### 8. Driven by people who've lived inside this industry
`The hardest problems in energy aren't about building new technology — they're about making it work inside systems that are live, regulated, and interdependent, with zero room for downtime. ScaleIQ is founded and led by industry veterans who've spent careers inside energy, not generalists learning the constraints for the first time.`
CTA: `More about our leadership →`

**Animation:** Fades up on scroll.

### 9. Closing CTA
Unchanged: `Building an energy-technology company?` / `If you're weighing what's next — capital, growth, or simply more resources than you have today — we'd like to talk.` / `Talk to us about joining ScaleIQ`

**Animation:** Fades up on scroll. Button gets a real custom hover (lift + shadow + slight color darken), not default browser styling.

### 10. Footer
Unchanged. Static, no animation.

---

## Global animation rules (apply sitewide, not just homepage)
- All scroll-reveals use IntersectionObserver, trigger once, ~15% visibility threshold.
- Respect `prefers-reduced-motion`: disable all motion and show content immediately for users with that preference set.
- No animation should delay real content from being readable by more than ~700ms.
- Hover states must be custom (transform/shadow/color transitions), never left as unstyled default browser behavior.

---

## ABOUT SECTION (Who We Are / What We Do / How We Grow) — FINALIZED

**Standing rule specific to these three pages, and to any future "identity/model" page (not company-specific pages like Our Companies):** Never name or describe Oges (or any specific portfolio company) on Who We Are, What We Do, or How We Grow. These pages describe the model, not a company. Oges only belongs on the Portfolio / Our Companies page, and — once more portfolio companies exist — no single company should be a recurring anchor across the site. This mirrors Halma's own real site exactly: their Who We Are and How We Grow pages never name a single one of their ~50 companies; only "Our Companies" does.

**Structural pattern for all three pages, borrowed directly from Halma's real site (their "Who We Are" and "How We Grow" pages were checked directly, not assumed):** each page is a hub made of several short (2–4 sentence) subsections, not two or three long paragraphs. A sticky "quick links" side rail (collapsing to horizontal chips on mobile) lists that page's subsections and scrollspy-highlights whichever one is currently in view; clicking jumps to it. Every subsection ends in a plain, spoiler-free signpost line + link where it points to a fuller page elsewhere (e.g. Leadership, Founder's Note) — the teaser must never quote or preview the actual best material from the destination page, it should only describe that fuller content exists and give a reason to click. (Mistake already caught and fixed once: an earlier draft quoted the founder's best line directly in the Who We Are teaser, which both felt repetitive and reduced the incentive to click through to the real Founder's Note page — don't reintroduce that pattern anywhere.)

Each page ends with a "Continue" band distinct from any in-page CTA, moving the reader to the next page in the sequence: Who We Are → What We Do → How We Grow → (conversion CTA). This keeps the three pages functioning as one built narrative arc instead of three disconnected pages.

**ANIMATION VARIETY RULE (applies to all three pages, replaces "fade-up on everything"):** plain fade-up-on-scroll for every single subsection, on every page, is too repetitive — it's the right pattern for the homepage but reused unchanged here it reads as the same trick copied three more times, not real design. For these three About pages specifically: alternate subsections between sliding in from the left and sliding in from the right (not just fading up in place) as they scroll into view, so the page has real visual rhythm rather than one repeated effect. Interactive elements (the "+" strip toggles, the checklist items, any button) should get a distinct tap/press state — a brief gold flash or gold underline animation on click/tap, not just a hover state, so the site feels responsive to touch/click specifically, not only to mouse hover. Keep the homepage's own animation system (fade-up, parallax, count-up) exactly as it is — this variety rule is additive, only for About section subsections and interactive elements, not a homepage change.

**TESTIMONIAL GAP, BEING HONEST ABOUT IT:** only one real testimonial exists anywhere in our source material (the client quote already placed on What We Do). Adding testimonials to Who We Are or How We Grow as well would mean inventing quotes, which breaks our own "don't invent data" rule — not doing that. Instead: mark a `[NEEDS INPUT: testimonial or founder quote]` placeholder note on How We Grow (right after the stat row is a sensible spot — proof-of-model is exactly what a testimonial there would reinforce), so it's visibly flagged as a real, known gap rather than silently absent. Who We Are doesn't need one — its "proof" element is the Founder's Note pointer, which is enough for that page.

**REVISION NOTE (supersedes the first draft of this section):** The first build of these three pages was reviewed live and had two real problems, both now corrected below: (1) content was too thin — short 2-3 sentence blocks reading as mostly whitespace and exit links, not substance; (2) the five-principle grid on How We Grow was built as a collapse-by-default "+" accordion, which meant a first-time visitor saw only titles and plus signs with zero visible text — the content was there but effectively invisible. Both are fixed in what follows. Also new: every page headline now carries one gold-italic emphasis word, matching the homepage's exact typographic pattern (`h1 em` / `h2.section-h em` — italic, bold, gold) — these pages must not read as a flatter, plainer design system than the homepage.

### Who We Are
Headline: `Energy keeps the world running. We make sure its technology never falls *behind*.` (emphasis word: "behind")

Subsections, in order:
- **Our Purpose** — For decades, energy companies, especially smaller and mid-sized ones, have modernized with far less than other industries take for granted. Teams work in silos. The same digital problems get solved from scratch, again and again, by companies that could have shared the effort. ScaleIQ exists to close that gap.

  This isn't a small gap to close. Oil and gas operations span a uniquely interconnected landscape, field operations, engineering workflows, enterprise systems, safety and regulatory constraints, all tightly coupled to each other. Most attempts at modernization tackle one piece at a time, another tool, another vendor, another disconnected system. ScaleIQ backs and builds companies that treat this as one connected problem, not a checklist of isolated fixes.
- **Our Model** — ScaleIQ backs energy-technology companies for the long term through a buy-and-build model, permanent capital, not the kind that expects an exit in five years. Every company we back keeps its name, its leadership, and its independence. What it gains is capital, a peer network, and the runway to grow into problems it couldn't tackle alone. This is a model built specifically for one industry, not a generalist portfolio spread thin across sectors we don't understand as deeply. → *See how we grow*
- **Our Leadership** — ScaleIQ is led by people who've spent careers inside energy and energy technology, not observing the industry from a distance. That experience shapes which companies we back, which projects we take on, and how we tell the difference between real progress and a good demo. → *Meet our leadership*
- **Founder's Note** — There's a fuller story behind why ScaleIQ exists, from the person who started it. → *Read the founder's note* (deliberately no quote/preview here — see the spoiler rule above; this one stays short on purpose, it's a pure pointer, not a content gap)

**Animation:** Fade-up per subsection on scroll. Quick-links rail highlight transitions smoothly (no snapping) as the active section changes.

### What We Do — CORRECTED: bigger heading treatment, clearer filter mechanic

**Headline, must render LARGE, exactly matching the homepage's h1 treatment (same font-size scale as the homepage hero, not the smaller page-title size used elsewhere)**: `We help energy companies do more than survive. We help them *lead*.` (emphasis word "lead" in gold italic, bold, same as every homepage emphasis word). This was too small/plain in the last build — it must look and feel like the homepage's headline, not a secondary page title.

**Filter mechanic, corrected to be clearer** (this replaces the vague toggle from before): two filter tabs, "For Portfolio Companies" and "For Clients." Selecting one shows that set of points, selecting the other swaps to its set — this is a real filter, not just an emphasis toggle. Below both filtered sets, one section stays visible regardless of which filter is selected, the point that's true either way.

**"For Portfolio Companies" filter shows:**
- Permanent capital, not a five-year exit clock.
- Keep your name, your leadership, and your independence.
- Access to group-wide business development and a network of peer companies.
→ *See our portfolio*

**"For Clients" filter shows:**
- Delivered by teams that already understand upstream, midstream, and downstream workflows.
- Held to the same standard ScaleIQ holds its own portfolio companies to.
- One relationship, not a fragmented vendor arrangement.
→ *See our work*

**Always visible below, regardless of filter selection ("Either way"):** Real industry depth, not generalist guesswork learned on someone else's contract.

**Proof (stays below, unaffected by the filter):** *"ScaleIQ Oges helped bring structure and visibility to complex operational workflows that were earlier managed through fragmented processes. The engagement enabled more disciplined, data-driven decision-making across teams and locations."* — VP Digital, National Energy Company.

**Animation:** filter switch animates as a smooth crossfade/slide between the two point-sets, not an instant swap. Testimonial gets a distinct, larger visual treatment (big italic serif type, centered, own quiet band), fading in with a slight scale-up as it enters view.

### How We Grow — CORRECTED: bigger heading, stronger content

**Headline, must render LARGE, exactly matching the homepage h1 scale (same correction as What We Do above — this was too small/quiet in the last build):** `The engine behind every company we *back*.` (emphasis word "back" in gold italic, bold).

**Growth model paragraph — strengthened, don't use the shorter earlier version:** ScaleIQ follows a buy-and-build model built specifically for energy technology, we back companies with strong products and give them permanent capital and the resources to grow further. This isn't opportunistic dealmaking. It's a deliberate, repeatable model: find founder-led companies solving real problems in energy, back them for the long term rather than toward a five-year exit, and let each new company strengthen the network the next one joins. Companies keep their name, their leadership, and their independence throughout, what they gain is what they couldn't build alone.

- **What we look for** — founder-led leadership, an established product with paying customers, ambition to grow further, not exit the industry.
- **Five principles — THIRD AND FINAL CORRECTION: the orbital diagram is CUT, do not rebuild it.** It was attempted twice and failed both times (most recently: the central placeholder text overlapped illegibly with a principle label, and the connecting lines rendered as a chaotic radiating star instead of a clean orbit). Stop iterating on it — simplicity that renders correctly beats ambition that doesn't. Final version, strips only, no diagram:
  1. **Layout: full-width stacked strips, not a grid, and no circular graphic above them.** Five rows, each spanning the full content width, stacked vertically, one per principle. Never a multi-column card grid for this content — 5 items in a 2-column grid always produces an uneven last row.
  2. **Each strip shows a short 1-line teaser by default (always visible, never blank), with the "+" expanding to reveal the full paragraph.** This part worked correctly before and stays exactly as it was — nothing should ever render as just a title and a plus sign with zero content.
  3. No image, no orbital graphic, no sync animation. A clean, well-executed stacked list is a better page than a broken diagram — this is the final call.
  One-line teasers (always visible, write these — don't leave Claude Code to invent them):
  1. Domain Driven — *"Shaped by real operators, not abstract best practices."*
  2. Focused High-Impact AI — *"AI tied to outcomes, not experiments that never ship."*
  3. Outcomes Over Offerings — *"Built to solve the whole problem, not sell a service menu."*
  4. One Cohesive System — *"One standard across the group, not a patchwork per project."*
  5. Deep Data Engineering — *"Connecting the data energy operations actually depend on."*
  Full five-principle text, revealed on expand (unchanged from before, only the presentation changed):
  1. Domain Driven — ScaleIQ and its portfolio companies engage deeply with oil & gas domain experts before proposing any solution. Constraints, decision logic, and risk on the ground shape every product decision, not abstract best practices imported from other industries.
  2. Focused High-Impact AI — Every portfolio company prioritizes AI use cases tightly linked to real operational and commercial outcomes, not experiments that never leave a slide deck.
  3. Outcomes Over Offerings — ScaleIQ companies are built to solve problems end-to-end, not to sell a fixed menu of services. What needs to work matters more than what's easiest to package.
  4. One Cohesive System — Capabilities and domain expertise come together under a single standard across the group, so data stays consistent and architecture holds up group-wide, not just project by project.
  5. Deep Data Engineering — Every ScaleIQ company works to connect fragmented data across upstream, midstream, and downstream systems, building the kind of trusted, governed data environment energy operations actually need.
- **Why founders choose ScaleIQ** — short bullet list, not narrative, animates in as a staggered checklist (small gold check mark per line, fading in one after another):
  - Retain your name, leadership, and independence
  - Access permanent capital without losing control
  - Tap into group-wide business development
  - Join a network of peer companies solving similar problems
  - Gain domain-specific engineering depth built for energy
- Stat row — unchanged, still flagged VERIFY. (Confirmed working correctly on this page as of the last check — real numbers count up, not stuck at "0+" here; if a future check finds it stuck again, treat it as a regression.)
- **Talk to our team** — Rajvardhan Singh, Corporate Development → *Start a conversation* (this is the page's real conversion CTA, not a "Continue" band, since it's the last stop in the About narrative arc).

**Animation:** Fade-up per subsection. Five-principle tiles use hover/click expand (not scroll-reveal) — see interactive pattern above.

**Layout note for Claude Code, all three pages:** build the sticky quick-links rail as one shared component (not three separate implementations), fed by each page's own list of subsection anchors, so it's consistent and only needs building once.

---

## PEOPLE & CULTURE (Leadership / Our Culture / Join Us) — FINALIZED

**Group treated as one connected arc, same as About**: Leadership → Our Culture → Join Us. No "Continue to X" banners between them (tried on About, didn't work, dropped sitewide) — rely on the quick-links rail and hamburger nav for movement between pages instead.

### Leadership — FOURTH AND FINAL CORRECTION: the spotlight-circle/morph component is CUT, replace with the real site's actual simple pattern

Checked scaleiqglobal.com/about/leadership directly. It's a plain, clean 4-column photo grid, no morphing, no spotlight interaction, and that's genuinely what's wanted here — stop building interactive cleverness onto this page, it doesn't need it.

**Layout:** four columns (photo, name, title), even width, aligned grid, same treatment for all four, no one photo larger or centered. Each card: photo on top, name in bold PT Serif below it, a thin horizontal divider line, then the title in small-caps letter-spaced grey text underneath. Real photos already exist at `src/assets/leadership/{rajeev,chitwan,amit,rajvardhan}.png` — use these.

**Animation:** staggered fade-up reveal on scroll, one column after another (this is what the real site does — confirmed directly), not simultaneous, not a click-to-morph interaction. A subtle hover lift on each card is fine for polish, nothing more elaborate than that.

Short framing intro above the grid stays: *"ScaleIQ is led by people who've spent their careers inside energy and energy technology, not observing it from a distance. That experience shapes every company we back and every project we take on."*

Below the grid, add a real closing section (not filler), adapted from Constellation Software's actual three-pillar philosophy (found directly on csisoftware.com, genuinely strong material):

**Our Approach to Leadership**
- **Autonomous Leadership** — Every company we back keeps its own leadership team, empowered to make decisions closest to the market they serve, not managed from a distance.
- **Investment in Talent** — People across ScaleIQ and its portfolio companies learn from each other in real time, not siloed into separate organizations that never compare notes.
- **Operational Resilience** — Built by staying close to customers and sharing what works across every company, not by chasing trends.

**CORRECTED — designation only, no credential/experience lines at all.** Just name and title, nothing else under any of the four:
- **Rajeev Sonthalia** — Founder & CEO
- **Chitwan Garg** — Chief Business Officer
- **Amit Ranjan** — Chief Solutions Architect
- **Rajvardhan Singh** — Corporate Development

(The "Former SLB..." lines from the earlier draft are dropped per direct instruction — designation only on this page. The Schlumberger background can still live in the "Our Approach to Leadership" closing section below in general terms if useful, but not as a per-person tag.)

(Note: deliberately no city/country stated anywhere for any of the four — consistent with the standing rule to never state the India angle explicitly anywhere on the site. "SLB" carries the credibility without naming a place.)

### Our Culture

This page is allowed a deliberately warmer, more conversational tone than the rest of the site, everywhere else stays crisp and analytical for a CXO reader, this one page is for people evaluating whether they want to work here, and should feel human, not like an investment memo.

**Headline:** The strength of a group, the speed of a small team.

ScaleIQ works in an industry where mistakes are expensive and downtime is not an option. That shapes how we work more than any values poster could.

- **Small, accountable teams.** Ownership stays close to the work, not passed up a chain.
- **Depth over breadth.** We hire people who want to go deep into a hard problem, not skim across many easy ones.
- **Movement across investing and engineering.** Our people aren't siloed into one side of what ScaleIQ does, that breadth keeps judgment sharp on both.

*"Some of the best engineering talent in the world today isn't concentrated where people expect it to be. Part of what ScaleIQ is built to do is put that talent to work on problems that matter, for energy companies anywhere in the world."* — from the Founder's Note (different excerpt than the one used on Who We Are — deliberately, so nothing repeats).

**Visual treatment — SECOND CORRECTION: drop the "organic scattered collage" idea entirely.** It was a sudden departure from the rest of the site's neat, aligned, minimal visual language, and it doesn't fit. The whole site is clean and orderly (even the Leadership circles, which are interactive, are still evenly spaced and aligned, never scattered or overlapping) — Our Culture should not introduce a different, looser visual language just because it's the "warm" page. Warmth comes from tone and photography content, not from breaking the site's layout discipline.

**Corrected layout:** a single evenly-spaced row (or clean two-row grid on smaller screens) of same-size circular photos, same sizing/alignment logic as the Leadership circles, consistent spacing, no overlap, no varied sizes. Interactivity comes from hover/click, not from the layout being loose: each circle lifts slightly and reveals a short caption on hover, same restrained interaction style used elsewhere on the site (card hovers, button hovers).

**Imagery:** since we have zero real team photos, use royalty-free stock photography now (energy-industry-appropriate: engineers/teams collaborating, offices, field/industrial settings — avoid anything that reads as a specific named location or generic/cheesy stock), sourced from a free library such as Unsplash. This is real, visible, swappable-later imagery, not a debug placeholder. Warm-toned backgrounds using the site's existing off-white (`--off`), not new colors — the warmth is in the content and tone, the structure stays as disciplined as every other page.

### Join Us

**Headline:** Work on problems that matter, wherever you are.

ScaleIQ is a small team doing two demanding things at once, investing in energy-technology companies, and building the systems that run the energy industry. We look for people who already know energy, or want to.

**Open roles:** `[NEEDS INPUT: current openings, or a standing "always hiring for X, Y" line]` — build the section structure now (ready to receive real listings), do not fabricate job postings.

CTA: *Get in touch* → Contact Us

---

## A NOTE FROM OUR FOUNDER — FINALIZED (7th page of the About/People & Culture group)

Full letter, real name filled in (Rajeev Sonthalia):

"Three decades inside the energy industry teaches you where the real gaps are. Much of that time was spent in global technology leadership at SLB, working closely with operators of every size, from the largest majors to companies running on a fraction of their resources.

The pattern was consistent everywhere: energy companies, especially the smaller and mid-sized ones, are working hard to modernize with far less support than other industries take for granted. Teams work in silos. Budgets are stretched thin. The same digital problems get solved independently, again and again, by companies who could have shared the effort.

At the same time, digital technology and AI are reshaping every industry at a pace few could have predicted even five years ago. Energy cannot sit this out. Too much depends on this industry running well, efficiently, and safely, for that gap to be ignored.

ScaleIQ exists to close it: real engineering resources for energy companies that have never had easy access to them, and real proof of what digital transformation returns, not just promises about what it could return.

There's a second belief behind this platform. Some of the best engineering talent in the world today isn't concentrated where people expect it to be. Part of what ScaleIQ is built to do is put that talent to work on problems that matter, for energy companies anywhere in the world.

This isn't a project to grow and exit. It's the work worth spending the next chapter on.

— Rajeev Sonthalia, Founder & CEO"

**Layout — CORRECTED, add a closing CTA, page felt like it just stopped before:** full-bleed, generous margins. The closing line ("This isn't a project to grow and exit...") gets a large pull-quote treatment, fading in with visual weight as it scrolls into view — that's the emotional peak of the letter. Rajeev's existing photo (`src/assets/leadership/rajeev.png`) sits beside the signature line at the bottom, not the top. After the signature, add a real closing CTA band (this was missing before): *"Building something in energy technology yourself?"* → *Talk to us about joining ScaleIQ* (same destination as the homepage's closing CTA). This gives the letter a real ending that moves the reader forward instead of just trailing off. Still no forced mid-page interactivity, the letter itself stays calm, the CTA only appears after it's finished.

## SITEWIDE FINAL POLISH RULES (apply to all 7 pages above: Who We Are, What We Do, How We Grow, Founder's Note, Leadership, Our Culture, Join Us)

- **No visible bracketed placeholder text on the live site.** Anywhere content is genuinely still missing (team photos, open roles, etc.), replace `[NEEDS INPUT: ...]` style text with an actual tasteful design treatment — a soft-toned generic circle/pattern for missing photos, an honest "no current openings in this category right now" state for Join Us, not raw bracket text. The gap stays real and unfilled, but it should look designed, not like an unfinished build note. Do NOT invent specific facts (a bio detail, a quote, a role) to fill these gaps — visually complete, factually honest, both at once.
- **Interactive element per page**, not just scroll animation:
  - What We Do: a two-way toggle at the top, "For Portfolio Companies" / "For Clients," switching emphasis between the two content blocks.
  - Join Us: a role-category filter (Engineering / Business Development / Corporate Development), structurally real even with no current listings — same interaction pattern as the homepage's portfolio filter.
  - How We Grow (five strips) and Leadership (circle-morph) are already this — no change needed.
  - Our Culture: the photo collage circles become clickable, revealing caption/context per photo once real photos exist.
  - Founder's Note: deliberately no added interactivity.
- **Content length**: every page needs real, substantial paragraphs — this was corrected once already on About and must not regress. Never let a section be just a heading and a link.
- **Theme consistency**: fonts, colors, and spacing on all 7 pages inherit directly from the homepage's design tokens (PT Serif headlines with gold-italic emphasis words, DM Sans body, the established gold/ink/off-white palette) — no page-specific styling drift.
- **Heading SIZE, not just font — this was a real problem across the whole About/People & Culture build and must be fixed everywhere, not page by page:** every main page headline (the sentence-style ones with a gold-italic emphasis word, e.g. "The engine behind every company we *back*") must render at the SAME large size as the homepage's h1 hero headline. Smaller "page title" or "section label" text should only be used for the small gold all-caps labels (like "GROWTH MODEL," "OUR PRINCIPLES"), never for the actual headline sentence itself. If a headline currently looks smaller/quieter than the homepage hero, that's the bug to fix.
- **Overall feel must be an animated, dynamic website, not a formatted document.** Every page needs real motion: staggered fade-ups, hover states with actual transitions (not instant color swaps), and at least one genuinely interactive element per page (filters, toggles, the leadership grid's staggered reveal, expandable strips). A page with correct content but no motion should be treated as unfinished, not done.
- **CTAs wherever a natural exit point exists** — don't let a page just end with a paragraph, close on a link or action.

## Pages still pending (not yet drafted here — still sourced from the docx, and still carrying the "in-house engineering" error)
Portfolio Companies · Impact & Growth (full page) · Whom We Serve · Our Services · Case Studies · Blogs · Contact Us · For Investors · For Partners · For Portfolio Companies
