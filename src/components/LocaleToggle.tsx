import { useLocale } from '../i18n/useLocale';

export function LocaleToggle() {
  const { locale, toggle, t } = useLocale();
  const next = locale === 'ru' ? 'EN' : 'RU';
  const current = locale === 'ru' ? 'RU' : 'EN';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.a11y.toggleLocale}
      title={t.a11y.toggleLocale}
      className="px-2.5 py-1.5 rounded-md font-mono text-xs text-muted hover:text-fg hover:bg-surface transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span aria-hidden="true">
        <span className="text-fg">{current}</span>
        <span className="mx-1 text-border">/</span>
        <span>{next}</span>
      </span>
    </button>
  );
}
