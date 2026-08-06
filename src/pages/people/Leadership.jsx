import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import LeadershipSpotlight from '../../components/LeadershipSpotlight';
import rajeevPhoto from '../../assets/leadership/rajeev.png';
import chitwanPhoto from '../../assets/leadership/chitwan.png';
import amitPhoto from '../../assets/leadership/amit.png';
import rajvardhanPhoto from '../../assets/leadership/rajvardhan.png';

const leaders = [
  { id: 'rajeev', name: 'Rajeev Sonthalia', title: 'Founder & CEO', credential: null, photo: rajeevPhoto },
  { id: 'chitwan', name: 'Chitwan Garg', title: 'Chief Business Officer', credential: 'Former Country Manager, Digital & Integration at SLB', photo: chitwanPhoto },
  { id: 'amit', name: 'Amit Ranjan', title: 'Chief Solutions Architect', credential: null, photo: amitPhoto },
  { id: 'rajvardhan', name: 'Rajvardhan Singh', title: 'Corporate Development', credential: 'Former SLB Digital, Business Development', photo: rajvardhanPhoto },
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
    </>
  );
}
