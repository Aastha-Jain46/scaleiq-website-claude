// Distinct, larger pull-quote treatment — not styled like a regular paragraph.
export default function Testimonial({ quote, attribution }) {
  return (
    <div className="testimonial-band reveal">
      <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
      <div className="testimonial-attribution">{attribution}</div>
    </div>
  );
}
