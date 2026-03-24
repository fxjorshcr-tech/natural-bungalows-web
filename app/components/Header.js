'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const LOGO_URL = 'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/Gemini_Generated_Image_xi7racxi7racxi7r%20(1).png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { lang, t } = useLanguage()
  const nav = t.nav[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${isHome ? 'header-home' : ''}`}>
        <div className={`header-inner ${isHome ? 'header-inner-home' : ''}`}>
          {!isHome && (
            <Link href="/" className="logo">
              <img src={LOGO_URL} alt="Natura Bungalows" className="logo-img" />
            </Link>
          )}
          <nav className="nav">
            <Link href="/">{nav.inicio}</Link>
            <Link href="/nosotros">{nav.nosotros}</Link>
            <Link href="/vida-silvestre">{nav.fauna}</Link>
            <Link href="/contacto">{nav.contacto}</Link>
            <Link href="/reservar" className="btn-reservar">{nav.reservar}</Link>
          </nav>
          <LanguageSwitcher />
          <button
            className={`mobile-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-lang-row">
          <LanguageSwitcher mobile />
        </div>
        <Link href="/" onClick={closeMenu}>{nav.inicio}</Link>
        <Link href="/nosotros" onClick={closeMenu}>{nav.nosotros}</Link>
        <Link href="/vida-silvestre" onClick={closeMenu}>{nav.fauna}</Link>
        <Link href="/contacto" onClick={closeMenu}>{nav.contacto}</Link>
        <Link href="/reservar" onClick={closeMenu} className="btn-reservar" style={{ textAlign: 'center' }}>{nav.reservar}</Link>
      </div>
    </>
  )
}
