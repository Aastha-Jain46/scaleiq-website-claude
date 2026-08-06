import { Link } from 'react-router-dom';
import ListingTemplate from '../../components/templates/ListingTemplate';
import ogesVisual from '../../assets/oges-visual.png';

export default function OurCompanies() {
  return (
    <ListingTemplate
      eyebrow="Portfolio"
      title="Our Companies"
      intro="ScaleIQ invests in energy-technology companies with strong products, loyal customers, and leadership teams ready to grow further."
    >
      <div className="company-feature" style={{ marginBottom: '3rem' }}>
        <div>
          <div className="company-tag">Oil &amp; Gas</div>
          <div className="company-name">Oges</div>
          <p className="company-desc">Our first investment, Oges, builds software that keeps oil and gas operations running — trusted by public sector oil &amp; gas operators, drilling contractors, and service vendors across the industry, through OgesOne, WIPA, HVMS, and Udbhav.</p>
          <div className="company-products">
            <span className="prod-chip">OgesOne</span>
            <span className="prod-chip">WIPA</span>
            <span className="prod-chip">HVMS</span>
            <span className="prod-chip">Udbhav</span>
          </div>
          <a href="https://oges.co" target="_blank" rel="noopener noreferrer" className="link-arrow">Visit oges.co ↗</a>
        </div>
        <div className="company-visual">
          <img src={ogesVisual} alt="Oges" />
        </div>
      </div>

      <div style={{ maxWidth: 720 }}>
        <h2 className="section-h" style={{ fontSize: '1.4rem' }}>What changes, and what doesn't</h2>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '1.25rem' }}>Before ScaleIQ, growing an energy-technology company usually means choosing between two hard paths: raise outside capital and give up control, or grow slowly on your own cash flow and watch competitors with deeper pockets move faster.</p>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '1.25rem' }}>After joining ScaleIQ, that choice disappears. You keep your name, your leadership, and your customers. What you gain is capital without a boardroom takeover, an engineering bench that already understands energy workflows, and a network of peer companies who've already solved the scaling problems you're facing now.</p>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '1.75rem' }}>Founders who partner with ScaleIQ don't hand over their company. They add a partner who happens to have already built what they're trying to build next.</p>

        <div className="content-note" style={{ marginBottom: '1.75rem' }}>
          <strong>[NEEDS INPUT]</strong> Slot for a founder testimonial or short video from Oges leadership — flagged repeatedly as the single highest-value missing piece of proof on this page.
        </div>

        <Link to="/contact/portfolio-companies" className="btn-gold">See what's next for your company</Link>
      </div>
    </ListingTemplate>
  );
}
