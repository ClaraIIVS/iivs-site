import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.75rem 3rem',
      borderBottom: '0.5px solid rgba(184,147,90,0.18)',
    }}>
      <Link href="/" style={{
        fontFamily: 'monospace',
        fontSize: '11px',
        fontWeight: 400,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#F4F1EB',
        textDecoration: 'none',
      }}>
        <span style={{ color: '#B8935A' }}>II</span> Venture Studios
      </Link>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {['studio', 'ventures', 'connect'].map(page => (
          <li key={page}>
            <Link href={`/${page}`} style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#6B6860',
              textDecoration: 'none',
            }}>
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}