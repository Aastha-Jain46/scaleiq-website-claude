import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import QuickLinksRail from '../../components/QuickLinksRail';
import ContinueBand from '../../components/ContinueBand';

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
      <PageHeader eyebrow="About" title="Who We Are" />
      <div className="hub-layout wrap">
        <QuickLinksRail sections={sections} />
        <div className="hub-sections">
          <section id="purpose" className="hub-section reveal">
            <div className="hub-eyebrow">Our Purpose</div>
            <h2>Energy keeps the world running. We make sure its technology keeps up.</h2>
            <p>For decades, energy companies, especially smaller and mid-sized ones, have modernized with far less than other industries take for granted. Teams work in silos. The same digital problems get solved from scratch, again and again, by companies that could have shared the effort. ScaleIQ exists to close that gap.</p>
          </section>

          <section id="model" className="hub-section reveal">
            <div className="hub-eyebrow">Our Model</div>
            <p>ScaleIQ backs energy-technology companies for the long term through a buy-and-build model, permanent capital and real industry depth, not a quick exit.</p>
            <Link to="/about/how-we-grow" className="link-arrow">See how we grow →</Link>
          </section>

          <section id="leadership" className="hub-section reveal">
            <div className="hub-eyebrow">Our Leadership</div>
            <p>Led by people who've spent careers inside energy, not observing it from outside.</p>
            <Link to="/people-culture/leadership" className="link-arrow">Meet our leadership →</Link>
          </section>

          <section id="founders-note" className="hub-section reveal">
            <div className="hub-eyebrow">Founder's Note</div>
            <p>There's a fuller story behind why ScaleIQ exists, from the person who started it.</p>
            <Link to="/about/founders-note" className="link-arrow">Read the founder's note →</Link>
          </section>
        </div>
      </div>
      <ContinueBand to="/about/what-we-do" label="Continue to What We Do" />
    </>
  );
}
