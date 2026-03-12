'use client'

import Link from 'next/link'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { lang, t } = useLanguage()
  const f = t.footer[lang]
  const nav = t.nav[lang]

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/Gemini_Generated_Image_xi7racxi7racxi7r%20(1).png"
              alt="Natura Bungalows"
              style={{ height: '60px', width: 'auto', marginBottom: '0.75rem', filter: 'brightness(0) invert(1)' }}
            />
          <p>{f.desc}</p>
        </div>
        <div>
          <h4>{f.nav}</h4>
          <ul className="footer-links">
            <li><Link href="/">{nav.inicio}</Link></li>
            <li><Link href="/nosotros">{nav.nosotros}</Link></li>
            <li><Link href="/contacto">{nav.contacto}</Link></li>
            <li><Link href="/reservar">{nav.reservar}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{f.contact}</h4>
          <ul className="footer-links">
            <li>La Fortuna, San Carlos</li>
            <li>Costa Rica</li>
            <li>{f.checkin}</li>
            <li>{f.checkout}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Natura Bungalows. {f.rights}
      </div>
    </footer>
  )
}
