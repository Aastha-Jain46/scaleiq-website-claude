import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import QuickLinksRail from '../../components/QuickLinksRail';

const sections = [
  { id: 'purpose', label: 'Our Purpose' },
  { id: 'model', label: 'Our Model' },
  { id: 'leadership', label: 'Our Leadership' },
  { id: 'founders-note', label: "Founder's Note" },
];

export default function WhoWeAre() {
  useReveal();

  return (
    <>
      <PageHeader eyebrow="About" title={<>Energy keeps the world running. We make sure its technology never falls <em>behind</em>.</>} size="hero" />
      <div className="hub-layout wrap">
        <QuickLinksRail sections={sections} />
        <div className="hub-sections">
          <section id="purpose" className="hub-section reveal-left card-section">
            <div className="hub-eyebrow">Our Purpose</div>
            <h2>Closing the gap energy technology <em>left open</em>.</h2>
            <p>For decades, energy companies, especially smaller and mid-sized ones, have modernized with far less than other industries take for granted. Teams work in silos. The same digital problems get solved from scratch, again and again, by companies that could have shared the effort. ScaleIQ exists to close that gap.</p>
            <p>This isn't a small gap to close. Oil and gas operations span a uniquely interconnected landscape, field operations, engineering workflows, enterprise systems, safety and regulatory constraints, all tightly coupled to each other. Most attempts at modernization tackle one piece at a time, another tool, another vendor, another disconnected system. ScaleIQ backs and builds companies that treat this as one connected problem, not a checklist of isolated fixes.</p>
          </section>

          <section id="model" className="hub-section reveal-right">
            <div className="hub-eyebrow">Our Model</div>
            <h2>Permanent capital, not a five-year <em>exit clock</em>.</h2>
            <p>ScaleIQ backs energy-technology companies for the long term through a buy-and-build model, permanent capital, not the kind that expects an exit in five years. Every company we back keeps its name, its leadership, and its independence. What it gains is capital, a peer network, and the runway to grow into problems it couldn't tackle alone. This is a model built specifically for one industry, not a generalist portfolio spread thin across sectors we don't understand as deeply.</p>
            <Link to="/about/how-we-grow" className="link-arrow">See how we grow →</Link>
          </section>

          <section id="leadership" className="hub-section reveal-left">
            <div className="hub-eyebrow">Our Leadership</div>
            <h2>Led by people who've lived <em>inside</em> energy.</h2>
            <p>ScaleIQ is led by people who've spent careers inside energy and energy technology, not observing the industry from a distance. That experience shapes which companies we back, which projects we take on, and how we tell the difference between real progress and a good demo.</p>
            <Link to="/people-culture/leadership" className="link-arrow">Meet our leadership →</Link>
          </section>

          <section id="founders-note" className="hub-section reveal-right">
            <div className="hub-eyebrow">Founder's Note</div>
            <h2>Why this, and why <em>now</em>.</h2>
            <p>There's a fuller story behind why ScaleIQ exists, from the person who started it.</p>
            <Link to="/about/founders-note" className="btn-gold">Read the founder's note</Link>
          </section>
        </div>
      </div>
    </>
  );
}
