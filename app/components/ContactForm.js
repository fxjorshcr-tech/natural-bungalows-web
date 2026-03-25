'use client'

import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function ContactForm({ compact = false }) {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const { lang, t } = useLanguage()
  const cf = t.contactForm[lang]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '352c48f5-1fdd-425b-bda4-98105464dcc5',
          from_name: 'Natura Bungalows Web',
          subject: 'Nuevo mensaje de contacto - Natura Bungalows',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
    setSending(false)
  }

  if (sent) {
    return (
      <div className="form-success">
        <h3>{cf.sentTitle}</h3>
        <p>{cf.sentMsg}</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={`name-${compact ? 'c' : 'f'}`}>{cf.name}</label>
          <input
            id={`name-${compact ? 'c' : 'f'}`}
            type="text"
            required
            placeholder={cf.namePh}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor={`email-${compact ? 'c' : 'f'}`}>{cf.email}</label>
          <input
            id={`email-${compact ? 'c' : 'f'}`}
            type="email"
            required
            placeholder={cf.emailPh}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor={`msg-${compact ? 'c' : 'f'}`}>{cf.message}</label>
        <textarea
          id={`msg-${compact ? 'c' : 'f'}`}
          required
          placeholder={cf.msgPh}
          rows={compact ? 3 : 5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      {error && <p style={{ color: '#c0392b', marginBottom: '0.5rem' }}>Error al enviar. Intenta de nuevo.</p>}
      <button type="submit" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)', opacity: sending ? 0.6 : 1 }} disabled={sending}>
        {sending ? '...' : cf.send}
      </button>
    </form>
  )
}
