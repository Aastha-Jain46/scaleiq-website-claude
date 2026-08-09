import { useState } from 'react';

// Interactive tab explorer shared by Whom We Serve and Our Services —
// clicking a name swaps the detail panel (image + refined copy + concrete
// bullets) instead of stacking every entry in one long scroll.
export default function SegmentExplorer({ items }) {
  const [active, setActive] = useState(items[0].slug);
  const current = items.find((i) => i.slug === active);

  return (
    <div className="segment-explorer">
      <div className="segment-tabs">
        {items.map((item) => (
          <button
            key={item.slug}
            type="button"
            className={`segment-tab${active === item.slug ? ' active' : ''}`}
            onClick={() => setActive(item.slug)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="segment-detail" key={current.slug}>
        <div className="segment-detail-image">
          <img src={current.image} alt={current.name} />
        </div>
        <div className="segment-detail-body">
          <h3>{current.name}</h3>
          <p>{current.summary}</p>
          <ul className="segment-detail-bullets">
            {current.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
