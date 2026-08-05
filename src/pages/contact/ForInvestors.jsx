import FormTemplate from '../../components/templates/FormTemplate';
import ContactForm from '../../components/ContactForm';

const fields = [
  { name: 'name', label: 'Name', required: true },
  { name: 'organization', label: 'Organization' },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'message', label: 'Message', type: 'textarea' },
];

export default function ForInvestors() {
  return (
    <FormTemplate
      eyebrow="Contact"
      title="For Investors"
      intro="ScaleIQ Capital is backed by investors who share our view that energy technology deserves a platform built specifically for it."
      side={
        <>
          <p>Fund performance, portfolio updates, and investor reporting are available to registered investors.</p>
          <div className="content-note">
            <strong>[NEEDS INPUT]</strong> Gated login/backend for investor reporting is a later phase per the technical roadmap — this page is intentionally short until that's built.
          </div>
        </>
      }
    >
      <ContactForm fields={fields} submitLabel="Request access" />
    </FormTemplate>
  );
}
