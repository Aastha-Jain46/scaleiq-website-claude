import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import QuickLinksRail from '../../components/QuickLinksRail';
import Testimonial from '../../components/Testimonial';

const sections = [
  { id: 'compare', label: 'Who We Work With' },
  { id: 'standard', label: 'One Standard' },
  { id: 'proof', label: 'Proof' },
];

export default function WhatWeDo() {
  useReveal();
  const [track, setTrack] = useState('back');

  return (
    <>
      <PageHeader eyebrow="About" title={<>We help energy companies do more than survive. We help them <em>lead</em>.</>} />
      <div className="hub-layout wrap">
        <QuickLinksRail sections={sections} />
        <div className="hub-sections">
          <section id="compare" className="hub-section reveal-left">
            <div className="hub-eyebrow">Who We Work With</div>
            <h2>Two kinds of company. One <em>standard</em>.</h2>

            <div className="toggle-row" style={{ marginBottom: '2rem' }}>
              <button type="button" className={`toggle-btn${track === 'back' ? ' active' : ''}`} onClick={() => setTrack('back')}>For Portfolio Companies</button>
              <button type="button" className={`toggle-btn${track === 'build-for' ? ' active' : ''}`} onClick={() => setTrack('build-for')}>For Clients</button>
            </div>

            <div className="compare-grid">
              <div className={`compare-card${track !== 'back' ? ' filtered-hidden' : ''}`}>
                <div className="hub-eyebrow">For Companies We Back</div>
                <h3>Capital, without losing what you built.</h3>
                <p>If you've already built something real in energy technology, an established product, paying customers, a team that knows the problem cold, ScaleIQ gives you permanent capital and a wider network to grow further. You're not choosing between raising outside money and giving up control, or growing slowly on your own cash flow while competitors with deeper pockets move faster. That choice disappears.</p>
                <Link to="/portfolio/our-companies" className="btn-gold">See our portfolio</Link>
              </div>

              <div className={`compare-card${track !== 'build-for' ? ' filtered-hidden' : ''}`}>
                <div className="hub-eyebrow">For Companies We Build For</div>
                <h3>Technology that already speaks your language.</h3>
                <p>If you're running an energy operation, an oil &amp; gas company, a GCC, an energy major, a renewables or utilities business, and you need technology that actually understands how your operations work, ScaleIQ delivers it through the companies we back. Teams that already live inside upstream, midstream, and downstream workflows, not a vendor learning your industry's constraints on your contract, on your timeline, at your expense.</p>
                <Link to="/our-work/our-services" className="btn-gold">See our work</Link>
              </div>
            </div>
          </section>

          <section id="standard" className="hub-section reveal-right">
            <p className="pullout-line">Either way, the same standard applies. Real industry depth, not generalist guesswork learned on someone else's contract.</p>
          </section>

          <section id="proof" className="hub-section reveal-left">
            <div className="hub-eyebrow">Proof</div>
            <Testimonial
              quote="ScaleIQ Oges helped bring structure and visibility to complex operational workflows that were earlier managed through fragmented processes. The engagement enabled more disciplined, data-driven decision-making across teams and locations."
              attribution="VP Digital, National Energy Company"
            />
          </section>
        </div>
      </div>
    </>
  );
}
