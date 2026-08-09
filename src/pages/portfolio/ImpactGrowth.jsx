import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import { caseStudies } from '../../content/caseStudies';

const BEFORE = [
  'Growth funded from your own cash flow, or by giving up equity and control to outside investors.',
  'Every piece of infrastructure — data platforms, AI tooling, back-office systems — built alone, from zero.',
  'Business development is whatever your own team can generate on its own.',
  "You're the first company to ever face the scaling problem in front of you.",
];

const AFTER = [
  'Permanent capital behind you, with your name, your leadership, and your decisions still yours.',
  'Shared infrastructure already built and running across the group, ready to build on.',
  "Group-wide business development opening doors a single company usually can't reach alone.",
  "A network of peer companies who've already solved the problem you're facing now.",
];

const CATEGORY_IMPACT = [
  { name: 'Reservoir & Subsurface', blurb: 'Turning subsurface modeling from a periodic, manual exercise into a continuously updated, AI-assisted decision system.' },
  { name: 'Drilling & Completions', blurb: 'Converting high-volume drilling and completion data into standardized, structured decisions instead of knowledge held by a few engineers.' },
  { name: 'Fleet & Field Operations', blurb: 'Replacing reactive, spreadsheet-driven field coordination with real-time visibility across distributed assets and locations.' },
  { name: 'Safety & Risk Intelligence', blurb: 'Turning scattered incident reports and safety observations into systems that catch risk before it becomes an incident.' },
  { name: 'Well Intervention', blurb: 'Bringing structure to intervention planning that used to run on manual coordination and fragmented spreadsheets.' },
  { name: 'Innovation Ecosystems', blurb: 'Building the internal pipeline that turns scattered AI enthusiasm into a governed, prioritized program of real work.' },
];

const ENABLERS = [
  { title: 'Engineering & Product Bench', body: 'A team that already understands energy workflows, not one learning the domain on the clock.' },
  { title: 'Group-Wide Business Development', body: 'Deal flow and client relationships shared across the portfolio, not built from a cold start each time.' },
  { title: 'Peer Company Network', body: 'Other founders and teams who have already solved the scaling problem currently in front of you.' },
  { title: 'Domain Expertise, Shared', body: 'Knowledge of upstream, midstream, and downstream operations that lives across the group, not in one team.' },
  { title: 'Access to Global Talent', body: "Engineering strength sourced wherever it actually is, not limited to whoever's willing to relocate." },
  { title: 'A Delivery Standard That Travels', body: 'The same operating discipline built running Oges is the baseline every new company starts from, not something rebuilt from scratch.' },
];

const COMPOUNDS = [
  'Shared infrastructure gets more capable with every company that builds on it, not just the one that built it first.',
  'The peer network gets more useful as it gets bigger — more scaling problems already solved, more patterns already recognized.',
  'Business development relationships grow with the group’s track record, not with any single company’s sales effort alone.',
  'Engineering standards get sharper with every project delivered, and every new company inherits that, not a blank slate.',
];

export default function ImpactGrowth() {
  useReveal();
  const categoryCounts = CATEGORY_IMPACT.map((cat) => ({
    ...cat,
    count: caseStudies.filter((c) => c.category === cat.name).length,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Portfolio — Impact & Growth"
        title={<>The impact we aim to leave, on companies and the <em>industry</em>.</>}
        intro="Two different questions live on this page: what changes for a company after it joins ScaleIQ, and what that adds up to across the energy industry those companies serve."
        size="hero"
      />

      <div className="listing-body wrap">
        <div className="hub-eyebrow reveal">For the Company</div>
        <h2 className="hub-section-title reveal" style={{ fontSize: '1.8rem' }}>Before ScaleIQ. <em>After</em> ScaleIQ.</h2>
        <p className="reveal" style={{ color: 'var(--ink-soft)', maxWidth: 680, marginBottom: '2rem' }}>This is what changes when a company joins the portfolio — not a promise, the actual shift in what's available to them.</p>

        <div className="ba-columns">
          <div className="ba-card before reveal-left">
            <div className="ba-card-label">Before ScaleIQ</div>
            <ul className="ba-list">
              {BEFORE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="ba-card after reveal-right">
            <div className="ba-card-label">After ScaleIQ</div>
            <ul className="ba-list">
              {AFTER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hub-eyebrow reveal" style={{ marginTop: '5rem' }}>For the Industry</div>
        <h2 className="hub-section-title reveal" style={{ fontSize: '1.8rem' }}>What this adds up to, <em>industry-wide</em>.</h2>
        <p className="reveal" style={{ color: 'var(--ink-soft)', maxWidth: 680, marginBottom: '2rem' }}>Energy companies, especially the smaller and mid-sized ones, have modernized with less support than other industries take for granted. This is the shape of the work that corrects that, across the categories ScaleIQ companies operate in today.</p>

        <div className="category-impact-grid">
          {categoryCounts.map((cat) => (
            <div className="category-impact-card reveal" key={cat.name}>
              <span className="card-tag">{cat.name}</span>
              <p>{cat.blurb}</p>
              <span className="category-impact-count">{cat.count} real project{cat.count === 1 ? '' : 's'} delivered</span>
            </div>
          ))}
        </div>

        <div className="hub-eyebrow reveal" style={{ marginTop: '5rem' }}>For the Portfolio</div>
        <h2 className="hub-section-title reveal" style={{ fontSize: '1.8rem' }}>What every company plugs <em>into</em>.</h2>
        <p className="reveal" style={{ color: 'var(--ink-soft)', maxWidth: 680, marginBottom: '1.25rem' }}>Capital is one part of joining ScaleIQ. This is the rest of it — the support system already running that a new company doesn't have to build from scratch.</p>
        <p className="reveal" style={{ color: 'var(--ink-soft)', maxWidth: 680, marginBottom: '2rem' }}>We're deliberate about which companies join the portfolio, and just as deliberate about what happens after they do. Every enabler below exists because a real company needed it, not because it looked good on a slide.</p>

        <div className="enablers-grid reveal">
          {ENABLERS.map((e) => (
            <div className="enabler-tile" key={e.title}>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ maxWidth: 720, marginTop: '3.5rem' }}>
          <h3 style={{ fontFamily: 'var(--heading)', fontWeight: 700, fontSize: '1.15rem', marginBottom: '1.25rem' }}>What compounds the longer you're in the portfolio</h3>
          <ul className="form-list">
            {COMPOUNDS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="cta-band reveal">
        <div className="wrap">
          <h2>Curious what this looks like for <em>your</em> company?</h2>
          <p>Every enabler on this page is real infrastructure already running, not a plan for someday.</p>
          <Link to="/contact/portfolio-companies" className="btn-gold">Start a conversation</Link>
          <Link to="/resources/case-studies" className="link-arrow">See every case study →</Link>
        </div>
      </section>
    </>
  );
}
