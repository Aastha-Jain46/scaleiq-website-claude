import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import QuickLinksRail from '../../components/QuickLinksRail';
import Testimonial from '../../components/Testimonial';

const sections = [
  { id: 'back', label: 'Companies We Back' },
  { id: 'build-for', label: 'Companies We Build For' },
  { id: 'standard', label: 'One Standard' },
  { id: 'proof', label: 'Proof' },
];

export default function WhatWeDo() {
  useReveal();
  const [emphasis, setEmphasis] = useState('back');

  return (
    <>
      <PageHeader eyebrow="About" title={<>We help energy companies do more than survive. We help them <em>lead</em>.</>} />
      <div className="wrap">
        <div className="toggle-row reveal">
          <button type="button" className={`toggle-btn${emphasis === 'back' ? ' active' : ''}`} onClick={() => setEmphasis('back')}>For Portfolio Companies</button>
          <button type="button" className={`toggle-btn${emphasis === 'build-for' ? ' active' : ''}`} onClick={() => setEmphasis('build-for')}>For Clients</button>
        </div>
      </div>
      <div className="hub-layout wrap">
        <QuickLinksRail sections={sections} />
        <div className="hub-sections">
          <section id="back" className={`hub-section reveal-left card-section${emphasis === 'back' ? ' emphasized' : ' de-emphasized'}`}>
            <div className="hub-eyebrow">For Companies We Back</div>
            <h2>Capital, without losing what you <em>built</em>.</h2>
            <p>If you've already built something real in energy technology, an established product, paying customers, a team that knows the problem cold, ScaleIQ gives you permanent capital and a wider network to grow further. You're not choosing between raising outside money and giving up control, or growing slowly on your own cash flow while competitors with deeper pockets move faster. That choice disappears.</p>
            <Link to="/portfolio/our-companies" className="btn-gold">See our portfolio</Link>
          </section>

          <section id="build-for" className={`hub-section reveal-right card-section${emphasis === 'build-for' ? ' emphasized' : ' de-emphasized'}`}>
            <div className="hub-eyebrow">For Companies We Build For</div>
            <h2>Technology that already speaks your <em>language</em>.</h2>
            <p>If you're running an energy operation, an oil &amp; gas company, a GCC, an energy major, a renewables or utilities business, and you need technology that actually understands how your operations work, ScaleIQ delivers it through the companies we back. Teams that already live inside upstream, midstream, and downstream workflows, not a vendor learning your industry's constraints on your contract, on your timeline, at your expense.</p>
            <Link to="/our-work/our-services" className="btn-gold">See our work</Link>
          </section>

          <section id="standard" className="hub-section reveal-left">
            <p className="pullout-line">Either way, the same standard applies. Real industry depth, not generalist guesswork learned on someone else's contract.</p>
          </section>

          <section id="proof" className="hub-section reveal-right">
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
