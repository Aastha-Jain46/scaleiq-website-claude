import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';

export default function JoinUs() {
  useReveal();

  return (
    <>
      <PageHeader eyebrow="People & Culture" title="Work on problems that matter, wherever you are." />
      <div className="content-body wrap">
        <p className="reveal">ScaleIQ is a small team doing two demanding things at once, investing in energy-technology companies, and building the systems that run the energy industry. We look for people who already know energy, or want to.</p>

        <div className="join-roles reveal">
          <p>[NEEDS INPUT: current openings, or a standing "always hiring for X, Y" line]</p>
        </div>

        <Link to="/contact" className="btn-gold reveal">Get in touch</Link>
      </div>
    </>
  );
}
