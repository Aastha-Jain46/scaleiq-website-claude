import { useState } from 'react';

export default function ContactForm({ fields, submitLabel }) {
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this only confirms locally in the browser.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        Thanks — your message has been noted. We'll be in touch shortly.
      </div>
    );
  }

  return (
    <form className="site-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="field">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'textarea' ? (
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
      <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start', marginRight: 0 }}>
        {submitLabel}
      </button>
    </form>
  );
}
