import { Link } from 'react-router-dom';
import ListingTemplate from '../../components/templates/ListingTemplate';
import { blogs } from '../../content/blogs';

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Blogs() {
  return (
    <ListingTemplate
      eyebrow="Resources"
      title="Blogs"
      intro="Perspectives from inside ScaleIQ, on digital transformation, energy technology, and what it takes to run complex operations well."
      size="hero"
    >
      <div className="blog-list">
        {blogs.map((b, i) => (
          <Link to={`/resources/blogs/${b.slug}`} className="blog-card" key={b.slug}>
            <div className="blog-card-thumb">
              <img src={b.image} alt={b.title} loading={i < 2 ? 'eager' : 'lazy'} />
            </div>
            <div className="blog-card-divider" />
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span className="blog-card-meta-item"><ClockIcon /> {b.readTime}</span>
                <span className="dot">·</span>
                <span>{b.date}</span>
                <span className="dot">·</span>
                <span>{b.author} | ScaleIQ</span>
              </div>
              <h3>{b.title}</h3>
              <p>{b.summary}</p>
              <span className="blog-card-cta">Read Full Blog →</span>
            </div>
          </Link>
        ))}
      </div>
    </ListingTemplate>
  );
}
