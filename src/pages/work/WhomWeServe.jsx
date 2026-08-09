import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import SegmentExplorer from '../../components/SegmentExplorer';
import Testimonial from '../../components/Testimonial';
import { segments } from '../../content/whomWeServe';
import { caseStudies } from '../../content/caseStudies';

const RELATED_SLUGS = ['drilling-optimization-predictive-analytics', 'ai-powered-risk-detection-hseq', 'well-intervention-planning-unit-utilization'];

export default function WhomWeServe() {
  useReveal();
  const related = RELATED_SLUGS.map((slug) => caseStudies.find((c) => c.slug === slug)).filter(Boolean);

  return (
    <>
      <PageHeader
        eyebrow="Our Work — Whom We Serve"
        title={<>We already speak your industry's <em>language</em>.</>}
        intro="ScaleIQ's portfolio companies have spent over a decade building digital systems for the energy industry — across oil and gas companies, GCCs, energy companies, renewables and utilities, energy ISVs, and oil service companies."
        size="hero"
      />

      <div className="listing-body wrap">
        <SegmentExplorer items={segments} />

        <div style={{ maxWidth: 720, marginTop: '1rem' }} className="reveal">
          <h2 className="hub-section-title" style={{ fontSize: '1.6rem' }}>Why teams choose to work with <em>ScaleIQ</em></h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '1.25rem', lineHeight: 1.8 }}>Energy companies don't have the luxury of a vendor that's still learning the industry. Downtime costs money and, in some cases, safety. ScaleIQ's portfolio companies already understand upstream, midstream, and downstream workflows, the compliance standards you operate under, and the systems you're likely already running.</p>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '1.25rem', lineHeight: 1.8 }}>We also bring something most engineering vendors can't: a stake in getting it right beyond the contract. The same engineering standard we hold our own portfolio companies to is the standard applied to every engagement — there's no B-team held back for internal projects.</p>
          <p style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>Choosing to work with ScaleIQ means choosing a group that speaks your industry's language on day one, not by month six.</p>
        </div>

        <Testimonial
          quote="ScaleIQ Oges supported us in scaling specialized teams within aggressive timelines. Their structured approach, responsiveness, and clarity on role requirements helped us build critical capabilities without impacting business continuity."
          attribution="— Senior HR Leader, Energy & Lubricants Company"
        />
      </div>

      <section className="related-cases">
        <div className="wrap">
          <div className="related-cases-heading reveal">
            <h2 className="hub-section-title" style={{ fontSize: '1.5rem', margin: 0 }}>Proof, not <em>promises</em></h2>
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
