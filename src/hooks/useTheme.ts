import { useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
  // Sync with the anti-FOUC script that already set the class on <html>
  if (document.documentElement.classList.contains('dark')) return 'dark';
  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Side effects live outside the updater
  const applyTheme = useCallback((next: Theme) => {
    const root = document.documentElement;
    if (next === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', next);
    } catch {
      // ignore
    }
  }, []);

  // Expose a combined toggle that also applies the DOM + storage side effects
  const handleToggle = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setTheme(next);
  }, [theme, applyTheme]);

  return { theme, toggle: handleToggle };
}
