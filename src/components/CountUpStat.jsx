import { useEffect, useRef, useState } from 'react';

export default function CountUpStat({ value, suffix = '', label, icon: Icon }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted.current) {
            counted.current = true;
            obs.unobserve(el);
            const duration = 1200;
            const start = performance.now();
            const tick = (now) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(Math.round(eased * value));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div className="stat-card" ref={ref}>
      {Icon && <span className="stat-icon"><Icon /></span>}
      <div className="stat-num">{display}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
