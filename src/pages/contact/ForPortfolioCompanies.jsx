import FormTemplate from '../../components/templates/FormTemplate';
import ContactForm from '../../components/ContactForm';

const fields = [
  { name: 'company', label: 'Company name', required: true },
  { name: 'role', label: 'Your role', required: true },
  { name: 'description', label: 'Brief description', type: 'textarea', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
];

export default function ForPortfolioCompanies() {
  return (
    <FormTemplate
      eyebrow="Contact"
      title="For Portfolio Companies"
      intro="Thinking about what's next for the company you've built?"
      side={
        <>
          <p>If you're a founder or leadership team in energy technology weighing your options, whether that's raising capital, planning an exit, or simply growing faster than your current resources allow, we'd like to talk.</p>
          <p>Tell us about your company below. Every conversation stays confidential, and there's no obligation attached to a first call.</p>
          <h4 style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>What we look for</h4>
          <ul className="form-list">
            <li>Founder-led or founder-influenced leadership</li>
            <li>An established product with paying customers in oil &amp; gas, energy majors, GCCs, renewables &amp; utilities, energy ISVs, or oil service companies</li>
            <li>Ambition to grow further, not exit the industry</li>
          </ul>
        </>
      }
    >
      <ContactForm fields={fields} submitLabel="Get in touch" />
    </FormTemplate>
  );
}
