import Link from 'next/link'

export default function About() {
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
              <Link href={href} style={{fontSize:'15px',color:'#B8935A',textDecoration:page==='About'?'underline':'none',opacity:page==='About'?1:0.7}}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <div style={{padding:'3rem 3rem',maxWidth:'640px'}}>
        <h1 style={{fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:400,color:'#B8935A',margin:'0 0 2.5rem 0',fontFamily:'var(--font-manrope),sans-serif'}}>
          About
        </h1>
        <p style={{fontSize:'16px',color:'#B8935A',lineHeight:1.8,marginBottom:'1.5rem',opacity:0.85}}>
          There has never been a time when it was possible to build anything you can imagine. Until now.
        </p>
        <p style={{fontSize:'16px',color:'#B8935A',lineHeight:1.8,marginBottom:'1.5rem',opacity:0.85}}>
          We're a studio. We develop ideas worth building, and we partner with the people who can bring them to life.
        </p>
        <p style={{fontSize:'16px',color:'#B8935A',lineHeight:1.8,opacity:0.85}}>
          If you're ready, we'd like to meet you.
        </p>
      </div>

    </main>
  )
}