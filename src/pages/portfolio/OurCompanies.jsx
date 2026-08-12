import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import ListingTemplate from '../../components/templates/ListingTemplate';
import SegmentExplorer from '../../components/SegmentExplorer';
import ogesVisual from '../../assets/oges-visual.png';
import { products } from '../../content/products';
import { caseStudies } from '../../content/caseStudies';

const RELATED_SLUGS = ['hvms-heavy-vehicle-management', 'udbhav-ai-innovation-ecosystem', 'well-intervention-planning-unit-utilization'];

export default function OurCompanies() {
  useReveal();
  const related = RELATED_SLUGS.map((slug) => caseStudies.find((c) => c.slug === slug)).filter(Boolean);

  return (
    <ListingTemplate
      eyebrow="Portfolio"
      title={<>Companies that keep their name, and gain <em>everything else</em>.</>}
      intro="ScaleIQ invests in and grows energy-technology companies with strong products, loyal customers, and leadership teams ready to grow further. Oges is the first company to join the portfolio."
      size="hero"
    >
      <div className="company-feature reveal" style={{ marginBottom: '3rem' }}>
        <div>
          <div className="company-tag">Oil &amp; Gas · First to Join</div>
          <div className="company-name">Oges</div>
          <p className="company-desc">Oges builds software that keeps oil and gas operations running — trusted by public sector operators, drilling contractors, and service vendors across the industry. It's the proof of what a ScaleIQ company looks like in practice.</p>
          <a href="https://oges.co" target="_blank" rel="noopener noreferrer" className="link-arrow">Visit oges.co ↗</a>
        </div>
        <div className="company-visual">
          <img src={ogesVisual} alt="Oges" />
        </div>
      </div>

      <div className="reveal">
        <h2 className="hub-section-title" style={{ fontSize: '1.5rem' }}>What Oges has <em>built</em></h2>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '0.5rem', maxWidth: 860 }}>Four products, each solving a specific operational problem rather than one platform trying to do everything.</p>
      </div>
      <SegmentExplorer items={products} />

      <div style={{ maxWidth: 860, marginTop: '1rem' }} className="reveal">
        <h2 className="hub-section-title" style={{ fontSize: '1.5rem' }}>What changes, and what <em>doesn't</em></h2>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '1.25rem', lineHeight: 1.8 }}>Growing an energy-technology company usually means choosing between two hard paths: raise outside capital and give up control, or grow slowly on your own cash flow while competitors with deeper pockets move faster.</p>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '1.25rem', lineHeight: 1.8 }}>Joining the ScaleIQ portfolio removes that choice. Companies keep their name, their leadership, and their customers. What they gain is capital without a boardroom takeover, an engineering bench that already understands energy workflows, and — as the portfolio grows — a network of peer companies who've already solved the scaling problems the next one is facing.</p>
        <p style={{ color: 'var(--ink-soft)', lineHeight: 1.8 }}>Founders who join ScaleIQ don't hand over their company. They add a partner who's already built what they're trying to build next.</p>
      </div>

      <section className="related-cases" style={{ padding: '3.5rem 0 0', borderTop: 'none' }}>
        <div className="related-cases-heading reveal">
          <h2 className="hub-section-title" style={{ fontSize: '1.5rem', margin: 0 }}>Proof, not a <em>pitch deck</em></h2>
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
      </section>

      <div className="reveal" style={{ marginTop: '3rem' }}>
        <Link to="/contact/portfolio-companies" className="btn-gold">See what's next for your company</Link>
      </div>
    </ListingTemplate>
  );
}
