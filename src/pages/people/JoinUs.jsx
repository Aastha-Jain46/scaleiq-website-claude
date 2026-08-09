import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import StaggeredChecklist from '../../components/StaggeredChecklist';

const tracks = {
  engineering: {
    label: 'Engineering',
    heading: 'Build the systems energy operations actually run on.',
    points: [
      'Hands-on ownership of real production systems, not just tickets in a queue.',
      'Work across the stack that portfolio companies depend on — data, AI, and product engineering.',
      "Direct exposure to how energy operators actually use what you build, not an abstracted spec.",
    ],
  },
  investing: {
    label: 'Investing & Business Development',
    heading: 'Help decide which companies ScaleIQ backs, and how they grow.',
    points: [
      'Evaluate real energy-technology companies and the founders behind them.',
      'Build relationships across an industry that rewards depth over volume.',
      'Move between financial judgment and genuine domain expertise, not just one or the other.',
    ],
  },
};

const shared = [
  'Small, accountable teams — no layers between you and the decision',
  'Direct access to leadership across ScaleIQ and its portfolio companies',
  'Energy-industry focus that compounds the longer you\'re in it',
];

export default function JoinUs() {
  useReveal();
  const [track, setTrack] = useState('engineering');
  const current = tracks[track];

  return (
    <>
      <PageHeader eyebrow="People & Culture" title="Work on problems that matter, wherever you are." size="hero" />
      <div className="content-body wrap">
        <p className="reveal">ScaleIQ is a small team doing two demanding things at once, investing in energy-technology companies, and building the systems that run the energy industry. We look for people who already know energy, or want to.</p>

        <div className="filter-row reveal" style={{ marginTop: '2.5rem' }}>
          {Object.entries(tracks).map(([key, t]) => (
            <button type="button" key={key} className={`filter-chip${track === key ? ' active' : ''}`} onClick={() => setTrack(key)}>{t.label}</button>
          ))}
        </div>

        <div className="card-section track-panel reveal-left" key={track}>
          <h2>{current.heading}</h2>
          <ul className="form-list">
            {current.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <h2 className="hub-section-title reveal-right" style={{ marginTop: '3rem' }}>True of <em>every</em> role at ScaleIQ</h2>
        <StaggeredChecklist items={shared} />

        <div className="empty-roles reveal" style={{ marginTop: '2rem' }}>
          <p className="empty-roles-title">No specific openings posted right now.</p>
          <p>We're a small team and roles open infrequently — reach out directly and we'll keep you in mind for {current.label.toLowerCase()}.</p>
        </div>

        <Link to="/contact" className="btn-gold reveal">Get in touch</Link>
      </div>
    </>
  );
}
