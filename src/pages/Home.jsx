import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import useParallax from '../hooks/useParallax';
import AskScaleIQ from '../components/AskScaleIQ';
import CountUpStat from '../components/CountUpStat';
import { UsersIcon, ClockIcon, RocketIcon, BuildingIcon } from '../components/icons/StatIcons';
import ogesVisual from '../assets/oges-visual.png';

const workSteps = [
  {
    title: 'Keep building what you already built.',
    body: 'You keep your brand, your leadership, and the technical culture your team already built, and gain the platform to grow it further. Oges is still Oges. Future portfolio companies keep their name and their independence, backed by more than they had access to before.',
  },
  {
    title: "Open doors you couldn't reach alone.",
    body: "ScaleIQ's group-wide business development works alongside your technical sales team, putting your product in front of clients and sectors that would have taken years to reach independently.",
  },
  {
    title: 'Grow with permanent capital behind you.',
    body: 'ScaleIQ Capital gives every portfolio company permanent capital, the runway to invest in product, people, and market expansion, without the constant uncertainty of chasing the next funding round.',
  },
  {
    title: 'Join a network of founders already playing at this level.',
    body: "Portfolio companies get direct access to peer leadership across the ScaleIQ group, other founders and executives who've already worked through the same regulatory hurdles, enterprise sales cycles, and scaling decisions in energy technology. The kind of insight you usually only get after making the mistake yourself.",
  },
];

const impactItems = [
  { title: 'Fewer manual workflows', body: 'Field and back-office processes that used to run on spreadsheets and phone calls, automated end to end.' },
  { title: 'Knowledge that stays', body: 'Operational knowledge captured and shared, instead of leaving the company when an engineer does.' },
  { title: 'Real-time visibility', body: 'Production data operators can actually see and act on, not just report on after the fact.' },
];

const peopleStrip = [
  'Decades of combined energy-industry leadership experience',
  'Small, accountable teams — ownership stays close to the work',
  'People who move between investing and engineering, not siloed into one',
  'Hired for depth on hard problems, not breadth across easy ones',
];

