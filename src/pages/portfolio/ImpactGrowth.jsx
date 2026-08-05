import ListingTemplate from '../../components/templates/ListingTemplate';

const points = [
  {
    title: 'Faster product development',
    body: 'Supported by an engineering practice built specifically for the energy industry, not a generalist dev shop learning the domain on the client\'s clock.',
  },
  {
    title: 'A network of peer companies',
    body: 'Working through similar challenges, from regulatory hurdles to enterprise sales cycles in oil and gas.',
  },
  {
    title: 'Capital for growth',
    body: 'Without giving up control of the business you built.',
  },
];

export default function ImpactGrowth() {
  return (
    <ListingTemplate
      eyebrow="Portfolio"
      title="Impact & Growth"
      intro="We measure our impact the way our portfolio companies do: by what they can do after joining ScaleIQ that they could not do before."
    >
      <div className="impact-grid" style={{ marginBottom: '3rem' }}>
        {points.map((p) => (
          <div className="impact-item" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
      <p style={{ maxWidth: 680, color: 'var(--ink-soft)' }}>Impact compounds over time. Every company we invest in makes the next one stronger, through shared engineering resources, shared industry relationships, and a growing base of proof that this model works in energy technology specifically.</p>
    </ListingTemplate>
  );
}
