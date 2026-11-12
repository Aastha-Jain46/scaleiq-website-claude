// Trails follow the menu structure. Group names (About, Resources...) are not pages,
// so they are shown as plain text; the current page is the last item and not a link.
const HOME = { label: 'Home', to: '/' };
const trails = {
  '/about/who-we-are': ['About', 'Who We Are'],
  '/about/what-we-do': ['About', 'What We Do'],
  '/about/how-we-grow': ['About', 'How We Grow'],
  '/about/founders-note': ['People & Culture', 'A Note From Our Founder'],
  '/people-culture/leadership': ['People & Culture', 'Leadership'],
  '/people-culture/our-culture': ['People & Culture', 'Our Culture'],
  '/people-culture/join-us': ['People & Culture', 'Join Us'],
  '/portfolio/our-companies': ['Portfolio', 'Our Companies'],
  '/portfolio/impact-growth': ['Portfolio', 'Impact & Growth'],
  '/our-work/whom-we-serve': ['Our Work', 'Whom We Serve'],
  '/our-work/our-services': ['Our Work', 'Our Services'],
  '/resources/case-studies': ['Resources', 'Case Studies'],
  '/resources/blogs': ['Resources', 'Blogs'],
  '/contact': ['Contact Us'],
  '/contact/investors': ['Contact', 'For Investors'],
  '/contact/partners': ['Contact', 'For Partners'],
  '/contact/portfolio-companies': ['Contact', 'For Portfolio Companies'],
  '/terms': ['Terms of Use'],
  '/privacy': ['Privacy Statement'],
};

export function trailFor(pathname) {
  const t = trails[pathname.replace(/\/$/, '')];
  if (!t) return null;
  return [HOME, ...t.map((label) => ({ label }))];
}
