import { useState } from 'react';
import ListingTemplate from '../../components/templates/ListingTemplate';
import { categories, caseStudies } from '../../content/caseStudies';

export default function CaseStudies() {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <ListingTemplate
      eyebrow="Resources"
      title="Case Studies"
      intro="Deep-dive insights into how ScaleIQ solves complex transformation challenges across energy, oil & gas, and digital infrastructure."
    >
      <div className="filter-row">
        <button className={`filter-chip${active === 'All' ? ' active' : ''}`} onClick={() => setActive('All')}>All</button>
        {categories.map((c) => (
          <button key={c} className={`filter-chip${active === c ? ' active' : ''}`} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>

      <div className="listing-grid">
        {shown.map((c) => (
          <div className="listing-card" key={c.title}>
            <span className="card-tag">{c.category}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
    </ListingTemplate>
  );
}
