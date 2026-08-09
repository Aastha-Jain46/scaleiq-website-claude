import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';

const FIELDS = [
  { name: 'name', label: 'Full Name', required: true },
  { name: 'email', label: 'Work Email', type: 'email', required: true },
  { name: 'company', label: 'Company Name', required: true },
  { name: 'role', label: 'Your Role / Title', required: true },
  { name: 'website', label: 'Company Website or LinkedIn' },
  { name: 'about', label: 'What does your company do?' },
  { name: 'prompt', label: "What's prompting this conversation?" },
  { name: 'phone', label: 'Phone', type: 'tel' },
];

export default function ForPortfolioCompanies() {
  useReveal();
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — see the flag in the chat response for why.
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact — For Portfolio Companies"
        title={<>You didn't build this to <em>hand it off</em>.</>}
        intro="This page exists for one specific kind of conversation — not a pitch, and not a rescue. It's for founders who've built something real, and are weighing, deliberately and on their own terms, what real backing behind that could look like."
        size="hero"
      />

      <div className="content-body wrap">
        <div className="hub-eyebrow reveal">Before You Reach Out</div>
        <div className="hub-sections">
          <section className="hub-section reveal-left">
            <h2>Will I still run the company <em>day to day</em>?</h2>
            <p>Operational control isn't something we take on. ScaleIQ's buy-and-build model is built around backing the leadership already running the business, not stepping in to run it differently. Companies that join the ScaleIQ platform keep their name, their leadership team, and authority over the decisions that shape how they operate day to day. What changes is the environment around those decisions: shared infrastructure that would otherwise take years to build alone, a network of peer companies working through comparable challenges, and permanent capital structured around long-term growth rather than a fixed exit timeline.</p>
          </section>

          <section className="hub-section reveal-right">
            <h2>What happens to the <em>team</em> I've built?</h2>
            <p>The team is, in most respects, the investment. ScaleIQ doesn't treat people as a line item to consolidate or a cost to rationalize after close. Portfolio companies keep hiring, keep operating under their own leadership, and keep building the culture that got them here. What changes is what the team no longer has to build alone: engineering capacity, shared back-office infrastructure, and access to business development that would otherwise take years to establish independently become resources to draw on, rather than problems to solve again from first principles.</p>
          </section>

          <section className="hub-section reveal-left">
            <h2>Is this conversation <em>actually</em> confidential right now?</h2>
            <p>Yes, starting with this form. What you share here isn't logged into a shared inbox, a CRM pipeline, or a sales queue — it goes directly to ScaleIQ's leadership and is read and handled personally, by someone senior enough to actually have this conversation with you. If a first conversation doesn't lead anywhere, that's exactly what it stays: a private conversation that goes no further than the people in it.</p>
          </section>
        </div>
      </div>

      <section className="contact-panel-band">
        <div className="wrap">
          <h2 className="hub-section-title contact-panel-heading reveal">Let's Talk <em>Directly</em></h2>
          <p className="contact-panel-intro reveal">This goes straight to ScaleIQ's leadership, not a shared inbox or a sales pipeline. Tell us a little about your company and what's prompting the conversation, and we'll take it from there.</p>

          <div className="contact-panel reveal">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-title">Message sent.</div>
                <p>Thank you — this has been sent directly to ScaleIQ's leadership team. Someone senior will personally review it and follow up with you directly, usually within a few business days.</p>
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

                <p className="contact-trust-note">
                  Submitting this starts a thoughtful and confidential discussion. Nothing more, and nothing shared beyond it.
                </p>

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
