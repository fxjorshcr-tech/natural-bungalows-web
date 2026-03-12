'use client';

import { useLanguage } from '../i18n/LanguageContext';

const languages = [
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher">
      {languages.map((l) => (
        <button
          key={l.code}
          className={`lang-btn${lang === l.code ? ' active' : ''}`}
          onClick={() => setLang(l.code)}
          title={l.label}
          aria-label={l.label}
        >
          <span className="lang-flag">{l.flag}</span>
        </button>
      ))}
    </div>
  );
}
