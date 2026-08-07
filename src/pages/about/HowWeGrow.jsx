import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import QuickLinksRail from '../../components/QuickLinksRail';
import PrincipleStrips from '../../components/PrincipleStrips';
import StaggeredChecklist from '../../components/StaggeredChecklist';
import CountUpStat from '../../components/CountUpStat';
import { UsersIcon, ClockIcon, RocketIcon, BuildingIcon } from '../../components/icons/StatIcons';

const sections = [
  { id: 'model', label: 'Growth Model' },
  { id: 'look-for', label: 'What We Look For' },
  { id: 'principles', label: 'Our Principles' },
  { id: 'why-founders', label: 'Why Founders Choose Us' },
  { id: 'numbers', label: 'The Numbers' },
  { id: 'contact', label: 'Talk to Our Team' },
];

const principles = [
  { title: 'Domain Driven', teaser: 'Shaped by real operators, not abstract best practices.', body: 'ScaleIQ and its portfolio companies engage deeply with oil & gas domain experts before proposing any solution. Constraints, decision logic, and risk on the ground shape every product decision, not abstract best practices imported from other industries.' },
  { title: 'Focused High-Impact AI', teaser: 'AI tied to outcomes, not experiments that never ship.', body: 'Every portfolio company prioritizes AI use cases tightly linked to real operational and commercial outcomes, not experiments that never leave a slide deck.' },
  { title: 'Outcomes Over Offerings', teaser: 'Built to solve the whole problem, not sell a service menu.', body: "ScaleIQ companies are built to solve problems end-to-end, not to sell a fixed menu of services. What needs to work matters more than what's easiest to package." },
  { title: 'One Cohesive System', teaser: 'One standard across the group, not a patchwork per project.', body: 'Capabilities and domain expertise come together under a single standard across the group, so data stays consistent and architecture holds up group-wide, not just project by project.' },
  { title: 'Deep Data Engineering', teaser: 'Connecting the data energy operations actually depend on.', body: 'Every ScaleIQ company works to connect fragmented data across upstream, midstream, and downstream systems, building the kind of trusted, governed data environment energy operations actually need.' },
];

const whyFounders = [
  'Retain your name, leadership, and independence',
  'Access permanent capital without losing control',
  'Tap into group-wide business development',
  'Join a network of peer companies solving similar problems',
  'Gain domain-specific engineering depth built for energy',
];

export default function HowWeGrow() {
  useReveal();
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <>
      <PageHeader eyebrow="About" title={<>The engine behind every company we <em>back</em>.</>} />
      <div className="hub-layout wrap">
        <QuickLinksRail sections={sections} />
        <div className="hub-sections">
          <section id="model" className="hub-section reveal-left">
            <div className="hub-eyebrow">Growth Model</div>
            <p>ScaleIQ follows a buy-and-build model built specifically for energy technology: we back companies with strong products and services and give them permanent capital and the resources to grow further. Companies keep their name, their leadership, and their independence — what they gain is what they couldn't build alone.</p>
          </section>

          <section id="look-for" className="hub-section reveal-right">
            <div className="hub-eyebrow">What We Look For</div>
            <ul className="form-list">
              <li>Founder-led leadership</li>
              <li>An established product with paying customers</li>
              <li>Ambition to grow further, not exit the industry</li>
            </ul>
          </section>

          <section id="principles" className="hub-section reveal-left">
            <div className="hub-eyebrow">Our Principles</div>
            <PrincipleStrips principles={principles} activeIndex={activePrinciple} onToggle={setActivePrinciple} />
          </section>

          <section id="why-founders" className="hub-section reveal-right">
            <div className="hub-eyebrow">Why Founders Choose ScaleIQ</div>
            <StaggeredChecklist items={whyFounders} />
          </section>

          <section id="numbers" className="hub-section reveal-left">
            <div className="hub-eyebrow">The Numbers</div>
            <div className="stat-row">
              <CountUpStat value={715} suffix="+" label="Global energy experts" icon={UsersIcon} />
              <CountUpStat value={250} suffix="+" label="Years of cumulative energy tech & leadership experience" icon={ClockIcon} />
              <CountUpStat value={378} suffix="+" label="Projects delivered" icon={RocketIcon} />
              <CountUpStat value={171} suffix="+" label="Customers in energy and associated companies" icon={BuildingIcon} />
            </div>
          </section>
        </div>
      </div>

      <section id="contact" className="cta-band reveal">
        <div className="wrap">
          <h2>Talk to <em>our team</em>.</h2>
          <p>Rajvardhan Singh, Corporate Development, is the first conversation for founders weighing what's next.</p>
          <Link to="/contact/portfolio-companies" className="btn-gold">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
