import logoSrc from '../assets/logo.svg'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        {/* Content area — text top-right, wordmark bottom-left, space-between */}
        <div className="flex-1 flex flex-col justify-between px-8 pt-6 pb-6">

          {/* Text block — right half only */}
          <div className="grid grid-cols-2 pt-[91px]">
            <div />
            <div className="flex flex-col gap-6">
              <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">
                Onsite/Offsite is the design practice of Robert Manukyan. A multi-disciplinary designer with a focus on product design, AI, design engineering, brand/identity, and visual design. Based in Los Angeles, CA.
              </p>
              <div>
                <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">Currently leading design at Altruist.</p>
                <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">Forever designing.</p>
              </div>
            </div>
          </div>

          {/* Wordmark — white, bottom-left */}
          <div>
            <img
              src={logoSrc}
              alt="Onsite/Offsite"
              className="block h-auto"
              style={{ width: '79.8%', filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

        {/* Subline */}
        <div className="px-8 py-[22px] border-t border-[#1a1917]/10">
          <p className="text-sm text-[#1a1917]/40">Work coming soon ...</p>
        </div>
      </div>
    </main>
  )
}
