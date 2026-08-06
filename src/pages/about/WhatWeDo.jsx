import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import QuickLinksRail from '../../components/QuickLinksRail';
import ContinueBand from '../../components/ContinueBand';
import Testimonial from '../../components/Testimonial';

const sections = [
  { id: 'back', label: 'Companies We Back' },
  { id: 'build-for', label: 'Companies We Build For' },
  { id: 'standard', label: 'One Standard' },
  { id: 'proof', label: 'Proof' },
];

export default function WhatWeDo() {
  useReveal();

  return (
    <>
      <PageHeader eyebrow="About" title="What We Do" />
      <div className="hub-layout wrap">
        <QuickLinksRail sections={sections} />
        <div className="hub-sections">
          <section id="back" className="hub-section reveal">
            <div className="hub-eyebrow">For Companies We Back</div>
            <p>Permanent capital, business development access, and a peer network, without giving up your name or independence.</p>
            <Link to="/portfolio/our-companies" className="link-arrow">See our portfolio →</Link>
          </section>

          <section id="build-for" className="hub-section reveal">
            <div className="hub-eyebrow">For Companies We Build For</div>
            <p>Technology delivered through the companies we back, teams that already understand upstream, midstream, and downstream energy workflows.</p>
            <Link to="/our-work/our-services" className="link-arrow">See our work →</Link>
          </section>

          <section id="standard" className="hub-section reveal">
            <div className="hub-eyebrow">One Standard</div>
            <p>Either way, the same standard applies. Real industry depth, not generalist guesswork learned on someone else's contract.</p>
          </section>

          <section id="proof" className="hub-section reveal">
            <div className="hub-eyebrow">Proof</div>
            <Testimonial
              quote="ScaleIQ Oges helped bring structure and visibility to complex operational workflows that were earlier managed through fragmented processes. The engagement enabled more disciplined, data-driven decision-making across teams and locations."
              attribution="VP Digital, National Energy Company"
            />
          </section>
        </div>
      </div>
      <ContinueBand to="/about/how-we-grow" label="Continue to How We Grow" />
    </>
  );
}