export default function Home() {
  useReveal();
  const visualRef = useParallax(0.1);

  return (
    <div id="homeView">
      {/* HERO */}
      <section className="hero wrap">
        <div className="eyebrow hero-load-item" style={{ animationDelay: '0ms' }}>Energy technology · Buy-and-build</div>
        <h1 className="hero-h hero-load-item" style={{ animationDelay: '100ms' }}>Growing the digital <em>backbone</em> of the energy industry.</h1>
        <p className="hero-sub hero-load-item" style={{ animationDelay: '200ms' }}>ScaleIQ backs energy-technology companies with capital and resources, and builds technology for the wider energy industry as a trusted partner.</p>
        <div className="hero-load-item" style={{ animationDelay: '300ms' }}>
          <Link to="/portfolio/our-companies" className="btn-gold">Explore Portfolio</Link>
          <Link to="/our-work/our-services" className="link-arrow">See our Work</Link>
        </div>
      </section>

      {/* ASK SCALEIQ */}
      <AskScaleIQ />

      {/* WHAT IT MEANS TO BE A SCALEIQ COMPANY */}
      <section className="section wrap reveal">
        <div className="work-grid">
          <div className="work-grid-sticky">
            <div className="label">How We Work</div>
            <h2 className="section-h">What it means to be a <em>ScaleIQ company</em></h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.9rem', marginTop: '1.5rem' }}>
              <Link to="/portfolio/impact-growth" className="link-arrow">See our Impact &amp; Growth →</Link>
              <Link to="/contact/portfolio-companies" className="btn-gold">Become our portfolio company</Link>
            </div>
          </div>
          <div>
            {workSteps.map((step, i) => (
              <div className="work-step reveal" style={{ transitionDelay: `${i * 130}ms` }} key={step.title}>
                <div className="work-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT — horizontal hover cards */}
      <section className="section wrap reveal">
        <div className="label">Impact</div>
        <h2 className="section-h">What changes when energy companies get <em>resources</em> they've never had.</h2>
        <div className="impact-grid">
          {impactItems.map((item, i) => (
            <div className="impact-card reveal" style={{ transitionDelay: `${i * 130}ms` }} key={item.title}>
              <div className="impact-card-fill" />
              <div className="impact-card-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="impact-card-content">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR COMPANIES */}
      <section className="section wrap reveal" id="portfolio">
        <div className="label">Our Companies</div>
        <h2 className="section-h">The <em>companies</em> keeping energy running.</h2>
        <p className="section-lead">ScaleIQ is a growing group of energy-technology companies, built by people who understand the industry from the inside, and trusted by operators who can't afford downtime.</p>

        <div className="company-feature">
          <div>
            <div className="company-tag">Oil &amp; Gas</div>
            <div className="company-name">Oges</div>
            <p className="company-desc">Oges builds software that keeps oil and gas operations running — trusted by public sector oil &amp; gas operators, drilling contractors, and service vendors across the industry.</p>
            <div className="company-products">
              <span className="prod-chip">OgesOne</span>
              <span className="prod-chip">WIPA</span>
              <span className="prod-chip">HVMS</span>
              <span className="prod-chip">Udbhav</span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link to="/portfolio/our-companies" className="link-arrow">Find out more about Oges →</Link>
              <a href="https://oges.co" target="_blank" rel="noopener noreferrer" className="link-arrow">Visit oges.co ↗</a>
            </div>
          </div>
          <div className="company-visual" ref={visualRef}>
            <img src={ogesVisual} alt="Oges" />
          </div>
        </div>
      </section>

      {/* HOW WE GROW */}
      <section className="section wrap reveal" id="how-we-grow">
        <div className="label">How We Grow</div>
        <h2 className="section-h">The <em>engine</em> behind every company we back.</h2>
        <div className="grow-band">
          <p className="lead-text">ScaleIQ follows a buy-and-build model built specifically for energy technology: we back companies with strong products and services and give them permanent capital and the resources to grow further. Companies keep their name, their leadership, and their independence — what they gain is what they couldn't build alone.</p>
          <div className="stat-row">
            <CountUpStat value={715} suffix="+" label="Global energy experts" icon={UsersIcon} />
            <CountUpStat value={250} suffix="+" label="Years of cumulative energy tech & leadership experience" icon={ClockIcon} />
            <CountUpStat value={378} suffix="+" label="Projects delivered" icon={RocketIcon} />
            <CountUpStat value={171} suffix="+" label="Customers in energy and associated companies" icon={BuildingIcon} />
          </div>
        </div>
      </section>

      {/* LATEST FROM SCALEIQ */}
      <section className="section wrap reveal">
        <div className="label">Resources</div>
        <h2 className="section-h"><em>Latest</em> from ScaleIQ</h2>
        <Link to="/resources/blogs/why-digital-transformation-fails" className="latest-card">
          <div>
            <h3>Why Digital Transformation Fails to Deliver Expected Outcomes in Complex Operations</h3>
            <div className="byline">Rajeev Sonthalia, CEO</div>
          </div>
          <span className="link-arrow">Read this blog →</span>
        </Link>
        <Link to="/resources/case-studies" className="link-arrow" style={{ display: 'inline-block', marginTop: '1.25rem' }}>See our Case Studies →</Link>
      </section>

      {/* DRIVEN BY PEOPLE */}
      <section className="section wrap reveal">
        <div className="label">Leadership &amp; Culture</div>
        <h2 className="section-h">Driven by people who've lived inside this <em>industry</em>.</h2>
        <div className="driven-layout">
          <div className="driven-text">
            <p>The hardest problems in energy aren't about building new technology — they're about making it work inside systems that are live, regulated, and interdependent, with zero room for downtime.</p>
            <p>ScaleIQ is founded and led by industry veterans who've spent careers inside energy — not generalists learning the constraints for the first time.</p>
            <Link to="/people-culture/leadership" className="link-arrow">More about our leadership →</Link>
          </div>
          <div className="industry-strip">
            {peopleStrip.map((item, i) => (
              <div className="industry-chip reveal" style={{ transitionDelay: `${i * 90}ms` }} key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="cta-band reveal">
        <div className="wrap">
          <h2>Building an <em>energy-technology</em> company?</h2>
          <p>If you're weighing what's next — capital, growth, or simply more resources than you have today — we'd like to talk.</p>
          <Link to="/contact/portfolio-companies" className="btn-gold">Talk to us about joining ScaleIQ</Link>
        </div>
      </section>
    </div>
  );
}
