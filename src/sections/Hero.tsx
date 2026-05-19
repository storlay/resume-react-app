import { profileByLocale } from '../content/profile';
import { Reveal } from '../components/Reveal';
import { useLocale } from '../i18n/useLocale';

export function Hero() {
  const { locale, t } = useLocale();
  const profile = profileByLocale[locale];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col justify-center px-4 md:px-6 pt-20 pb-16 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid"
      />
      <div className="relative max-w-6xl mx-auto w-full">
        <Reveal>
          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-fg leading-none mb-4"
          >
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted tracking-tight mb-8">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm text-muted mb-12">
            <span>{profile.location}</span>
            <span className="text-border" aria-hidden="true">·</span>
            <span>{profile.remote}</span>
            <span className="text-border" aria-hidden="true">·</span>
            <span>{profile.timezone}</span>
          </div>
        </Reveal>

        <Reveal delay={230}>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/dm1tryivanov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-fg font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.286c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.935z" />
              </svg>
              {t.hero.writeTelegram}
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.hero.openResumeAria}
                className="inline-flex items-center gap-2 border border-border text-fg font-medium px-6 py-3 rounded-lg hover:bg-surface transition-colors duration-200 text-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                {t.hero.openResume}
              </a>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
