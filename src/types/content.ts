export type LocaleLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Language {
  code: 'RU' | 'EN' | 'ES';
  level: LocaleLevel;
  note?: string;
}

export interface ContactLink {
  kind: 'email' | 'phone' | 'linkedin' | 'telegram' | 'resume';
  label: string;
  href: string;
  display: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  remote: string;
  timezone: string;
  summary: string;
  note: string;
  languages: Language[];
  contacts: ContactLink[];
  resumeUrl: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  logo?: string;
  position: string;
  period: string;
  stack: string[];
  achievements: string[];
}
