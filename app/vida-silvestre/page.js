'use client';

import Link from 'next/link';
import { useLanguage } from '../i18n/LanguageContext';

const AVES = [
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves1.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves2.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves3.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves4.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves5.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves6.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/aves7.jpg',
];

const NOCTURNA = [
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/caminata-nocturna-1.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/caminata-nocturna-2.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/caminata-nocturna-3.jpg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/caminata-nocturna-4.jpg',
];

const OTROS = [
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.35%20PM%20(1)%20-%20copia.jpeg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.35%20PM%20(2)%20-%20copia.jpeg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.35%20PM%20(3)%20-%20copia.jpeg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(1).jpeg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(2).jpeg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(3).jpeg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(4).jpeg',
  'https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos%20animales/WhatsApp%20Image%202026-03-23%20at%207.32.36%20PM%20(5).jpeg',
];

export default function VidaSilvestre() {
  const { lang, t } = useLanguage();
  const p = t.wildlife[lang];

  return (
    <>
      {/* Title - no hero, just clean title with spacing for header */}
      <div className="wildlife-title-section">
        <h1>{p.heroTitle}</h1>
        <p>{p.heroSub}</p>
      </div>

      {/* Intro + first birds */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.introTitle}</h2>
          </div>
          <div className="wildlife-text-block">
            <p>{p.introP1}</p>
          </div>
          <div className="wl-grid-3">
            <div className="wl-photo"><img src={AVES[0]} alt={p.birdAlt} /></div>
            <div className="wl-photo"><img src={AVES[1]} alt={p.birdAlt} /></div>
            <div className="wl-photo"><img src={AVES[2]} alt={p.birdAlt} /></div>
          </div>
          <div className="wildlife-text-block">
            <p>{p.introP2}</p>
          </div>
        </div>
      </section>

      {/* Birds section */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.birdsTitle}</h2>
            <p>{p.birdsSub}</p>
          </div>
          <div className="wildlife-text-block">
            <p>{p.birdsP1}</p>
          </div>
          <div className="wl-grid-2">
            <div className="wl-photo wl-photo-tall"><img src={AVES[3]} alt={p.birdAlt} /></div>
            <div className="wl-photo wl-photo-tall"><img src={AVES[4]} alt={p.birdAlt} /></div>
          </div>
          <div className="wildlife-text-block">
            <p>{p.birdsP2}</p>
          </div>
          <div className="wl-grid-2">
            <div className="wl-photo wl-photo-tall"><img src={AVES[5]} alt={p.birdAlt} /></div>
            <div className="wl-photo wl-photo-tall"><img src={AVES[6]} alt={p.birdAlt} /></div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section section-dark wildlife-stats-section">
        <div className="section-inner">
          <div className="wildlife-stats">
            <div className="wildlife-stat">
              <span className="wildlife-stat-number">920+</span>
              <span className="wildlife-stat-label">{p.statBirds}</span>
            </div>
            <div className="wildlife-stat">
              <span className="wildlife-stat-number">250+</span>
              <span className="wildlife-stat-label">{p.statMammals}</span>
            </div>
            <div className="wildlife-stat">
              <span className="wildlife-stat-number">230+</span>
              <span className="wildlife-stat-label">{p.statReptiles}</span>
            </div>
            <div className="wildlife-stat">
              <span className="wildlife-stat-number">5%</span>
              <span className="wildlife-stat-label">{p.statBiodiversity}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Night Walk */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.nightTitle}</h2>
            <p>{p.nightSub}</p>
          </div>
          <div className="wildlife-text-block">
            <p>{p.nightP1}</p>
          </div>
          <div className="wl-grid-2">
            <div className="wl-photo wl-photo-tall"><img src={NOCTURNA[0]} alt={p.nightAlt} /></div>
            <div className="wl-photo wl-photo-tall"><img src={NOCTURNA[1]} alt={p.nightAlt} /></div>
          </div>
          <div className="wildlife-text-block">
            <p>{p.nightP2}</p>
          </div>
          <div className="wl-grid-2">
            <div className="wl-photo wl-photo-tall"><img src={NOCTURNA[2]} alt={p.nightAlt} /></div>
            <div className="wl-photo wl-photo-tall"><img src={NOCTURNA[3]} alt={p.nightAlt} /></div>
          </div>
        </div>
      </section>

      {/* More Wildlife - ALL 8 otros photos */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.moreTitle}</h2>
            <p>{p.moreSub}</p>
          </div>
          <div className="wildlife-text-block">
            <p>{p.moreP1}</p>
          </div>
          <div className="wl-grid-2">
            <div className="wl-photo wl-photo-tall"><img src={OTROS[0]} alt={p.wildlifeAlt} /></div>
            <div className="wl-photo wl-photo-tall"><img src={OTROS[1]} alt={p.wildlifeAlt} /></div>
          </div>
          <div className="wl-grid-3">
            <div className="wl-photo"><img src={OTROS[2]} alt={p.wildlifeAlt} /></div>
            <div className="wl-photo"><img src={OTROS[3]} alt={p.wildlifeAlt} /></div>
            <div className="wl-photo"><img src={OTROS[4]} alt={p.wildlifeAlt} /></div>
          </div>
          <div className="wildlife-text-block">
            <p>{p.moreP2}</p>
          </div>
          <div className="wl-grid-3">
            <div className="wl-photo"><img src={OTROS[5]} alt={p.wildlifeAlt} /></div>
            <div className="wl-photo"><img src={OTROS[6]} alt={p.wildlifeAlt} /></div>
            <div className="wl-photo"><img src={OTROS[7]} alt={p.wildlifeAlt} /></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="section-inner">
          <div className="section-header">
            <h2>{p.ctaTitle}</h2>
            <p>{p.ctaSub}</p>
          </div>
          <Link href="/reservar" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)' }}>
            {p.ctaBtn}
          </Link>
        </div>
      </section>
    </>
  );
}
