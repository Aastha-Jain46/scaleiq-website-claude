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

## Pages still pending (not yet drafted here — still sourced from the docx, and still carrying the "in-house engineering" error)
Who We Are · What We Do · A Note From Our Founder · Leadership · Our Culture · Join Us · Portfolio Companies · Impact & Growth (full page) · Whom We Serve · Our Services · Case Studies · Blogs · Contact Us · For Investors · For Partners · For Portfolio Companies
