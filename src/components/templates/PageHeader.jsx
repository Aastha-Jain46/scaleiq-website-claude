import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs';
import { trailFor } from '../../config/breadcrumbs';

export default function PageHeader({ title, intro, size }) {
  const { pathname } = useLocation();
  return (
    <header className="page-header wrap">
      <Breadcrumbs items={trailFor(pathname)} />
      <h1 className={`page-h1${size === 'hero' ? ' page-h1-hero' : ''}`}>{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </header>
  );
}
