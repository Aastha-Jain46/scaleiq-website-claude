import PageHeader from '../components/templates/PageHeader';
import useReveal from '../hooks/useReveal';
import { termsOfUse, privacyPolicy, legalContact, lastUpdated } from '../content/legal';

function Block({ block }) {
  if (block.p) return <p>{block.p}</p>;
  if (block.h4) return <h4>{block.h4}</h4>;
  if (block.ul) {
    return (
      <ul>
        {block.ul.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function Legal({ title }) {
  const doc = title === 'Privacy Statement' ? privacyPolicy : termsOfUse;
  useReveal([title]);

  return (
    <>
      <PageHeader eyebrow="Legal" title={title} size="hero" />
      <div className="legal-body wrap">
        <div className="legal-intro reveal">
          {doc.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="legal-accordion reveal">
          {doc.sections.map((section) => (
            <details key={section.title}>
              <summary>
                <span>{section.title}</span>
                <span className="legal-accordion-icon" aria-hidden="true" />
              </summary>
              <div className="legal-section-content">
                {section.blocks.map((block, i) => (
                  <Block block={block} key={i} />
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="legal-contact">
          <p>{doc.contactIntro}</p>
          <div className="legal-contact-block">
            <div className="legal-contact-name">{legalContact.name}</div>
            <p>Website: <a href={`https://${legalContact.website}`} target="_blank" rel="noopener noreferrer">{legalContact.website}</a></p>
            <p>Email: <a href={`mailto:${legalContact.email}`}>{legalContact.email}</a></p>
          </div>
        </div>

        <div className="legal-updated">Last updated: {lastUpdated}</div>
      </div>
    </>
  );
}
