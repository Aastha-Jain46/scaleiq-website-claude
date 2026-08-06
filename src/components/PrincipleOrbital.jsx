// Central image + 5 principle nodes arranged in a circle, connected by dotted
// spokes. Rotates so the active principle's node lands at the top position,
// synced with PrincipleStrips via the shared activeIndex/onToggle state.
const RADIUS = 130;

export default function PrincipleOrbital({ principles, activeIndex }) {
  const step = 360 / principles.length;
  const rotationOffset = (activeIndex ?? 0) * step;

  return (
    <div className="orbital">
      <div className="orbital-center">[NEEDS INPUT: central image, energy/industrial photography]</div>
      {principles.map((p, i) => {
        const angle = -90 + i * step - rotationOffset;
        return (
          <div key={p.title} className="orbital-arm" style={{ transform: `rotate(${angle}deg)` }}>
            <div className="orbital-line" style={{ width: RADIUS }} />
            <div
              className={`orbital-node${i === activeIndex ? ' active' : ''}`}
              style={{ transform: `translateX(${RADIUS}px) rotate(${-angle}deg)` }}
            >
              <span className="orbital-dot" />
              <span className="orbital-label">{p.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
