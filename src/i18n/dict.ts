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
    openResume: string;
    openResumeAria: string;
  };
  about: {
    languages: string;
  };
  experience: {
    listLabel: string;
    achievementsLabel: (company: string) => string;
    recommendationLetter: string;
    recommendationLetterAria: (company: string) => string;
  };
  contacts: {
    availability: string;
    availableForWork: string;
    timeShift: string;
    openResume: string;
    openResumeAria: string;
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
    openResume: 'Открыть резюме (PDF)',
    openResumeAria: 'Открыть резюме (PDF, новая вкладка)',
  },
  about: {
    languages: 'Языки',
  },
  experience: {
    listLabel: 'Опыт работы в обратном хронологическом порядке',
    achievementsLabel: (company) => `Достижения в ${company}`,
    recommendationLetter: 'Рекомендательное письмо (PDF)',
    recommendationLetterAria: (company) => `Открыть рекомендательное письмо от ${company} (PDF, новая вкладка)`,
  },
  contacts: {
    availability: 'Доступность',
    availableForWork: 'Открыт к предложениям',
    timeShift: 'Открыт к time-shift графику под UTC+3',
    openResume: 'Открыть резюме (PDF)',
    openResumeAria: 'Открыть резюме (PDF, новая вкладка)',
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
    openResume: 'Open resume (PDF)',
    openResumeAria: 'Open resume (PDF, new tab)',
  },
  about: {
    languages: 'Languages',
  },
  experience: {
    listLabel: 'Work experience in reverse chronological order',
    achievementsLabel: (company) => `Achievements at ${company}`,
    recommendationLetter: 'Recommendation letter (PDF)',
    recommendationLetterAria: (company) => `Open recommendation letter from ${company} (PDF, new tab)`,
  },
  contacts: {
    availability: 'Availability',
    availableForWork: 'Open to opportunities',
    timeShift: 'Open to time-shifted schedule overlapping UTC+3',
    openResume: 'Open resume (PDF)',
    openResumeAria: 'Open resume (PDF, new tab)',
  },
  a11y: {
    toggleTheme: 'Toggle theme',
    toggleLocale: 'Переключить на русский',
  },
};

export const dict: Record<Locale, Dict> = { ru, en };
