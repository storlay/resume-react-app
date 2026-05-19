import { experienceByLocale } from '../content/experience';
import { SectionHeading } from '../components/SectionHeading';
import { Tag } from '../components/Tag';
import { Reveal } from '../components/Reveal';
import { useLocale } from '../i18n/useLocale';

export function Experience() {
  const { locale, t } = useLocale();
  const experience = experienceByLocale[locale];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 md:py-28 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow={t.sections.experienceEyebrow} title={t.sections.experience} id="experience-heading" />
        </Reveal>

        <ol className="space-y-8" aria-label={t.experience.listLabel}>
          {experience.map((item, i) => (
            <Reveal as="li" key={item.company} delay={i * 100}>
              <article className="p-6 md:p-8 rounded-xl border border-border bg-surface/50 hover:border-accent/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt=""
                        aria-hidden="true"
                        className="h-11 w-11 rounded-md object-contain bg-white p-1 shrink-0 border border-border"
                      />
                    )}
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-fg">
                        {item.company}
                      </h3>
                      <p className="text-muted text-sm mt-0.5">{item.position}</p>
                    </div>
                  </div>
                  <time className="font-mono text-xs text-muted shrink-0 sm:text-right pt-0.5">
                    {item.period}
                  </time>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.stack.map((tech) => (
                    <Tag key={tech} label={tech} />
                  ))}
                </div>

                <ul className="space-y-2.5" aria-label={t.experience.achievementsLabel(item.company)}>
                  {item.achievements.map((achievement) => (
                    <li key={achievement.slice(0, 40)} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="font-mono text-accent shrink-0 select-none" aria-hidden="true">
                        →
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {item.recommendationLetter && (
                  <div className="mt-5 pt-4 border-t border-border/60">
                    <a
                      href={item.recommendationLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.experience.recommendationLetterAria(item.company)}
                      className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors duration-200"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 shrink-0"
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                      <span>{t.experience.recommendationLetter}</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3 shrink-0 opacity-70"
                        aria-hidden="true"
                      >
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
