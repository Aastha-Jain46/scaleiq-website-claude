import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import LeadershipSpotlight from '../../components/LeadershipSpotlight';
import rajeevPhoto from '../../assets/leadership/rajeev.png';
import chitwanPhoto from '../../assets/leadership/chitwan.png';
import amitPhoto from '../../assets/leadership/amit.png';
import rajvardhanPhoto from '../../assets/leadership/rajvardhan.png';

const leaders = [
  { id: 'rajeev', name: 'Rajeev Sonthalia', title: 'Founder & CEO', photo: rajeevPhoto },
  { id: 'chitwan', name: 'Chitwan Garg', title: 'Chief Business Officer', photo: chitwanPhoto },
  { id: 'amit', name: 'Amit Ranjan', title: 'Chief Solutions Architect', photo: amitPhoto },
  { id: 'rajvardhan', name: 'Rajvardhan Singh', title: 'Corporate Development', photo: rajvardhanPhoto },
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
      <PageHeader eyebrow="People & Culture" title="Leadership" />
      <div className="content-body wrap">
        <p className="reveal">ScaleIQ is led by people who've spent their careers inside energy and energy technology, not observing it from a distance. That experience shapes every company we back and every project we take on.</p>
      </div>

      <LeadershipSpotlight leaders={leaders} />

      <div className="content-body wrap" style={{ paddingTop: 0 }}>
        <h2 className="hub-section-title reveal">Our Approach to Leadership</h2>
        <div className="approach-grid">
          {approach.map((a, i) => (
            <div className="approach-item reveal" style={{ transitionDelay: `${i * 130}ms` }} key={a.title}>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
