import ListingTemplate from '../../components/templates/ListingTemplate';

// Segment write-ups pulled from the current live site (scaleiqglobal.com),
// condensed to the intro paragraph — full multi-tab depth (Upstream/Midstream/
// Downstream sub-sections etc.) lives on the current site but isn't ported
// here, since interior pages use the simpler shared template by design.
const segments = [
  {
    name: 'Oil & Gas Companies',
    body: 'ScaleIQ partners with oil and gas companies operating across upstream, midstream, downstream, and retail environments, supporting organizations that manage complex assets, systems, and operating models across the full value chain — from exploration and production to transportation, processing, refining, and distribution.',
  },
  {
    name: 'GCCs',
    body: 'ScaleIQ partners with global energy companies to design, launch, and operationalize Global Capability Centers (GCCs) in India, helping GCCs become high-impact extensions of global energy operations by delivering engineering, digital, data, and AI capabilities at scale.',
  },
  {
    name: 'Energy Majors',
    body: 'We partner with large, diversified energy companies managing portfolios across conventional fuels, emerging energy systems, and new business models — integrating legacy and emerging assets on a common enterprise data foundation.',
  },
  {
    name: 'Renewables & Utilities',
    body: 'We work with renewable energy operators and utility companies managing generation fleets, transmission and distribution networks, and customer-facing operations, integrating generation, grid, and customer systems into a cohesive digital foundation.',
  },
  {
    name: 'Energy ISVs',
    body: 'We work with energy-focused Independent Software Vendors building platforms and digital products for asset-intensive industries, bringing deep energy domain context that complements strong product engineering.',
  },
  {
    name: 'Oil Service Companies',
    body: 'We work with oil service companies delivering engineering, field, and technical services across complex and demanding operating environments, building digital solutions that strengthen service delivery and improve operational efficiency.',
  },
];

export default function WhomWeServe() {
  return (
    <ListingTemplate
      eyebrow="Our Work"
      title="Whom We Serve"
      intro="ScaleIQ Operations has spent over a decade building digital systems for the energy industry, across oil and gas companies, GCCs, energy majors, renewables and utilities, energy ISVs, and oil service companies."
    >
      {segments.map((s) => (
        <div className="segment-block" key={s.name}>
          <h3>{s.name}</h3>
          <p>{s.body}</p>
        </div>
      ))}

      <div style={{ marginTop: '3rem', maxWidth: 680 }}>
        <h2 className="section-h" style={{ fontSize: '1.4rem' }}>Why teams choose ScaleIQ Operations</h2>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '1.25rem' }}>Energy companies don't have the luxury of a vendor that's still learning the industry. Downtime costs money and, in some cases, safety. That's why the teams delivering your project already understand upstream, midstream, and downstream workflows, the compliance standards you operate under, and the systems you're likely already running.</p>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '1.25rem' }}>We also bring something most engineering vendors can't: a stake in getting it right beyond the contract. The same engineering standard we apply to client work is the standard we hold our own portfolio companies to. There's no B-team held back for internal projects.</p>
        <p style={{ color: 'var(--ink-soft)' }}>Choosing ScaleIQ Operations means choosing a team that speaks your industry's language on day one, not by month six.</p>

        <div className="content-note" style={{ marginTop: '2rem' }}>
          <strong>"ScaleIQ Oges supported us in scaling specialized teams within aggressive timelines. Their structured approach, responsiveness, and clarity on role requirements helped us build critical capabilities without impacting business continuity."</strong>
          <br />— Senior HR Leader, Energy &amp; Lubricants Company
        </div>
      </div>
    </ListingTemplate>
  );
}
