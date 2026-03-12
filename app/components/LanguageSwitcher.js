'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const languages = [
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
];

export default function LanguageSwitcher({ mobile = false }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find((l) => l.code === lang);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  if (mobile) {
    return (
      <div className="lang-switcher-mobile">
        {languages.map((l) => (
          <button
            key={l.code}
            className={`lang-mobile-btn${lang === l.code ? ' active' : ''}`}
            onClick={() => setLang(l.code)}
          >
            <span className="lang-flag-lg">{l.flag}</span>
            <span>{l.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="lang-dropdown" ref={ref}>
      <button className="lang-dropdown-toggle" onClick={() => setOpen(!open)}>
        <span className="lang-flag-lg">{current.flag}</span>
        <span className="lang-dropdown-arrow">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="lang-dropdown-menu">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`lang-dropdown-item${lang === l.code ? ' active' : ''}`}
              onClick={() => { setLang(l.code); setOpen(false); }}
            >
              <span className="lang-flag-lg">{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
