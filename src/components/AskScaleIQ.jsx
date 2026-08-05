import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Real keyword-matched routing to real pages. Weighted ~70% portfolio-company
// questions / 30% everything else, mirroring the site's overall positioning
// ratio (Master Brief §1, §6).
// Exhaustive routing table — one route per real page (per
// ScaleIQ_Final_Website_Content.md §2). Not subject to the 70/30 weighting;
// that ratio applies only to the rotating typewriter examples below.
const routes = [
  { match: ['how many', 'portfolio companies does', 'number of companies'], to: '/portfolio/our-companies' },
  { match: ['how do i become', 'become a scaleiq', 'become a portfolio', 'join scaleiq', 'want to join', 'sell my company', 'acquire my company'], to: '/contact/portfolio-companies' },
  { match: ['receive', 'after joining', 'what happens', 'benefit', 'what do i get'], to: '/portfolio/impact-growth' },
  { match: ['what we look for', 'criteria', 'qualify', 'does scaleiq acquire', 'what kind of companies'], to: '/portfolio/our-companies' },
  { match: ['majority stake', 'how much equity', 'ownership'], to: '/portfolio/our-companies' },
  { match: ['how long does', 'how long will', 'process take'], to: '/contact/portfolio-companies' },
  { match: ['investment policy', 'how does scaleiq invest', 'how we grow'], to: '/about/how-we-grow' },
  { match: ['founder', 'who started', 'ceo'], to: '/about/founders-note' },
  { match: ['leadership', 'management team', 'who runs'], to: '/people-culture/leadership' },
  { match: ['build software', 'digital partner', 'engineering partner'], to: '/our-work/whom-we-serve' },
  { match: ['what services', 'operations offer'], to: '/our-work/our-services' },
  { match: ['serve', 'clients', 'who do you work with'], to: '/our-work/whom-we-serve' },
  { match: ['who is scaleiq', 'what is scaleiq', 'tell me about scaleiq'], to: '/about/who-we-are' },
  { match: ['what does scaleiq do', 'your business model'], to: '/about/what-we-do' },
  { match: ['culture', 'work environment', "what's it like to work there"], to: '/people-culture/our-culture' },
  { match: ['careers', 'jobs', 'hiring', 'open roles', 'join the team'], to: '/people-culture/join-us' },
  { match: ['case study', 'case studies', 'examples of your work', 'past projects'], to: '/resources/case-studies' },
  { match: ['blog', 'articles', 'insights'], to: '/resources/blogs' },
  { match: ['contact', 'get in touch', 'talk to someone'], to: '/contact' },
  { match: ['invest in scaleiq', 'investor', 'funding scaleiq'], to: '/contact/investors' },
  { match: ['partner with scaleiq', 'partnership', 'reseller', 'alliance'], to: '/contact/partners' },
];

const demoQueries = [
  'How many portfolio companies does ScaleIQ have?',
  'How do I become a ScaleIQ portfolio company?',
  'What do portfolio companies receive after joining?',
  'What does ScaleIQ look for in a portfolio company?',
  'I want to sell my company to ScaleIQ',
  'Does ScaleIQ take a majority stake?',
  'Tell me about Oges',
  "What's ScaleIQ's investment approach?",
  "Tell me about ScaleIQ's founder",
  "Who's on ScaleIQ's leadership team?",
  'Can ScaleIQ build software for my energy company?',
  'What services does ScaleIQ Operations offer?',
  'Is ScaleIQ hiring?',
];

export default function AskScaleIQ() {
  const [value, setValue] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [frozen, setFrozen] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [sent, setSent] = useState(false);
  const frozenRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    let qi = 0, ci = 0, deleting = false, timer;
    const tick = () => {
      if (frozenRef.current) return;
      const full = demoQueries[qi];
      if (!deleting) {
        ci++;
        setPlaceholder(full.slice(0, ci));
        if (ci === full.length) { deleting = true; timer = setTimeout(tick, 1400); return; }
      } else {
        ci--;
        setPlaceholder(full.slice(0, ci));
        if (ci === 0) { deleting = false; qi = (qi + 1) % demoQueries.length; }
      }
      timer = setTimeout(tick, deleting ? 22 : 45);
    };
    tick();
    return () => clearTimeout(timer);
  }, []);

  const freeze = () => {
    if (frozenRef.current) return;
    frozenRef.current = true;
    setFrozen(true);
    setValue((v) => v || placeholder || demoQueries[0]);
  };

  const submit = () => {
    const text = value.trim();
    if (!text) return;
    const lower = text.toLowerCase();
    const hit = routes.find((r) => r.match.some((k) => lower.includes(k)));
    if (hit) {
      navigate(hit.to);
    } else {
      setFallback(true);
    }
  };

  return (
    <section className="ask-band">
      <div className="ask-inner">
        <div className="ask-eyebrow">Ask ScaleIQ</div>
        <div className="ask-box">
          <span className="ask-icon">✦</span>
          <input
            type="text"
            value={value}
            placeholder={frozen ? '' : placeholder}
            onFocus={freeze}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') { freeze(); submit(); } }}
          />
          <button className="ask-send" aria-label="Ask" onClick={() => { freeze(); submit(); }}>→</button>
        </div>

        {fallback && (
          <div className="ask-fallback">
            {sent ? (
              <p className="sent">Thanks — we'll follow up shortly.</p>
            ) : (
              <>
                <p>Couldn't find a page for that — leave your email or number and we'll get back to you directly.</p>
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <input type="text" placeholder="Email or phone number" required />
                  <button type="submit">Submit</button>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
