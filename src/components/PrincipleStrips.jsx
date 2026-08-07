// Full-width stacked strips — one row per principle, never a multi-column
// grid (5 doesn't divide evenly). Teaser is always visible; "+" expands to
// reveal the full paragraph.
export default function PrincipleStrips({ principles, activeIndex, onToggle }) {
  return (
    <div className="principle-strips">
      {principles.map((p, i) => {
        const open = activeIndex === i;
        return (
          <div key={p.title} className={`principle-strip${open ? ' open' : ''}`}>
            <button
              type="button"
              className="principle-strip-head"
              onClick={() => onToggle(open ? null : i)}
              aria-expanded={open}
            >
              <span className="principle-strip-head-text">
                <span className="principle-strip-title">{p.title}</span>
                <span className="principle-strip-teaser">{p.teaser}</span>
              </span>
              <span className="principle-strip-icon">{open ? '−' : '+'}</span>
            </button>
            <div className="principle-strip-body">
              <p>{p.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
