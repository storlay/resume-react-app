import { stackByLocale } from '../content/stack';
import { SectionHeading } from '../components/SectionHeading';
import { Tag } from '../components/Tag';
import { Reveal } from '../components/Reveal';
import { useLocale } from '../i18n/useLocale';

export function Stack() {
  const { locale, t } = useLocale();
  const stack = stackByLocale[locale];

  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="py-20 md:py-28 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow={t.sections.stackEyebrow} title={t.sections.stack} id="stack-heading" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {stack.map((group, i) => (
            <Reveal key={group.title} delay={i * 60} className="flex">
              <div className="p-6 rounded-xl border border-border bg-surface/50 w-full">
                <p className="font-sans text-xs text-accent tracking-wider uppercase mb-4">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
