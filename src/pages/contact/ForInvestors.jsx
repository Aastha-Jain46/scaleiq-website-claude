import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';

const FIELDS = [
  { name: 'name', label: 'Name', required: true },
  { name: 'organization', label: 'Organization' },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'message', label: 'What would you like to know?' },
];

export default function ForInvestors() {
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
        eyebrow="Contact — For Investors"
        title={<>We invest like we intend to <em>stay</em>.</>}
        intro="ScaleIQ Capital backs energy-technology companies for the long term through a buy-and-build model built on permanent capital, not a fund with a countdown clock. This page is for investors who want to understand that model directly."
        size="hero"
      />

      <div className="content-body wrap">
        <div className="hub-sections">
          <section className="hub-section reveal-left">
            <h2>Why <em>permanent</em> capital?</h2>
            <p>Energy technology rewards patience that most funds aren't built to offer. A five-year exit clock pushes portfolio companies toward decisions that optimize for a sale, not for the business. ScaleIQ Capital is structured around permanent capital specifically so the companies we back can make decisions on the timeline energy operations actually improve on: gradually, and for keeps, rather than on a schedule set by someone else's fund life.</p>
          </section>

          <section className="hub-section reveal-right">
            <h2>What does <em>access</em> look like right now?</h2>
            <p>Fund performance, portfolio reporting, and other investor materials are reserved for registered investors and will move to a dedicated investor portal as that capability comes online. Right now, the way in is a direct conversation. Tell us who you are and what you'd like to understand, and someone from the investment team will follow up personally.</p>
          </section>
        </div>
      </div>

      <section className="contact-panel-band">
        <div className="wrap">
          <h2 className="hub-section-title contact-panel-heading reveal">Talk to Our <em>Investment Team</em></h2>
          <p className="contact-panel-intro reveal">This goes directly to ScaleIQ Capital's investment team, not a distribution list. Tell us who you are and what you're looking to understand, and we'll follow up personally.</p>

          <div className="contact-panel reveal">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-title">Message sent.</div>
                <p>Thank you — this has been sent directly to ScaleIQ Capital's investment team. Someone will personally follow up with you, usually within a few business days.</p>
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
                  Request Access
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
