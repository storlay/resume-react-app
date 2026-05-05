import { useLocale } from '../i18n/useLocale';
import { profileByLocale } from '../content/profile';

const YEAR = new Date().getFullYear();

export function Footer() {
  const { locale } = useLocale();
  const name = profileByLocale[locale].name;

  return (
    <footer className="border-t border-border px-4 md:px-6 py-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-muted">
          © {YEAR} {name}
        </p>
      </div>
    </footer>
  );
}
