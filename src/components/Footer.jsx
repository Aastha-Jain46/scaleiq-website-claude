import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <div className="logo">SCALEIQ</div>
        <div className="footer-links">
          <Link to="/about/who-we-are">Who We Are</Link>
          <Link to="/portfolio/our-companies">Portfolio</Link>
          <Link to="/about/how-we-grow">How We Grow</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} ScaleIQ</div>
      </div>
    </footer>
  );
}
