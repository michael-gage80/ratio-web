import SplitReveal from "@/components/motion/SplitReveal";

export default function SectionHead({
  n,
  eyebrow,
  title,
  lede,
  id,
}: {
  n?: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="shead">
      <p className="eyebrow">
        {n && <span className="num">{n}</span>} {eyebrow}
      </p>
      <SplitReveal as="h2" className="h1" id={id}>
        {title}
      </SplitReveal>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}
