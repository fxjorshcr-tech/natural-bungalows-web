'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const saved = localStorage.getItem('natura-lang');
    if (saved && ['es', 'en', 'fr', 'de'].includes(saved)) {
      setLang(saved);
    }
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('natura-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
