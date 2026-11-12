import { Link } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import rajeevPhoto from '../../assets/leadership/rajeev.png';
import chitwanPhoto from '../../assets/leadership/chitwan.png';
import amitPhoto from '../../assets/leadership/amit.png';
import kapilPhoto from '../../assets/leadership/kapil.jpg';
import rajvardhanPhoto from '../../assets/leadership/rajvardhan.png';

const founder = { name: 'Rajeev Sonthalia', title: 'Founder & CEO', photo: rajeevPhoto };

const team = [
  { name: 'Chitwan Garg', title: 'Chief Business Officer', photo: chitwanPhoto },
  { name: 'Amit Ranjan', title: 'Chief Solutions Architect', photo: amitPhoto },
  { name: 'Kapil Tyagi', title: 'Head - New Markets', photo: kapilPhoto },
  { name: 'Rajvardhan Singh', title: 'Head - Corporate Development & Growth', photo: rajvardhanPhoto },
];

const approach = [
  { title: 'Autonomous Leadership', body: 'Every company we back keeps its own leadership team, empowered to make decisions closest to the market they serve, not managed from a distance.' },
  { title: 'Investment in Talent', body: 'People across ScaleIQ and its portfolio companies learn from each other in real time, not siloed into separate organizations that never compare notes.' },
  { title: 'Operational Resilience', body: 'Built by staying close to customers and sharing what works across every company, not by chasing trends.' },
];

export default function Leadership() {
  useReveal();

  return (
    <>
      <PageHeader title={<>Guided by <em>industry veterans</em>, not generalists learning as they go.</>} size="hero" />
      <div className="content-body wrap">
        <p className="reveal">ScaleIQ is led by people who've spent their careers inside energy and energy technology, not observing it from a distance. That experience shapes every company we back and every project we take on.</p>

        <div className="leader-feature reveal">
          <div className="leader-photo"><img src={founder.photo} alt={founder.name} /></div>
          <div className="leader-feature-text">
            <div className="leader-role">{founder.title}</div>
            <div className="leader-name">{founder.name}</div>
          </div>
        </div>

        <div className="leader-grid">
          {team.map((l, i) => (
            <div className="leader-card reveal" style={{ transitionDelay: `${i * 120}ms` }} key={l.name}>
              <div className="leader-photo"><img src={l.photo} alt={l.name} /></div>
              <div className="leader-name">{l.name}</div>
              <div className="leader-role">{l.title}</div>
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
