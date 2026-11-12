import PageHeader from './PageHeader';

// Content template — About sub-pages, Founder's Note, Our Culture, Leadership.
export default function ContentTemplate({ title, intro, children }) {
  return (
    <>
      <PageHeader title={title} intro={intro} />
      <div className="content-body wrap">{children}</div>
    </>
  );
}
