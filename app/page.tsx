import Link from 'next/link'
import ComplexPlane from './components/ComplexPlane'

export default function Home() {
  return (
    <main style={{position:'relative',minHeight:'100vh',fontFamily:'var(--font-poppins),sans-serif',overflow:'hidden'}}>

      {/* Full screen background animation */}
      <div style={{position:'absolute',inset:0,zIndex:0}}>
        <ComplexPlane />
      </div>

      {/* Nav */}
      <nav style={{position:'relative',zIndex:10,display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.5rem 3rem'}}>
        <Link href="/" style={{fontSize:'16px',color:'#B8935A',fontFamily:'var(--font-manrope),sans-serif',textDecoration:'none'}}>
          ii Venture Studios
        </Link>
        <ul style={{display:'flex',gap:'2.5rem',listStyle:'none',margin:0,padding:0}}>
          {([['Home','/'],['About','/about'],['Contact','/contact']] as const).map(([page,href])=>(
            <li key={page}>
              <Link href={href} style={{fontSize:'15px',color:'#B8935A',textDecoration:page==='Home'?'underline':'none',opacity:page==='Home'?1:0.7}}>
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero text */}
      <div style={{position:'relative',zIndex:10,display:'flex',alignItems:'center',justifyContent:'flex-start',padding:'0 3rem',minHeight:'80vh'}}>
        <h1 style={{fontSize:'clamp(2rem,5vw,4rem)',fontWeight:400,color:'#B8935A',lineHeight:1.3,maxWidth:'14ch',margin:0,fontFamily:'var(--font-manrope),sans-serif'}}>
          The imaginary, doing real work.
        </h1>
      </div>

    </main>
  )
}