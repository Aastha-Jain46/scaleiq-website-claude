import PageHeader from './PageHeader';

// Content template — About sub-pages, Founder's Note, Our Culture, Leadership.
export default function ContentTemplate({ eyebrow, title, intro, children }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />
      <div className="content-body wrap">{children}</div>
    </>
  );
}
