import { useEffect, useState } from 'react';

// Sticky scrollspy quick-links rail, shared by all "hub" pages (Who We Are,
// What We Do, How We Grow). Collapses to a horizontal chip row on mobile via CSS.
export default function QuickLinksRail({ sections, title }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const lastId = sections[sections.length - 1]?.id;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));

    // Short final sections can end before ever crossing the observer's
    // detection band, so the rail never highlights the last item — force it
    // active once the page is scrolled essentially to the bottom.
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (nearBottom && lastId) setActive(lastId);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [sections]);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="hub-rail" aria-label="Quick links">
      {title && <div className="hub-rail-title">{title}</div>}
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
