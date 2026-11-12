import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  if (!items || items.length < 2) return null;
  const last = items.length - 1;
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`}>
            {i === last ? (
              <span aria-current="page" title={item.label}>{item.label}</span>
            ) : item.to ? (
              <Link to={item.to}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
