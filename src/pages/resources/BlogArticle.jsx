import { Link, useParams } from 'react-router-dom';
import useReveal from '../../hooks/useReveal';
import QuickLinksRail from '../../components/QuickLinksRail';
import { blogs, getBlogBySlug } from '../../content/blogs';

function slugify(heading) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderTitle(title, emphasis) {
  if (!emphasis) return title;
  const i = title.indexOf(emphasis);
  if (i === -1) return title;
  return (
    <>
      {title.slice(0, i)}
      <em>{emphasis}</em>
      {title.slice(i + emphasis.length)}
    </>
  );
}

export default function BlogArticle() {
  useReveal();
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="wrap" style={{ padding: '6rem 0' }}>
        <p>This article couldn't be found.</p>
        <Link to="/resources/blogs" className="link-arrow">← Back to Blogs</Link>
      </div>
    );
  }

  const railSections = blog.sections.map((s) => ({ id: slugify(s.heading), label: s.heading }));

  return (
    <>
      <header className="article-header wrap">
        <div className="article-tag">{blog.category}</div>
        <h1 className="article-title">{renderTitle(blog.title, blog.emphasis)}</h1>
        <p className="article-hook">{blog.hook}</p>
        <div className="article-byline">
          <span className="article-byline-author"><strong>{blog.author}</strong> | ScaleIQ</span>
          <span className="dot">·</span>
          <span>{blog.date}</span>
          <span className="dot">·</span>
          <span>{blog.readTime}</span>
        </div>
      </header>

      {blog.image && (
        <div className="article-hero-image">
          <img src={blog.image} alt={blog.title} />
        </div>
      )}

      <div className="hub-layout wrap">
        <QuickLinksRail sections={railSections} title="In This Blog" />
        <div className="hub-sections">
          {blog.sections.map((s, i) => (
            <section
              id={slugify(s.heading)}
              key={s.heading}
              className={`hub-section${i % 2 === 0 ? ' reveal-left' : ' reveal-right'}`}
            >
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, j) => {
                if (typeof p === 'string') {
                  return <p key={j}>{p}</p>;
                }
                const target = getBlogBySlug(p.linkTo);
                return (
                  <div key={j}>
                    <p>{p.text}</p>
                    {target && (
                      <p className="article-inline-link">
                        <Link to={`/resources/blogs/${target.slug}`} className="article-cross-link">
                          → Read: {target.title}
                        </Link>
                      </p>
                    )}
                  </div>
                );
              })}
              {s.list && (
                <>
                  <ul className="form-list">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {s.listFooter && <p>{s.listFooter}</p>}
                </>
              )}
            </section>
          ))}
        </div>
      </div>

      <section className="cta-band">
        <div className="wrap">
          <h2>Facing something similar in <em>your</em> operations?</h2>
          <p>ScaleIQ works alongside energy companies to close exactly these kinds of gaps, between systems, teams, and decisions.</p>
          <Link to="/contact" className="btn-gold">Talk to us</Link>
          <Link to="/our-work/our-services" className="link-arrow">See our services →</Link>
        </div>
      </section>
    </>
  );
}

export const allBlogSlugs = blogs.map((b) => b.slug);
