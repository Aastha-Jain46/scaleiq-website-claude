import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const menu = [
  {
    label: 'About',
    links: [
      { to: '/about/who-we-are', label: 'Who We Are' },
      { to: '/about/what-we-do', label: 'What We Do' },
      { to: '/about/how-we-grow', label: 'How We Grow' },
    ],
  },
  {
    label: 'People & Culture',
    links: [
      { to: '/people-culture/leadership', label: 'Leadership' },
      { to: '/people-culture/our-culture', label: 'Our Culture' },
      { to: '/people-culture/join-us', label: 'Join Us' },
      { to: '/about/founders-note', label: 'A Note From Our Founder' },
    ],
  },
  {
    label: 'Portfolio',
    links: [
      { to: '/portfolio/our-companies', label: 'Our Companies' },
      { to: '/portfolio/impact-growth', label: 'Impact & Growth' },
    ],
  },
  {
    label: 'Our Work',
    links: [
      { to: '/our-work/whom-we-serve', label: 'Whom We Serve' },
      { to: '/our-work/our-services', label: 'Our Services' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { to: '/resources/case-studies', label: 'Case Studies' },
      { to: '/resources/blogs', label: 'Blogs' },
    ],
  },
  {
    label: 'Contact',
    links: [
      { to: '/contact', label: 'Contact Us' },
      { to: '/contact/investors', label: 'For Investors' },
      { to: '/contact/partners', label: 'For Partners' },
      { to: '/contact/portfolio-companies', label: 'For Portfolio Companies' },
    ],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner wrap">
          <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <span></span><span></span><span></span>
          </button>
          <Link to="/" className="logo">SCALEIQ</Link>
        </div>
      </nav>

      <div className={`menu-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      <div className={`menu-panel${open ? ' open' : ''}`}>
        <div className="menu-top">
          <button className="menu-close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
          <Link to="/" className="logo" onClick={() => setOpen(false)}>SCALEIQ</Link>
        </div>

        {menu.map((group) => (
          <div className="menu-group" key={group.label}>
            <h4>{group.label}</h4>
            {group.links.map((link) => (
              <Link key={link.to} to={link.to}>{link.label}</Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
