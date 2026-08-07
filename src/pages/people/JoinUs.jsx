import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';

const categories = ['Engineering', 'Business Development', 'Corporate Development'];

export default function JoinUs() {
  useReveal();
  const [active, setActive] = useState('Engineering');

  return (
    <>
      <PageHeader eyebrow="People & Culture" title="Work on problems that matter, wherever you are." />
      <div className="content-body wrap">
        <p className="reveal">ScaleIQ is a small team doing two demanding things at once, investing in energy-technology companies, and building the systems that run the energy industry. We look for people who already know energy, or want to.</p>

        <div className="filter-row reveal" style={{ marginTop: '2.5rem', marginBottom: '1.5rem' }}>
          {categories.map((c) => (
            <button type="button" key={c} className={`filter-chip${active === c ? ' active' : ''}`} onClick={() => setActive(c)}>{c}</button>
          ))}
        </div>

        <div className="empty-roles reveal">
          <p className="empty-roles-title">No open {active} roles right now.</p>
          <p>We're a small team and roles open infrequently — reach out directly and we'll keep you in mind when something in {active.toLowerCase()} comes up.</p>
        </div>

        <Link to="/contact" className="btn-gold reveal">Get in touch</Link>
      </div>
    </>
  );
}
