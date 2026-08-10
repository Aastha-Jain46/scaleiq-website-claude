import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import { FORM_ENDPOINT } from '../../config/formEndpoint';

const FIELDS = [
  { name: 'name', label: 'Full Name', required: true },
  { name: 'email', label: 'Work Email', type: 'email', required: true },
  { name: 'company', label: 'Company' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true },
  { name: 'position', label: 'Position' },
  { name: 'projectType', label: 'What is this about?', type: 'select' },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
];

const PROJECT_TYPES = ['', 'Digital Engineering', 'GCC Setup', 'Products', 'Consulting', 'Other'];

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ContactUs() {
  useReveal();
  const [values, setValues] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORM_ENDPOINT) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, _subject: 'New message — Contact Us (scaleiqglobal.com)' }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>A direct line, not a <em>queue</em>.</>}
        intro="Have a question about ScaleIQ, our portfolio, or our work across energy technology? A real person reads every message that comes through here."
        size="hero"
      />

      <div className="contact-split wrap">
        <div className="contact-split-info">
          <div className="contact-info reveal-left">
            <div className="contact-info-item">
              <div className="contact-info-icon"><EmailIcon /></div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:contact@scaleiqglobal.com">contact@scaleiqglobal.com</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><PhoneIcon /></div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+919821106466">(+91) 98211 06466</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><PinIcon /></div>
              <div>
                <h4>Global Headquarters</h4>
                <a href="https://www.google.com/maps/search/?api=1&query=Tower+B+Pioneer+Urban+Square+Golf+Course+Ext+Rd+Sector+62+Gurugram+Haryana+122098" target="_blank" rel="noopener noreferrer">
                  5th Floor, Tower B, Pioneer Urban Square,<br />Golf Course Ext Rd, Sector 62,<br />Gurugram, Haryana 122098
                </a>
              </div>
            </div>
          </div>

          <div className="contact-split-divider reveal-left" />

          <div className="reveal-left">
            <h2 className="hub-section-title" style={{ fontSize: '1.3rem' }}>Looking for something <em>specific</em>?</h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: '1rem' }}>A few kinds of conversations are common enough that we've given them their own page.</p>
            <ul className="form-list">
              <li>Considering ScaleIQ as a backer for your company — <Link to="/contact/portfolio-companies" className="link-arrow">For Portfolio Companies →</Link></li>
              <li>Interested in ScaleIQ Capital as an investor — <Link to="/contact/investors" className="link-arrow">For Investors →</Link></li>
              <li>An M&amp;A advisor, technology partner, or referral source — <Link to="/contact/partners" className="link-arrow">For Partners →</Link></li>
            </ul>
          </div>
        </div>

        <div className="contact-panel reveal-right">
          <h2 className="hub-section-title" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Send Us a <em>Message</em></h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>We read every message ourselves. For most questions, expect a reply within one to two business days.</p>

          {status === 'sent' ? (
            <div className="contact-success">
              <div className="contact-success-title">Message sent.</div>
              <p>Thank you — we've received your message and someone from the team will get back to you shortly.</p>
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
                    <select id={field.name} value={values[field.name] || ''} onChange={(e) => handleChange(field.name, e.target.value)}>
                      {PROJECT_TYPES.map((opt) => (
                        <option value={opt} key={opt || 'placeholder'}>{opt || 'Select one'}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      required={field.required}
                      rows={5}
                      value={values[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
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

              {status === 'error' && (
                <div className="contact-error">
                  <div className="contact-error-title">Couldn't send that.</div>
                  <p>Something went wrong on our end — please email us directly at <a href="mailto:contact@scaleiqglobal.com">contact@scaleiqglobal.com</a> instead.</p>
                </div>
              )}

              <button type="submit" className="btn-gold" disabled={status === 'sending'} style={{ alignSelf: 'flex-start', marginRight: 0 }}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
