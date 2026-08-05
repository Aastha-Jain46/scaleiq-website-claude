import { useEffect, useRef } from 'react';

// Wraps a heading's text in a mask so it rises into view line-by-line as it
// scrolls into the viewport (or immediately if already in view on load).
export default function RevealHeading({ as: Tag = 'h2', text, children, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in');
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag className={`line-mask ${className}`.trim()} ref={ref}>
      <span className="line-inner">{text ?? children}</span>
    </Tag>
  );
}
