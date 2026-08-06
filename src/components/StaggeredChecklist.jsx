// Checklist that reveals one line at a time on scroll (uses the sitewide
// .reveal mechanism via useReveal(), called by the parent page).
export default function StaggeredChecklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((item, i) => (
        <li className="checklist-item reveal" style={{ transitionDelay: `${i * 100}ms` }} key={item}>
          <span className="check-mark">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
