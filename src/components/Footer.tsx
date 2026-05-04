import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

const YEAR = new Date().getFullYear();

export function Footer({ theme, onToggle }: FooterProps) {
  return (
    <footer className="border-t border-border px-4 md:px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="font-mono text-xs text-muted">
          © {YEAR} Дмитрий Иванов
        </p>
        <ThemeToggle theme={theme} onToggle={onToggle} />
      </div>
    </footer>
  );
}
