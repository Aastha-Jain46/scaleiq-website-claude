import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import SegmentExplorer from '../../components/SegmentExplorer';
import { services } from '../../content/ourServices';
import { caseStudies } from '../../content/caseStudies';

const RELATED_SLUGS = ['ai-reservoir-modelling', 'upstream-command-control-center', 'hvms-heavy-vehicle-management'];

const STATS = [
  { num: '6 weeks → 3 days', label: 'Reservoir modeling turnaround, cut through AI-driven automation' },
  { num: '100%', label: 'Real-time visibility delivered across 50+ upstream fields' },
  { num: '918+', label: 'Employees mobilized into structured, technology-led innovation' },
];

export default function OurServices() {
  useReveal();
  const related = RELATED_SLUGS.map((slug) => caseStudies.find((c) => c.slug === slug)).filter(Boolean);

  return (
    <>
      <PageHeader
        eyebrow="Our Work — Our Services"
        title={<>The full energy technology stack, one <em>standard</em>.</>}
        intro="From application development to AI enablement, staff augmentation to technical consulting, ScaleIQ companies work across the full energy technology stack — holding every engagement to the same standard we hold our own portfolio companies to."
        size="hero"
      />

      <div className="listing-body wrap">
        <SegmentExplorer items={services} />

        <div className="proof-stats reveal">
          {STATS.map((s) => (
            <div className="proof-stat" key={s.label}>
              <span className="proof-stat-num">{s.num}</span>
              <span className="proof-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 720 }} className="reveal">
          <p style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>Whatever the engagement, from a short staff augmentation contract to a multi-year product build, you work with engineers who already understand energy workflows, and a delivery standard shaped by running real technology companies in this industry, not just servicing them.</p>
        </div>
      </div>

      <section className="related-cases">
        <div className="wrap">
          <div className="related-cases-heading reveal">
            <h2 className="hub-section-title" style={{ fontSize: '1.5rem', margin: 0 }}>What this looks like in <em>practice</em></h2>
            <Link to="/resources/case-studies" className="link-arrow">See all case studies →</Link>
          </div>
          <div className="listing-grid">
            {related.map((c) => (
              <Link to={`/resources/case-studies/${c.slug}`} className="listing-card reveal" key={c.slug}>
                <div className="listing-card-thumb">
                  <img src={c.image} alt={c.title} loading="lazy" />
                </div>
                <span className="card-tag">{c.category}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="listing-card-cta">Read Full Case Study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
