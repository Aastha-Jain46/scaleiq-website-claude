import { Link } from 'react-router-dom';
import ListingTemplate from '../../components/templates/ListingTemplate';

export default function Blogs() {
  return (
    <ListingTemplate
      eyebrow="Resources"
      title="Blogs"
      intro="Perspectives from inside ScaleIQ, on digital transformation, energy technology, and what it takes to scale a company in this industry."
    >
      <div className="listing-grid">
        <Link to="/resources/blogs/why-digital-transformation-fails" className="listing-card">
          <span className="card-tag">Rajeev Sonthalia</span>
          <h3>Why Digital Transformation Fails to Deliver Expected Outcomes in Complex Operations</h3>
          <p>Read the full piece →</p>
        </Link>
        <div className="listing-card">
          <span className="card-tag">Coming soon</span>
          <h3 style={{ color: 'var(--ink-muted)' }}>[NEEDS INPUT] Blog #2</h3>
          <p>Title only so far — source notes or a transcript are needed to draft this in the same voice as Blog #1.</p>
        </div>
        <div className="listing-card">
          <span className="card-tag">Coming soon</span>
          <h3 style={{ color: 'var(--ink-muted)' }}>[NEEDS INPUT] Blog #3</h3>
          <p>Title only so far — source notes or a transcript are needed to draft this in the same voice as Blog #1.</p>
        </div>
      </div>
    </ListingTemplate>
  );
}
