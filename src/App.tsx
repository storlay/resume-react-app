import { useTheme } from './hooks/useTheme';
import { useT } from './i18n/useLocale';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Stack } from './sections/Stack';
import { Experience } from './sections/Experience';
import { Contacts } from './sections/Contacts';
import { Footer } from './components/Footer';

export default function App() {
  const { theme, toggle } = useTheme();
  const t = useT();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-fg focus:rounded-lg focus:text-sm focus:font-medium"
      >
        {t.skipToContent}
      </a>

      <Header theme={theme} onThemeToggle={toggle} />

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

      <Footer />
    </>
  );
}
