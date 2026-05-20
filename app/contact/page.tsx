import Link from 'next/link'

export default function Contact() {
  return (
    <main style={{background:'#F0EDE6',minHeight:'100vh',fontFamily:'var(--font-poppins),sans-serif',display:'flex',flexDirection:'column'}}>

      {/* Nav */}
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.5rem 3rem'}}>
        <Link href="/" style={{fontSize:'16px',color:'#B8935A',fontFamily:'var(--font-manrope),sans-serif',textDecoration:'none'}}>
          ii Venture Studios
        </Link>
        <ul style={{display:'flex',gap:'2.5rem',listStyle:'none',margin:0,padding:0}}>
          {([['Home','/'],['About','/about'],['Contact','/contact']] as const).map(([page,href])=>(
            <li key={page}>
              <Link href={href} style={{fontSize:'15px',color:'#B8935A',textDecoration:page==='Contact'?'underline':'none',opacity:page==='Contact'?1:0.7}}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <div style={{padding:'3rem 3rem',maxWidth:'640px'}}>
        <h1 style={{fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:400,color:'#B8935A',margin:'0 0 2.5rem 0',fontFamily:'var(--font-manrope),sans-serif'}}>
          Contact
        </h1>
        <p style={{fontSize:'16px',color:'#B8935A',lineHeight:1.8,marginBottom:'0.5rem',opacity:0.85}}>
          Start a conversation.
        </p>
        <p style={{fontSize:'16px',color:'#B8935A',lineHeight:1.8,marginBottom:'1.5rem',opacity:0.85}}>
          If you're building something that doesn't fit neatly into a category - we'd like to hear about it.
        </p>
        <p style={{fontSize:'16px',color:'#B8935A',lineHeight:1.8,marginBottom:'3rem',opacity:0.85}}>
          <a href="mailto:hello@ii.ventures" style={{color:'#B8935A',textDecoration:'underline'}}>
            hello@ii.ventures
          </a>
        </p>

        {/* Form */}
        <form style={{display:'flex',flexDirection:'column',gap:'2rem'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'0.4rem'}}>
            <input
              type="text"
              placeholder="Name"
              className="contact-input"
              style={{
                background:'transparent',
                border:'none',
                borderBottom:'1px solid rgba(184,147,90,0.35)',
                outline:'none',
                fontSize:'15px',
                color:'#B8935A',
                padding:'0.5rem 0',
                fontFamily:'var(--font-poppins),sans-serif',
              }}
            />
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'0.4rem'}}>
            <input
              type="email"
              placeholder="Email"
              className="contact-input"
              style={{
                background:'transparent',
                border:'none',
                borderBottom:'1px solid rgba(184,147,90,0.35)',
                outline:'none',
                fontSize:'15px',
                color:'#B8935A',
                padding:'0.5rem 0',
                fontFamily:'var(--font-poppins),sans-serif',
              }}
            />
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'0.4rem'}}>
            <textarea
              placeholder="What are you building?"
              rows={5}
              className="contact-textarea"
              style={{
                background:'transparent',
                border:'none',
                borderBottom:'1px solid rgba(184,147,90,0.35)',
                outline:'none',
                fontSize:'15px',
                color:'#B8935A',
                padding:'0.5rem 0',
                fontFamily:'var(--font-poppins),sans-serif',
                resize:'none',
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                background:'#B8935A',
                color:'#1a1309',
                border:'none',
                padding:'0.75rem 2.5rem',
                fontSize:'15px',
                fontFamily:'var(--font-poppins),sans-serif',
                cursor:'pointer',
                letterSpacing:'0.02em',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </main>
  )
}
