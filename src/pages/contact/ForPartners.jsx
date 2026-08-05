import FormTemplate from '../../components/templates/FormTemplate';
import ContactForm from '../../components/ContactForm';

const fields = [
  { name: 'name', label: 'Name', required: true },
  { name: 'organization', label: 'Organization', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'message', label: 'Message', type: 'textarea' },
];

export default function ForPartners() {
  return (
    <FormTemplate
      eyebrow="Contact"
      title="For Partners"
      intro="ScaleIQ partners with the people who help us find, evaluate, and grow great energy-technology companies: M&A advisors, technology partners, and industry specialists who know this space as well as we do."
      side={<p>If you work with founders who are ready to scale, or with energy operators looking for a delivery partner, we're worth a conversation. You get a partner that moves fast on evaluation, pays fair value for genuine deal flow, and treats a referral as the start of a relationship, not a one-time transaction.</p>}
    >
      <ContactForm fields={fields} submitLabel="Start the conversation" />
    </FormTemplate>
  );
}
