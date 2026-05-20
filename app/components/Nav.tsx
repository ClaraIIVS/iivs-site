'use client'
import { useEffect, useRef } from 'react'

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const navChangingTextRef = useRef<HTMLSpanElement>(null)
  const navClipWrapRef = useRef<HTMLSpanElement>(null)
  const navBOpenRef = useRef<HTMLSpanElement>(null)
  const navBCloseRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const nav = navRef.current
    const navEl = navChangingTextRef.current
    const navClipWrap = navClipWrapRef.current
    const navBOpen = navBOpenRef.current
    const navBClose = navBCloseRef.current
    if (!nav || !navEl || !navClipWrap || !navBOpen || !navBClose) return

    // Capture as non-null aliases so closures retain the narrowed type
    const el: HTMLSpanElement = navEl
    const clip: HTMLSpanElement = navClipWrap
    const bOpen: HTMLSpanElement = navBOpen
    const bClose: HTMLSpanElement = navBClose

    el.style.transform = 'scaleX(1)'
    clip.style.width = el.scrollWidth + 'px'

    const handleScroll = () => {
      const hero = document.getElementById('hero')
      const heroBottom = (hero?.offsetHeight ?? 0) - 80
      if (window.scrollY > heroBottom) {
        nav.classList.remove('hero-nav')
        nav.classList.add('scrolled')
      } else {
        nav.classList.add('hero-nav')
        nav.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll)

    const navTexts = ['ii', 'Imagination Industries']
    let navCurrent = 0

    function animateLogo() {
      bOpen.style.width = '0.7ch'
      bClose.style.width = '0.7ch'
      setTimeout(() => {
        el.style.transform = 'scaleX(0)'
        setTimeout(() => {
          navCurrent = (navCurrent + 1) % navTexts.length
          el.textContent = navTexts[navCurrent]
          clip.style.width = '0px'
          requestAnimationFrame(() => requestAnimationFrame(() => {
            clip.style.width = el.scrollWidth + 'px'
            el.style.transform = 'scaleX(1)'
          }))
          setTimeout(() => {
            bOpen.style.width = '0'
            bClose.style.width = '0'
          }, 1200)
        }, 800)
      }, 800)
    }

    const interval = setInterval(animateLogo, 6000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [])

  return (
    <nav ref={navRef} id="nav" className="hero-nav">
      <a href="#hero" className="logo" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 1.5L23 7V19L13 24.5L3 19V7L13 1.5Z" stroke="#2F4031" strokeWidth="1" fill="none" />
          <path d="M13 8C13 8 9.5 10 9.5 13.5C9.5 16 11 17.5 13 17.5C15 17.5 16.5 16 16.5 13.5C16.5 10 13 8 13 8Z" fill="#5C7159" />
        </svg>
        <span style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          <span ref={navBOpenRef} style={{ color: '#C9A876', overflow: 'hidden', width: 0, transition: 'width 0.8s ease' }}>[</span>
          <span ref={navClipWrapRef} style={{ overflow: 'hidden', transition: 'width 0.8s ease', whiteSpace: 'nowrap', display: 'inline-block' }}>
            <span ref={navChangingTextRef} style={{ display: 'inline-block', whiteSpace: 'nowrap', transform: 'scaleX(0)', transition: 'transform 0.8s ease', transformOrigin: 'center' }}>ii</span>
          </span>
          <span ref={navBCloseRef} style={{ color: '#C9A876', overflow: 'hidden', width: 0, transition: 'width 0.8s ease' }}>]</span>
          {' '}Venture Studios
        </span>
      </a>
      <div className="nav-links">
        <a href="#how">How we work</a>
        <a href="#look">What we look for</a>
        <a href="#who">Who we are</a>
        <a href="#contact">Get in touch</a>
      </div>
    </nav>
  )
}
