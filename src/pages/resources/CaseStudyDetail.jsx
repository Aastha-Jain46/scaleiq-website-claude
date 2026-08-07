import { Link, useParams } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import QuickLinksRail from '../../components/QuickLinksRail';
import { getCaseStudyBySlug } from '../../content/caseStudies';

const RAIL_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'core-problem', label: 'The Core Business Problem' },
  { id: 'the-solution', label: 'The Solution' },
  { id: 'business-impact', label: 'The Business Impact' },
];

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

function PrintIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

function handleShare(title) {
  if (navigator.share) {
    navigator.share({ title, url: window.location.href }).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
  }
}

function slugifyForFilename(str) {
  return str.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '');
}

// Browsers suggest document.title as the default "Save as PDF" filename, so
// swap it in just for the print dialog, then restore once printing is done.
function handlePrint(category) {
  const originalTitle = document.title;
  document.title = `ScaleIQ_Case_Study_${slugifyForFilename(category)}`;
  const restoreTitle = () => {
    document.title = originalTitle;
    window.removeEventListener('afterprint', restoreTitle);
  };
  window.addEventListener('afterprint', restoreTitle);
  window.print();
}

export default function CaseStudyDetail() {
  useReveal();
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return (
      <div className="wrap" style={{ padding: '6rem 0' }}>
        <p>This case study couldn't be found.</p>
        <Link to="/resources/case-studies" className="link-arrow">← Back to Case Studies</Link>
      </div>
    );
  }

  return (
    <>
      <div className="cs-breadcrumb wrap">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/resources/case-studies">Case Studies</Link>
        <span>/</span>
        <span className="current">{study.title}</span>
      </div>

      <header className="cs-hero wrap">
        <div className="cs-hero-text">
          <div className="article-tag">Case Study</div>
          <h1 className="page-h1 page-h1-hero">{study.title}</h1>
          <p className="cs-hero-title2">{study.title2}</p>
          <p className="cs-hero-credit">A {study.credit} Project</p>
          <div className="cs-hero-actions">
            <button type="button" className="btn-outline-gold" onClick={() => handleShare(study.title)}>
              <ShareIcon /> Share
            </button>
            <button type="button" className="btn-outline-gold" onClick={() => handlePrint(study.category)}>
              <PrintIcon /> Print
            </button>
          </div>
        </div>
        <div className="cs-hero-image">
          <img src={study.image} alt={study.title} />
        </div>
      </header>

      <div className="hub-layout wrap">
        <QuickLinksRail sections={RAIL_SECTIONS} title="On This Page" />
        <div className="hub-sections">
          <section id="overview" className="hub-section reveal-left">
            <h2>Overview</h2>
            <p>{study.description}</p>
            <p>{study.secondaryText}</p>
          </section>

          <section id="core-problem" className="hub-section reveal-right">
            <h2>The Core Business Problem</h2>
            <p>{study.coreProblem}</p>
            <ul className="form-list">
              {study.problemBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {study.extraText && <p className="cs-extra-text">{study.extraText}</p>}
          </section>

          <section id="the-solution" className="hub-section reveal-left">
            <h2>The Solution</h2>
            <p>{study.solutionIntro}</p>
            {study.solutionGroups.map((g) => (
              <div className="cs-solution-group" key={g.head}>
                <h3>{g.head}</h3>
                <ul className="form-list">
                  {g.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {study.businessImpact && (
            <section id="business-impact" className="hub-section card-section reveal-right">
              <h2>The Business Impact</h2>
              <ul className="cs-impact-list">
                {study.businessImpact.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <section className="cs-footer-band wrap">
        <div className="cs-quote-card">
          <p>“{study.sidebarQuote}”</p>
        </div>
        <div className="cs-cta-card">
          <div>
            <h4>Explore Similar Solutions for Your Organization</h4>
            <p>Connect with us and get a detailed analysis of your digital transformation needs.</p>
          </div>
          <Link to="/contact" className="btn-gold">Visit Contact Page</Link>
        </div>
      </section>
    </>
  );
}
