import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import PageHeader from '../../components/templates/PageHeader';
import Testimonial from '../../components/Testimonial';

const points = [
  { title: 'Small, accountable teams.', body: 'Ownership stays close to the work, not passed up a chain.' },
  { title: 'Depth over breadth.', body: 'We hire people who want to go deep into a hard problem, not skim across many easy ones.' },
  { title: 'Movement across investing and engineering.', body: "Our people aren't siloed into one side of what ScaleIQ does, that breadth keeps judgment sharp on both." },
];

// Real, royalty-free stock photography (Unsplash) standing in for team
// photos until real ones exist — swap the src values later, layout stays.
const photos = [
  { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop&auto=format&q=80', caption: 'Working sessions, not status meetings' },
  { src: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=400&h=400&fit=crop&auto=format&q=80', caption: 'Decisions made close to the work' },
  { src: 'https://images.unsplash.com/photo-1644778055925-cf45809c2c17?w=400&h=400&fit=crop&auto=format&q=80', caption: 'Time in the field, not just the office' },
  { src: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&h=400&fit=crop&auto=format&q=80', caption: 'Small teams, real ownership' },
  { src: 'https://images.unsplash.com/photo-1652303518379-c0ef1c9fb2b1?w=400&h=400&fit=crop&auto=format&q=80', caption: 'Where the operations actually run' },
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&auto=format&q=80', caption: 'Depth over decks' },
];

export default function OurCulture() {
  useReveal();
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <>
      <PageHeader eyebrow="People & Culture" title={<>The strength of a group, the speed of a <em>small team</em>.</>} />
      <div className="content-body wrap">
        <p className="reveal-left">ScaleIQ works in an industry where mistakes are expensive and downtime is not an option. That shapes how we work more than any values poster could.</p>

        <div className="culture-points">
          {points.map((p, i) => (
            <div className={`culture-point ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'}`} style={{ transitionDelay: `${i * 100}ms` }} key={p.title}>
              <div className="culture-point-title">{p.title}</div>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <h2 className="hub-section-title reveal-right">Life at <em>ScaleIQ</em></h2>
        <div className="culture-photo-row">
          {photos.map((photo, i) => (
            <button
              type="button"
              key={photo.caption}
              className={`culture-photo reveal${activePhoto === i ? ' active' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
              onClick={() => setActivePhoto((cur) => (cur === i ? null : i))}
              aria-label={photo.caption}
            >
              <img src={photo.src} alt="" />
              <span className="culture-photo-caption">{photo.caption}</span>
            </button>
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
