import { useState } from 'react';

// Materra-style "+"-expandable tile grid. Title visible by default,
// full description reveals on hover/click.
export default function ExpandableTileGrid({ tiles }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="tile-grid">
      {tiles.map((tile, i) => {
        const open = openIndex === i;
        return (
          <div
            key={tile.title}
            className={`tile${open ? ' open' : ''}`}
            onMouseEnter={() => setOpenIndex(i)}
            onMouseLeave={() => setOpenIndex((cur) => (cur === i ? null : cur))}
            onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
          >
            <div className="tile-head">
              <span className="tile-title">{tile.title}</span>
              <span className="tile-icon">{open ? '−' : '+'}</span>
            </div>
            <div className="tile-body">
              <p>{tile.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
