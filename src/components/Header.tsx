import { LocaleToggle } from './LocaleToggle';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-bg/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-end gap-1">
        <LocaleToggle />
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </header>
  );
}
