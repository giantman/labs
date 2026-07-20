import logoSrc from '../assets/logo.svg'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="flex flex-col pt-[84px]" style={{ minHeight: '100vh' }}>
        {/* Content area — text top-right, wordmark bottom-left, space-between */}
        <div className="flex-1 flex flex-col justify-between px-4 py-6">

          {/* Text block — right half only */}
          <div className="grid grid-cols-2 gap-x-[25px] py-6">
            <div />
            <div className="flex flex-col gap-6">
              <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">
               <span className="text-[#eeeeee]">Onsite/Offsite</span>Onsite/Offsite is the design practice of Robert Manukyan. A multi-disciplinary designer with a focus on product design, AI, design engineering, brand/identity, and visual design. Based in Los Angeles, CA.
              </p>
              <div>
                <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">Currently leading design at Altruist.</p>
                <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">Forever designing.</p>
              </div>
              <p className="text-base font-medium text-[#1a1917]/50 leading-[1.5]">Work coming soon....</p>
            </div>
          </div>

          {/* Wordmark — white, bottom-left */}
          <div>
            <img
              src={logoSrc}
              alt="Onsite/Offsite"
              className="block h-auto"
              style={{ width: '91.5%', filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>

      </div>
    </main>
  )
}
