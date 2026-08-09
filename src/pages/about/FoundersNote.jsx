import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import rajeevPhoto from '../../assets/leadership/rajeev.png';

export default function FoundersNote() {
  useReveal();

  return (
    <>
      <PageHeader eyebrow="About" title={<>A Note From Our <em>Founder</em></>} size="hero" />
      <div className="founder-letter wrap">
        <p className="founder-opening-line reveal">Three decades inside the energy industry teaches you where the real gaps are.</p>

        <p className="reveal-left">Much of that time was spent in global technology leadership at SLB, working closely with operators of every size, from the largest majors to companies running on a fraction of their resources.</p>

        <p className="reveal-right">The pattern was consistent everywhere: energy companies, especially the smaller and mid-sized ones, are working hard to modernize with far less support than other industries take for granted. Teams work in silos. Budgets are stretched thin. The same digital problems get solved independently, again and again, by companies who could have shared the effort.</p>

        <p className="reveal-left">At the same time, digital technology and AI are reshaping every industry at a pace few could have predicted even five years ago. Energy cannot sit this out. Too much depends on this industry running well, efficiently, and safely, for that gap to be ignored.</p>

        <p className="reveal-right">ScaleIQ exists to close it: real engineering resources for energy companies that have never had easy access to them, and real proof of what digital transformation returns, not just promises about what it could return.</p>

        <p className="reveal-left">There's a second belief behind this platform. Some of the best engineering talent in the world today isn't concentrated where people expect it to be. Part of what ScaleIQ is built to do is put that talent to work on problems that matter, for energy companies anywhere in the world.</p>

        <p className="founder-closing-quote reveal">This isn't a project to grow and exit. It's the work worth spending the next chapter on.</p>

        <div className="founder-signature reveal">
          <img src={rajeevPhoto} alt="Rajeev Sonthalia" />
          <div>
            <div className="founder-signature-name">Rajeev Sonthalia</div>
            <div className="founder-signature-title">Founder &amp; CEO</div>
          </div>
        </div>

        <div className="founder-cta reveal">
          <Link to="/people-culture/leadership" className="btn-gold">Meet the rest of our leadership</Link>
          <Link to="/about/who-we-are" className="link-arrow">More about ScaleIQ →</Link>
        </div>
      </div>
    </>
  );
}
