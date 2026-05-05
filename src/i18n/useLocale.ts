import { useContext } from 'react';
import { LocaleContext, type LocaleContextValue } from './context';
import type { Dict } from './dict';

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}

export function useT(): Dict {
  return useLocale().t;
}
