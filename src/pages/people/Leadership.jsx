import ContentTemplate from '../../components/templates/ContentTemplate';

const leaders = [
  { name: 'Rajeev Sonthalia', role: 'Founder & Chief Executive Officer' },
  { name: 'Chitwan Garg', role: 'Chief Business Officer' },
  { name: 'Amit Ranjan', role: 'Chief Solutions Architect' },
  { name: 'Rajvardhan Singh', role: 'Head, Corporate Development & Growth' },
];

const coreTeam = [
  { name: 'Satya Prakash Gupta', role: 'Head – Technical Architecture & Engineering' },
  { name: 'Sanskar Jain', role: 'Technical Operations & Delivery Manager' },
  { name: 'Amit Bansal', role: 'Senior Software Engineer' },
  { name: 'Anjani Kumar', role: 'Quality Assurance Engineer' },
  { name: 'Bhaswati Deka', role: 'Talent & HR Manager' },
  { name: 'Aastha Jain', role: 'Associate – Partnerships & Collaborations' },
];

export default function Leadership() {
  return (
    <ContentTemplate
      eyebrow="People & Culture"
      title="Leadership"
      intro="ScaleIQ is led by a team with deep roots in energy technology, engineering delivery, and corporate growth."
    >
      <p>Between them, our leadership has spent years inside the industry we serve, not observing it from a distance, which shapes how we evaluate every investment and every engagement we take on.</p>

      <div className="leader-grid">
        {leaders.map((l) => (
          <div className="leader-card" key={l.name}>
            <div className="leader-name">{l.name}</div>
            <div className="leader-role">{l.role}</div>
          </div>
        ))}
      </div>

      <h2 className="section-h" style={{ fontSize: '1.2rem', marginTop: '2.5rem' }}>Our Core Team</h2>
      <div className="leader-grid">
        {coreTeam.map((l) => (
          <div className="leader-card" key={l.name}>
            <div className="leader-name">{l.name}</div>
            <div className="leader-role">{l.role}</div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '1.75rem' }}>Each portfolio company retains its own leadership and its own decision-making. Our leadership team's role is to support that growth, not run it from a distance.</p>
    </ContentTemplate>
  );
}
