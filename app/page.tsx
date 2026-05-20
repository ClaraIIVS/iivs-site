import Nav from './components/Nav'
import ContactForm from './components/ContactForm'
import ScrollEffects from './components/ScrollEffects'

export default function Home() {
  return (
    <>
      <Nav />

      <section className="hero" id="hero">
        <div className="hero-photo" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">A studio for ideas worth building</div>
          <h1>
            There has never been a time when it was possible to build anything you can imagine.
            {' '}<span className="until">Until now.</span>
          </h1>
          <p className="hero-body">
            We&rsquo;re a studio. We develop ideas worth building, and we partner with the people who can bring them to life.
          </p>
          <div className="hero-cta">
            If you&rsquo;re ready to build, <a href="#contact">we&rsquo;d like to meet you</a>.
          </div>
        </div>
      </section>

      <section className="section-block fade-in" id="how">
        <div className="eyebrow">How we work</div>
        <h2>
          We develop ideas, partner with founders, and stay close{' '}
          <span className="accent">for the long now.</span>
        </h2>
        <div className="how-grid">
          <div className="how-block">
            <svg className="organic-icon" viewBox="0 0 56 56" fill="none">
              <ellipse cx="28" cy="36" rx="10" ry="14" stroke="currentColor" strokeWidth="1.2" fill="#C4D1B8" fillOpacity="0.3" />
              <path d="M28 36 Q28 26 24 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M24 18 Q20 14 16 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <path d="M24 18 Q28 14 32 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </svg>
            <h3>We develop ideas</h3>
            <p>We do the early thinking — the research, the conviction work, the months of sitting with a problem until the shape of a company emerges. We care about ideas that earn their place in the world.</p>
          </div>
          <div className="how-block">
            <svg className="organic-icon" viewBox="0 0 56 56" fill="none">
              <path d="M20 48 Q22 36 28 28 Q34 20 28 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <path d="M36 48 Q34 36 28 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <ellipse cx="22" cy="20" rx="4" ry="7" transform="rotate(-30 22 20)" fill="#C4D1B8" fillOpacity="0.5" stroke="currentColor" strokeWidth="0.8" />
              <ellipse cx="34" cy="22" rx="4" ry="7" transform="rotate(30 34 22)" fill="#C4D1B8" fillOpacity="0.5" stroke="currentColor" strokeWidth="0.8" />
              <ellipse cx="28" cy="10" rx="3" ry="5" fill="#C4D1B8" fillOpacity="0.5" stroke="currentColor" strokeWidth="0.8" />
            </svg>
            <h3>We partner with founders</h3>
            <p>Sometimes we hand a developed idea to an exceptional operator ready to run it. Sometimes a founder arrives with conviction of their own and we help them build. Either way, the partnership is the point.</p>
          </div>
          <div className="how-block">
            <svg className="organic-icon" viewBox="0 0 56 56" fill="none">
              <path d="M28 50 L28 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M28 36 L20 32" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              <path d="M28 36 L36 32" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              <path d="M28 28 L18 22" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              <path d="M28 28 L38 22" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
              <ellipse cx="28" cy="18" rx="16" ry="12" fill="#C4D1B8" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="22" cy="16" r="3" fill="#C4D1B8" fillOpacity="0.5" />
              <circle cx="34" cy="20" r="3" fill="#C4D1B8" fillOpacity="0.5" />
              <circle cx="28" cy="12" r="2.5" fill="#C4D1B8" fillOpacity="0.5" />
            </svg>
            <h3>We stay close</h3>
            <p>We provide capital, infrastructure, and the company you need to do the hardest work of your career. We don&rsquo;t disappear after the first cheque. We&rsquo;re patient, present, and in it.</p>
          </div>
        </div>
      </section>

      <section className="photo-break photo-break-1 fade-in">
        <div className="photo-break-image" />
        <div className="photo-break-overlay" />
        <div className="photo-break-text">
          <blockquote>The best companies grow slowly, then suddenly. We are patient with both.</blockquote>
        </div>
      </section>

      <section className="section-block fade-in" id="look">
        <div className="eyebrow">What we look for</div>
        <h2>
          Ideas worth a decade. Founders worth following{' '}
          <span className="accent">into the work.</span>
        </h2>
        <div className="look-for">
          <div className="look-col">
            <h3>
              <svg className="leaf" viewBox="0 0 18 18" fill="none">
                <path d="M9 1 Q3 5 3 11 Q3 16 9 17 Q15 16 15 11 Q15 5 9 1 Z" fill="#C4D1B8" fillOpacity="0.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M9 1 L9 17" stroke="currentColor" strokeWidth="0.6" />
              </svg>
              In an idea
            </h3>
            <p>An idea simple enough to explain to a stranger, and ambitious enough to take a decade.</p>
            <p>An idea you&rsquo;d still want to be working on in ten years, even if it never made you rich.</p>
            <p>An idea that earns its place in the world — that the world is materially better for having.</p>
          </div>
          <div className="look-col">
            <h3>
              <svg className="leaf" viewBox="0 0 18 18" fill="none">
                <path d="M9 1 Q3 5 3 11 Q3 16 9 17 Q15 16 15 11 Q15 5 9 1 Z" fill="#C4D1B8" fillOpacity="0.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M9 1 L9 17" stroke="currentColor" strokeWidth="0.6" />
              </svg>
              In a founder
            </h3>
            <p>Someone who has done difficult things before, and is ready to do harder ones.</p>
            <p>Someone who reads, who thinks, who can hold conviction without losing curiosity.</p>
            <p>Someone you&rsquo;d want to spend a decade with — in the work, and in the company of.</p>
          </div>
        </div>
      </section>

      <section className="photo-break photo-break-2 fade-in">
        <div className="photo-break-image" />
        <div className="photo-break-overlay" />
        <div className="photo-break-text">
          <blockquote>We work in the long now. Years, not quarters. Decades, not cycles.</blockquote>
        </div>
      </section>

      <section className="who fade-in" id="who">
        <div className="who-photo" />
        <div className="who-overlay" />
        <div className="who-inner">
          <div className="eyebrow">Who we are</div>
          <h2>A small studio of operators who have <span className="accent">built before.</span></h2>
          <div className="who-body">
            <p><strong>We&rsquo;ve spent careers building businesses in the real world.</strong> Companies that hire people, ship products, raise capital, weather downturns, and outlive their founders&rsquo; first ideas.</p>
            <p>We know how hard it is. We know how much harder it is alone. And we know that the right idea in the right hands — with the right partners — is rare, and worth waiting for.</p>
            <p><em>ii Venture Studios is the studio we wished existed when we were starting out.</em></p>
          </div>
        </div>
      </section>

      <section className="contact fade-in" id="contact">
        <div className="eyebrow">Get in touch</div>
        <div className="contact-headline">
          If you&rsquo;re ready to build something <span className="accent">that matters,</span> we&rsquo;d like to meet you.
        </div>
        <ContactForm />
      </section>

      <footer>
        <div className="footer-logo">
          <svg width="16" height="18" viewBox="0 0 26 28" fill="none">
            <path d="M13 1.5L23 7V19L13 24.5L3 19V7L13 1.5Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M13 8C13 8 9.5 10 9.5 13.5C9.5 16 11 17.5 13 17.5C15 17.5 16.5 16 16.5 13.5C16.5 10 13 8 13 8Z" fill="currentColor" fillOpacity="0.4" />
          </svg>
          <span>© 2026 Imagination Industries Venture Studios</span>
        </div>
        <div>Built for the long now.</div>
      </footer>

      <ScrollEffects />
    </>
  )
}
