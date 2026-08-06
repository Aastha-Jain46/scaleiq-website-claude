import { useEffect, useState } from 'react';

// Spotlight-circle radial reveal: one large central circle (the active
// leader), three smaller circles evenly spaced around it. Clicking a
// satellite morphs it into the central position — implemented as every
// leader occupying a shared "slot" (center or one of three radial spots)
// whose position/size transition smoothly via CSS, rather than a literal
// shared-element library, so the swap reads as one continuous motion.
const RADIUS = 170;
const SLOT_ANGLES = [-90, 30, 150];

export default function LeadershipSpotlight({ leaders }) {
  const [activeId, setActiveId] = useState(leaders[0].id);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 60);
    return () => clearTimeout(t);
  }, []);

  const satellites = leaders.filter((l) => l.id !== activeId);
  const active = leaders.find((l) => l.id === activeId);

  return (
    <div className="spotlight">
      <div className="spotlight-slot" style={{ transform: 'translate(0px, 0px)' }}>
        <div className="spotlight-circle active">
          <img src={active.photo} alt={active.name} />
        </div>
        <div className="spotlight-info">
          <div className="spotlight-name">{active.name}</div>
          <div className="spotlight-title">{active.title}</div>
          {active.credential && <div className="spotlight-credential">{active.credential}</div>}
        </div>
      </div>

      {satellites.map((leader, i) => {
        const angle = (SLOT_ANGLES[i] * Math.PI) / 180;
        const x = Math.round(Math.cos(angle) * RADIUS);
        const y = Math.round(Math.sin(angle) * RADIUS);
        return (
          <div key={leader.id} className="spotlight-slot" style={{ transform: `translate(${x}px, ${y}px)` }}>
            <button
              type="button"
              className={`spotlight-circle${entered ? '' : ' spotlight-pre-enter'}`}
              style={{ transitionDelay: entered ? '0ms' : `${i * 170}ms` }}
              onClick={() => setActiveId(leader.id)}
              aria-label={`Show ${leader.name}`}
            >
              <img src={leader.photo} alt={leader.name} />
            </button>
            <span className="spotlight-name-tag">{leader.name}</span>
          </div>
        );
      })}
    </div>
  );
}
