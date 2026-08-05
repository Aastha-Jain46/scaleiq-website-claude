import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import useParallax from '../hooks/useParallax';
import AskScaleIQ from '../components/AskScaleIQ';
import CountUpStat from '../components/CountUpStat';

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

export default function Home() {
  useReveal();
  const glowRef = useParallax(0.18);
  const visualRef = useParallax(0.1);

  return (
    <div id="homeView">
      {/* HERO */}
      <section className="hero wrap">
        <div className="hero-glow" ref={glowRef} />
        <div className="eyebrow hero-load-item" style={{ animationDelay: '0ms' }}>Energy technology · Buy-and-build</div>
        <h1 className="hero-h hero-load-item" style={{ animationDelay: '100ms' }}>Growing the digital <em>backbone</em> of the energy industry.</h1>
        <p className="hero-sub hero-load-item" style={{ animationDelay: '200ms' }}>ScaleIQ backs energy-technology companies with capital and resources, and builds technology for the wider energy industry as a trusted partner.</p>
        <div className="hero-load-item" style={{ animationDelay: '300ms' }}>
          <Link to="/portfolio/our-companies" className="btn-gold">See our portfolio</Link>
          <a href="#how-we-grow" className="link-arrow">See how it works →</a>
        </div>
      </section>

      {/* ASK SCALEIQ */}
      <AskScaleIQ />

      {/* WHAT IT MEANS TO BE A SCALEIQ COMPANY */}
      <section className="section wrap">
        <div className="work-grid">
          <div className="reveal">
            <div className="label">How We Work</div>
            <h2 className="section-h">What it means to be a <em>ScaleIQ company</em></h2>
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

      {/* IMPACT */}
      <section className="section wrap">
        <div className="label reveal">Impact</div>
        <h2 className="section-h reveal">What changes when energy companies get resources they've never had.</h2>
        <div className="impact-grid">
          <div className="impact-item reveal" style={{ transitionDelay: '0ms' }}>
            <h3>Fewer manual workflows</h3>
            <p>Field and back-office processes that used to run on spreadsheets and phone calls, automated end to end.</p>
          </div>
          <div className="impact-item reveal" style={{ transitionDelay: '130ms' }}>
            <h3>Knowledge that stays</h3>
            <p>Operational knowledge captured and shared, instead of leaving the company when an engineer does.</p>
          </div>
          <div className="impact-item reveal" style={{ transitionDelay: '260ms' }}>
            <h3>Real-time visibility</h3>
            <p>Production data operators can actually see and act on, not just report on after the fact.</p>
          </div>
        </div>
      </section>

      {/* OUR COMPANIES */}
      <section className="section wrap reveal" id="portfolio">
        <div className="label">Our Companies</div>
        <h2 className="section-h">This is already working, in one of energy's toughest environments.</h2>
        <p className="section-lead">ScaleIQ's model isn't a pitch. Oges is it, already running, already trusted by operators who can't afford software that doesn't hold up in the field.</p>

        <div className="company-feature">
          <div>
            <div className="company-tag">Oil &amp; Gas · Active since 2015</div>
            <div className="company-name">Oges</div>
            <p className="company-desc">Oges builds software that keeps oil and gas operations running — trusted by E&amp;P operators, drilling contractors, and service vendors, with active deployments at ONGC, Cairn, and OIL India.</p>
            <div className="company-products">
              <span className="prod-chip">OgesOne</span>
              <span className="prod-chip">WIPA</span>
              <span className="prod-chip">HVMS</span>
              <span className="prod-chip">Udbhav</span>
            </div>
            <Link to="/portfolio/our-companies" className="link-arrow">Find out more about Oges →</Link>
          </div>
          <div className="company-visual" ref={visualRef}>[NEEDS INPUT] Oges product photography / screenshot goes here</div>
        </div>
      </section>

      {/* HOW WE GROW */}
      <section className="section wrap reveal" id="how-we-grow">
        <div className="label">How We Grow</div>
        <h2 className="section-h">The engine behind every company we back.</h2>
        <div className="grow-band">
          <p className="lead-text">ScaleIQ follows a buy-and-build model built specifically for energy technology: we back companies with strong products and give them permanent capital and the resources to grow further. Companies keep their name, their leadership, and their independence — what they gain is what they couldn't build alone.</p>
          <div className="stat-row">
            <CountUpStat value={715} suffix="+" label="Global energy experts" />
            <CountUpStat value={250} suffix="+" label="Years of cumulative energy tech & leadership experience" />
            <CountUpStat value={378} suffix="+" label="Projects delivered" />
            <CountUpStat value={171} suffix="+" label="Customers in energy and associated companies" />
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--ink-muted)', marginTop: '1.5rem' }}>
            Figures as currently shown on scaleiqglobal.com — confirm these are still current before this goes live<span className="needs-input">Verify</span>
          </p>
        </div>
      </section>

      {/* LATEST FROM SCALEIQ */}
      <section className="section wrap reveal">
        <div className="label">Resources</div>
        <h2 className="section-h">Latest from ScaleIQ</h2>
        <Link to="/resources/blogs/why-digital-transformation-fails" className="latest-card">
          <div>
            <h3>Why Digital Transformation Fails to Deliver Expected Outcomes in Complex Operations</h3>
            <div className="byline">Rajeev Sonthalia, CEO</div>
          </div>
          <span className="link-arrow">Read the piece →</span>
        </Link>
      </section>

      {/* DRIVEN BY PEOPLE */}
      <section className="section wrap reveal">
        <div className="label">Leadership</div>
        <h2 className="section-h">Driven by people who've lived inside this industry.</h2>
        <div className="driven-band">
          <p>The hardest problems in energy aren't about building new technology — they're about making it work inside systems that are live, regulated, and interdependent, with zero room for downtime. ScaleIQ is founded and led by industry veterans who've spent careers inside energy, not generalists learning the constraints for the first time.</p>
          <Link to="/people-culture/leadership" className="link-arrow">More about our leadership →</Link>
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
