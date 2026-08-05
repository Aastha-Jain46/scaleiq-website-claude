export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="page-header wrap">
      <div className="page-eyebrow">{eyebrow}</div>
      <h1 className="page-h1">{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </header>
  );
}
