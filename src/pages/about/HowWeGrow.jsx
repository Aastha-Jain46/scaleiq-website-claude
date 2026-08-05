import ContentTemplate from '../../components/templates/ContentTemplate';

export default function HowWeGrow() {
  return (
    <ContentTemplate
      eyebrow="About"
      title="How We Grow"
      intro="Growth at ScaleIQ comes from two directions that reinforce each other."
    >
      <p>On one side, we invest in energy-technology companies with strong fundamentals and help them scale, through capital, governance, and access to a wider network of peers solving similar problems.</p>
      <p>On the other, our engineering practice grows by deepening relationships across the energy industry, taking on more complex, higher-value work for oil and gas companies, energy majors, and utilities.</p>
      <p>The two reinforce each other in ways a purely financial investor, or a purely technical vendor, cannot replicate. Companies we invest in gain access to engineering depth built over years in this industry specifically. Our engineering practice gains a pipeline of proven products and sharper domain expertise with every new company that joins.</p>
      <p>Over time, this compounds. Each new investment strengthens the engineering bench available to the portfolio. Each new client engagement sharpens the expertise we bring to our next investment. It's a model built to get better with scale, not just bigger.</p>
      <div className="content-note">
        <strong>Note:</strong> The homepage "How We Grow" band now shows the metrics currently live on scaleiqglobal.com (715+ global energy experts, 250+ years of cumulative experience, 378+ projects delivered, 171+ customers) — worth a quick confirmation that these are still current before launch.
      </div>
    </ContentTemplate>
  );
}
