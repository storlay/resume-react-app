interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id: string;
}

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">{eyebrow}</p>
      <h2 id={id} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-fg">
        {title}
      </h2>
    </div>
  );
}
