'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const languages = [
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/es.png', flag2x: 'https://flagcdn.com/w80/es.png' },
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png', flag2x: 'https://flagcdn.com/w80/gb.png' },
  { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png', flag2x: 'https://flagcdn.com/w80/fr.png' },
  { code: 'de', label: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png', flag2x: 'https://flagcdn.com/w80/de.png' },
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
            <img src={l.flag} srcSet={`${l.flag2x} 2x`} alt={l.label} className="lang-flag-img" />
            <span>{l.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="lang-dropdown" ref={ref}>
      <button className="lang-dropdown-toggle" onClick={() => setOpen(!open)}>
        <img src={current.flag} srcSet={`${current.flag2x} 2x`} alt={current.label} className="lang-flag-img" />
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
              <img src={l.flag} srcSet={`${l.flag2x} 2x`} alt={l.label} className="lang-flag-img" />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
