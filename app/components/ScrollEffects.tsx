'use client'
import { useEffect, useRef } from 'react'

export default function ScrollEffects() {
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    const handleScroll = () => {
      const btn = btnRef.current
      if (!btn) return
      const visible = window.scrollY > 400
      btn.style.opacity = visible ? '1' : '0'
      btn.style.pointerEvents = visible ? 'auto' : 'none'
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      ref={btnRef}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '44px',
        height: '44px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        opacity: 0,
        transition: 'opacity 0.3s ease',
        zIndex: 200,
        padding: 0,
        pointerEvents: 'none',
      }}
    >
      <svg width="44" height="44" viewBox="0 0 26 28" fill="none">
        <path d="M13 1.5L23 7V19L13 24.5L3 19V7L13 1.5Z" fill="#2F4031" stroke="#2F4031" strokeWidth="0.5" />
        <path d="M13 17V10M13 10L10.5 12.5M13 10L15.5 12.5" stroke="#F0EDE3" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
