import ContentTemplate from '../components/templates/ContentTemplate';

export default function Legal({ title }) {
  return (
    <ContentTemplate eyebrow="Legal" title={title}>
      <div className="content-note">
        <strong>[NEEDS INPUT]</strong> {title} copy hasn't been drafted yet — not in the Master Brief's known-gaps list, but flagged here rather than left silently blank.
      </div>
    </ContentTemplate>
  );
}
