import { profile } from '../content/profile';
import { SectionHeading } from '../components/SectionHeading';
import { IconLink } from '../components/IconLink';
import { Reveal } from '../components/Reveal';
import { nbsp } from '../utils/typography';

export function Contacts() {
  return (
    <section
      id="contacts"
      aria-labelledby="contacts-heading"
      className="py-20 md:py-28 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading eyebrow="// 04" title="Контакты" id="contacts-heading" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-3 h-full">
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
              <div className="flex-1 p-6 rounded-xl border border-border bg-surface/50">
                <p className="font-sans text-xs text-accent tracking-wider uppercase mb-3">
                  Доступность
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {profile.location} · {profile.timezone}
                </p>
                <p className="text-sm text-muted mt-2">
                  {nbsp('Открыт к time-shift графику под UTC+3')}
                </p>
              </div>

              <a
                href={profile.resumeUrl}
                download
                className="flex items-center justify-center gap-2 w-full border border-border text-fg font-medium px-6 py-3.5 rounded-xl hover:bg-surface hover:border-accent/30 transition-all duration-200 text-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Скачать резюме (PDF)
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
