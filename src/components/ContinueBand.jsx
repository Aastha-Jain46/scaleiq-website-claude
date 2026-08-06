import { Link } from 'react-router-dom';

// Moves the reader to the next page in the About narrative arc — distinct
// from any in-page CTA.
export default function ContinueBand({ to, label }) {
  return (
    <div className="continue-band reveal">
      <Link to={to} className="continue-link">
        <span>{label}</span>
        <span className="continue-arrow">→</span>
      </Link>
    </div>
  );
}
