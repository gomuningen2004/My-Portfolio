interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-[690px] md:mb-[46px]">
      <p className="mb-[14px] font-mono text-[0.72rem] tracking-[0.08em] text-accent">
        {eyebrow}
      </p>
      <h2 className="m-0 font-display text-[clamp(2.15rem,9vw,3.2rem)] font-bold leading-[1.12] tracking-[-0.065em] md:text-[clamp(2.3rem,4.5vw,3.8rem)]">
        {title}
      </h2>
      {description && (
        <p className="mt-[17px] max-w-[560px] text-base leading-[1.8] text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
