import type { Profile } from '../types/content';
import type { Locale } from '../i18n/dict';
import { nbsp } from '../utils/typography';

const sharedContacts: Profile['contacts'] = [
  {
    kind: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/dm1tryivanov',
    display: '@dm1tryivanov',
  },
  {
    kind: 'email',
    label: 'E-mail',
    href: 'mailto:dmitrii.04ivanov@gmail.com',
    display: 'dmitrii.04ivanov@gmail.com',
  },
  {
    kind: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/storlay/',
    display: 'linkedin.com/in/storlay',
  },
  {
    kind: 'phone',
    label: 'Phone',
    href: 'tel:+541168136367',
    display: '+54 11 6813-6367',
  },
];

const resumeUrlRu = '/Dmitrii-Ivanov-Python-Backend-Developer.pdf';
const resumeUrlEn = '/Dmitrii-Ivanov-Python-Backend-Developer-EN.pdf';

export const profileByLocale: Record<Locale, Profile> = {
  ru: {
    name: 'Дмитрий Иванов',
    role: 'Python Backend Developer',
    location: 'Buenos Aires, AR',
    remote: nbsp('Готов к удалённой работе'),
    timezone: 'UTC-3 (могу подстраиваться)',
    summary: nbsp(
      'Python Backend Developer с опытом более 2 лет в продуктовой и аутсорс-разработке. ' +
      'Разрабатываю масштабируемые REST/GraphQL API на FastAPI, Django и DRF, проектирую ' +
      'backend-архитектуру, интегрирую внешние сервисы и автоматизирую бизнес-процессы. ' +
      'Имею опыт разработки AI SaaS-продуктов. Ориентируюсь на результат, продуктовые метрики ' +
      'и долгосрочную поддерживаемость решений.',
    ),
    note: nbsp(
      'Готов к собеседованиям и тестовым. Предпочтение продуктовым командам, где важны качество кода, метрики и прозрачный деплой. ' +
      'Открыт к time-shift графику под UTC+3.',
    ),
    languages: [
      { code: 'RU', level: 'C2' },
      { code: 'EN', level: 'A2', note: 'actively improving' },
      { code: 'ES', level: 'A2' },
    ],
    contacts: sharedContacts,
    resumeUrl: resumeUrlRu,
  },
  en: {
    name: 'Dmitrii Ivanov',
    role: 'Python Backend Developer',
    location: 'Buenos Aires, AR',
    remote: 'Open to remote work',
    timezone: 'UTC-3 (flexible)',
    summary:
      'Python Backend Developer with 2+ years of experience across product and outsourcing teams. ' +
      'I design and ship scalable REST/GraphQL APIs with FastAPI, Django and DRF, shape backend architecture, ' +
      'integrate third-party services and automate business processes. Hands-on experience building AI SaaS products. ' +
      'Outcome-driven, focused on product metrics and long-term maintainability.',
    note:
      'Open to interviews and take-home tasks. Prefer product teams that value code quality, metrics and a transparent deploy process. ' +
      'Open to a time-shifted schedule overlapping UTC+3.',
    languages: [
      { code: 'RU', level: 'C2' },
      { code: 'EN', level: 'A2', note: 'actively improving' },
      { code: 'ES', level: 'A2' },
    ],
    contacts: sharedContacts,
    resumeUrl: resumeUrlEn,
  },
};
