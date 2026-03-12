'use client'

import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function ContactForm({ compact = false }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const { lang, t } = useLanguage()
  const cf = t.contactForm[lang]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
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
      <button type="submit" className="btn-primary" style={{ border: 'none', fontFamily: 'var(--font-body)' }}>
        {cf.send}
      </button>
    </form>
  )
}
