import { useTheme } from './hooks/useTheme';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Stack } from './sections/Stack';
import { Experience } from './sections/Experience';
import { Contacts } from './sections/Contacts';
import { Footer } from './components/Footer';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-fg focus:rounded-lg focus:text-sm focus:font-medium"
      >
        К основному содержимому
      </a>

      <main id="main-content">
        <Hero />
        <div className="border-t border-border/50" aria-hidden="true" />
        <About />
        <div className="border-t border-border/50" aria-hidden="true" />
        <Stack />
        <div className="border-t border-border/50" aria-hidden="true" />
        <Experience />
        <div className="border-t border-border/50" aria-hidden="true" />
        <Contacts />
      </main>

      <Footer theme={theme} onToggle={toggle} />
    </>
  );
}
