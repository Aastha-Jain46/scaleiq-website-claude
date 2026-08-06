import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import Testimonial from '../../components/Testimonial';

const points = [
  { title: 'Small, accountable teams.', body: 'Ownership stays close to the work, not passed up a chain.' },
  { title: 'Depth over breadth.', body: 'We hire people who want to go deep into a hard problem, not skim across many easy ones.' },
  { title: 'Movement across investing and engineering.', body: "Our people aren't siloed into one side of what ScaleIQ does, that breadth keeps judgment sharp on both." },
];

// Real candid team photography isn't available yet — placeholders scattered
// as an organic collage (varied size/position/rotation), ready to swap for
// real photos without restructuring.
const collagePlaceholders = [
  { top: '2%', left: '4%', size: 130, rotate: -6 },
  { top: '10%', left: '32%', size: 92, rotate: 4 },
  { top: '0%', left: '58%', size: 108, rotate: -3 },
  { top: '40%', left: '2%', size: 96, rotate: 5 },
  { top: '48%', left: '38%', size: 140, rotate: -4 },
  { top: '42%', left: '68%', size: 100, rotate: 6 },
];

export default function OurCulture() {
  useReveal();

  return (
    <>
      <PageHeader eyebrow="People & Culture" title="Our Culture" />
      <div className="content-body wrap">
        <p className="culture-lead reveal">The strength of a group, the speed of a small team.</p>
        <p className="reveal">ScaleIQ works in an industry where mistakes are expensive and downtime is not an option. That shapes how we work more than any values poster could.</p>

        <div className="culture-points">
          {points.map((p, i) => (
            <div className="culture-point reveal" style={{ transitionDelay: `${i * 130}ms` }} key={p.title}>
              <div className="culture-point-title">{p.title}</div>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="collage reveal">
          {collagePlaceholders.map((c, i) => (
            <div
              key={i}
              className="collage-photo"
              style={{ top: c.top, left: c.left, width: c.size, height: c.size, transform: `rotate(${c.rotate}deg)` }}
            >
              [NEEDS INPUT: team photo]
            </div>
          ))}
        </div>

        <Testimonial
          quote="Some of the best engineering talent in the world today isn't concentrated where people expect it to be. Part of what ScaleIQ is built to do is put that talent to work on problems that matter, for energy companies anywhere in the world."
          attribution="From the Founder's Note"
        />
      </div>
    </>
  );
}
