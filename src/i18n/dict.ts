export type Locale = 'ru' | 'en';

export const LOCALES: readonly Locale[] = ['ru', 'en'];

export function isLocale(value: unknown): value is Locale {
  return value === 'ru' || value === 'en';
}

export interface Dict {
  htmlTitle: string;
  skipToContent: string;
  sections: {
    aboutEyebrow: string;
    about: string;
    stackEyebrow: string;
    stack: string;
    experienceEyebrow: string;
    experience: string;
    contactsEyebrow: string;
    contacts: string;
  };
  hero: {
    writeTelegram: string;
    downloadPdf: string;
  };
  about: {
    languages: string;
  };
  experience: {
    listLabel: string;
    achievementsLabel: (company: string) => string;
  };
  contacts: {
    availability: string;
    timeShift: string;
    downloadResume: string;
  };
  a11y: {
    toggleTheme: string;
    toggleLocale: string;
  };
}

const ru: Dict = {
  htmlTitle: 'Дмитрий Иванов — Python Backend Developer',
  skipToContent: 'К основному содержимому',
  sections: {
    aboutEyebrow: '// 01',
    about: 'Обо мне',
    stackEyebrow: '// 02',
    stack: 'Стек',
    experienceEyebrow: '// 03',
    experience: 'Опыт работы',
    contactsEyebrow: '// 04',
    contacts: 'Контакты',
  },
  hero: {
    writeTelegram: 'Написать в Telegram',
    downloadPdf: 'Скачать PDF',
  },
  about: {
    languages: 'Языки',
  },
  experience: {
    listLabel: 'Опыт работы в обратном хронологическом порядке',
    achievementsLabel: (company) => `Достижения в ${company}`,
  },
  contacts: {
    availability: 'Доступность',
    timeShift: 'Открыт к time-shift графику под UTC+3',
    downloadResume: 'Скачать резюме (PDF)',
  },
  a11y: {
    toggleTheme: 'Переключить тему',
    toggleLocale: 'Switch to English',
  },
};

const en: Dict = {
  htmlTitle: 'Dmitrii Ivanov — Python Backend Developer',
  skipToContent: 'Skip to main content',
  sections: {
    aboutEyebrow: '// 01',
    about: 'About',
    stackEyebrow: '// 02',
    stack: 'Stack',
    experienceEyebrow: '// 03',
    experience: 'Experience',
    contactsEyebrow: '// 04',
    contacts: 'Contacts',
  },
  hero: {
    writeTelegram: 'Message on Telegram',
    downloadPdf: 'Download PDF',
  },
  about: {
    languages: 'Languages',
  },
  experience: {
    listLabel: 'Work experience in reverse chronological order',
    achievementsLabel: (company) => `Achievements at ${company}`,
  },
  contacts: {
    availability: 'Availability',
    timeShift: 'Open to time-shifted schedule overlapping UTC+3',
    downloadResume: 'Download resume (PDF)',
  },
  a11y: {
    toggleTheme: 'Toggle theme',
    toggleLocale: 'Переключить на русский',
  },
};

export const dict: Record<Locale, Dict> = { ru, en };
