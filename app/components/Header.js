'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link href="/" className="logo">
            <img
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/natura-boungalows/Gemini_Generated_Image_xi7racxi7racxi7r%20(1).png"
              alt="Natura Bungalows"
              className="logo-img"
            />
          </Link>
          <nav className="nav">
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/reservar" className="btn-reservar">Reservar</Link>
          </nav>
          <button
            className="mobile-toggle"
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
        <Link href="/" onClick={closeMenu}>Inicio</Link>
        <Link href="/nosotros" onClick={closeMenu}>Nosotros</Link>
        <Link href="/contacto" onClick={closeMenu}>Contacto</Link>
        <Link href="/reservar" onClick={closeMenu} className="btn-reservar" style={{ textAlign: 'center' }}>Reservar</Link>
      </div>
    </>
  )
}
