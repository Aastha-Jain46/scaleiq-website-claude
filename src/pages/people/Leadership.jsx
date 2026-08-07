import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import rajeevPhoto from '../../assets/leadership/rajeev.png';
import chitwanPhoto from '../../assets/leadership/chitwan.png';
import amitPhoto from '../../assets/leadership/amit.png';
import rajvardhanPhoto from '../../assets/leadership/rajvardhan.png';

const leaders = [
  { name: 'Rajeev Sonthalia', title: 'Founder & CEO', photo: rajeevPhoto },
  { name: 'Chitwan Garg', title: 'Chief Business Officer', photo: chitwanPhoto },
  { name: 'Amit Ranjan', title: 'Chief Solutions Architect', photo: amitPhoto },
  { name: 'Rajvardhan Singh', title: 'Head, Corporate Development & Growth', photo: rajvardhanPhoto },
];

const coreTeam = [
  { name: 'Satya Prakash Gupta', role: 'Head – Technical Architecture & Engineering' },
  { name: 'Sanskar Jain', role: 'Technical Operations & Delivery Manager' },
  { name: 'Amit Bansal', role: 'Senior Software Engineer' },
  { name: 'Anjani Kumar', role: 'Quality Assurance Engineer' },
  { name: 'Bhaswati Deka', role: 'Talent & HR Manager' },
  { name: 'Aastha Jain', role: 'Associate – Partnerships & Collaborations' },
];

const approach = [
  { title: 'Autonomous Leadership', body: 'Every company we back keeps its own leadership team, empowered to make decisions closest to the market they serve, not managed from a distance.' },
  { title: 'Investment in Talent', body: 'People across ScaleIQ and its portfolio companies learn from each other in real time, not siloed into separate organizations that never compare notes.' },
  { title: 'Operational Resilience', body: 'Built by staying close to customers and sharing what works across every company, not by chasing trends.' },
];

function initials(name) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('');
}

export default function Leadership() {
  useReveal();

  return (
    <>
      <PageHeader eyebrow="People & Culture" title={<>Guided by <em>industry veterans</em>, not generalists learning as they go.</>} />
      <div className="content-body wrap">
        <p className="reveal">ScaleIQ is led by people who've spent their careers inside energy and energy technology, not observing it from a distance. That experience shapes every company we back and every project we take on.</p>

        <div className="leader-grid reveal-left">
          {leaders.map((l) => (
            <div className="leader-card" key={l.name}>
              <img src={l.photo} alt={l.name} />
              <div className="leader-name">{l.name}</div>
              <div className="leader-role">{l.title}</div>
            </div>
          ))}
        </div>

        <h2 className="hub-section-title reveal-right">Our Core Team</h2>
        <div className="core-team-grid reveal-right">
          {coreTeam.map((m) => (
            <div className="core-team-card" key={m.name}>
              <span className="core-team-avatar">{initials(m.name)}</span>
              <div>
                <div className="core-team-name">{m.name}</div>
                <div className="core-team-role">{m.role}</div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="hub-section-title reveal-left" style={{ marginTop: '3rem' }}>Our <em>Approach</em> to Leadership</h2>
        <div className="approach-grid">
          {approach.map((a, i) => (
            <div className="approach-item reveal-left" style={{ transitionDelay: `${i * 130}ms` }} key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>

        <div className="leadership-cta reveal">
          <Link to="/about/founders-note" className="btn-gold">Read the Founder's Note</Link>
          <Link to="/people-culture/join-us" className="link-arrow">See open roles →</Link>
        </div>
      </div>
    </>
  );
}
