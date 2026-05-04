import { profile } from '../content/profile';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-28 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="// 01" title="Обо мне" id="about-heading" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal delay={80}>
            <p className="text-lg text-muted leading-relaxed">{profile.summary}</p>
          </Reveal>

          <Reveal delay={160}>
            <div>
              <p className="font-sans text-xs text-accent tracking-widest uppercase mb-4">
                Языки
              </p>
              <div className="space-y-3">
                {profile.languages.map((lang) => (
                  <div key={lang.code} className="flex items-center gap-3">
                    <span className="font-mono text-sm font-medium text-fg w-8">{lang.code}</span>
                    <span className="font-mono text-xs text-accent border border-accent/30 bg-accent/5 px-2 py-0.5 rounded">
                      {lang.level}
                    </span>
                    {lang.note && (
                      <span className="text-xs text-muted">{lang.note}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <p className="text-sm text-muted leading-relaxed mt-10 pt-8 border-t border-border">
            {profile.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
