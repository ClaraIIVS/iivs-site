'use client'

export default function ComplexPlane() {
  return (
    <div style={{position:'absolute',right:0,top:0,width:'60%',height:'100%',background:'#0D0D0F',overflow:'hidden'}}>
      <style>{`
        @keyframes rot { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin  { transform-origin: 340px 210px; animation: rot 6s linear infinite; }
        .spin2 { transform-origin: 340px 210px; animation: rot 10s linear infinite; }
        .spin3 { transform-origin: 340px 210px; animation: rot 6s linear infinite; animation-delay: -3s; }
      `}</style>
      <svg width="100%" height="100%" viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg">
        <rect width="680" height="420" fill="#0D0D0F"/>
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>
        <line x1="60" y1="210" x2="620" y2="210" stroke="#B8935A" strokeWidth="1.5" markerEnd="url(#arr)" opacity="0.7"/>
        <line x1="340" y1="390" x2="340" y2="30" stroke="#B8935A" strokeWidth="1.5" markerEnd="url(#arr)" opacity="0.7"/>
        <circle cx="340" cy="210" r="150" fill="none" stroke="#B8935A" strokeWidth="0.8" strokeDasharray="4 5" opacity="0.3"/>
        <g className="spin">
          <line x1="340" y1="210" x2="490" y2="210" stroke="#B8935A" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arr)" opacity="0.9"/>
          <circle cx="490" cy="210" r="5" fill="#B8935A"/>
        </g>
        <g className="spin2">
          <line x1="340" y1="210" x2="340" y2="60" stroke="#D4AA72" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arr)" opacity="0.8"/>
          <circle cx="340" cy="60" r="5" fill="#D4AA72"/>
        </g>
        <g className="spin3">
          <line x1="340" y1="210" x2="190" y2="210" stroke="#B8935A" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arr)" opacity="0.4"/>
        </g>
        <path d="M 380 210 A 40 40 0 0 0 340 170" fill="none" stroke="#B8935A" strokeWidth="1.2" opacity="0.5" strokeDasharray="3 2"/>
        <path d="M 340 165 A 55 55 0 0 0 285 210" fill="none" stroke="#D4AA72" strokeWidth="1.2" opacity="0.4" strokeDasharray="3 2"/>
        <text x="390" y="195" fontSize="13" fill="#B8935A" opacity="0.8">×i</text>
        <text x="268" y="172" fontSize="13" fill="#D4AA72" opacity="0.7">×i</text>
        <text x="625" y="215" fontSize="13" fill="#B8935A" opacity="0.6">Re</text>
        <circle cx="340" cy="210" r="4" fill="#B8935A" opacity="0.5"/>
      </svg>
    </div>
  )
}