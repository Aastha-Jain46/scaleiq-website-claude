import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';

const INVESTOR_TYPES = ['', 'Venture Capital', 'Private Equity', 'Family Office', 'Institutional Investor', 'Angel Investor', 'Other'];

const FIELDS = [
  { name: 'name', label: 'Full Name', required: true },
  { name: 'email', label: 'Work Email', type: 'email', required: true },
  { name: 'firm', label: 'Firm / Organization', required: true },
  { name: 'role', label: 'Your Role / Title', required: true },
  { name: 'investorType', label: 'Investor Type', type: 'select', required: true },
  { name: 'link', label: 'Firm Website or LinkedIn', required: true },
  { name: 'interest', label: "What's prompting your interest in ScaleIQ?" },
];

export default function ForInvestors() {
  useReveal();
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this needs a real notify-team /
    // manual-verify / auto-send-on-approval flow, which is infrastructure
    // beyond this static frontend. Flagged back to the user in chat.
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact — For Investors"
        title={<>The industry generalist capital keeps <em>underestimating</em>.</>}
        intro="ScaleIQ is raising permanent capital to back and build energy-technology companies — an industry built on real infrastructure, not hype cycles. This page is for investors evaluating that opportunity directly."
        size="hero"
      />

      <div className="content-body wrap">
        <div className="hub-sections">
          <section className="hub-section reveal-left">
            <h2>A market institutional capital has largely <em>ignored</em>.</h2>
            <p>Energy technology sits at an odd intersection: the industry it serves is enormous and mission-critical, but the software built for it has mostly been left to legacy vendors, or ignored by generalist investors who don't understand the domain well enough to underwrite it confidently. That gap is the opportunity — a large, structurally underserved market with real, recurring demand, not a trend still waiting to prove itself.</p>
          </section>

          <section className="hub-section reveal-right">
            <h2>Buy-and-build, focused on <em>one</em> industry.</h2>
            <p>ScaleIQ runs a buy-and-build model: back founder-led energy-technology companies with strong products and real customers, then compound their growth with permanent capital, shared infrastructure, and group-wide business development. It's the same playbook proven capital platforms use in other verticals — applied to an industry that hasn't had one built for it yet.</p>
          </section>

          <section className="hub-section reveal-left">
            <h2>Traction you can <em>verify</em>, not project.</h2>
            <p>This isn't a market-sizing slide with no execution behind it. ScaleIQ's first portfolio company, Oges, has delivered 378+ projects for real operators, drilling contractors, and service companies — work documented in 17 public case studies with measured outcomes, not marketing claims. 715+ energy-technology specialists and 171+ customers already sit inside the group.</p>
          </section>

          <section className="hub-section reveal-right">
            <h2>Led by people who've <em>run</em> this industry.</h2>
            <p>ScaleIQ is led by a founder with three decades inside global energy technology leadership at SLB, not a financial sponsor learning the industry through diligence calls. That's the same bar the rest of the leadership team is held to: real operating experience in energy, not adjacent-sector experience assumed to transfer.</p>
          </section>
        </div>
      </div>

      <section className="contact-panel-band">
        <div className="wrap">
          <h2 className="hub-section-title contact-panel-heading reveal">Request the <em>Investor Deck</em></h2>
          <p className="contact-panel-intro reveal">The deck is confidential and shared with verified investors only. Tell us who you are below — our team reviews every request personally.</p>

          <div className="contact-panel reveal">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-title">Request received.</div>
                <p>Thank you — your request has been sent for review. If approved, you'll receive the deck directly by email.</p>
              </div>
            ) : (
              <form className="site-form" onSubmit={handleSubmit}>
                {FIELDS.map((field) => (
                  <div key={field.name} className="field">
                    <label htmlFor={field.name}>
                      {field.label}
                      {!field.required && <span className="contact-optional"> (optional)</span>}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        id={field.name}
                        required={field.required}
                        value={values[field.name] || ''}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                      >
                        {INVESTOR_TYPES.map((opt) => (
                          <option value={opt} key={opt || 'placeholder'}>{opt || 'Select one'}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        type={field.type || 'text'}
                        required={field.required}
                        value={values[field.name] || ''}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                      />
                    )}
                  </div>
                ))}

                <p className="contact-trust-note">
                  Requests are reviewed by ScaleIQ's team before the deck is sent — this isn't an instant download.
                </p>

                <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start', marginRight: 0 }}>
                  Request the Investor Deck
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
