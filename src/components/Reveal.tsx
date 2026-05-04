import { type ElementType, type ReactNode, type CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag ref={ref} style={style} className={`reveal-init ${className}`}>
      {children}
    </Tag>
  );
}
