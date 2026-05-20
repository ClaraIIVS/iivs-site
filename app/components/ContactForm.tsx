'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const payload = new URLSearchParams(new FormData(form) as unknown as Record<string, string>)
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyJq4E1Ts_qhBzwCuiCe6VgnfEXfDUwrEeiMpYwlif-Merr75KQNrfM55cqZg3EugCepg/exec',
        { method: 'POST', body: payload, mode: 'no-cors' }
      )
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const buttonLabel = {
    idle: 'Send',
    sending: 'Sending…',
    sent: 'Thank you — we’ll be in touch',
    error: 'Something went wrong — try emailing us directly',
  }[status]

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Your name</label>
        <input type="text" name="name" placeholder="Tell us who you are" required />
      </div>
      <div className="field">
        <label>How to reach you</label>
        <input type="email" name="email" placeholder="An email address" required />
      </div>
      <div className="field">
        <label>What you&apos;re working on</label>
        <textarea name="message" placeholder="A few sentences. We read everything." required />
      </div>
      <button
        type="submit"
        className="submit"
        disabled={status === 'sending'}
        style={status === 'sent' ? { background: 'var(--moss-deep)' } : undefined}
      >
        {buttonLabel}
        {status === 'idle' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  )
}
