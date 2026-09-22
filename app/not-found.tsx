import { TLink } from "@/components/motion/Transition";

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap">
        <p className="eyebrow">404 · Case not found</p>
        <h1 className="display">
          No authority <em className="ox">for that.</em>
        </h1>
        <p className="lede">The page you were looking for has been overruled, or never existed.</p>
        <TLink href="/" className="btn btn-ink">
          Back to chambers <span className="arrow">→</span>
        </TLink>
      </div>
    </section>
  );
}
