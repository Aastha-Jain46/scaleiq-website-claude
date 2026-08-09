import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';

const FIELDS = [
  { name: 'name', label: 'Name', required: true },
  { name: 'organization', label: 'Organization', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'message', label: 'Tell us about the opportunity' },
];

export default function ForPartners() {
  useReveal();
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact — For Partners"
        title={<>We grow faster with the right <em>people</em> around us.</>}
        intro="ScaleIQ partners with the people who help us find, evaluate, and grow great energy-technology companies — M&A advisors, technology and delivery partners, and specialists who know this industry as well as we do."
        size="hero"
      />

      <div className="content-body wrap">
        <div className="hub-sections">
          <section className="hub-section reveal-left">
            <h2>For <em>M&amp;A advisors</em> and intermediaries</h2>
            <p>If you work with founders who are ready to scale beyond what they can build alone, we move quickly on evaluation and pay fair value for genuine deal flow. A referral to ScaleIQ is the start of a relationship with you, not a one-time transaction.</p>
          </section>

          <section className="hub-section reveal-right">
            <h2>For <em>technology</em> and delivery partners</h2>
            <p>We work alongside firms and platforms that extend what ScaleIQ and its portfolio companies can deliver to energy clients: integration partners, data and AI vendors, and service providers who share our standard for real, working software over slideware.</p>
          </section>

          <section className="hub-section reveal-left">
            <h2>For <em>industry specialists</em> and domain experts</h2>
            <p>Energy operations run deep enough that no single team knows everything. We work with subsurface engineers, safety specialists, and former operators whose domain judgment our engineering teams can build against.</p>
          </section>
        </div>
      </div>

      <section className="contact-panel-band">
        <div className="wrap">
          <h2 className="hub-section-title contact-panel-heading reveal">Let's Start the <em>Conversation</em></h2>
          <p className="contact-panel-intro reveal">This goes directly to the team that evaluates partnerships. Tell us about the opportunity and we'll follow up personally.</p>

          <div className="contact-panel reveal">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-title">Message sent.</div>
                <p>Thank you — this has been sent directly to ScaleIQ's partnerships team. Someone will personally follow up with you, usually within a few business days.</p>
              </div>
            ) : (
              <form className="site-form" onSubmit={handleSubmit}>
                {FIELDS.map((field) => (
                  <div key={field.name} className="field">
                    <label htmlFor={field.name}>
                      {field.label}
                      {!field.required && <span className="contact-optional"> (optional)</span>}
                    </label>
                    <input
                      id={field.name}
                      type={field.type || 'text'}
                      required={field.required}
                      value={values[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  </div>
                ))}

                <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start', marginRight: 0 }}>
                  Start the Conversation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
