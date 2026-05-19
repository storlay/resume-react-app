import { profileByLocale } from '../content/profile';
import { SectionHeading } from '../components/SectionHeading';
import { IconLink } from '../components/IconLink';
import { Reveal } from '../components/Reveal';
import { useLocale } from '../i18n/useLocale';

export function Contacts() {
  const { locale, t } = useLocale();
  const profile = profileByLocale[locale];

  return (
    <section
      id="contacts"
      aria-labelledby="contacts-heading"
      className="py-20 md:py-28 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow={t.sections.contactsEyebrow} title={t.sections.contacts} id="contacts-heading" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-3 h-full [&>a:last-child:nth-child(odd)]:col-span-2">
              {profile.contacts.map((contact) => (
                <IconLink
                  key={contact.kind}
                  contact={contact}
                  className="flex-col gap-2 p-4 rounded-xl border border-border bg-surface/50 hover:border-accent/40 hover:bg-surface transition-all duration-200"
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="flex">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex-1 flex flex-col justify-center p-6 rounded-xl border border-border bg-surface/50">
                <p className="font-sans text-xs text-accent tracking-wider uppercase mb-3">
                  {t.contacts.availability}
                </p>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium text-fg">
                    {t.contacts.availableForWork}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {profile.location} · {profile.timezone}
                </p>
                <p className="text-sm text-muted mt-2">
                  {t.contacts.timeShift}
                </p>
              </div>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.contacts.openResumeAria}
                  className="flex items-center justify-center gap-2 w-full border border-border text-fg font-medium px-6 py-3.5 rounded-xl hover:bg-surface hover:border-accent/30 transition-all duration-200 text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  {t.contacts.openResume}
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
