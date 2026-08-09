import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';

const FIELDS = [
  { name: 'name', label: 'Name', required: true },
  { name: 'company', label: 'Company' },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'message', label: 'Message', required: true },
];

export default function ContactUs() {
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
        eyebrow="Contact"
        title={<>A direct line, not a <em>queue</em>.</>}
        intro="Have a question about ScaleIQ, our portfolio, or our work across energy technology? A real person reads every message that comes through here."
        size="hero"
      />

      <div className="content-body wrap">
        <div className="hub-sections">
          <section className="hub-section reveal-left">
            <h2>Looking for something <em>specific</em>?</h2>
            <p>A few kinds of conversations are common enough that we've given them their own page, each one goes straight to the right team instead of a general inbox.</p>
            <ul className="form-list">
              <li>Considering ScaleIQ as a backer for your company — <Link to="/contact/portfolio-companies" className="link-arrow">For Portfolio Companies →</Link></li>
              <li>Interested in ScaleIQ Capital as an investor — <Link to="/contact/investors" className="link-arrow">For Investors →</Link></li>
              <li>An M&amp;A advisor, technology partner, or referral source — <Link to="/contact/partners" className="link-arrow">For Partners →</Link></li>
            </ul>
          </section>
        </div>
      </div>

      <section className="contact-panel-band">
        <div className="wrap">
          <h2 className="hub-section-title contact-panel-heading reveal">Send Us a <em>Message</em></h2>
          <p className="contact-panel-intro reveal">We read every message ourselves and route it to the right person on the team. For most questions, expect a reply within one to two business days.</p>

          <div className="contact-panel reveal">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-title">Message sent.</div>
                <p>Thank you — we've received your message and someone from the team will get back to you shortly.</p>
              </div>
            ) : (
              <form className="site-form" onSubmit={handleSubmit}>
                {FIELDS.map((field) => (
                  field.type === 'textarea' || field.name === 'message' ? (
                    <div key={field.name} className="field">
                      <label htmlFor={field.name}>
                        {field.label}
                        {!field.required && <span className="contact-optional"> (optional)</span>}
                      </label>
                      <textarea
                        id={field.name}
                        required={field.required}
                        rows={5}
                        value={values[field.name] || ''}
                        onChange={(e) => handleChange(field.name, e.target.value)}
                      />
                    </div>
                  ) : (
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
                  )
                ))}

                <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start', marginRight: 0 }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
