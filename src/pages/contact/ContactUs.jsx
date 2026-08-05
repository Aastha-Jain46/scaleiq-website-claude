import FormTemplate from '../../components/templates/FormTemplate';
import ContactForm from '../../components/ContactForm';

const fields = [
  { name: 'name', label: 'Name', required: true },
  { name: 'company', label: 'Company' },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
];

export default function ContactUs() {
  return (
    <FormTemplate
      eyebrow="Contact"
      title="Contact Us"
      intro="Have a question about ScaleIQ, our portfolio, or our work in energy technology? Get in touch."
      side={<p>We read every message and route it to the right person on the team — expect a reply within a couple of business days.</p>}
    >
      <ContactForm fields={fields} submitLabel="Send message" />
    </FormTemplate>
  );
}
