import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { dict, isLocale, type Locale } from './dict';
import { LocaleContext, type LocaleContextValue } from './context';

function getInitialLocale(): Locale {
  const fromHtml = document.documentElement.lang;
  if (isLocale(fromHtml)) return fromHtml;
  return 'ru';
}

function applyLocale(next: Locale) {
  document.documentElement.lang = next;
  document.title = dict[next].htmlTitle;
  try {
    localStorage.setItem('locale', next);
  } catch {
    // ignore
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const localeRef = useRef(locale);
  useEffect(() => {
    localeRef.current = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    applyLocale(next);
    setLocaleState(next);
  }, []);

  const toggle = useCallback(() => {
    setLocale(localeRef.current === 'ru' ? 'en' : 'ru');
  }, [setLocale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggle, t: dict[locale] }),
    [locale, setLocale, toggle],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
