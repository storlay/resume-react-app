interface TagProps {
  label: string;
  variant?: 'default' | 'accent';
}

export function Tag({ label, variant = 'default' }: TagProps) {
  const base = 'inline-block font-mono text-xs px-2.5 py-1 rounded border leading-none';
  const variants = {
    default: 'bg-surface text-muted border-border',
    accent: 'bg-accent/10 text-accent border-accent/30',
  };

  return <span className={`${base} ${variants[variant]}`}>{label}</span>;
}
