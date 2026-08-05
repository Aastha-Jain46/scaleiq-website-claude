import ListingTemplate from '../../components/templates/ListingTemplate';

// Service write-ups pulled from the current live site (scaleiqglobal.com),
// condensed to the intro paragraph — see WhomWeServe.jsx for the same approach.
const services = [
  {
    name: 'Application Development & Management',
    body: 'Energy companies operate in complex, mission-critical environments where digital applications support daily operations and cannot tolerate disruption. ScaleIQ develops and modernizes enterprise applications designed for reliability, scalability, and long-term resilience.',
  },
  {
    name: 'AI Enablement',
    body: 'Energy companies are investing heavily in AI, but value only appears when models are operationalized, trusted, and tied to clear KPIs. ScaleIQ bridges the gap between experimental pilots and enterprise-scale production by converting models into repeatable financial and operational outcomes.',
  },
  {
    name: 'Staff Augmentation',
    body: 'Energy companies run complex technology and digital programs where timelines are tight and specialized technical expertise is difficult to hire quickly through traditional recruitment cycles. ScaleIQ provides experienced specialists who integrate quickly into existing teams and contribute from day one.',
  },
  {
    name: 'Product Engineering',
    body: 'Energy tech products must continuously evolve while maintaining reliability, scalability, and compatibility across diverse deployment environments. ScaleIQ provides product engineering services that accelerate innovation while ensuring robust performance and long-term platform stability.',
  },
  {
    name: 'Professional Services',
    body: 'Energy technology products are often deployed in complex, non-standard IT landscapes where standard configurations rarely suffice. ScaleIQ acts as a strategic force-multiplier, providing the domain-specific technical expertise required to navigate these complex environments.',
  },
  {
    name: 'Technical Consulting',
    body: 'Oil & gas companies operate specialized, tightly integrated technical environments where even small system changes can impact production, safety, and operational continuity. ScaleIQ bridges the gap between ambitious digital transformation initiatives and stable field operations.',
  },
];

export default function OurServices() {
  return (
    <ListingTemplate
      eyebrow="Our Work"
      title="Our Services"
      intro="ScaleIQ Operations works across the full energy technology stack, with the same engineering standard we bring to our own portfolio companies."
    >
      {services.map((s) => (
        <div className="segment-block" key={s.name}>
          <h3>{s.name}</h3>
          <p>{s.body}</p>
        </div>
      ))}

      <p style={{ marginTop: '3rem', maxWidth: 680, color: 'var(--ink-soft)' }}>Whatever the engagement, from a short staff augmentation contract to a multi-year product build, you get engineers who already understand energy workflows, and a delivery standard shaped by running our own technology companies, not just servicing them.</p>
    </ListingTemplate>
  );
}
