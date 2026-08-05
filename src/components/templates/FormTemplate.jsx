import PageHeader from './PageHeader';

// Form/contact template — Contact Us, For Investors, For Partners, For Portfolio Companies.
export default function FormTemplate({ eyebrow, title, intro, side, children }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />
      <div className="form-body wrap">
        <div className="form-side">{side}</div>
        <div>{children}</div>
      </div>
    </>
  );
}
