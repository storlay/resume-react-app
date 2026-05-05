import { createContext } from 'react';
import type { Dict, Locale } from './dict';

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggle: () => void;
  t: Dict;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);
