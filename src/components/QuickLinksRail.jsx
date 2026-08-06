import { useEffect, useState } from 'react';

// Sticky scrollspy quick-links rail, shared by all "hub" pages (Who We Are,
// What We Do, How We Grow). Collapses to a horizontal chip row on mobile via CSS.
export default function QuickLinksRail({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="hub-rail" aria-label="Quick links">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={`hub-rail-link${active === s.id ? ' active' : ''}`}
          onClick={handleClick(s.id)}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
