import { useEffect } from 'react';

// Fades up any element with class "reveal" (or slides in "reveal-left" /
// "reveal-right" — About-section variety variants, homepage never uses
// these) as it scrolls into view. Triggers once per element, ~15%
// visibility threshold. Respects prefers-reduced-motion by revealing
// everything immediately, no observer.
// `deps`: pass a dependency array (e.g. [filterValue]) when the revealed
// elements can change after mount — a filtered grid, for instance — so the
// observer re-attaches to newly rendered elements instead of leaving them
// permanently at opacity: 0.
export default function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
