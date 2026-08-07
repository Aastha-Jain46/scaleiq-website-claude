import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ListingTemplate from '../../components/templates/ListingTemplate';
import { categories, caseStudies } from '../../content/caseStudies';

function ChevronIcon({ open }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CategoryDropdown({ categories, active, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const select = (c) => { onChange(c); setOpen(false); };

  return (
    <div className="filter-dropdown" ref={ref}>
      <button type="button" className="filter-dropdown-trigger" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{active === 'All' ? 'All Categories' : active}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <ul className="filter-dropdown-menu">
          <li>
            <button type="button" className={active === 'All' ? 'active' : ''} onClick={() => select('All')}>All Categories</button>
          </li>
          {categories.map((c) => (
            <li key={c}>
              <button type="button" className={active === c ? 'active' : ''} onClick={() => select(c)}>{c}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CaseStudies() {
  const [active, setActive] = useState('All');
  const shown = active === 'All' ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <ListingTemplate
      eyebrow="Resources"
      title={<>Case <em>Studies</em></>}
      intro="Deep-dive insights into how ScaleIQ solves complex transformation challenges across energy, oil & gas, and digital infrastructure."
      size="hero"
    >
      <CategoryDropdown categories={categories} active={active} onChange={setActive} />

      <div className="listing-grid">
        {shown.map((c) => (
          <Link to={`/resources/case-studies/${c.slug}`} className="listing-card" key={c.slug}>
            <div className="listing-card-thumb">
              <img src={c.image} alt={c.title} loading="lazy" />
            </div>
            <span className="card-tag">{c.category}</span>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <span className="listing-card-cta">Read Full Case Study →</span>
          </Link>
        ))}
      </div>
    </ListingTemplate>
  );
}
